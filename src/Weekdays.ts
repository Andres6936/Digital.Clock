import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('digital-weekdays')
class Weekdays extends LitElement {
    render() {
        return html`
            <div class="weekdays"></div>
        `;
    }
}