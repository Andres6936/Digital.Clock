import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import './Weekdays.ts'
import './AmPm.ts'
import './Alarm.ts'
import './TableDigits.ts'

@customElement('digital-display')
class Display extends LitElement {
    static styles = css`
        .light {
            --theme-display-background-color: #dddddd;
            --theme-display-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08) inset, 0 1px 1px #fafafa;
        }
        
        .dark {
            --theme-display-background-color: #0f1620;
            --theme-display-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08) inset, 0 1px 1px #2d3642;
        }
        
        div {
            background-color: var(--theme-display-background-color);
            box-shadow: var(--theme-display-box-shadow);
            text-align: center;
            padding: 40px 20px 20px;
            border-radius: 6px;
            position: relative;
            height: 54px;
        }
    `

    @property({type: String})
    theme!: string

    render() {
        return html`
            <div class="display ${this.theme}">
                <digital-weekdays></digital-weekdays>
                <digital-ampm></digital-ampm>
                <digital-alarm></digital-alarm>
                <digital-table-digits theme="${this.theme}"></digital-table-digits>
            </div>
        `;
    }
}