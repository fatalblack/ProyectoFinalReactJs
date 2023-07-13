import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import CartWidget from "../CartWidget/CartWidget"
import { categories } from '../../mockAsync'

const NavBar = () => {
    return(
        <nav>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <NavLink to="/" className="navbar-brand">Ecommerce LFA</NavLink>
                    <Nav className="me-auto">
                        <NavLink to={`/category/${categories.cellphone}`} className="nav-link">Celulares</NavLink>
                        <NavLink to={`/category/${categories.tablet}`} className="nav-link">Tablets</NavLink>
                        <NavLink to={`/category/${categories.notebook}`} className="nav-link">Notebooks</NavLink>
                        <CartWidget></CartWidget>
                    </Nav>
                </Container>
            </Navbar>
        </nav>
    )
}

export default NavBar