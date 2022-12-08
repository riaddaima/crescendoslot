import React, { Dispatch, SetStateAction, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventSourceInput, DateSelectArg, EventClickArg, EventChangeArg } from '@fullcalendar/common/main';
import CALENDAR from "../../constants/calendar";
import { CalendarEvent } from '../../models/CalendarEvent/types';
import { dialog } from '../shared/Dialog';
import EventDialog from '../EventDialog';
import { useAppDispatch } from '../../app/hooks';
import { slice as selectedEventApplier } from '../selectedEvents/reducer';

interface CalendarProps {
  events: EventSourceInput;
  originalEvents: EventSourceInput;
  setEvents: Dispatch<SetStateAction<CalendarEvent[]>>;
  onCreateEvent: (event: CalendarEvent) => void;
  onUpdateEvent: (id: string) => void;
  onCancelEvent: (id: string) => void;
}

const Calendar = ({
  events,
  originalEvents,
  setEvents,
  onCreateEvent,
  onUpdateEvent,
  onCancelEvent,
}: CalendarProps) => {
  const dispatch = useAppDispatch();
  const [hide, setHide] = useState(true);
  const [showBooked, setShowBooked] = useState(false);

  const handleDateSelect = (selectInfo: DateSelectArg) => {

    /**
     * @riaddaima
     * Here is the logic of creating a new event using a manager account.
     */
    let title = prompt('Please enter a new title for your event');
    let calendarApi = selectInfo.view.calendar;
    console.log('Title of event', title);
    calendarApi.unselect() // clear date selection

    // if (title) {
    //   const event: CalendarEvent = {
    //     id: uuidv4(),
    //     title,
    //     start: selectInfo.startStr,
    //     end: selectInfo.endStr,
    //     allDay: selectInfo.allDay
    //   };
    //   onCreateEvent(event);
    // }
  }

  const handleEventClick = async (clickInfo: EventClickArg) => {
    const { event } = clickInfo;
    dispatch(selectedEventApplier.actions.addEvent(event));
    // const shouldDelete = await dialog(
    //   <EventDialog event={event} open={!hide} onHide={setHide} />,
    // );
    // if (shouldDelete) onCancelEvent(event.id);
  }

  const handleEventUpdate = (changeInfo: EventChangeArg) => {
    const { event } = changeInfo;
    onUpdateEvent(event.id);
  }

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'switchBooked dayGridMonth,timeGridWeek,timeGridDay',
      }}
      customButtons={{
        switchBooked: {
          text: showBooked ?  'Show all events' : 'Show booked events',
          click: () => {
            if (showBooked) {
              setEvents(originalEvents as CalendarEvent[]);
              setShowBooked(false);
            } else {
              setEvents((events as CalendarEvent[]).filter((event) => event.extendedProps.booked));
              setShowBooked(true);
            }
          },
        },
      }}
      initialView='timeGridWeek'
      slotMinTime={CALENDAR.MIN_TIME}
      slotMaxTime={CALENDAR.MAX_TIME}
      height="auto"
      editable={true}
      selectable={true}
      selectMirror={true}
      dayMaxEvents={true}
      weekends={true}
      nowIndicator={true}
      events={events} // alternatively, use the `events` setting to fetch from a feed
      select={handleDateSelect}
      // eventContent={renderEventContent} // custom render function
      eventClick={handleEventClick}
      eventChange={handleEventUpdate}
      slotDuration='00:20'
      // eventsSet={handleEvents} // called after events are initialized/added/changed/removed
      /* you can update a remote database when these fire:
        eventAdd={function(){}}
        eventChange={function(){}}
        eventRemove={function(){}}
      */
    />
  );
}

export default Calendar;