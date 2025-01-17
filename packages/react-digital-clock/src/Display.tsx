import {Alarm, AmPm, Weekdays} from "./Components";
import {TableDigits} from "./TableDigits";

export function Display() {
    return (
        <div className="display">
            <Weekdays/>
            <AmPm/>
            <Alarm/>
            <TableDigits/>
        </div>
    )
}