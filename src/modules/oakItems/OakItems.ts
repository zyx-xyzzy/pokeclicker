import { Feature } from '../DataStore/common/Feature';
import OakItemType from '../enums/OakItemType';
import { Currency } from '../GameConstants';
import GameHelper from '../GameHelper';
import Multiplier, { GetMultiplierFunction } from '../multiplier/Multiplier';
import MultiplierType from '../multiplier/MultiplierType';
import AmountFactory from '../wallet/AmountFactory';
import BoughtOakItem from './BoughtOakItem';
import OakItem from './OakItem';

export default class OakItems implements Feature {
    name = 'Oak Items';
    saveKey = 'oakItems';

    itemList: OakItem[];
    unlockRequirements: number[];

    defaults: Record<string, any>;

    constructor(unlockRequirements: number[], private multiplier: Multiplier) {
        this.itemList = [];
        this.unlockRequirements = unlockRequirements;
    }

    // eslint-disable-next-line class-methods-use-this
    canAccess(): boolean {
        return App.game.party.caughtPokemon.length >= 20;
    }

    initialize() {
        this.itemList = [
            new OakItem(OakItemType.Magic_Ball, 'Magic Ball', 'Gives a bonus to your catchrate',
                true, [5, 6, 7, 8, 9, 10], 0, 20, 2, undefined, undefined, undefined, '%'),
            new OakItem(OakItemType.Amulet_Coin, 'Amulet Coin', 'Gain more Pokédollars from battling',
                true, [1.25, 1.30, 1.35, 1.40, 1.45, 1.50], 1, 30, 1),
            new OakItem(OakItemType.Poison_Barb, 'Poison Barb', 'Clicks do more damage',
                true, [1.25, 1.30, 1.35, 1.40, 1.45, 1.50], 1, 40, 3),
            new OakItem(OakItemType.Exp_Share, 'EXP Share', 'Gain more exp from battling',
                true, [1.15, 1.18, 1.21, 1.24, 1.27, 1.30], 1, 50, 1),
            new OakItem(OakItemType.Sprayduck, 'Sprayduck', 'Makes your berries grow faster',
                false, [1.25, 1.30, 1.35, 1.40, 1.45, 1.50], 1, 60, 1),
            new OakItem(OakItemType.Shiny_Charm, 'Shiny Charm', 'Encounter shinies more often',
                true, [1.50, 1.60, 1.70, 1.80, 1.90, 2.00], 1, 70, 150),
            new OakItem(OakItemType.Blaze_Cassette, 'Blaze Cassette', 'Hatch eggs faster',
                false, [1.50, 1.60, 1.70, 1.80, 1.90, 2.00], 1, 80, 10),
            new OakItem(OakItemType.Cell_Battery, 'Cell Battery', 'More passive mining energy regen',
                false, [1.5, 1.6, 1.7, 1.8, 1.9, 2], 1, 90, 20),
            new BoughtOakItem(OakItemType.Squirtbottle, 'Squirtbottle', 'Increases the chance of berry mutations', 'Johto Berry Master',
                true, [1.25, 1.5, 1.75, 2, 2.25, 2.5], 1, 10, undefined, undefined, AmountFactory.createArray([2000, 5000, 10000, 20000, 50000], Currency.farmPoint)),
            new BoughtOakItem(OakItemType.Sprinklotad, 'Sprinklotad', 'Increases the chance of berry replants', 'Hoenn Berry Master',
                true, [1.15, 1.3, 1.45, 1.6, 1.75, 1.9], 1, 2, undefined, undefined, AmountFactory.createArray([2000, 5000, 10000, 20000, 50000], Currency.farmPoint)),
            new BoughtOakItem(OakItemType.Explosive_Charge, 'Explosive Charge', 'All new mining layers start with damaged tiles', 'Cinnabar Island Shop',
                true, [2, 4, 7, 11, 15, 20], 1, 50, undefined, undefined, AmountFactory.createArray([50000, 100000, 400000, 1000000, 2000000], Currency.money)),
            new BoughtOakItem(OakItemType.Treasure_Scanner, 'Treasure Scanner', 'Chance to multiply mining rewards', 'Cinnabar Island Shop',
                true, [4, 8, 12, 16, 20, 24], 1, 25, undefined, undefined, AmountFactory.createArray([50000, 100000, 250000, 500000, 1000000], Currency.money), '%'),
        ];

        this.addMultiplier('clickAttack', OakItemType.Poison_Barb);
        this.addMultiplier('exp', OakItemType.Exp_Share);
        this.addMultiplier('money', OakItemType.Amulet_Coin);
        this.addMultiplier('shiny', OakItemType.Shiny_Charm);
        this.addMultiplier('eggStep', OakItemType.Blaze_Cassette);
    }

