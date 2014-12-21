'use strict';

var MINUTE = 60,
    HOUR = MINUTE * 60,
    DAY = HOUR * 24,
    WEEK = DAY * 7,
    YEAR = DAY * 365,
    MONTH = YEAR / 12;

var i18n = {
    sec: 's',
    min: 'm',
    second: 'second',
    minute: 'minute',
    hour: 'hour',
    day: 'day',
    week: 'week',
    month: 'month',
    year: 'year',
    format: function (num, unit, no_plural) {
        unit = no_plural || num === 1 ? unit : unit + 's';
        return num + ' ' + unit;
    }
};

/**
 * returns the closest unit of time (61 sec = 1 min)
 * @funciton about_this_much
 * @param {Number} seconds
 * @return {String}
 */
function about_this_much(seconds) {
    seconds = parseInt(seconds, 10);

    switch (true) {
        case seconds < MINUTE:
            return i18n.format(seconds, i18n.second);

        case seconds < HOUR:
            return i18n.format(Math.floor(seconds / MINUTE), i18n.minute);

        case seconds < DAY:
            return i18n.format(Math.floor(seconds / HOUR), i18n.hour);

        case seconds < WEEK:
            return i18n.format(Math.floor(seconds / DAY), i18n.day);

        case seconds < MONTH:
            return i18n.format(Math.floor(seconds / WEEK), i18n.week);

        case seconds < YEAR:
            return i18n.format(Math.floor(seconds / MONTH), i18n.month);

        default:
            return i18n.format(Math.floor(seconds / YEAR), i18n.year);
    }
}

/**
 * converts 123 seconds => { sec: 3 s, min: 2 min }
 * @function minutes_and_seconds
 * @param {Number} seconds
 * @return {Object} with a `min` and a `sec` key
 */
function minutes_and_seconds(seconds) {
    var minutes;

    seconds = parseInt(seconds, 10);
    minutes = seconds > MINUTE ? parseInt(seconds / MINUTE, 10) : 0;
    seconds = seconds > MINUTE ? seconds % MINUTE : seconds;

    return {
        min: i18n.format(minutes, i18n.min, true),
        sec: i18n.format(seconds, i18n.sec, true)
    };
}

module.exports = {
    minutes_and_seconds: minutes_and_seconds,
    about_this_much: about_this_much,
    i18n: i18n
};
