import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <>
    <Navbar  fixed="bottom" bg="dark"  variant="dark">
    <Container>
    <Navbar.Brand href="#home">coinBase</Navbar.Brand>
    </Container>
    </Navbar>
    </>
    );
}

export default Footer;
