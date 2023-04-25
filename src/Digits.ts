import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('digital-digits')
class Digits extends LitElement {
    render() {
        return html`
            <div class="digits"></div>
        `;
    }
}