import './TableButton.css'

function TableButton(props) {
	const { buttonText } = props
	return (
		<button className='table-button'>
			<p><b>{buttonText}</b></p>
		</button>
	)
}

export default TableButton