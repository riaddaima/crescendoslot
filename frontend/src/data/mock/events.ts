import { CalendarEventResponse } from "../../models/CalendarEvent/request-helper";
import moment from 'moment-timezone';

export const events: CalendarEventResponse[] = [{
  id: '1',
  title: 'Big Kids',
  start: moment().day('Saturday').hours(11).minutes(15).seconds(0).milliseconds(0).toDate(),
  end: moment().day('Saturday').hours(11).minutes(15).seconds(0).milliseconds(0).add('45', 'minutes').toDate(),
  extendedProps: {
    currentCapacity: 5,
    capacity: 12,
    minAge: 2,
    maxAge: 4,
    venue: 'Crescendo Home - 2, Rue Hamza, Haut Agdal, Rabat',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu libero, porta eget elit in, sollicitudin luctus tortor. Donec egestas tortor mi, quis interdum sem varius sed.',
    thumbnail: 'https://crescendobabymusic.com/wp-content/uploads/2019/01/Classics-2-6-featured2-600x698.jpg',
    booked: false
  }
}, {
  id: '2',
  title: 'Baby Class',
  start: moment().day('Saturday').hours(10).minutes(0).seconds(0).milliseconds(0).toDate(),
  end: moment().day('Saturday').hours(10).minutes(0).seconds(0).milliseconds(0).add('45', 'minutes').toDate(),
  extendedProps: {
    currentCapacity: 4,
    capacity: 11,
    minAge: 0,
    maxAge: 2,
    venue: 'Crescendo Home - 2, Rue Hamza, Haut Agdal, Rabat',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu libero, porta eget elit in, sollicitudin luctus tortor. Donec egestas tortor mi, quis interdum sem varius sed.',
    thumbnail: 'https://crescendobabymusic.com/wp-content/uploads/2020/09/mixed-age-e1618426540331.png',
    booked: true
  }
}, {
  id: '3',
  title: 'Mixed Age',
  start: moment().day('Wednesday').hours(17).minutes(30).seconds(0).milliseconds(0).toDate(),
  end: moment().day('Wednesday').hours(17).minutes(30).seconds(0).milliseconds(0).add('45', 'minutes').toDate(),
  extendedProps: {
    currentCapacity: 6,
    capacity: 12,
    minAge: 1,
    maxAge: 6,
    venue: 'Crescendo Home - 2, Rue Hamza, Haut Agdal, Rabat',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu libero, porta eget elit in, sollicitudin luctus tortor. Donec egestas tortor mi, quis interdum sem varius sed.',
    thumbnail: 'https://crescendobabymusic.com/wp-content/uploads/2020/09/Untitled-design-3-600x698.png',
    booked: false
  }
}, {
  id: '4',
  title: 'Music & Mingle',
  start: moment().day('Tuesday').hours(10).minutes(30).seconds(0).milliseconds(0).toDate(),
  end: moment().day('Tuesday').hours(10).minutes(30).seconds(0).milliseconds(0).add('45', 'minutes').toDate(),
  extendedProps: {
    currentCapacity: 11,
    capacity: 12,
    minAge: 1,
    maxAge: 6,
    venue: 'Crescendo Home - 2, Rue Hamza, Haut Agdal, Rabat',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu libero, porta eget elit in, sollicitudin luctus tortor. Donec egestas tortor mi, quis interdum sem varius sed.',
    thumbnail: 'https://crescendobabymusic.com/wp-content/uploads/2020/09/musicmingle-600x698.jpg',
    booked: true
  },
}, {
  id: '5',
  title: 'Big Kids',
  start: moment().day('Friday').hours(11).minutes(15).seconds(0).milliseconds(0).toDate(),
  end: moment().day('Friday').hours(11).minutes(15).seconds(0).milliseconds(0).add('45', 'minutes').toDate(),
  extendedProps: {
    currentCapacity: 12,
    capacity: 12,
    minAge: 2,
    maxAge: 4,
    venue: 'Crescendo Home - 2, Rue Hamza, Haut Agdal, Rabat',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu libero, porta eget elit in, sollicitudin luctus tortor. Donec egestas tortor mi, quis interdum sem varius sed.',
    thumbnail: 'https://crescendobabymusic.com/wp-content/uploads/2019/01/Classics-2-6-featured2-600x698.jpg',
    booked: false
  }
}, {
  id: '6',
  title: 'Big Kids',
  start: moment().day('Friday').hours(12).minutes(0).seconds(0).milliseconds(0).toDate(),
  end: moment().day('Friday').hours(12).minutes(0).seconds(0).milliseconds(0).add('45', 'minutes').toDate(),
  extendedProps: {
    currentCapacity: 10,
    capacity: 12,
    minAge: 2,
    maxAge: 4,
    venue: 'Crescendo Home - 2, Rue Hamza, Haut Agdal, Rabat',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu libero, porta eget elit in, sollicitudin luctus tortor. Donec egestas tortor mi, quis interdum sem varius sed.',
    thumbnail: 'https://crescendobabymusic.com/wp-content/uploads/2019/01/Classics-2-6-featured2-600x698.jpg',
    booked: false
  }
}, {
  id: '7',
  title: 'Big Kids',
  start: moment().day('Friday').hours(12).minutes(45).seconds(0).milliseconds(0).toDate(),
  end: moment().day('Friday').hours(12).minutes(45).seconds(0).milliseconds(0).add('45', 'minutes').toDate(),
  extendedProps: {
    currentCapacity: 5,
    capacity: 12,
    minAge: 2,
    maxAge: 4,
    venue: 'Crescendo Home - 2, Rue Hamza, Haut Agdal, Rabat',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu libero, porta eget elit in, sollicitudin luctus tortor. Donec egestas tortor mi, quis interdum sem varius sed.',
    thumbnail: 'https://crescendobabymusic.com/wp-content/uploads/2019/01/Classics-2-6-featured2-600x698.jpg',
    booked: false
  }
}];