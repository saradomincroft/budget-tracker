import React from 'react';
import { Outlet, NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export default function Index() {
  return (
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav>
                    <Nav.Link>
                        <NavLink to="/" className="nav-link">
                            Home
                        </NavLink>
                    </Nav.Link>
                </Nav>
                <Nav>    
                    <Nav.Link>
                        <NavLink to="/incomes" className="nav-link">
                            Income
                        </NavLink>
                    </Nav.Link>
                </Nav>
                <Nav>    
                    <Nav.Link>
                        <NavLink to="/expenses" className="nav-link">
                            Expenses
                        </NavLink>
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link>
                        <NavLink to="/login" className="nav-link">
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
