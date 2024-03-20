import React from 'react';
import { Outlet, NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export default function Index() {
  return (
    <>
        <Navbar>
            <Container>
                <Nav>
                    <Nav.Link>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </Nav.Link>
                </Nav>
                <Nav>    
                    <Nav.Link>
                        <NavLink to="/expenses">
                            Add Expense
                        </NavLink>
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link>
                        <NavLink to="/login">
                            Login
                        </NavLink>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
      <Outlet />
    </>
  );
}
