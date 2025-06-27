import sportEvents from '../../data/sportEvents';
import EventCard from '../EventCard/EventCard';
import './SportEventsList.css'
import SideEventListMenu from '../SideEventListMenu/SideEventListMenu';
import MedalList from '../MedalList/MedalList'

function SportEventsList() {
	return (
		<div className='sport-events'>
			<SideEventListMenu />
			{/* <MedalList /> */}
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