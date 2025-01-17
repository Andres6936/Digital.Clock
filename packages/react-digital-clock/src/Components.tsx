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
            <span className={index === currentDate.getDay() ? 'active' : ''}>
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

const AlarmContainer = styled.div`
    width: 16px;
    height: 16px;
    bottom: 20px;
    position: absolute;
    opacity: 0.2;

    &.active {
        opacity: 1;
    }
`

export function Alarm() {
    return (
        <AlarmContainer>
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9z"/>
                <path
                    d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1zm1.038 3.018a6 6 0 0 1 .924 0 6 6 0 1 1-.924 0M0 3.5c0 .753.333 1.429.86 1.887A8.04 8.04 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5M13.5 1c-.753 0-1.429.333-1.887.86a8.04 8.04 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1"/>
            </svg>
        </AlarmContainer>
    )
}

const DotContainer = styled.div`
    .light {
        --theme-dot-background-color: #272e38;
    }

    .dark {
        --theme-dot-background-color: #cacaca;
    }

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
        background-color: var(--theme-dot-background-color);
    }

    &.dots:after {
        top: 34px;
    }
`

export function Dot () {
    return (
        <DotContainer className="dots light"/>
    )
}