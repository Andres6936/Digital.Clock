import styled from "styled-components";

const Container = styled.div`
    .light {
        --theme-digit-background-color: #272e38;
        --theme-digit-border-color: #272e38;
    }

    .dark {
        --theme-digit-background-color: #cacaca;
        --theme-digit-border-color: #cacaca;
    }

    text-align: left;
    position: relative;
    width: 28px;
    height: 50px;
    display: inline-block;
    margin: 0 4px;

    & span:before,
    & span:after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border: 5px solid transparent;
    }

    & span {
        opacity: 0;
        position: absolute;
        background-color: var(--theme-digit-background-color);
        border-color: var(--theme-digit-border-color);

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
`

export function Digit() {
    return (
        <div className="zero light">
            <span className="d1"></span>
            <span className="d2"></span>
            <span className="d3"></span>
            <span className="d4"></span>
            <span className="d5"></span>
            <span className="d6"></span>
            <span className="d7"></span>
        </div>
    )
}