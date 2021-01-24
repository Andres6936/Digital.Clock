class DigitalClock{
    constructor() {
        // Cache some selectors

        const clock = $('#clock'),
            ampm = clock.find('.ampm');

        // Map digits to their names (this will be an array)
        const digit_to_name = 'zero one two three four five six seven eight nine'.split(' ');

        // This object will hold the digit elements
        const digits = {};

        // @type {[string]} Positions for the hours, minutes, and seconds
        const positions = [
            'h1', 'h2', ':', 'm1', 'm2', ':', 's1', 's2'
        ];

        // Generate the digits with the needed markup,
        // and add them to the clock

        const digit_holder = clock.find('.digits');

        for (const position of positions) {
            if(position === ':'){
                const dots = document.createElement('div');
                dots.classList.add('dots');

                digit_holder.append(dots.outerHTML);
            }
            else{

                const pos = $('<div>');

                for(let i=1; i<8; i++){
                    pos.append('<span class="d' + i + '">');
                }

                // Set the digits as key:value pairs in the digits object
                digits[position] = pos;

                // Add the digit elements to the page
                digit_holder.append(pos);
            }
        }

        // Add the weekday names

        // @type {[string]} Store the days of week. Is important that the
        // first day of week will be Sunday (Specified for Date.getDay()).
        const weekday_names = 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' ');
        // Only exist a unique element with the 'weekdays' class. Get the
        // first and unique element with item(0).
        const weekday_holder = document.getElementsByClassName('weekdays').item(0);

        console.assert(weekday_names[0] === "Sunday",
            "The specification has not been met, the first day of the week must be Sunday.\n" +
            "The current value for the first day of week is %s", weekday_names[0]);

        for (const weekday of weekday_names) {
            const weekDaySpan = document.createElement('span');
            // Only needed the three first letters and that the string be upper case.
            weekDaySpan.innerText = weekday.substr(0, 3).toUpperCase();

            weekday_holder.appendChild(weekDaySpan);
        }

        const weekdays = clock.find('.weekdays span');

        // Run a timer every second and update the clock

        (function update_time() {

            // Get the current time as a array of strings
            // The hours in 12-hour format,
            // mm - minutes, ss-seconds (all with leading zeroes),

            const currentDate = new Date();

            // The method getHours return an integer number, between 0 and 23,
            // representing the hour for the given date according to local
            // time.
            let hours = currentDate.getHours();
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
            hours = hours.toString().split('');

            // The range [0-9] is only a digit of length, needed two digits
            // of length.
            if (hours.length === 1) {
                // If the length of arrays is of one (range [0-9]) added a '0' to
                // begin of array
                hours.unshift('0');
            }

            // The method getMinutes return an integer number, between 0 and 59,
            // representing the minutes in the given date according to local
            // time.
            // The format is MM.
            const minutes = currentDate.getMinutes().toString().split('');

            // The range [0-9] is only a digit of length, needed two digits
            // of length.
            if (minutes.length === 1) {
                // If the length of arrays is of one (range [0-9]) added a '0' to
                // begin of array
                minutes.unshift('0');
            }

            // The method getMinutes return an integer number, between 0 and 59,
            // representing the seconds in the given date according to local time.
            // The format is SS.
            const seconds = currentDate.getSeconds().toString().split('');

            // The range [0-9] is only a digit of length, needed two digits
            // of length.
            if (seconds.length === 1) {
                // If the length of arrays is of one (range [0-9]) added a '0' to
                // begin of array
                seconds.unshift('0');
            }

            digits.h1.attr('class', digit_to_name[hours[0]]);
            digits.h2.attr('class', digit_to_name[hours[1]]);

            digits.m1.attr('class', digit_to_name[minutes[0]]);
            digits.m2.attr('class', digit_to_name[minutes[1]]);

            digits.s1.attr('class', digit_to_name[seconds[0]]);
            digits.s2.attr('class', digit_to_name[seconds[1]]);

            // Mark the active day of the week.
            weekday_holder.querySelectorAll('span').forEach((value, index) => {
                // The method getDay returns the day of the week for the
                // specified date according to local time, where 0 represents
                // Sunday, 1 for Monday, 2 for Tuesday, and so on.
                if (index === currentDate.getDay()) {
                    value.classList.add('active');
                }
            });

            // Set the am/pm text:
            ampm.text(currentDate.getHours() >= 12 ? 'PM' : 'AM');

            // Schedule this function to be run again in 1 sec
            setTimeout(update_time, 1000);

        })();

        // Switch the theme

        $('a.button').click(function(){
            clock.toggleClass('light dark');
        });
    }
}

new DigitalClock();
