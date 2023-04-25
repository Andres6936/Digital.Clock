import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('digital-weekdays')
class Weekdays extends LitElement {
    static styles = css`
    div {
        font-size:12px;
        position:absolute;
        width:100%;
        top:10px;
        left:0;
        text-align:center;
    }

    div span{
        opacity:0.2;
        padding:0 10px;
    }

    div span.active{
        opacity:1;
    }
    `

    render() {
        return html`
            <div class="weekdays"></div>
        `;
    }
}