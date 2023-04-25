import {LitElement, css, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('digital-alarm')
class Alarm extends LitElement {
    static styles = css`
    div {
        background:url('/img/alarm_light.jpg');
    }

    div {
        width:16px;
        height:16px;
        bottom:20px;
        background:url('/img/alarm_light.jpg');
        position:absolute;
        opacity:0.2;
    }

    div.active {
        opacity:1;
    }
    `

    render() {
        return html`
            <div class="alarm"></div>
        `;
    }
}