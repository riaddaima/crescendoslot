import API from '../../helpers/API';
import {
  CalendarEventResponse,
  EventPOSTRequest,
  EventPUTRequest,
  EventDELETERequest,
} from './request-helper';

const CALENDAR_EVENT_ENDPOINT = '/calendar/events';
export class CalendarEventAPI {
  static getList(): Promise<CalendarEventResponse[]> {
    return API.get(
      CALENDAR_EVENT_ENDPOINT
    );
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
