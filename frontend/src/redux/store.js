import { configureStore } from '@reduxjs/toolkit'
import eventsReducer from './eventsToPrint/reducer'

const store = configureStore({
	reducer: {
		events: eventsReducer,
	}
})

export default store
