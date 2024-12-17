import { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import styles from './MyCalendar.module.css';

const MyCalendar = () => {
  const apiKey = import.meta.env.VITE_CAL_API_KEY;
  const googleCalendarId = 'ldg1875@gmail.com';

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchGoogleEvents = async () => {
      const calendarUrl = `https://www.googleapis.com/calendar/v3/calendars/${googleCalendarId}/events?key=${apiKey}`;

      try {
        const response = await fetch(calendarUrl);
        const data = await response.json();

        if (data.error) {
          console.error("Google Calendar API Error:", data.error.message);
          return;
        }

        const processedEvents = processEvents(data.items);
        setEvents(processedEvents);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };

    fetchGoogleEvents();
  }, [apiKey, googleCalendarId]);

  const processEvents = (items) => {
    const processedDates = new Set();

    return items
      .filter((item) => item.start && (item.start.date || item.start.dateTime))
      .map((item) => {
        const date = item.start.date || item.start.dateTime.split("T")[0];
        if (!processedDates.has(date)) {
          processedDates.add(date);
          return {
            title: '예약 완료',
            start: date,
            display: 'background',
            allDay: true,
          };
        }
        return null;
      })
      .filter(Boolean);
  };

  return (
    <div className={styles.calendarWrapper}>
      <FullCalendar
        plugins={[dayGridPlugin, googleCalendarPlugin]}
        initialView="dayGridMonth"
        googleCalendarApiKey={apiKey}
        events={events}
        locale='ko'
        headerToolbar={{
          left: '',
          right: 'prev,next today',
          center: 'title',

        }}
        editable={false}
        selectable={false}
        expandRows={false}
        eventClick={(e) => e.jsEvent.preventDefault()}
        className={styles.customCalendar}
        height="auto"
      />
    </div>
  );
};

export default MyCalendar;