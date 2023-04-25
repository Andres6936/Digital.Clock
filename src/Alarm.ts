import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('digital-alarm')
class Alarm extends LitElement {
    render() {
        return html`
            <div class="alarm"></div>
        `;
    }
}