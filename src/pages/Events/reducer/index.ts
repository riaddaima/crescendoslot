// import { createAction, createSlice } from '@reduxjs/toolkit';

// import CalendarEvent from '../../../models/CalendarEvent';
// import { initialState } from './state';
// import {
//   createMedicalRecord,
//   loadMedicalContextFromId,
//   loadTodayAppointments,
// } from './thunks';

// export const setSelectedAppointment = createAction<CalendarEvent | null>(
//   'SET_SELECTED_APPOIN'
// );

// export const slice = createSlice({
//   name: 'todayAppointments',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(loadTodayAppointments.fulfilled, (state, action) => {
//         state.appointmentList = action.payload.sort((event1, event2) =>
//           moment(event1.start).diff(moment(event2.start))
//         );
//       })
//       .addCase(createMedicalRecord.fulfilled, (state, action) => {
//         if (state.currentContext) {
//           state.currentContext.records = [
//             ...state.currentContext.records,
//             ...action.payload,
//           ];
//         }
//       })
//       .addCase(createMedicalRecord.rejected, (state) => {
//         state.currentContextLoading = 'failed';
//       })
//       .addCase(loadMedicalContextFromId.fulfilled, (state, action) => {
//         state.currentContext = action.payload;
//       })
//       .addCase(setSelectedAppointment, (state, action) => {
//         state.selectedAppointment = action.payload;
//       });
//   },
// });

// export default slice.reducer;
