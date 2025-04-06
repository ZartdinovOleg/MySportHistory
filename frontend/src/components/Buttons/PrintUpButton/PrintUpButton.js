import { FaArrowUp } from "react-icons/fa";
import './PrintUpButton.css'

function PrintUpButton() {

	const goToTopPrint = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
	return (
		<div className="print-up-button">
			<FaArrowUp className='print-up-button-icon' onClick={goToTopPrint} />
		</div>
	)
}

export default PrintUpButton



