import sportEvents from '../../data/sportEvents';
import EventCard from '../EventCard/EventCard';
import './SportEventsList.css'
import SideEventListMenu from '../SideEventListMenu/SideEventListMenu';

function SportEventsList() {
	return (
		<div className='sport-events'>
			<SideEventListMenu />
			<ul className='sport-events-list'>
				{sportEvents.map((sportEvent) => {
					return <EventCard {...sportEvent} key={sportEvent.EventId} />
				})}
			</ul>
			<p className='sport-events-title'>More events are coming soon...</p>
		</div>
	)
}

export default SportEventsList