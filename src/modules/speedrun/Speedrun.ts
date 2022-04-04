import {
    Observable as KnockoutObservable,
} from 'knockout';
import { Feature } from '../DataStore/common/Feature';

export default class Speedrun implements Feature {
    name = 'Speedrun';
    saveKey = 'speedrun';
    defaults: Record<string, any> = {};
    enabled: KnockoutObservable<boolean> = ko.observable(false).extend({ boolean: null });
    startTime: Date = null;
    clockElement: HTMLElement = null;
    clockMSElement: HTMLElement = null;

    initialize(): void {
        this.startTime = new Date();
    }

    canAccess(): boolean {
        return this.enabled();
    }

    update(): void {
        const now = new Date();
        const time = new Date(now.getTime() - this.startTime.getTime());
        if (this.clockElement) {
            this.clockElement.innerText = time.toISOString().substring(11, 19).replace(/^[0:]+/, '') || '0';
        }
        if (this.clockMSElement) {
            this.clockMSElement.innerText = time.toISOString().substring(19, 23);
        }
    }

    toJSON(): Record<string, any> {
        return {
            enabled: this.enabled(),
        };
    }

    fromJSON(json: Record<string, any>): void {
        if (!json) {
            return;
        }

        this.enabled(json.enabled);
    }
}
