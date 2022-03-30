
import { Navbar, Nav, Container } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MyTodos from "./todo";
import Login from './login';
import Register from './regestration'
function NavbarSe() {
    return (
        <Router>
            <div className="navy">
                <Navbar style={{ backgroundImage: "linear-gradient(to right, rgb(228, 126, 68) , rgb(154, 78, 206), rgb(61, 170, 173))" }} expand="lg">
                    <Container className="con-nav">
                        <div>
                            <Navbar.Brand href="#home">TODO</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        </div>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav>
                                <Nav.Link as={Link} to={'/MyTodos'} >My TODOS</Nav.Link>
                                <Nav.Link as={Link} to={'/Login'}>Login</Nav.Link>
                                <Nav.Link as={Link} to={'/Register'}>Register</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div >
            <div>
                <Switch>
                    <Route path="/MyTodos">
                        <MyTodos/>
                    </Route>
                    <Route path="/Login">
                        <Login/>
                    </Route>
                    <Route path="/Register">
                        <Register/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
export default NavbarSe;