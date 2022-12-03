import React, { Dispatch, Fragment, SetStateAction, useState } from 'react';
import FullCalendar, { CustomContentGenerator, EventContentArg, EventHoveringArg } from '@fullcalendar/react';
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
import { Button, Card, CardActions, CardContent, Tooltip, Typography } from '@mui/material';
import { COLORS } from '../../colors';

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


  function renderInnerContent(innerProps: any) {
    return (
      <div className='fc-event-main-frame'>
        {innerProps.timeText &&
          <div className='fc-event-time'>{innerProps.timeText}</div>
        }
        <div className='fc-event-title-container'>
          <div className='fc-event-title fc-sticky'>
            {innerProps.event.title || <Fragment>&nbsp;</Fragment>}
          </div>
        </div>
      </div>
    );
  }

  const eventCardInformation = (
    <Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          benevlent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Fragment>
  );

  const toolTipEventInfo = (arg: CustomContentGenerator<EventContentArg>) => {
    return (
      <Tooltip componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: COLORS.calendarEventColor,
            padding: 1
          }
        }
      }} arrow title={<Card>{eventCardInformation}</Card>}>{renderInnerContent(arg)}</Tooltip>
    )
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
          text: showBooked ? 'Show all events' : 'Show booked events',
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
      // eventMouseEnter={toolTipEventInfo}
      eventContent={toolTipEventInfo}
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