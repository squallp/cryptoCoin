import {configureStore} from "@reduxjs/toolkit";
import {cryptoApi} from './services/cryptoApi';
import {newsApi} from './services/newsApi';
import loggedInReducer from './reducers/loggedIn';

export default configureStore({
	reducer: {
		[cryptoApi.reducerPath]: cryptoApi.reducer,
		[newsApi.reducerPath]: newsApi.reducer,
		loggedIn: loggedInReducer,
	},
	middleware: (getDefaultMiddleware) =>
	getDefaultMiddleware().concat(cryptoApi.middleware).concat(newsApi.middleware),
})