import './ListButton.css'

function ListButton(props) {
	const { buttonText } = props
	return (
		<button className='list-button'>
			<p><b>{buttonText}</b></p>
		</button>
	)
}

export default ListButton