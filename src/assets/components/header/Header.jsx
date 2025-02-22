import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Header() { 
    return (
      <>
<Container >
<Navbar expand="lg"  >
      <Container fluid>
        <Navbar.Brand href="#"> <span  style={{color:"#28B67E"}}>Students Info</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 mx-5"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" > <span style={{color:"#D3DCDE"}}>Home</span></Nav.Link>
            <Nav.Link href="#action1" > <span style={{color:"#D3DCDE"}}>Personal Info</span></Nav.Link>
            <Nav.Link href="#action2"> <span  style={{color:"#D3DCDE"}}>About Us</span></Nav.Link>
            <NavDropdown title="Contact" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Contacts</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled  id="drop1">
            Contacts
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="ms-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</Container>
  
      </>
    )
  }
  
  export default Header;