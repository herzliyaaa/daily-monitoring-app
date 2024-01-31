
// const initialData = {
//     timesheet: [],
//     loading: false,
//     error: null,
// };



// const timesheetSlice = createSlice({
//     name: 'timesheet',
//     initialState: initialData,
//     reducers: {
//         getTimesheetStart(state) {
//             state.loading = true;
//         },
//         getTimesheetSuccess(state, action) {
//             state.timesheet = action.payload;
//             state.loading = false;
//         },
//         getTimesheetFailure(state, action) {
//             state.error = action.payload;
//             state.loading = false;
//         },
//     },
// });

// export const { getTimesheetStart, getTimesheetSuccess, getTimesheetFailure } = timesheetSlice.actions;

// export default timesheetSlice.reducer;