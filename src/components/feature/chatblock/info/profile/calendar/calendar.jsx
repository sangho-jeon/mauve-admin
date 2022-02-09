import React from "react";
import './calendar.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import moment from 'moment';

const Calendar = (prop) => {

  const phaseEndDate = (record) => {
    if (record.phase === "delayed") {
      const today = new Date(moment());
      return new Date(today).setDate(new Date(today).getDate() + 1);
    }
    return new Date(record.end_date).setDate(new Date(record.end_date).getDate() + 1);
  };

  const phaseColor = (e) => {
    if (e && e === "period") {
      return "#F85B39";
    } else if (e === "golden_time") {
      return "#FFF172";
    } else if (e === "effort_time") {
      return "#D2E7D0";
    } else if (e === "before_period") {
      return "#FCD1C6";
    } else if (e === "delayed") {
      return "#505050";
    } else {
      return;
    }
  };

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
      prop.data.periodRecord.map((record) => (
        {
          allDay: true,
          start: new Date(record.start_date),
          end: phaseEndDate(record),
          color: phaseColor(record.phase),
        }
      ))
		}
		/>
	);
};

export default Calendar;
	