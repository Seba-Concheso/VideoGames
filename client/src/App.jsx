import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import NavBar from './components/NavBar/NavBar.jsx';

const App = () => {
	const location = useLocation();
	return (
		<div className='App'>
			{location.pathname === '/' && <NavBar />}
			<Routes>
				<Route path='/' element={<Home></Home>} />
			</Routes>
		</div>
	);
};

export default App;
