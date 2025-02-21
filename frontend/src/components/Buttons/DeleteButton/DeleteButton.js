import './DeleteButton.css'


function DeleteButton(props) {
	const { buttonText } = props
	return (
		<button className='delete-button'>
			<p><b>{buttonText}</b></p>
		</button>
	)
}

export default DeleteButton