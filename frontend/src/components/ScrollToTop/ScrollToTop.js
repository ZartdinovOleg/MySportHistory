import './ScrollToTop.css'
import { FaAnglesUp } from "react-icons/fa6";
import { useEffect, useState } from 'react';

function ScrollToTop() {
	const [showTopBtn, setShowTopBtn] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 1100) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		});
	}, []);

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};


	return (
		<div className='scroll-to-top'>
			{" "}
			{showTopBtn && (
				< FaAnglesUp className='scroll-to-top-icon' onClick={goToTop} />
			)
			} {" "}

		</div >
	)
}

export default ScrollToTop


