import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPages/MainPage';
import SportEventTablePage from './components/MainPages/SportsEventTablePage'
import PrintPage from './components/MainPages/PrintPage';
import './App.css';


function App() {
	return (
		<BrowserRouter >
			<div className="App">
				<Routes>
					<Route path='/' element={<MainPage />}></Route>
					<Route path='/table' element={<SportEventTablePage />}></Route >
					<Route path='/printpage' element={<PrintPage />}></Route>
					<Route path='*' element={<MainPage />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
