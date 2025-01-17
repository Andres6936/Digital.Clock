import styled from "styled-components";

const WeekdaysContainer = styled.div`
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
`

export function Weekdays() {
    // Store the days of week. Is important that the
    // first day of week will be Sunday (Specified for Date.getDay()).
    const weekdayNames: string[] = 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' ');

    const getWeekdays = () => {
        // The method getDay() returns the day of the week for the
        // specified date according to local time, where 0 represents
        // Sunday, 1 for Monday, 2 for Tuesday, and so on.
        const currentDate: Date = new Date();

        // Mark the active day of the week and return a list of item to
        // render with the weekdays.
        return weekdayNames.map((item, index) => (
            <span className={index === currentDate.getDay() ? 'active': ''}>
                {item.substring(0, 3).toUpperCase()}
            </span>
        ))
    }

    return (
        <WeekdaysContainer>
            {getWeekdays()}
        </WeekdaysContainer>
    )
}

const AmPmContainer = styled.div`
    position: absolute;
    bottom: 20px;
    right: 20px;
    font-size: 12px;
`

export function AmPm() {
    return (
        <AmPmContainer>
            {new Date().getHours() >= 12 ? 'PM' : 'AM'}
        </AmPmContainer>
    )
}

export function Alarm() {
    return (
        <div></div>
    )
}
