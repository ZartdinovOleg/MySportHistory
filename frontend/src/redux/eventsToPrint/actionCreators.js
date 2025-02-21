import * as actionTypes from './actionTypes'

export const addEvent = (newEvent) => {
	return {
		type: actionTypes.ADD_EVENT,
		payload: newEvent
	}
}

export const deleteEvent = () => {
	return {
		type: actionTypes.DELETE_EVENT,
		payload: [
			{
				printForm: {
					eventId: 'sd',
					eventTitle: 'sd',
					eventData: 'sd',
					eventDistance: '5',
					eventLocation: 'sd',
					officialFinishTime: 'sd',
					eventPace: 'sd',
					eventComments: 'sd'
				}
			}
		]
	}
}
