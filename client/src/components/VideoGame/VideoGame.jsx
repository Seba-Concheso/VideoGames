import Card from 'react-bootstrap/Card';
const videoGame = (videoGames) => {
	return (
		<Card border='primary' style={{ width: '18rem' }}>
			<Card.Img variant='top' src={videoGames.image} />
			<Card.Body>
				<Card.Title>{videoGames.name}</Card.Title>
				<Card.Text>{videoGames.released}</Card.Text>
				<Card.Text>{videoGames.platforms}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default videoGame;
