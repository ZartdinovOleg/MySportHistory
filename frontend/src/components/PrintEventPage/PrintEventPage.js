import PrintEventForm from '../PrintEventForm/PrintEventForm'
import SportEventsListToPrint from '../SportEventsListToPrint/SportEventsListToPrint'
import './PrintEventPage.css'
import { Link } from 'react-router-dom';
import GoHomeIcon from '../GoHomeIcon/GoHomeIcon';

function PrintEventPage() {
	return (
		<div id='printpagestart' className='print-event-page'>
			< Link to='/' > <GoHomeIcon /></Link >
			<h3 className='print-event-page-welcome-words'>Please fill the information about your event below</h3>
			<PrintEventForm />
			<SportEventsListToPrint />
		</div>
	)
}

export default PrintEventPage