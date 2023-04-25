import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('digital-ampm')
class AmPm extends LitElement {
    render() {
        return html`
            <div class="ampm"></div>
        `;
    }
}