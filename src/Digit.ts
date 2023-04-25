import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('digital-digit')
class Digit extends LitElement {
    static styles = css`
    div {
        text-align:left;
        position:relative;
        width: 28px;
        height:50px;
        display:inline-block;
        margin:0 4px;
    }
    
     div span:before,
     div span:after{
        content:'';
        position:absolute;
        width:0;
        height:0;
        border:5px solid transparent;
    }
    
    div span {
        background-color:#272e38;
        border-color:#272e38;
    }
    
    div span{
        opacity:0;
        position:absolute;

        -webkit-transition:0.25s;
        -moz-transition:0.25s;
        transition:0.25s;
    }


     .d1{			height:5px;width:16px;top:0;left:6px;}
     .d1:before{	border-width:0 5px 5px 0;border-right-color:inherit;left:-5px;}
     .d1:after{	border-width:0 0 5px 5px;border-left-color:inherit;right:-5px;}

     .d2{			height:5px;width:16px;top:24px;left:6px;}
     .d2:before{	border-width:3px 4px 2px;border-right-color:inherit;left:-8px;}
     .d2:after{	border-width:3px 4px 2px;border-left-color:inherit;right:-8px;}

     .d3{			height:5px;width:16px;top:48px;left:6px;}
     .d3:before{	border-width:5px 5px 0 0;border-right-color:inherit;left:-5px;}
     .d3:after{	border-width:5px 0 0 5px;border-left-color:inherit;right:-5px;}

     .d4{			width:5px;height:14px;top:7px;left:0;}
     .d4:before{	border-width:0 5px 5px 0;border-bottom-color:inherit;top:-5px;}
     .d4:after{	border-width:0 0 5px 5px;border-left-color:inherit;bottom:-5px;}

     .d5{			width:5px;height:14px;top:7px;right:0;}
     .d5:before{	border-width:0 0 5px 5px;border-bottom-color:inherit;top:-5px;}
     .d5:after{	border-width:5px 0 0 5px;border-top-color:inherit;bottom:-5px;}

     .d6{			width:5px;height:14px;top:32px;left:0;}
     .d6:before{	border-width:0 5px 5px 0;border-bottom-color:inherit;top:-5px;}
     .d6:after{	border-width:0 0 5px 5px;border-left-color:inherit;bottom:-5px;}

     .d7{			width:5px;height:14px;top:32px;right:0;}
     .d7:before{	border-width:0 0 5px 5px;border-bottom-color:inherit;top:-5px;}
     .d7:after{	border-width:5px 0 0 5px;border-top-color:inherit;bottom:-5px;}

     div.one .d5,
     div.one .d7{
        opacity:1;
    }

     div.two .d1,
     div.two .d5,
     div.two .d2,
     div.two .d6,
     div.two .d3{
        opacity:1;
    }

     div.three .d1,
     div.three .d5,
     div.three .d2,
     div.three .d7,
     div.three .d3{
        opacity:1;
    }

     div.four .d5,
     div.four .d2,
     div.four .d4,
     div.four .d7{
        opacity:1;
    }

     div.five .d1,
     div.five .d2,
     div.five .d4,
     div.five .d3,
     div.five .d7{
        opacity:1;
    }

     div.six .d1,
     div.six .d2,
     div.six .d4,
     div.six .d3,
     div.six .d6,
     div.six .d7{
        opacity:1;
    }

     div.seven .d1,
     div.seven .d5,
     div.seven .d7{
        opacity:1;
    }

     div.eight .d1,
     div.eight .d2,
     div.eight .d3,
     div.eight .d4,
     div.eight .d5,
     div.eight .d6,
     div.eight .d7{
        opacity:1;
    }

     div.nine .d1,
     div.nine .d2,
     div.nine .d3,
     div.nine .d4,
     div.nine .d5,
     div.nine .d7{
        opacity:1;
    }


     div.zero .d1,
     div.zero .d3,
     div.zero .d4,
     div.zero .d5,
     div.zero .d6,
     div.zero .d7{
        opacity:1;
    }
    `

    render() {
        return html`
            <div class="zero">
                <span class="d1"></span>
                <span class="d2"></span>
                <span class="d3"></span>
                <span class="d4"></span>
                <span class="d5"></span>
                <span class="d6"></span>
                <span class="d7"></span>
            </div>
        `;
    }
}