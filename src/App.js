import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
			</div>
			<Routes>
				<Route path='/' element={<h1>Happy hacking!</h1>} />
			</Routes>
		</BrowserRouter>

	);
}

export default App;
