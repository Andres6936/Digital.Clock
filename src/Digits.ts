import {LitElement, html, css, TemplateResult} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('digital-digits')
class Digits extends LitElement {
    static styles = css`
    .digits div span {
        background-color:#272e38;
        border-color:#272e38;
    }

    .digits div.dots:before,
    .digits div.dots:after{
        background-color:#272e38;
    }

    .digits div {
        text-align:left;
        position:relative;
        width: 28px;
        height:50px;
        display:inline-block;
        margin:0 4px;
    }

    .digits div span{
        opacity:0;
        position:absolute;

        -webkit-transition:0.25s;
        -moz-transition:0.25s;
        transition:0.25s;
    }

    .digits div span:before,
    .digits div span:after{
        content:'';
        position:absolute;
        width:0;
        height:0;
        border:5px solid transparent;
    }
    `

    // @type {[string]} Positions for the hours, minutes, and seconds
    private readonly positions: string[] = [
        'h1', 'h2', ':', 'm1', 'm2', ':', 's1', 's2'
    ];

    private getPositions() {
        const elements: TemplateResult[] = [];
        for (let position of this.positions) {
            if (position === ":") {
                elements.push(html`
                    <div class="dots"></div>
                `)
            } else {
                elements.push(html`
                    <div>
                        <span class="d1"></span>
                        <span class="d2"></span>
                        <span class="d3"></span>
                        <span class="d4"></span>
                        <span class="d5"></span>
                        <span class="d6"></span>
                        <span class="d7"></span>
                    </div>
                `)
            }
        }
        return elements;
    }

    render() {
        return html`
            <div class="digits">
                ${this.getPositions()}
            </div>
        `;
    }
}