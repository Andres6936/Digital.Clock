import {Alarm, AmPm, Weekdays} from "./Components";
import {TableDigits} from "./TableDigits";
import styled from "styled-components";

const Container = styled.div`
    background-color: light-dark(#dddddd, #0f1620);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08) inset, 0 1px 1px ligth-dark(#fafafa, #2d3642);
    text-align: center;
    padding: 40px 20px 20px;
    border-radius: 6px;
    position: relative;
    height: 54px;
`

export function Display() {
    return (
        <Container>
            <Weekdays/>
            <AmPm/>
            <Alarm/>
            <TableDigits/>
        </Container>
    )
}