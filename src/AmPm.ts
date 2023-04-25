import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('digital-ampm')
class AmPm extends LitElement {
    static styles = css`
    div {
        position:absolute;
        bottom:20px;
        right:20px;
        font-size:12px;
    }
    `

    render() {
        return html`
            <div class="ampm"></div>
        `;
    }
}