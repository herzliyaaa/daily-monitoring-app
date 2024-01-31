import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../features/expense/expense.slice";
// import timesheetReducer from "../features/timesheet/timesheet.slice";

export const store = configureStore({
  reducer: {
    expense: expenseReducer,
    // timesheet: timesheetReducer,
  },
});
