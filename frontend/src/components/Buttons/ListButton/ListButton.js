import './ListButton.css'
import { LiaListOlSolid } from "react-icons/lia";

function ListButton(props) {
	const { buttonText } = props
	return (
		<button className='list-button'>
			<LiaListOlSolid size={22} />
			<p><b>{buttonText}</b></p>
		</button>
	)
}

export default ListButton