    calculateBonus(item: OakItemType, useItem = false): number {
        const oakItem = this.itemList[item];
        if (oakItem === undefined) {
            console.error('Could not find oakItem', item, 'This could have unintended consequences');
            return 1;
        }

        if (useItem) {
            oakItem.use();
        }

        return oakItem.calculateBonus();
    }

    isUnlocked(item: OakItemType) {
        if (this.itemList[item] === undefined) {
            return false;
        }
        return this.itemList[item].isUnlocked();
    }

    use(item: OakItemType, scale = 1) {
        if (!this.isUnlocked(item)) {
            return;
        }
        this.itemList[item].use(undefined, scale);
    }

    maxActiveCount() {
        for (let i = 0; i < this.unlockRequirements.length; i += 1) {
            if (App.game.party.caughtPokemon.length < this.unlockRequirements[i]) {
                return i;
            }
        }
        return this.unlockRequirements.length;
    }

    activeCount() {
        let count = 0;
        for (let i = 0; i < this.itemList.length; i += 1) {
            if (this.itemList[i].isActive) {
                count += 1;
            }
        }
        return count;
    }

    hasAvailableSlot(): boolean {
        return this.activeCount() < this.maxActiveCount();
    }

    fromJSON(json: Record<string, any>): void {
        if (json == null) {
            return;
        }

        // Loading OakItems
        GameHelper.enumStrings(OakItemType).forEach((oakItem) => {
            if (json[oakItem] !== undefined) {
                this.itemList[OakItemType[oakItem]].fromJSON(json[oakItem]);
            }
        });
    }

    toJSON(): Record<string, any> {
        const save = {};
        for (let i = 0; i < this.itemList.length; i += 1) {
            save[OakItemType[this.itemList[i].name]] = this.itemList[i].toJSON();
        }

        return save;
    }

    // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
    update(delta: number): void {
        // This method intentionally left blank
    }

    isActive(item: OakItemType) {
        if (this.itemList[item] === undefined) {
            return false;
        }
        return this.itemList[item].isActive;
    }

    activate(item: OakItemType) {
        if (App.game.challenges.list.disableOakItems.active()) {
            return;
        }
        if (!this.isUnlocked(item)) {
            return;
        }
        if (this.maxActiveCount() === 0) {
            return;
        }
        if (this.maxActiveCount() === 1) {
            this.deactivateAll();
            this.itemList[item].isActive = true;
        }
        if (this.activeCount() < this.maxActiveCount()) {
            this.itemList[item].isActive = true;
        }
    }

    deactivateAll() {
        for (let i = 0; i < this.itemList.length; i += 1) {
            this.itemList[i].isActive = false;
        }
    }

    deactivate(item: OakItemType) {
        this.itemList[item].isActive = false;
    }

    private addMultiplier(type: keyof typeof MultiplierType, item: OakItemType) {
        this.multiplier.addBonus(type, this.createMultiplierFunction(item));
    }

    private createMultiplierFunction(item: OakItemType): GetMultiplierFunction {
        return (useBonus: boolean) => this.calculateBonus(item, useBonus);
    }
}
