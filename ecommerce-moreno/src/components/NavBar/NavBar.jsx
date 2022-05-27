import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { NavDropdown} from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
  return (
      <div>
    <Navbar bg="light" expand="lg" >
  <Container fluid>
    <Navbar.Brand href="#"><Link to='/'>DECORARI</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action2">CONOCENOS</Nav.Link>
        <NavDropdown title="PRODUCTOS" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3"><Link to='/category/arreglos'>ARREGLOS</Link></NavDropdown.Item>
          <NavDropdown.Item href="#action4"><Link to='/category/regalos'>DESAYUNOS</Link></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            EVENTOS
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          CONTACTO
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
<CartWidget />
</Navbar>
</div>
  )
}

export default NavBar