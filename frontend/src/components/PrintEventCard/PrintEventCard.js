import './PrintEventCard.css'
import TriangleDown from '../Icons/TriangleDown/TriangleDown'
import LocationMark from '../Icons/LocationMark/LocationMark'
import PrintButton from '../Buttons/PrintButton/PrintButton'
import ShareButton from '../Buttons/ShareButton/ShareButton'
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
							<div className='print-id-data-distance-location-wrapper'>
								<div className='print-id-data-distance-wrapper'>
									<p className='print-event-id'>{events[0].printForm.eventId}</p>
									<p className='print-event-data'>{events[0].printForm.eventData}</p>
									<p className='print-event-distance'>{`${events[0].printForm.eventDistance}km`}</p>
								</div>
								<p className='print-event-location'><LocationMark />{events[0].printForm.eventLocation}</p>
							</div>
							<h2 className='print-event-title'>{events[0].printForm.eventTitle}</h2>
							<div className='print-event-time-pace-wrapper'>
								<p className='print-event-finish-time'>Official finish time:<br /> <b><span>{events[0].printForm.officialFinishTime}</span></b></p>
								<p className='print-event-event-pace'>Pace:<br />  <b><span>{`${events[0].printForm.eventPace}min/km`}</span></b></p>
							</div>
							<div className='print-event-pictures-wrap'>
								<div className='print-event-pictures-block-1'>
									<p className='print-event-pictures-title'>My pictures:</p>
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
									<p className='print-event-track-title'>My track:</p>
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
										<p className='print-event-medal-title'>My medal:</p>
										<div className='print-event-medal-picture'>
											<ModalImage
												small={events[0].medalPicture}
												large={events[0].medalPicture}
											/>
										</div>
									</div>
									<div className='print-event-bib-block'>
										<p className='print-event-bib-title'>My bib:</p>
										<div className='print-event-bib-picture'>
											<ModalImage
												small={events[0].bibPicture}
												large={events[0].bibPicture}
											/>
										</div>
									</div>
								</div>
							</div>
							<p className='print-event-comments'>{`Comments:`} <b><span>{events[0].printForm.eventComments}</span></b></p>
						</li >
					</div>
					<div className='print-share-and-print-buttons'>
						<button className='download-delete-button' type='button' onClick={() => handleDeleteEvent()}><DeleteButton buttonText="Delete"></DeleteButton></button>
						<button className='download-image-button' type='button' onClick={downloadImage}><PrintButton buttonText="Download as JPG" /></button>
					</div>
				</div>
			)
			}
			{/* <TriangleDown /> */}
		</div >
	)
}

export default PrintEventCard