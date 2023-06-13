import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
	return (
		<div className='container'>
			<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse>
					<Nav>
						<Nav.Link>
							<Link to='/'>Home</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to='/about'>About</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to='/contact'>Contact</Link>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default NavBar;
