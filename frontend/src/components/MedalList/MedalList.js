import './MedalList.css'
import { HashLink } from 'react-router-hash-link';
import sportEvents from '../../data/sportEvents';

function MedalList() {
	return (
		<div className='medal-list-wrapper'>
			<div className="medal-list">
				<div className='medal-list-row1'>
					<div className='medal-list-item'>
						<div className="hexagon-shadow"></div>
						<p>1</p>
						<div className="hexagon-wrapper">
							<HashLink smooth to={`/#${sportEvents[0].eventId}`}>
								<img className="hexagon-image" src={`${sportEvents[0].eventNavMedal}`} alt="" />
							</HashLink>
						</div>
					</div>


					<div className='medal-list-item'>
						<div className="hexagon-shadow"></div>
						<p>2</p>
						<div className="hexagon-wrapper">
							<HashLink smooth to={`/#${sportEvents[1].eventId}`}>
								<img className="hexagon-image" src={`${sportEvents[1].eventNavMedal}`} alt="" />
							</HashLink>
						</div>
					</div>

					<div className='medal-list-item'>
						<div className="hexagon-shadow"></div>
						<p>3</p>
						<div className="hexagon-wrapper">
							<img className="hexagon-image" src={`${sportEvents[2].eventNavMedal}`} alt="" />
						</div>

					</div>
					<div className='medal-list-item'>
						<div className="hexagon-shadow"></div>
						<p>4</p>
						<div className="hexagon-wrapper">
							<img className="hexagon-image" src={`${sportEvents[3].eventNavMedal}`} alt="" />
						</div>
					</div>
				</div>

				<div className='medal-list-row2'>
					<div className='medal-list-item'>
						<div className="hexagon-shadow"></div>
						<p>5</p>
						<div className="hexagon-wrapper">
							<img className="hexagon-image" src={`${sportEvents[4].eventNavMedal}`} alt="" />
						</div>
					</div>

					<div className='medal-list-item'>
						<div className="hexagon-shadow"></div>
						<p>6</p>
						<div className="hexagon-wrapper">
							<img className="hexagon-image" src={`${sportEvents[5].eventNavMedal}`} alt="" />
						</div>
					</div>

					<div className='medal-list-item'>
						<div className="hexagon-shadow"></div>
						<p>7</p>
						<div className="hexagon-wrapper">
							<img className="hexagon-image" src={`${sportEvents[6].eventNavMedal}`} alt="" />
						</div>
					</div>
				</div>

				<div className='medal-list-row3'>
					<div className='medal-list-item'>
						<div className="hexagon-shadow"></div>
						<p>8</p>
						<div className="hexagon-wrapper">
							<img className="hexagon-image" src={`${sportEvents[7].eventNavMedal}`} alt="" />
						</div>
					</div>
					<div className='medal-list-item'>
						<div className="hexagon-shadow"></div>
						<p>9</p>
						<div className="hexagon-wrapper">
							<img className="hexagon-image" src={`${sportEvents[8].eventNavMedal}`} alt="" />
						</div>
					</div>
					<div className='medal-list-item'>
						<div className="hexagon-shadow"></div>
						<p>10</p>
						<div className="hexagon-wrapper">
							<img className="hexagon-image" src={`${sportEvents[9].eventNavMedal}`} alt="" />
						</div>
					</div>
					<div className='medal-list-item'>
						<div className="hexagon-shadow"></div>
						<p>11</p>
						<div className="hexagon-wrapper">
							<img className="hexagon-image" src={`${sportEvents[10].eventNavMedal}`} alt="" />
						</div>
					</div>
				</div>

				<div className='medal-list-row4'>
					<div className='medal-list-item'>
						<div className="hexagon-shadow"></div>
						<p>12</p>
						<div className="hexagon-wrapper">
							<img className="hexagon-image" src={`${sportEvents[11].eventNavMedal}`} alt="" />
						</div>
					</div>
					<div className='medal-list-item'>
						<div className="hexagon-shadow"></div>
						<p>13</p>
						<div className="hexagon-wrapper">
							<img className="hexagon-image" src={`${sportEvents[12].eventNavMedal}`} alt="" />
						</div>
					</div>
				</div>


			</div >
		</div>
	)
}

export default MedalList