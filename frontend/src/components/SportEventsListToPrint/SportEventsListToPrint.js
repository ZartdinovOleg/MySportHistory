import sportEventsToPrint from '../../data/sportEventsToPrint';
import PrintEventCard from '../PrintEventCard/PrintEventCard';
import './SportEventsListToPrint.css'

function SportEventsListToPrint() {
	return (
		<div className='print-sport-events'>
			<ul className='print-sport-events-list'>
				{sportEventsToPrint.map((sportEventToPrint) => {
					return <PrintEventCard {...sportEventToPrint} key={sportEventToPrint.eventIdToPrint} />
				})}
			</ul>
			{/* <p className='print-sport-events-title'>More events are coming soon...</p> */}
		</div>
	)
}

export default SportEventsListToPrint