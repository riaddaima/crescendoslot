export interface CalendarEvent {
  id: string,
  title: string,
  start: Date,
  end: Date,
  extendedProps: {
    capacity: number,
    minAge: number,
    maxAge: number,
    venue: string,
    description: string,
    thumbnail?: string,
    booked: boolean
  }
}