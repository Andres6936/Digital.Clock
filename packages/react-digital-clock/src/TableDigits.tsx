import React, {useState, useEffect} from 'react'
import {Digit} from "./Digit";
import {Dot} from "./Components";

type NumberString = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"

// Map digits to their names (this will be an array)
const digit_to_name: string[] = 'zero one two three four five six seven eight nine'.split(' ');

/**
 * Fill with zeros ('0') to begin of digits array if it had less of 2 digits (length === 1).
 *
 * Examples
 *  - ['1'] => Return ['0', '1']
 *  - ['8'] => Return ['0', '8']
 *  - ['0', '1'] => Return ['0', '1'] (Without modifications).
 *  - ['2', '4'] => Return ['2', '4'] (Without modifications).
 *
 * @param digits {[string]} The digits are represent as a array of string.
 * @return {[string]} The digits formalized.
 */
const unshiftWithZeros = (digits: [NumberString, NumberString?]): [NumberString, NumberString] => {
    // If exist only one (1) digit.
    if (digits.length === 1) {
        // Added a '0' to begin of array.
        digits.unshift('0')
        return digits as [NumberString, NumberString];
    }

    // Return without changes.
    return digits as [NumberString, NumberString];
}

export function TableDigits() {
    const [slotHour, setSlotHour] = useState(['zero', 'zero']);
    const [slotMinute, setSlotMinute] = useState(['zero', 'zero']);
    const [slotSecond, setSlotSecond] = useState(['zero', 'zero']);

    useEffect(() => {
        // Schedule this function to be run again in 1 sec
        const intervalId = setInterval(updateTime, 1000);

        // Clean up function
        return () => clearInterval(intervalId);
    }, [])

    const updateTime = () => {
        // Get the current time as a array of strings
        // The hours in 12-hour format,
        // mm - minutes, ss-seconds (all with leading zeroes),
        const currentDate: Date = new Date();

        // The method getHours return an integer number, between 0 and 23,
        // representing the hour for the given date according to local
        // time.
        let hours: number = currentDate.getHours();
        // Convert from format 24 hours to format of 12 hours.
        // Reference: https://stackoverflow.com/a/8888498
        hours = hours % 12;

        // Case special, the operation: 12 mod 12 is equals to 0, thus
        // we must manage this case, this operation represent the
        // hours : 12 pm.
        if (hours === 0) {
            hours = 12;
        }

        // The format is HH
        let hoursFormat: [NumberString, NumberString?] = hours.toString().split('') as [NumberString, NumberString?];
        hoursFormat = unshiftWithZeros(hoursFormat);

        // The method getMinutes return an integer number, between 0 and 59,
        // representing the minutes in the given date according to local
        // time.
        // The format is MM.
        let minutes: [NumberString, NumberString?] = currentDate.getMinutes().toString().split('') as [NumberString, NumberString?];
        minutes = unshiftWithZeros(minutes);

        // The method getMinutes return an integer number, between 0 and 59,
        // representing the seconds in the given date according to local time.
        // The format is SS.
        let seconds: [NumberString, NumberString?] = currentDate.getSeconds().toString().split('') as [NumberString, NumberString?];
        seconds = unshiftWithZeros(seconds);

        setSlotHour([
            digit_to_name[hoursFormat[0]],
            digit_to_name[hoursFormat[1]!],
        ]);

        setSlotMinute([
            digit_to_name[minutes[0]],
            digit_to_name[minutes[1]!],
        ])

        setSlotSecond([
            digit_to_name[seconds[0]],
            digit_to_name[seconds[1]!],
        ])
    }

    return (
        <div>
            <Digit type={slotHour[0]}/>
            <Digit type={slotHour[1]}/>

            <Dot/>

            <Digit type={slotMinute[0]}/>
            <Digit type={slotMinute[1]}/>

            <Dot/>

            <Digit type={slotSecond[0]}/>
            <Digit type={slotSecond[1]}/>
        </div>
    )
}