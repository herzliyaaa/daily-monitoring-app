import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function EventCalendar() {
  const localizer = momentLocalizer(moment);
  return (
    <Calendar
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  );
}
