import React from "react";
import './calendar.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import dummy from './dummy.json';

const Calendar = () => {
	return (
		<FullCalendar
		plugins={[ dayGridPlugin ]}
		initialView="dayGridMonth" 
		locale="ko"
		headerToolbar = {{
			start: "",
			center: "prev title next",
			end: "",
		}}          
		events = {
      dummy.map((dummy) => (
        {
          allDay: true,
          start: new Date(dummy.start),
          end: new Date(dummy.end).setDate(new Date(dummy.end).getDate() + 1),
        }
      ))
		}
		/>
	);
};

export default Calendar;
	