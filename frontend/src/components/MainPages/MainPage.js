import SportEventsList from '../SportEventsList/SportEventsList'
import MainHead from '../MainHead/MainHead'
import WelcomePage from '../WelcomePage/WelcomePage';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

function MainPage() {
	return (
		<div className="main-page">
			<WelcomePage />
			<MainHead />
			<SportEventsList />
			<ScrollToTop />
		</div>
	)
}

export default MainPage