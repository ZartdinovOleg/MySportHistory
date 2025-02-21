import './ShareButton.css'

function ShareButton(props) {
	const { buttonText } = props
	return (
		<button className='share-button'>
			<p><b>{buttonText}</b></p>
		</button>
	)
}

export default ShareButton