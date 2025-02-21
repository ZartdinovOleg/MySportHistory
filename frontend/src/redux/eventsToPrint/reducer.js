import * as actionTypes from './actionTypes'

const initialState = []

const eventsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_EVENT:
			return [...state, action.payload]
		case actionTypes.DELETE_EVENT:
			return initialState
		default:
			return state
	}
}

export default eventsReducer