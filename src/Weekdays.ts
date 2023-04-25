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
        return this.weekdayNames.map(item => html`
            <span>${item.substring(0, 3).toUpperCase()}</span>
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