import './EventCard.css'
import TriangleDown from '../TriangleDown/TriangleDown'
import LocationMark from '../LocationMark/LocationMark'
import PrintButton from '../Buttons/PrintButton/PrintButton'
import ShareButton from '../Buttons/ShareButton/ShareButton'
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
		eventTrack,
		medalPicture,
		bibPicture,
		eventPicture1,
		eventPicture2,
		eventPicture3,
		eventComments,
		isFirstEvent,
		isPersonalBest } = props

	return (
		<div className='event-card-wrapper'>
			<li id={eventId} className='sportevent-card'>
				<div className='id-data-distance-location-wrapper'>
					<div className='id-data-distance-wrapper'>
						<p className='event-id'>{eventId}</p>
						<p className='event-data'>{eventData}</p>
						<p className='event-distance'>{`${officialDistance}km`}</p>
					</div>
					<p className='event-location'><LocationMark />{eventLocation}</p>
				</div>
				<h2 className='event-title'>{eventTitle}</h2>
				<div className='event-time-pace-wrapper'>
					<p className='event-finish-time'>Official finish time:<br /> <b><span>{officialFinishTime}</span></b></p>
					<p className='event-event-pace'>Pace:<br />  <b><span>{`${eventPace}min/km`}</span></b></p>
				</div>
				<div className='event-pictures-wrap'>
					<div className='event-pictures-block-1'>
						<p className='event-pictures-title'>My pictures:</p>
						<div className='event-picture'>
							<ModalImage
								small={eventPicture1}
								large={eventPicture1}
							/>
						</div><div className='event-picture'>
							<ModalImage
								small={eventPicture2}
								large={eventPicture2}
							/>
						</div>
					</div>
					<div className='event-pictures-block-2'>
						<p className='event-track-title'>My track:</p>
						<div className='event-track-picture'>
							<ModalImage
								small={eventTrack}
								large={eventTrack}
							/>
						</div>
						<div className='event-picture'>
							<ModalImage
								small={eventPicture3}
								large={eventPicture3}
							/>
						</div>
					</div>
					<div className='event-pictures-block-3'>
						<div className='event-medal-block'>
							<p className='event-medal-title'>My medal:</p>
							<div className='event-medal-picture'>
								<ModalImage
									small={medalPicture}
									large={medalPicture}
								/>
							</div>
						</div>
						<div className='event-bib-block'>
							<p className='event-bib-title'>My bib:</p>
							<div className='event-bib-picture'>
								<ModalImage
									small={bibPicture}
									large={bibPicture}
								/>
							</div>
						</div>
					</div>
				</div>
				<p className='event-comments'>{`Comments:`} <b><span>{eventComments}</span></b></p>
			</li >
			<TriangleDown />
			{/* <div className='share-and-print-buttons'>
				<ShareButton buttonText="Share with friends" />
				<PrintButton buttonText="Print your event" />
			</div> */}
		</div >
	)
}

export default EventCard