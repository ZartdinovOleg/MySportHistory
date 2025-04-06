import LoginButton from '../Buttons/LoginButton/LoginButton'
import PrintButton from '../Buttons/PrintButton/PrintButton'
import LoginAndSignUp from '../LoginAndSignUp/LoginAndSignUp'
import './WelcomePage.css'
import BigTriangleDown from '../Icons/BigTriangleDown/BigTriangleDown'
import ModalNotFinishedYet from '../Modals/ModalNotFinishedYet/ModalNotFinishedYet'

function WelcomePage() {
	return (
		<div className='welcome-page-wrapper'>
			<div className='welcome-page'>
				<div className='welcome-page-login'>
					<LoginAndSignUp />
				</div>
				<h1 className='welcome-page-header'><b>Welcome to <br />My Sports History</b>
				</h1 >
				<h2 className='welcome-page-description'>A place where you can keep all of your sport's records,<br /> share with friends and print them to your wall</h2>
				<div className='welcome-page-buttons-invite-wrapper'>
					<div className='welcome-page-buttons'>
						{/* <LoginButton buttonText="Login | Sign Up" /> */}
						{/* <p>or</p> */}
						<a href='/printpage'><PrintButton buttonText="Print your event" /></a>
					</div>
					{/* <div className='welcome-page-invite-wrapper'>
						<p className='welcome-page-invite'>Explore the options</p>
						<BigTriangleDown />
					</div> */}
				</div>
			</div >
		</div>
	)
}

export default WelcomePage