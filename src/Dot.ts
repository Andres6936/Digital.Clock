import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('digital-dot')
class Dot extends LitElement {
    static styles = css`
        .light {
            --theme-dot-background-color: #272e38;
        }

        .dark {
            --theme-dot-background-color: #cacaca;
        }

        div {
            text-align: left;
            position: relative;
            width: 28px;
            height: 50px;
            display: inline-block;
            margin: 0 4px;
        }

        div.dots {
            width: 5px;
        }

        div.dots:before,
        div.dots:after {
            width: 5px;
            height: 5px;
            content: '';
            position: absolute;
            left: 0;
            top: 14px;
            background-color: var(--theme-dot-background-color);
        }

        div.dots:after {
            top: 34px;
        }
    `

    @property({type: String})
    theme!: string

    render() {
        return html`
            <div class="dots ${this.theme}"></div>
        `;
    }
}