"use strict";(self.webpackChunkreact_digital_clock=self.webpackChunkreact_digital_clock||[]).push([["221"],{"./src/DigitalClock.stories.ts":function(e,t,o){o.r(t),o.d(t,{Primary:()=>N,__namedExportsOrder:()=>P,default:()=>z});var i=o("../../node_modules/react/jsx-runtime.js"),r=o("../../node_modules/styled-components/dist/styled-components.browser.esm.js");let d=r.ZP.div`
    font-size: 12px;
    position: absolute;
    width: 100%;
    top: 10px;
    left: 0;
    text-align: center;

    & span {
        opacity: 0.2;
        padding: 0 10px;
    }

    & span.active {
        opacity: 1;
    }
`,p="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),s=()=>{let e=new Date;return p.map((t,o)=>(0,i.jsx)("span",{className:o===e.getDay()?"active":"",children:t.substring(0,3).toUpperCase()},t))};function a(){return(0,i.jsx)(d,{children:s()})}let n=r.ZP.div`
    position: absolute;
    bottom: 20px;
    right: 20px;
    font-size: 12px;
`;function l(){return(0,i.jsx)(n,{children:new Date().getHours()>=12?"PM":"AM"})}let x=r.ZP.div`
    width: 16px;
    height: 16px;
    bottom: 20px;
    position: absolute;
    opacity: 0.2;

    &.active {
        opacity: 1;
    }
`;function c(){return(0,i.jsx)(x,{children:(0,i.jsxs)("svg",{width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16",children:[(0,i.jsx)("path",{d:"M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9z"}),(0,i.jsx)("path",{d:"M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1zm1.038 3.018a6 6 0 0 1 .924 0 6 6 0 1 1-.924 0M0 3.5c0 .753.333 1.429.86 1.887A8.04 8.04 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5M13.5 1c-.753 0-1.429.333-1.887.86a8.04 8.04 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1"})]})})}let h=r.ZP.div`
    text-align: left;
    position: relative;
    width: 28px;
    height: 50px;
    display: inline-block;
    margin: 0 4px;

    &.dots {
        width: 5px;
    }

    &.dots:before,
    &.dots:after {
        width: 5px;
        height: 5px;
        content: '';
        position: absolute;
        left: 0;
        top: 14px;
        background-color: light-dark(#272e38, #cacaca);
    }

    &.dots:after {
        top: 34px;
    }
`;function g(){return(0,i.jsx)(h,{className:"dots"})}a.__docgenInfo={description:"",methods:[],displayName:"Weekdays"},l.__docgenInfo={description:"",methods:[],displayName:"AmPm"},c.__docgenInfo={description:"",methods:[],displayName:"Alarm"},g.__docgenInfo={description:"",methods:[],displayName:"Dot"};var f=o("../../node_modules/react/index.js");let b=r.ZP.div`
    text-align: left;
    position: relative;
    width: 28px;
    height: 50px;
    display: inline-block;
    margin: 0 4px;

    span:before,
    span:after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border: 5px solid transparent;
    }

    span {
        opacity: 0;
        position: absolute;
        background-color: light-dark(#272e38, #cacaca);
        border-color: light-dark(#272e38, #cacaca);

        -webkit-transition: 0.25s;
        -moz-transition: 0.25s;
        transition: 0.25s;
    }


    .d1 {
        height: 5px;
        width: 16px;
        top: 0;
        left: 6px;
    }

    .d1:before {
        border-width: 0 5px 5px 0;
        border-right-color: inherit;
        left: -5px;
    }

    .d1:after {
        border-width: 0 0 5px 5px;
        border-left-color: inherit;
        right: -5px;
    }

    .d2 {
        height: 5px;
        width: 16px;
        top: 24px;
        left: 6px;
    }

    .d2:before {
        border-width: 3px 4px 2px;
        border-right-color: inherit;
        left: -8px;
    }

    .d2:after {
        border-width: 3px 4px 2px;
        border-left-color: inherit;
        right: -8px;
    }

    .d3 {
        height: 5px;
        width: 16px;
        top: 48px;
        left: 6px;
    }

    .d3:before {
        border-width: 5px 5px 0 0;
        border-right-color: inherit;
        left: -5px;
    }

    .d3:after {
        border-width: 5px 0 0 5px;
        border-left-color: inherit;
        right: -5px;
    }

    .d4 {
        width: 5px;
        height: 14px;
        top: 7px;
        left: 0;
    }

    .d4:before {
        border-width: 0 5px 5px 0;
        border-bottom-color: inherit;
        top: -5px;
    }

    .d4:after {
        border-width: 0 0 5px 5px;
        border-left-color: inherit;
        bottom: -5px;
    }

    .d5 {
        width: 5px;
        height: 14px;
        top: 7px;
        right: 0;
    }

    .d5:before {
        border-width: 0 0 5px 5px;
        border-bottom-color: inherit;
        top: -5px;
    }

    .d5:after {
        border-width: 5px 0 0 5px;
        border-top-color: inherit;
        bottom: -5px;
    }

    .d6 {
        width: 5px;
        height: 14px;
        top: 32px;
        left: 0;
    }

    .d6:before {
        border-width: 0 5px 5px 0;
        border-bottom-color: inherit;
        top: -5px;
    }

    .d6:after {
        border-width: 0 0 5px 5px;
        border-left-color: inherit;
        bottom: -5px;
    }

    .d7 {
        width: 5px;
        height: 14px;
        top: 32px;
        right: 0;
    }

    .d7:before {
        border-width: 0 0 5px 5px;
        border-bottom-color: inherit;
        top: -5px;
    }

    .d7:after {
        border-width: 5px 0 0 5px;
        border-top-color: inherit;
        bottom: -5px;
    }

    &.one .d5,
    &.one .d7 {
        opacity: 1;
    }

    &.two .d1,
    &.two .d5,
    &.two .d2,
    &.two .d6,
    &.two .d3 {
        opacity: 1;
    }

    &.three .d1,
    &.three .d5,
    &.three .d2,
    &.three .d7,
    &.three .d3 {
        opacity: 1;
    }

    &.four .d5,
    &.four .d2,
    &.four .d4,
    &.four .d7 {
        opacity: 1;
    }

    &.five .d1,
    &.five .d2,
    &.five .d4,
    &.five .d3,
    &.five .d7 {
        opacity: 1;
    }

    &.six .d1,
    &.six .d2,
    &.six .d4,
    &.six .d3,
    &.six .d6,
    &.six .d7 {
        opacity: 1;
    }

    &.seven .d1,
    &.seven .d5,
    &.seven .d7 {
        opacity: 1;
    }

    &.eight .d1,
    &.eight .d2,
    &.eight .d3,
    &.eight .d4,
    &.eight .d5,
    &.eight .d6,
    &.eight .d7 {
        opacity: 1;
    }

    &.nine .d1,
    &.nine .d2,
    &.nine .d3,
    &.nine .d4,
    &.nine .d5,
    &.nine .d7 {
        opacity: 1;
    }


    &.zero .d1,
    &.zero .d3,
    &.zero .d4,
    &.zero .d5,
    &.zero .d6,
    &.zero .d7 {
        opacity: 1;
    }
`;function u(e){let{type:t}=e;return(0,i.jsxs)(b,{className:t,children:[(0,i.jsx)("span",{className:"d1"}),(0,i.jsx)("span",{className:"d2"}),(0,i.jsx)("span",{className:"d3"}),(0,i.jsx)("span",{className:"d4"}),(0,i.jsx)("span",{className:"d5"}),(0,i.jsx)("span",{className:"d6"}),(0,i.jsx)("span",{className:"d7"})]})}u.__docgenInfo={description:"",methods:[],displayName:"Digit",props:{type:{required:!0,tsType:{name:"string"},description:""}}};let m="zero one two three four five six seven eight nine".split(" "),w=e=>(1===e.length&&e.unshift("0"),e);function y(){let[e,t]=(0,f.useState)(["zero","zero"]),[o,r]=(0,f.useState)(["zero","zero"]),[d,p]=(0,f.useState)(["zero","zero"]);(0,f.useEffect)(()=>{let e=setInterval(s,1e3);return()=>clearInterval(e)},[]);let s=()=>{let e=new Date,o=e.getHours();0==(o%=12)&&(o=12);let i=o.toString().split("");i=w(i);let d=e.getMinutes().toString().split("");d=w(d);let s=e.getSeconds().toString().split("");s=w(s),t([m[i[0]],m[i[1]]]),r([m[d[0]],m[d[1]]]),p([m[s[0]],m[s[1]]])};return(0,i.jsxs)("div",{children:[(0,i.jsx)(u,{type:e[0]}),(0,i.jsx)(u,{type:e[1]}),(0,i.jsx)(g,{}),(0,i.jsx)(u,{type:o[0]}),(0,i.jsx)(u,{type:o[1]}),(0,i.jsx)(g,{}),(0,i.jsx)(u,{type:d[0]}),(0,i.jsx)(u,{type:d[1]})]})}y.__docgenInfo={description:"",methods:[],displayName:"TableDigits"};let j=r.ZP.div`
    background-color: light-dark(#dddddd, #0f1620);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08) inset, 0 1px 1px ligth-dark(#fafafa, #2d3642);
    text-align: center;
    padding: 40px 20px 20px;
    border-radius: 6px;
    position: relative;
    height: 54px;
`;function v(){return(0,i.jsxs)(j,{children:[(0,i.jsx)(a,{}),(0,i.jsx)(l,{}),(0,i.jsx)(c,{}),(0,i.jsx)(y,{})]})}v.__docgenInfo={description:"",methods:[],displayName:"Display"};let k=r.ZP.div`
    width: 370px;
    padding: 40px;
    position: relative;
    background-color: light-dark(#f3f3f3, #272e38);
    color: light-dark(#272e38, #cacaca);

    &:after {
        content: '';
        position: absolute;
        width: 400px;
        height: 20px;
        border-radius: 100%;
        left: 50%;
        margin-left: -200px;
        bottom: 2px;
        z-index: -1;
        box-shadow: 0 4px 10px light-dark(rgba(0,0,0,0.15), rgba(0,0,0,0.3));
    }
`;function _(e){let{}=e;return(0,i.jsx)(k,{children:(0,i.jsx)(v,{})})}_.__docgenInfo={description:"",methods:[],displayName:"DigitalClock"};let z={title:"Example/DigitalClock",component:_},N={args:{}},P=["Primary"];N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:"{\n  args: {} satisfies Props\n}",...N.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=DigitalClock-stories.5ced5635.iframe.bundle.js.map