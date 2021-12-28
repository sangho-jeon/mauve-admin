import React from "react";
import './calendar.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar = (prop) => {

	const isData = (e) => {
    if (JSON.stringify(e) === "[]") {
      return false;
    } else {
      return true;
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
		events = {isData(prop.data) &&
      prop.data.periodRecord.map((period) => (
        {
          allDay: true,
          start: new Date(period.start),
          end: new Date(period.end).setDate(new Date(period.end).getDate() + 1)
        }
      ))
		}
		/>
	);
};

export default Calendar;
	