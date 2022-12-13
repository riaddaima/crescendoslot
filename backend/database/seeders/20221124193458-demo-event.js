'use strict';
const moment = require('moment');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('event', [{
      name: 'Big Kids',
      startTime: moment().day('Saturday').hours('11').minutes('15').seconds('00').milliseconds('00').toDate(),
      endTime: moment().day('Saturday').hours('11').minutes('15').seconds('00').milliseconds('00').add('45', 'minutes').toDate(),
      capacity: 12,
      minAge: 2,
      maxAge: 4,
      venue: 'Crescendo Home - 2, Rue Hamza, Haut Agdal, Rabat',
      description: 'Lorem Ipsum Dolor',
      thumbnail: 'https://crescendobabymusic.com/wp-content/uploads/2019/01/Classics-2-6-featured2-600x698.jpg'
    }, {
      name: 'Baby Class',
      startTime: moment().day('Saturday').hours('10').minutes('00').seconds('00').milliseconds('00').toDate(),
      endTime: moment().day('Saturday').hours('10').minutes('00').seconds('00').milliseconds('00').add('45', 'minutes').toDate(),
      capacity: 11,
      minAge: 0,
      maxAge: 2,
      venue: 'Crescendo Home - 2, Rue Hamza, Haut Agdal, Rabat',
      description: 'Lorem Ipsum Dolor',
      thumbnail: 'https://crescendobabymusic.com/wp-content/uploads/2020/09/mixed-age-e1618426540331.png'
    }, {
      name: 'Mixed Age',
      startTime: moment().day('Wednesday').hours('17').minutes('30').seconds('00').milliseconds('00').toDate(),
      endTime: moment().day('Wednesday').hours('17').minutes('30').seconds('00').milliseconds('00').add('45', 'minutes').toDate(),
      capacity: 12,
      minAge: 1,
      maxAge: 6,
      venue: 'Crescendo Home - 2, Rue Hamza, Haut Agdal, Rabat',
      description: 'Lorem Ipsum Dolor',
      thumbnail: 'https://crescendobabymusic.com/wp-content/uploads/2020/09/Untitled-design-3-600x698.png'
    }, {
      name: 'Music & Mingle',
      startTime: moment().day('Tuesday').hours('10').minutes('30').seconds('00').milliseconds('00').toDate(),
      endTime: moment().day('Tuesday').hours('10').minutes('30').seconds('00').milliseconds('00').add('45', 'minutes').toDate(),
      capacity: 12,
      minAge: 1,
      maxAge: 6,
      venue: 'Crescendo Home - 2, Rue Hamza, Haut Agdal, Rabat',
      description: 'Lorem Ipsum Dolor',
      thumbnail: 'https://crescendobabymusic.com/wp-content/uploads/2020/09/Untitled-design-3-600x698.png'
    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('event', null, {
      truncate: true,
      cascade: true
    });
  }
};