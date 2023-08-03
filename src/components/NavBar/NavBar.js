import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import CartWidget from "../CartWidget/CartWidget"
import { getCategories } from '../../database/categories'

const NavBar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
        .then((result) => {
            setCategories(result)
        }, (err) => {
            console.log('Error: ' + err)
        }).catch((ex) => {
            console.log('Excepción: ' + ex)
        })
    }, [])
    return(
        <nav>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <NavLink to="/" className="navbar-brand">Ecommerce LFA</NavLink>
                    <Nav className="me-auto">
                        {
                            categories.map(category => (
                                <NavLink key={category.id} to={`/category/${category.id}`} className="nav-link">{category.title}</NavLink>
                            ))
                        }
                        <CartWidget></CartWidget>
                    </Nav>
                </Container>
            </Navbar>
        </nav>
    )
}

export default NavBar