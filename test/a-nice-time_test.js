'use strict';

describe('a nice time', function () {
    var assert = require('assert'),
        nice_time = require('..');

    it('converts time about this much', function () {
        assert.equal(nice_time.about_this_much(123456789), '3 years');
        assert.equal(nice_time.about_this_much(12345678), '4 months');
        assert.equal(nice_time.about_this_much(1234567), '2 weeks');
        assert.equal(nice_time.about_this_much(123456), '1 day');
        assert.equal(nice_time.about_this_much(12345), '3 hours');
        assert.equal(nice_time.about_this_much(1234), '20 minutes');
        assert.equal(nice_time.about_this_much(123), '2 minutes');
        assert.equal(nice_time.about_this_much(12), '12 seconds');
        assert.equal(nice_time.about_this_much(1), '1 second');
    });

    it('converts seconds to player time', function () {
        assert.deepEqual(nice_time.minutes_and_seconds(123456789), { min: '2057613 m', sec: '9 s' });
        assert.deepEqual(nice_time.minutes_and_seconds(12345678), { min: '205761 m', sec: '18 s' });
        assert.deepEqual(nice_time.minutes_and_seconds(1234567), { min: '20576 m', sec: '7 s' });
        assert.deepEqual(nice_time.minutes_and_seconds(123456), { min: '2057 m', sec: '36 s' });
        assert.deepEqual(nice_time.minutes_and_seconds(12345), { min: '205 m', sec: '45 s' });
        assert.deepEqual(nice_time.minutes_and_seconds(1234), { min: '20 m', sec: '34 s' });
        assert.deepEqual(nice_time.minutes_and_seconds(123), { min: '2 m', sec: '3 s' });
        assert.deepEqual(nice_time.minutes_and_seconds(12), { min: '0 m', sec: '12 s' });
    });
});
