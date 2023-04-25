import {LitElement, css, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('digital-alarm')
class Alarm extends LitElement {
    static styles = css`
    div {
        background:url('/img/alarm_light.jpg');
    }
    `

    render() {
        return html`
            <div class="alarm"></div>
        `;
    }
}