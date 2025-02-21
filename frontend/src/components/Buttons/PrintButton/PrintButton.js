import './PrintButton.css'

function PrintButton(props) {
	const { buttonText } = props
	return (
		<button className='print-button'>
			<p><b>{buttonText}</b></p>
		</button>
	)
}

export default PrintButton