import {LitElement, css, html} from 'lit';
import {customElement} from 'lit/decorators.js';

import './Display.ts'

@customElement('digital-clock')
export class DigitalClock extends LitElement {
    // Define scoped styles right with your component, in plain CSS
    static styles = css`
    div {
        width:370px;
        padding:40px;
        margin:100px auto 60px;
        position:relative;
    }
    
    div:after {
        content:'';
        position:absolute;
        width:400px;
        height:20px;
        border-radius:100%;
        left:50%;
        margin-left:-200px;
        bottom:2px;
        z-index:-1;
    }
    
    div.light {
        background-color:#f3f3f3;
        color:#272e38;
    }
    
    div.light:after {
        box-shadow:0 4px 10px rgba(0,0,0,0.15);
    }
  `;

    // Render the UI as a function of component state
    render() {
        return html`
            <div id="clock" class="light">
                <digital-display></digital-display>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "digital-clock": DigitalClock;
    }
}