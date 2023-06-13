import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getVideogamesAPI } from '../../redux/action';
import Videogame from '../VideoGame/VideoGame';
import { Row } from 'react-bootstrap';

const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getVideogamesAPI());
	}, [dispatch]);
	const { videogames } = useSelector((state) => state);
	console.log(videogames);

	return (
		<Row xs={1} md={2} className='g-3'>
			{videogames.map((videoGame) => {
				return (
					<Videogame
						key={videoGame.id}
						name={videoGame.name}
						released={videoGame.released}
						platforms={videoGame.platforms}
						image={videoGame.image}
					/>
				);
			})}
		</Row>
	);
};

export default Home;
