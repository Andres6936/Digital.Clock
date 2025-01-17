import {Display} from "./Display";
import styled from "styled-components";

const Container = styled.div`
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
`

export type Props = {}

export function DigitalClock({}: Props) {
    return (
        <Container>
            <Display/>
        </Container>
    )
}