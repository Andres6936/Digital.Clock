import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('digital-alarm')
class Alarm extends LitElement {
    static styles = css`
    div {
        width:16px;
        height:16px;
        bottom:20px;
        position:absolute;
        opacity:0.2;
    }

    div.active {
        opacity:1;
    }
    `

    @property({type: String})
    theme!: string

    getThemeStyle() {
        if (this.theme === "dark") {
            return html`
                <style>
                    div {
                        background:url('/img/alarm_dark.jpg');
                    }
                </style>
            `
        } else {
            return html`
                <style>
                    div {
                        background: url('/img/alarm_light.jpg');
                    }
                </style>
            `
        }
    }

    render() {
        return html`
            ${this.getThemeStyle()}
            <div class="alarm"></div>
        `;
    }
}