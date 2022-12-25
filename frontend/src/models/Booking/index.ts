import API from '../../helpers/API';
import { KidI } from '../../pages/Dependents/reducer/state';
import { CalendarEvent } from '../CalendarEvent/types';

const BOOKING_ENDPOINT = '/booking';

export class BookingAPI {
  static bookEvents(events: CalendarEvent[], dependents: KidI[]): Promise<string> {
    return API.post(BOOKING_ENDPOINT, {
      events,
      dependents,
    });
  }
}