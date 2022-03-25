import {createSlice} from "@reduxjs/toolkit";

export const loggedInSlice = createSlice({
	name: "loggedIn",
	initialState: {
		value: 0
	},
	reducers: {
		logged: (state, action) => {
			state.value = action.payload;
		},
	}
});

export const {logged} = loggedInSlice.actions;
export default loggedInSlice.reducer;