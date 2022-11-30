import API from '../../helpers/API';
import {
  CalendarEventResponse,
  EventPOSTRequest,
  EventPUTRequest,
  EventDELETERequest,
} from './request-helper';
import moment from 'moment-timezone';

const CALENDAR_EVENT_ENDPOINT = '/calendar/events';
export class CalendarEventAPI {
  static getList(): Promise<CalendarEventResponse[]> {
    const events: CalendarEventResponse[] = [{
      id: '1',
      title: 'Big Kids',
      start: moment().day('Saturday').hours(11).minutes(15).seconds(0).milliseconds(0).toDate(),
      end: moment().day('Saturday').hours(11).minutes(15).seconds(0).milliseconds(0).add('45', 'minutes').toDate(),
      extendedProps: {
        capacity: 12,
        minAge: 2,
        maxAge: 4,
        venue: 'Crescendo Home - 2, Rue Hamza, Haut Agdal, Rabat',
        description: 'Lorem Ipsum Dolor',
        thumbnail: 'https://crescendobabymusic.com/wp-content/uploads/2019/01/Classics-2-6-featured2-600x698.jpg',
        booked: false
      }
    }, {
      id: '2',
      title: 'Baby Class',
      start: moment().day('Saturday').hours(10).minutes(0).seconds(0).milliseconds(0).toDate(),
      end: moment().day('Saturday').hours(10).minutes(0).seconds(0).milliseconds(0).add('45', 'minutes').toDate(),
      extendedProps: {
        capacity: 11,
        minAge: 0,
        maxAge: 2,
        venue: 'Crescendo Home - 2, Rue Hamza, Haut Agdal, Rabat',
        description: 'Lorem Ipsum Dolor',
        thumbnail: 'https://crescendobabymusic.com/wp-content/uploads/2020/09/mixed-age-e1618426540331.png',
        booked: true
      }
    }, {
      id: '3',
      title: 'Mixed Age',
      start: moment().day('Wednesday').hours(17).minutes(30).seconds(0).milliseconds(0).toDate(),
      end: moment().day('Wednesday').hours(17).minutes(30).seconds(0).milliseconds(0).add('45', 'minutes').toDate(),
      extendedProps: {
        capacity: 12,
        minAge: 1,
        maxAge: 6,
        venue: 'Crescendo Home - 2, Rue Hamza, Haut Agdal, Rabat',
        description: 'Lorem Ipsum Dolor',
        thumbnail: 'https://crescendobabymusic.com/wp-content/uploads/2020/09/Untitled-design-3-600x698.png',
        booked: false
      }
    }, {
      id: '4',
      title: 'Music & Mingle',
      start: moment().day('Tuesday').hours(10).minutes(30).seconds(0).milliseconds(0).toDate(),
      end: moment().day('Tuesday').hours(10).minutes(30).seconds(0).milliseconds(0).add('45', 'minutes').toDate(),
      extendedProps: {
        capacity: 12,
        minAge: 1,
        maxAge: 6,
        venue: 'Crescendo Home - 2, Rue Hamza, Haut Agdal, Rabat',
        description: 'Lorem Ipsum Dolor',
        thumbnail: 'https://crescendobabymusic.com/wp-content/uploads/2020/09/Untitled-design-3-600x698.png',
        booked: true
      },
    }];
    return Promise.all(events);
    // return [{} , {}];
    // return API.get(
    //   CALENDAR_EVENT_ENDPOINT
    // );
  }

  static get(uuid: number): Promise<CalendarEventResponse> {
    return API.get(CALENDAR_EVENT_ENDPOINT, {
      params: {
        id: uuid,
      },
    });
  }

  static create(event: EventPOSTRequest): Promise<CalendarEventResponse> {
    return API.post(
      CALENDAR_EVENT_ENDPOINT,
      event
    )
  }

  static cancel(event: EventDELETERequest): Promise<CalendarEventResponse> {
    return API.delete(
      CALENDAR_EVENT_ENDPOINT, {
        data: {
          id: event.id
        }
      }
    );
  }

  static update(event: EventPUTRequest): Promise<CalendarEventResponse> {
    return API.put(
      CALENDAR_EVENT_ENDPOINT,
      event
    );
  }
}
