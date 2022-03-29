import {Link, NavLink} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useDispatch} from "react-redux";
import {logged} from '../redux/reducers/loggedIn';

function Navigation() {
    const dispatch = useDispatch();

    function logOut() {
        dispatch(logged(0));
    }
  return (
    <>
    <Navbar bg="dark"  variant="dark" expand="md">
    <Container>
    <Navbar.Brand>
     <Nav.Link as={NavLink} to='/'>coinBase</Nav.Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link as={NavLink} to='/allcoins'>All coins</Nav.Link>
    <Nav.Link as={NavLink} to='/cryptonews'>Crypto news</Nav.Link>
    </Nav>
    <Nav className=" navbar-right">
    <Nav.Item onClick={logOut} as={NavLink} to='/allcoins' align="end">Logout</Nav.Item>
    </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
    </>
    );
}

export default Navigation;
