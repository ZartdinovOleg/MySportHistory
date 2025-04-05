import './TableButton.css'
import { CiViewTable } from "react-icons/ci";

function TableButton(props) {
	const { buttonText } = props
	return (
		<button className='table-button'>
			<CiViewTable size={22} />
			<p><b>{buttonText}</b></p>
		</button>
	)
}

export default TableButton