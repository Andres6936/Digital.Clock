import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('digital-weekdays')
class Weekdays extends LitElement {
    static styles = css`
    div {
        font-size:12px;
        position:absolute;
        width:100%;
        top:10px;
        left:0;
        text-align:center;
    }

    div span{
        opacity:0.2;
        padding:0 10px;
    }

    div span.active{
        opacity:1;
    }
    `

    // Store the days of week. Is important that the
    // first day of week will be Sunday (Specified for Date.getDay()).
    private readonly weekdayNames: string[] = 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' ');

    getWeekdays() {
        // The method getDay() returns the day of the week for the
        // specified date according to local time, where 0 represents
        // Sunday, 1 for Monday, 2 for Tuesday, and so on.
        const currentDate: Date = new Date();

        // Mark the active day of the week and return a list of item to
        // render with the weekdays.
        return this.weekdayNames.map((item, index) => html`
            <span class="${index === currentDate.getDay() ? 'active': ''}">${item.substring(0, 3).toUpperCase()}</span>
        `)
    }

    render() {
        return html`
            <div class="weekdays">
                ${this.getWeekdays()}
            </div>
        `;
    }
}