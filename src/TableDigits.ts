import {LitElement, html} from 'lit';
import {customElement, state, property} from 'lit/decorators.js';

import './Dot.ts'
import './Digit.ts'

@customElement('digital-table-digits')
class TableDigits extends LitElement {
    // Map digits to their names (this will be an array)
    private readonly digit_to_name: Record<string, string> = 'zero one two three four five six seven eight nine'.split(' ');

    @state()
    private slotHour1 = "";
    @state()
    private slotHour2 = "";

    @state()
    private slotMinute1 = "";
    @state()
    private slotMinute2 = "";

    @state()
    private slotSecond1 = "";
    @state()
    private slotSecond2 = "";

    @property({type: String})
    theme!: string

    constructor() {
        super();
        this.updateTime();
    }

    private updateTime() {
        // Get the current time as a array of strings
        // The hours in 12-hour format,
        // mm - minutes, ss-seconds (all with leading zeroes),
        const currentDate: Date = new Date();

        // The method getHours return an integer number, between 0 and 23,
        // representing the hour for the given date according to local
        // time.
        let hours: number = currentDate.getHours();
        // Convert from format 24 hours to format of 12 hours.
        // Reference: https://stackoverflow.com/a/8888498
        hours = hours % 12;

        // Case special, the operation: 12 mod 12 is equals to 0, thus
        // we must manage this case, this operation represent the
        // hours : 12 pm.
        if (hours === 0) {
            hours = 12;
        }

        // The format is HH
        let hoursFormat: [string, string?] = hours.toString().split('') as [string, string?];
        hoursFormat = TableDigits.unshiftWithZeros(hoursFormat);

        // The method getMinutes return an integer number, between 0 and 59,
        // representing the minutes in the given date according to local
        // time.
        // The format is MM.
        let minutes: [string, string?] = currentDate.getMinutes().toString().split('') as [string, string?];
        minutes = TableDigits.unshiftWithZeros(minutes);

        // The method getMinutes return an integer number, between 0 and 59,
        // representing the seconds in the given date according to local time.
        // The format is SS.
        let seconds: [string, string?] = currentDate.getSeconds().toString().split('') as [string, string?];
        seconds = TableDigits.unshiftWithZeros(seconds);

        this.slotHour1 = this.digit_to_name[hoursFormat[0]];
        this.slotHour2 = this.digit_to_name[hoursFormat[1]];

        this.slotMinute1 = this.digit_to_name[minutes[0]];
        this.slotMinute2 = this.digit_to_name[minutes[1]];

        this.slotSecond1 = this.digit_to_name[seconds[0]];
        this.slotSecond2 = this.digit_to_name[seconds[1]];

        // Schedule this function to be run again in 1 sec
        setTimeout(this.updateTime.bind(this), 1000);
    }

    /**
     * Fill with zeros ('0') to begin of digits array if it had less of 2 digits (length === 1).
     *
     * Examples
     *  - ['1'] => Return ['0', '1']
     *  - ['8'] => Return ['0', '8']
     *  - ['0', '1'] => Return ['0', '1'] (Without modifications).
     *  - ['2', '4'] => Return ['2', '4'] (Without modifications).
     *
     * @param digits {[string]} The digits are represent as a array of string.
     * @return {[string]} The digits formalized.
     */
    private static unshiftWithZeros(digits: [string, string?]): [string, string] {
        // If exist only one (1) digit.
        if (digits.length === 1) {
            // Added a '0' to begin of array.
            digits.unshift('0')
            return digits as [string, string];
        }

        // Return without changes.
        return digits as [string, string];
    }

    render() {
        return html`
            <div class="digits">
                <digital-digit type="${this.slotHour1}" theme="${this.theme}"></digital-digit>
                <digital-digit type="${this.slotHour2}" theme="${this.theme}"></digital-digit>

                <digital-dot theme="${this.theme}"></digital-dot>

                <digital-digit type="${this.slotMinute1}" theme="${this.theme}"></digital-digit>
                <digital-digit type="${this.slotMinute2}" theme="${this.theme}"></digital-digit>

                <digital-dot theme="${this.theme}"></digital-dot>

                <digital-digit type="${this.slotSecond1}" theme="${this.theme}"></digital-digit>
                <digital-digit type="${this.slotSecond2}" theme="${this.theme}"></digital-digit>
            </div>
        `;
    }
}