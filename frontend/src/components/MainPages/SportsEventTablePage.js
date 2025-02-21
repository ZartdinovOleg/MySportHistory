import MainHead from '../MainHead/MainHead'
import EventTable from '../EventTable/EventTable';
import WelcomePage from '../WelcomePage/WelcomePage';

function SportsEventTablePage() {
	return (
		<div className="sports-event-table-page">
			<WelcomePage />
			<MainHead />
			<EventTable />
		</div>
	)
}

export default SportsEventTablePage