import Button from 'react-bootstrap/Button'
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            <h3>Ecommerce LFA</h3>
            <div>
                <Button variant="primary">Celulares</Button>{' '}
                <Button variant="primary">Tablets</Button>{' '}
                <Button variant="primary">Notebooks</Button>{' '}
                <CartWidget></CartWidget>
            </div>
        </nav>
    )
}

export default NavBar