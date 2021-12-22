import React from "react";
import './calendar.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import dummy from '../dummy.json';

const Calendar = () => {

	const getStart = (e) => {
		if (e.phase === "period") {
			return e.start_date;
		}
	};

	const getEnd = (e) => {
		if (e.phase === "period") {
			return e.end_date;
		}
	};

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
      dummy.body.periodPhaseRecord.map((dummy) => (
        {
          allDay: true,
          start: new Date(getStart(dummy)),
          end: new Date(getEnd(dummy)).setDate(new Date(getEnd(dummy)).getDate() + 1),
        }
      ))
		}
		/>
	);
};

export default Calendar;
	