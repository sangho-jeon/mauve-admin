import React from "react";
import './calendar.css';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

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
			[{
				// title: '주기 1',
				allDay: true,
				start: '2021-11-02',
				end: '2021-11-09'
			},
				{
					// title: '주기 2',
					allDay: true,
					start: '2021-11-20',
					end: '2021-11-30'
				}
			]
		}
		/>
		
	);
};

export default Calendar;
	