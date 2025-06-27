import './EventCard.css'
import TriangleDown from '../Icons/TriangleDown/TriangleDown'
import LocationMark from '../Icons/LocationMark/LocationMark'
import PrintButton from '../Buttons/PrintButton/PrintButton'
import ShareButton from '../Buttons/ShareButton/ShareButton'
import RunningIcon from '../Icons/RunningIcon/RunningIcon'
import CalendarIcon from '../Icons/CalendarIcon/CalendarIcon'
import ModalImage from "react-modal-image"

function EventCard(props) {
	const { eventId,
		eventTitle,
		eventData,
		eventLocation,
		eventType,
		officialDistance,
		officialFinishTime,
		eventPace,
		elevationGain,
		eventPictures,
		eventNavMedal,
		eventComments,
		isFirstEvent,
		isPersonalBest } = props

	return (
		<div className='event-card-wrapper'>
			<li id={eventId} className='sportevent-card'>
				<div className='sportevent-card-information'>
					<div className='id-data-distance-location-wrapper'>
						<p className='event-id'>{eventId}</p>
						<div className='event-title-data-distance-location-wrapper'>
							<h2 className='event-title'>{eventTitle}</h2>
							<div className='id-data-distance-wrapper'>
								<p className='event-data'><CalendarIcon />{eventData}</p>
								<p className='event-location'><LocationMark />{eventLocation}</p>
								<p className='event-distance'><RunningIcon />{`${officialDistance}km`}</p>
							</div>
						</div>
					</div>
					<div className='event-time-pace-wrapper'>
						<div className='event-finish-time-block'>
							<p className='event-finish-time'>{officialFinishTime}</p>
							<p className='event-finish-time-title'>Finish time</p>
						</div>
						<div className='event-event-pace-block'>
							<p className='event-event-pace'>{eventPace}</p>
							<p className='event-event-pace-title'>Pace</p>
						</div>
					</div>
				</div>
				<div className='event-pictures-wrap'>
					{eventPictures && eventPictures.length > 0 && (
						<ul className={`event-pictures-list${eventPictures.length}`}>
							{eventPictures.map((picture, index) => (
								<li key={index} className='event-picture'>
									<ModalImage
										small={picture}
										large={picture}
										className={`event-picture-small${eventPictures.length}`}
									/>
								</li>
							))}
						</ul>
					)}
				</div>
				<p className='event-comments'>{eventComments}</p>
			</li >
			{/* <TriangleDown /> */}
			{/* <div className='share-and-print-buttons'>
				<ShareButton buttonText="Share with friends" />
				<PrintButton buttonText="Print your event" />
			</div> */}
		</div >
	)
}

export default EventCard