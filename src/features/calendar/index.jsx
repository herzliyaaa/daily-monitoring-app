import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function EventCalendar() {
  const localizer = momentLocalizer(moment);
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div>
        <Calendar
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 700, width: 1000 }}
        />
      </div>
    </div>
  );
}
