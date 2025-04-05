import userData from '../../data/userData'
import './MainHead.css'
import sportEvents from '../../data/sportEvents';
import ListButton from '../Buttons/ListButton/ListButton';
import TableButton from '../Buttons/TableButton/TableButton';
import TriangleDown from '../Icons/TriangleDown/TriangleDown';
import { Link } from 'react-router-dom';
import SideEventListMenu from '../SideEventListMenu/SideEventListMenu';
import { GiAllSeeingEye } from "react-icons/gi";

function MainHead() {
	const { userName, userPicture } = userData
	return (<>
		<div className='main-head'>
			<div className='user-welcome-picture-block'>
				<img className='user-picture' src={userPicture} width="300px" height="300px"></img>
			</div>
			<div className='user-welcome-block'>
				<div className='user-welcome-words'>
					<h3 className='user-hello'>Hello!</h3>
					<h3 className='user-name'>{`My name is`} {`${userName}`} {`and this is my personal sport's history`}</h3>
				</div>
				<div className='user-statistics'>
					<div className='user-statistic-block'>
						<h3 className='user-statistics-count'><b>{`${sportEvents.length}`}</b></h3>
						<h2 className='user-statistics-title'>Sport's events</h2>
					</div>
					<h2 className='user-statistics-personal-title'>My personal best</h2>
					<ul className='user-statistics-list'>
						<li className='user-statistics-item'>
							<p className='user-statistics-item-best-time'><b>38:35</b></p>
							<p className='user-statistics-item-title'>10km</p>
						</li>
						<li className='user-statistics-item'>
							<p className='user-statistics-item-best-time'><b>1:24:38</b></p>
							<p className='user-statistics-item-title'>21.1km</p>
						</li>
						<li className='user-statistics-item'>
							<p className='user-statistics-item-best-time'><b>3:03:33</b></p>
							<p className='user-statistics-item-title'>42.2km</p>
						</li>
					</ul>
				</div>
			</div>
			{/* <TriangleDown /> */}
		</div >
		<div className='main-head-buttons'>
			<Link to='/'><ListButton buttonText="Show as a list" /></Link>
			<Link to='/table'><TableButton buttonText="Show as a table" /></Link>
		</div>
	</>
	)
}

export default MainHead