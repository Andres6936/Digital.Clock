import {Alarm, AmPm, Weekdays} from "./Components";
import {TableDigits} from "./TableDigits";
import styled from "styled-components";

const Container = styled.div`
    .light {
        --theme-display-background-color: #dddddd;
        --theme-display-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08) inset, 0 1px 1px #fafafa;
    }

    .dark {
        --theme-display-background-color: #0f1620;
        --theme-display-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08) inset, 0 1px 1px #2d3642;
    }


    background-color: var(--theme-display-background-color);
    box-shadow: var(--theme-display-box-shadow);
    text-align: center;
    padding: 40px 20px 20px;
    border-radius: 6px;
    position: relative;
    height: 54px;

`

export function Display() {
    return (
        <Container className="light">
            <Weekdays/>
            <AmPm/>
            <Alarm/>
            <TableDigits/>
        </Container>
    )
}