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