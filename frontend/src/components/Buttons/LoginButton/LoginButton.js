import './LoginButton.css'

function LoginButton(props) {
	const { buttonText } = props
	return (
		<button className='login-button'>
			<p><b>{buttonText}</b></p>
		</button>
	)
}

export default LoginButton

