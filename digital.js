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

        const weekday_names = 'MON TUE WED THU FRI SAT SUN'.split(' '),
            weekday_holder = clock.find('.weekdays');

        for (const weekday of weekday_names) {
            weekday_holder.append('<span>' + weekday + '</span>');
        }

        const weekdays = clock.find('.weekdays span');

        // Run a timer every second and update the clock

        (function update_time() {

            // Use moment.js to output the current time as a string
            // hh is for the hours in 12-hour format,
            // mm - minutes, ss-seconds (all with leading zeroes),
            // d is for day of week and A is for AM/PM

            const now = moment().format("hhmmssdA");

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

            // The library returns Sunday as the first day of the week.
            // Stupid, I know. Lets shift all the days one position down,
            // and make Sunday last

            let dow = now[6];
            dow--;

            // Sunday!
            if (dow < 0) {
                // Make it last
                dow = 6;
            }

            // Mark the active day of the week
            weekdays.removeClass('active').eq(dow).addClass('active');

            // Set the am/pm text:
            ampm.text(now[7]+now[8]);

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
