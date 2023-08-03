import { useContext } from 'react'
import Badge from 'react-bootstrap/Badge'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext/CartContext'

const CartWidget = () => {
    const { cartTotalItems } = useContext(CartContext)

    return (
        cartTotalItems === 0 ?
        (
            <></>
        ) :
        (
            <NavLink to={`/cart`} className='btn btn-dark'>
                <img
                src='/icons/cart-white.svg'
                width="24"
                height="24"
                className="d-inline-block align-top"
                alt="Carrito"
                />
                {' '}
                <Badge bg="secondary">{ cartTotalItems }</Badge>
            <span className="visually-hidden"></span>
            </NavLink>
        )
    )
}

export default CartWidget