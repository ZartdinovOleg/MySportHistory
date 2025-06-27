import './PrintEventCard.css'
import TriangleDown from '../Icons/TriangleDown/TriangleDown'
import LocationMark from '../Icons/LocationMark/LocationMark'
import PrintButton from '../Buttons/PrintButton/PrintButton'
import ShareButton from '../Buttons/ShareButton/ShareButton'
import RunningIcon from '../Icons/RunningIcon/RunningIcon'
import CalendarIcon from '../Icons/CalendarIcon/CalendarIcon'
import { React, useRef } from 'react'
import ModalImage from "react-modal-image"
import { useDispatch, useSelector } from 'react-redux'
import DeleteButton from '../Buttons/DeleteButton/DeleteButton'
import { deleteEvent } from '../../redux/eventsToPrint/actionCreators'
import html2canvas from 'html2canvas';
import PrintUpButton from '../Buttons/PrintUpButton/PrintUpButton'

function PrintEventCard() {
	// Redux store
	const events = useSelector((state) => state.events)
	const dispatch = useDispatch()
	// Redux store end

	const handleDeleteEvent = () => {
		dispatch(deleteEvent())
	}

	// Print JPG
	const domEl = useRef();
	const downloadImage = async () => {
		const canvas = await html2canvas(domEl.current);
		const dataUrl = canvas.toDataURL('image/png');
		const link = document.createElement('a');
		link.download = 'your-event.png';
		link.href = dataUrl;
		link.click();
	};
	// Print JPG end

	return (
		<div className='print-event-card-wrapper'>

			{events.length === 0 ? (
				<div className='print-event-page-after-words-wrap'><PrintUpButton /><p className='print-event-page-after-words'>Please fill the information about your event above</p></div>) : (
				<div>

					<div className='div-to-print' id="domEl" ref={domEl} >
						<li className='print-sportevent-card'>

							<div className='sportevent-card-information'>
								<div className='id-data-distance-location-wrapper'>
									<p className='event-id'>{events[0].printForm.eventId}</p>
									<div className='event-title-data-distance-location-wrapper'>
										<h2 className='event-title'>{events[0].printForm.eventTitle}</h2>
										<div className='id-data-distance-wrapper'>
											<p className='event-data'><CalendarIcon />{events[0].printForm.eventData}</p>
											<p className='event-location'><LocationMark />{events[0].printForm.eventLocation}</p>
											<p className='event-distance'><RunningIcon />{`${events[0].printForm.eventDistance}}km`}</p>
										</div>
									</div>
								</div>
								<div className='event-time-pace-wrapper'>
									<div className='event-finish-time-block'>
										<p className='event-finish-time'>{events[0].printForm.officialFinishTime}</p>
										<p className='event-finish-time-title'>Finish time</p>
									</div>
									<div className='event-event-pace-block'>
										<p className='event-event-pace'>{events[0].printForm.eventPace}</p>
										<p className='event-event-pace-title'>Pace</p>
									</div>
								</div>
							</div>
							<div className='print-event-pictures-wrap'>
								<div className='print-event-pictures-block-1'>
									<div className='print-event-picture'>
										<ModalImage
											small={events[0].picture1}
											large={events[0].picture1}
										/>
									</div>
									<div className='print-event-picture'>
										<ModalImage
											small={events[0].picture2}
											large={events[0].picture2}
										/>
									</div>
								</div>
								<div className='print-event-pictures-block-2'>
									<div className='print-event-track-picture'>
										<ModalImage
											small={events[0].trackPicture}
											large={events[0].trackPicture}
										/>
									</div>
									<div className='print-event-picture'>
										<ModalImage
											small={events[0].picture3}
											large={events[0].picture3}
										/>
									</div>
								</div>
								<div className='print-event-pictures-block-3'>
									<div className='print-event-medal-block'>
										<div className='print-event-medal-picture'>
											<ModalImage
												small={events[0].medalPicture}
												large={events[0].medalPicture}
											/>
										</div>
									</div>
									<div className='print-event-bib-block'>
										<div className='print-event-bib-picture'>
											<ModalImage
												small={events[0].bibPicture}
												large={events[0].bibPicture}
											/>
										</div>
									</div>
								</div>
							</div>

							<p className='print-event-comments'>{events[0].printForm.eventComments}</p>

						</li >
					</div>
					<div className='print-share-and-print-buttons'>
						<button className='download-delete-button' type='button' onClick={() => handleDeleteEvent()}><DeleteButton buttonText="Delete"></DeleteButton></button>
						<button className='download-image-button' type='button' onClick={downloadImage}><PrintButton buttonText="Download as JPG" /></button>
					</div>
					<p className='sport-events-title'>More events are coming soon...</p>
				</div>
			)
			}
			{/* <TriangleDown /> */}
		</div >
	)
}

export default PrintEventCard