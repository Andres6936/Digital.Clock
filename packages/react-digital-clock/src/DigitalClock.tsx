import {Display} from "./Display";
import styled from "styled-components";

const Container = styled.div`
    .light {
        --theme-background-color: #f3f3f3;
        --theme-color: #272e38;
        --theme-box-shadow:0 4px 10px rgba(0,0,0,0.15);
    }

    .dark {
        --theme-background-color: #272e38;
        --theme-color: #cacaca;
        --theme-box-shadow:0 4px 10px rgba(0,0,0,0.3);
    }

    width: 370px;
    padding: 40px;
    position: relative;
    background-color: var(--theme-background-color);
    color: var(--theme-color);

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
        box-shadow: var(--theme-box-shadow);
    }
`

export type Props = {}

export function DigitalClock({}: Props) {
    return (
        <Container className="light">
            <Display/>
        </Container>
    )
}