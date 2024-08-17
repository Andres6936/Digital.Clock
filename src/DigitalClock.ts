import {LitElement, css, html, TemplateResult} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import './Display.ts'

@customElement('digital-clock')
export class DigitalClock extends LitElement {
    // Define scoped styles right with your component, in plain CSS
    static styles = css`
        .light {
            --theme-background-color: #f3f3f3;
            --theme-color: #272e38;
            --theme-box-shadow:0 4px 10px rgba(0,0,0,0.15);
        }

        .dark {
            --theme-background-color: #272e38;
            --theme-color: #cacaca;
            --theme-box-shadow:0 4px 10px rgba(0,0,0,0.3);
        }

        div {
            width: 370px;
            padding: 40px;
            position: relative;
            background-color: var(--theme-background-color);
            color: var(--theme-color);
        }

        div:after {
            content: '';
            position: absolute;
            width: 400px;
            height: 20px;
            border-radius: 100%;
            left: 50%;
            margin-left: -200px;
            bottom: 2px;
            z-index: -1;
            box-shadow: var(--theme-box-shadow);
        }
    `;

    @property({type: String})
    theme!: string

    // Render the UI as a function of component state
    render() {
        return html`
            <div class="${this.theme}">
                <digital-display theme="${this.theme}"></digital-display>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "digital-clock": DigitalClock;
    }
}