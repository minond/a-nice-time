[![Build Status](https://travis-ci.org/minond/a-nice-time.svg?branch=master)](https://travis-ci.org/minond/a-nice-time)
[![Coverage Status](https://coveralls.io/repos/minond/a-nice-time/badge.png)](https://coveralls.io/r/minond/a-nice-time)

`a-nice-time` - some time formatting functions

#### installation

```bash
npm i a-nice-time
```

#### about_this_much

```js
var a_nice_time = require('a-nice-time');

a_nice_time.about_this_much(123456789); // '3 years'
a_nice_time.about_this_much(12345678); // '4 months'
a_nice_time.about_this_much(1234567); // '2 weeks'
a_nice_time.about_this_much(123456); // '1 day'
a_nice_time.about_this_much(12345); // '3 hours'
a_nice_time.about_this_much(1234); // '20 minutes'
a_nice_time.about_this_much(123); // '2 minutes'
a_nice_time.about_this_much(12); // '12 seconds'
a_nice_time.about_this_much(1); // '1 second'
```

#### minutes_and_seconds

```js
var a_nice_time = require('a-nice-time');

a_nice_time.minutes_and_seconds(123456789); // { min: '2057613 m', sec: '9 s' }
a_nice_time.minutes_and_seconds(12345678); // { min: '205761 m', sec: '18 s' }
a_nice_time.minutes_and_seconds(1234567); // { min: '20576 m', sec: '7 s' }
a_nice_time.minutes_and_seconds(123456); // { min: '2057 m', sec: '36 s' }
a_nice_time.minutes_and_seconds(12345); // { min: '205 m', sec: '45 s' }
a_nice_time.minutes_and_seconds(1234); // { min: '20 m', sec: '34 s' }
a_nice_time.minutes_and_seconds(123); // { min: '2 m', sec: '3 s' }
a_nice_time.minutes_and_seconds(12); // { min: '0 m', sec: '12 s' }
```
