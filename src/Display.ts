import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

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


    `

    @property({type: String})
    theme!: string

    getThemeStyle() {
        if (this.theme === "dark") {
            return html`
                <style>
                    div {
                        background-color: #0f1620;
                        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08) inset, 0 1px 1px #2d3642;
                    }
                </style>
            `
        } else {
            return html`
                <style>
                    div {
                        background-color: #dddddd;
                        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08) inset, 0 1px 1px #fafafa;
                    }
                </style>
            `
        }
    }

    render() {
        return html`
            ${this.getThemeStyle()}
            <div class="display">
                <digital-weekdays></digital-weekdays>
                <digital-ampm></digital-ampm>
                <digital-alarm theme="${this.theme}"></digital-alarm>
                <digital-table-digits theme="${this.theme}"></digital-table-digits>
            </div>
        `;
    }
}