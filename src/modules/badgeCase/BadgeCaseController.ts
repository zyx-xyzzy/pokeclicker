import * as GameConstants from '../GameConstants';
import BadgeEnums from '../enums/Badges';

export default class BadgeCaseController {
    static getDisplayableBadges() {
        const region = player.highestRegion();
        return GameConstants.RegionGyms.slice(0, region + 1).flat()
            .map((gym) => BadgeEnums[gymList[gym].badgeReward])
            .filter((b) => !b.startsWith('Elite') && b !== 'None');
    }
}
