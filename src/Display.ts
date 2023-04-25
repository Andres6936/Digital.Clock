import {LitElement, css, html} from 'lit';
import {customElement} from 'lit/decorators.js';

import './Weekdays.ts'
import './AmPm.ts'
import './Alarm.ts'
import './TableDigits.ts'

@customElement('digital-display')
class Display extends LitElement {
    static styles = css`
    div {
        text-align:center;
        padding: 40px 20px 20px;
        border-radius:6px;
        position:relative;
        height: 54px;
    }

    div {
        background-color:#dddddd;
        box-shadow:0 1px 1px rgba(0,0,0,0.08) inset, 0 1px 1px #fafafa;
    }
    `

    render() {
        return html`
            <div class="display">
                <digital-weekdays></digital-weekdays>
                <digital-ampm></digital-ampm>
                <digital-alarm></digital-alarm>
                <digital-table-digits></digital-table-digits>
            </div>
        `;
    }
}