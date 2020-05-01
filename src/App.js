import React from 'react';
import './App.css';
import {Container, Row, Col, Navbar, Nav, NavDropdown,Form, FormControl, Button} from 'react-bootstrap/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCalendarDay, faCalendarMinus, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <Container fuid={true}> 
      <Row>
        <Col xs={12} md={3}>
            <Navbar className="menu-desplegable" expand="lg">
            <Navbar.Brand href="#home">Todo-list</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#all"> <FontAwesomeIcon icon={faList} /> Todas</Nav.Link>
                <Nav.Link href="#home"> <FontAwesomeIcon icon={faCalendarDay} /> Hoy</Nav.Link>
                <Nav.Link href="#link"> <FontAwesomeIcon icon={faCalendarMinus} /> Próxima semana</Nav.Link>
                <Nav.Link href="#link2"> <FontAwesomeIcon icon={faCalendarCheck} /> Completadas</Nav.Link>
                <NavDropdown title="Categorías" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action1">Trabajo</NavDropdown.Item>
                  <NavDropdown.Item href="#action2">Peliculas por ver</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Lista de compras</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
