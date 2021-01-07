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

            digits.h1.attr('class', digit_to_name[now[0]]);
            digits.h2.attr('class', digit_to_name[now[1]]);
            digits.m1.attr('class', digit_to_name[now[2]]);
            digits.m2.attr('class', digit_to_name[now[3]]);
            digits.s1.attr('class', digit_to_name[now[4]]);
            digits.s2.attr('class', digit_to_name[now[5]]);

            // The library returns Sunday as the first day of the week.
            // Stupid, I know. Lets shift all the days one position down,
            // and make Sunday last

            let dow = now[6];
            dow--;

            // Sunday!
            if(dow < 0){
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
