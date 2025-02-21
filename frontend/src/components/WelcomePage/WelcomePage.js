import LoginButton from '../Buttons/LoginButton/LoginButton'
import PrintButton from '../Buttons/PrintButton/PrintButton'
import LoginAndSignUp from '../LoginAndSignUp/LoginAndSignUp'
import './WelcomePage.css'
import BigTriangleDown from '../BigTriangleDown/BigTriangleDown'
import ModalNotFinishedYet from '../Modals/ModalNotFinishedYet/ModalNotFinishedYet'

function WelcomePage() {
	return (
		<div className='welcome-page'>
			<div className='welcome-page-login'>
				{/* <LoginAndSignUp /> */}
			</div>
			<h1 className='welcome-page-header'>Welcome to <b>MySportsHistory</b>,<br />
				a place where you can <b><span>keep all of your sport's records</span></b>,<br />
				<b><span>share with friends</span></b><br />
				and<br />
				<b><span>print them to your wall</span></b>.
			</h1>
			<div className='welcome-page-buttons-invite-wrapper'>
				<div className='welcome-page-buttons'>
					{/* <LoginButton buttonText="Login | Sign Up" /> */}
					<ModalNotFinishedYet />
					<p>or</p>
					<a href='/printpage'><PrintButton buttonText="Print your event" /></a>
				</div>
				<div className='welcome-page-invite-wrapper'>
					<p className='welcome-page-invite'>Explore the options</p>
					<BigTriangleDown />
				</div>
			</div>
		</div>
	)
}

export default WelcomePage