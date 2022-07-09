import { CalendarEvent } from "./types";

export interface CalendarEventResponse extends CalendarEvent {
}

export interface EventPOSTRequest extends CalendarEvent {
}

export interface EventPUTRequest extends CalendarEvent {
}

export interface EventDELETERequest extends CalendarEvent {
}