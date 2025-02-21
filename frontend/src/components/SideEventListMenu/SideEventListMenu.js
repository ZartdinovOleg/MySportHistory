import './SideEventListMenu.css'
import sportEvents from '../../data/sportEvents';
import { HashLink } from 'react-router-hash-link';
import { useEffect, useState } from 'react';

function SideEventListMenu() {

	const [showSideMenu, setShowSideMenu] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > (1200)) {
				setShowSideMenu(true);
			} else {
				setShowSideMenu(false);
			}
		});
	}, []);

	return (

		<div div className='side-event-list-menu' >
			{showSideMenu && (<ul className='side-event-list'>
				{sportEvents.map(event => <HashLink activeClassName='selected-side-menu-item' smooth to={`/#${event.eventId}`}>
					<li className='side-event-list-item'>{event.eventId}</li>
				</HashLink>)}
			</ul>)
			}
		</div >
	)
}

export default SideEventListMenu