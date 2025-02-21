import userData from '../../data/userData'
import './MainHead.css'
import sportEvents from '../../data/sportEvents';
import ListButton from '../Buttons/ListButton/ListButton';
import TableButton from '../Buttons/TableButton/TableButton';
import TriangleDown from '../TriangleDown/TriangleDown';
import { Link } from 'react-router-dom';
import SideEventListMenu from '../SideEventListMenu/SideEventListMenu';

function MainHead() {
	const { userName, userPicture } = userData
	return (
		<div className='main-head'>
			<div className='user-welcome'>
				<img className='user-picture' src={userPicture} width="300px" height="300px"></img>
				<div className='user-welcome-words'>
					<h3 className='user-name'>{`Hello!`}<br /> {`My name is`} <br /> <b><span>{`${userName}`}</span></b> {`and this is`} <br />{`my personal`} <br /> {`sport's history.`}</h3>
				</div>
			</div>
			<div className='user-statistics'>
				<h2>Sport's events I joined:</h2>
				<h3 className='user-statistics-count'><b>{`${sportEvents.length}`}</b></h3>
				<h2>My personal's best:</h2>
				<ul className='user-statistics-list'>
					<li className='user-statistics-item'>
						<p className='user-statistics-item-title'>10km</p>
						<p className='user-statistics-item-best-time'><b>38:35</b></p>
					</li>
					<li className='user-statistics-item'>
						<p className='user-statistics-item-title'>21.1km:</p>
						<p className='user-statistics-item-best-time'><b>1:24:38</b></p>
					</li>
					<li className='user-statistics-item'>
						<p className='user-statistics-item-title'>42.2km:</p>
						<p className='user-statistics-item-best-time'><b>3:05:51</b></p>
					</li>
				</ul>
				<div className='main-head-buttons'>
					<Link to='/'><ListButton buttonText="List" /></Link>
					<p>/</p>
					<Link to='/table'><TableButton buttonText="Table" /></Link>
				</div>
			</div>
			<TriangleDown />
		</div >
	)
}

export default MainHead