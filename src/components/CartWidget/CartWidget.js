import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import iconoCarrito from './assets/cart-white.svg'

const CartWidget = () => {
    return (
        <Button variant="dark">
            <img
              src={iconoCarrito}
              width="24"
              height="24"
              className="d-inline-block align-top"
              alt="Carrito"
            />
            {' '}
            <Badge bg="secondary">0</Badge>
        <span className="visually-hidden"></span>
        </Button>
    )
}

export default CartWidget