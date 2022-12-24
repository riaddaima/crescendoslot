'use strict';
const moment = require('moment');

module.exports = [{
    evt_name: 'Big Kids',
    evt_start: moment().day('Saturday').hours('11').minutes('15').seconds('00').milliseconds('00').toDate(),
    evt_end: moment().day('Saturday').hours('11').minutes('15').seconds('00').milliseconds('00').add('45', 'minutes').toDate(),
    evt_capacity: 12,
    evt_minage: 2,
    evt_maxage: 4,
    evt_venue: 'Crescendo Home - 2, Rue Hamza, Haut Agdal, Rabat',
    evt_description: 'Lorem Ipsum Dolor',
    evt_thumbnail: 'https://crescendobabymusic.com/wp-content/uploads/2019/01/Classics-2-6-featured2-600x698.jpg',
  }, {
    evt_name: 'Baby Class',
    evt_start: moment().day('Saturday').hours('10').minutes('00').seconds('00').milliseconds('00').toDate(),
    evt_end: moment().day('Saturday').hours('10').minutes('00').seconds('00').milliseconds('00').add('45', 'minutes').toDate(),
    evt_capacity: 11,
    evt_minage: 0,
    evt_maxage: 2,
    evt_venue: 'Crescendo Home - 2, Rue Hamza, Haut Agdal, Rabat',
    evt_description: 'Lorem Ipsum Dolor',
    evt_thumbnail: 'https://crescendobabymusic.com/wp-content/uploads/2020/09/mixed-age-e1618426540331.png',
  }, {
    evt_name: 'Mixed Age',
    evt_start: moment().day('Wednesday').hours('17').minutes('30').seconds('00').milliseconds('00').toDate(),
    evt_end: moment().day('Wednesday').hours('17').minutes('30').seconds('00').milliseconds('00').add('45', 'minutes').toDate(),
    evt_capacity: 12,
    evt_minage: 1,
    evt_maxage: 6,
    evt_venue: 'Crescendo Home - 2, Rue Hamza, Haut Agdal, Rabat',
    evt_description: 'Lorem Ipsum Dolor',
    evt_thumbnail: 'https://crescendobabymusic.com/wp-content/uploads/2020/09/Untitled-design-3-600x698.png',
  }, {
    evt_name: 'Music & Mingle',
    evt_start: moment().day('Tuesday').hours('10').minutes('30').seconds('00').milliseconds('00').toDate(),
    evt_end: moment().day('Tuesday').hours('10').minutes('30').seconds('00').milliseconds('00').add('45', 'minutes').toDate(),
    evt_capacity: 12,
    evt_minage: 1,
    evt_maxage: 6,
    evt_venue: 'Crescendo Home - 2, Rue Hamza, Haut Agdal, Rabat',
    evt_description: 'Lorem Ipsum Dolor',
    evt_thumbnail: 'https://crescendobabymusic.com/wp-content/uploads/2020/09/Untitled-design-3-600x698.png',
}]