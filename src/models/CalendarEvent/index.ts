// import API from '../../helpers/API';
// import {
//   CalendarEventResponse,
//   EventPOSTRequest,
//   EventPUTRequest,
//   formatCalendarEventResponse,
// } from './request-helper';
// import { CalendarEvent } from './types';

// const CALENDAR_EVENT_ENDPOINT = '/doctors/calendar';
// type DoctorCalendarConfig = {};
// export class CalendarEventAPI {
//   static getList(start: Date, end: Date): Promise<CalendarEvent[]> {
//     return API.get<{ events: Array<CalendarEventResponse> }>(
//       CALENDAR_EVENT_ENDPOINT,
//       {
//         params: {
//           start_time: start.toISOString(),
//           end_time: end.toISOString(),
//         },
//       }
//     ).then(({ data }) => {
//       return data.events.map((event) => formatCalendarEventResponse(event));
//     });
//   }

//   static get(uuid: number): Promise<CalendarEvent> {
//     return API.get(CALENDAR_EVENT_ENDPOINT, {
//       params: {
//         id: uuid,
//       },
//     });
//   }

//   static create(event: EventPOSTRequest): Promise<CalendarEvent> {
//     return API.post<{ event: CalendarEventResponse }>(
//       CALENDAR_EVENT_ENDPOINT,
//       event
//     ).then(({ data }) => formatCalendarEventResponse(data.event));
//   }

//   static cancel(event: CalendarEvent): Promise<CalendarEvent> {
//     return API.get(`${CALENDAR_EVENT_ENDPOINT}/${event.id}/cancel`).then(
//       ({ data }) => formatCalendarEventResponse(data.event)
//     );
//   }

//   static update(id: number, event: EventPUTRequest): Promise<CalendarEvent> {
//     return API.put<{ event: CalendarEventResponse }>(
//       `${CALENDAR_EVENT_ENDPOINT}/${id}`,
//       event
//     ).then(({ data }) => formatCalendarEventResponse(data.event));
//   }

//   static reserve(id: number): Promise<Boolean> {
//     return API.post(
//       CALENDAR_EVENT_ENDPOINT + 'reserve',
//       {},
//       {
//         params: {
//           id: id,
//         },
//       }
//     );
//   }

//   static configureCalendarForDoctorAppointment(
//     cfg: DoctorCalendarConfig
//   ): Promise<Boolean> {
//     return API.post(CALENDAR_EVENT_ENDPOINT + 'configure', cfg);
//   }
// }
