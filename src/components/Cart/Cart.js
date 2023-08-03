import { useContext, useEffect, useState } from 'react'
import { ListGroup, Row, Col, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext/CartContext'
import Loader from '../Loader/Loader'

const Cart = () => {
    const { cart, removeItem, clearCart, cartTotalPrice } = useContext(CartContext)
    const [showLoader, setShowLoader] = useState(true)

    useEffect(() => {
        setShowLoader(false)
    },[])

    const cartToolsRender = (
        <Row className='text-right m-2'>
            <Col className='text-left'>
                <Button variant="primary" onClick={() => clearCart()}>Limpiar carrito</Button>
            </Col>
            <Col className='text-right'>
                <strong>TOTAL: $ {cartTotalPrice}</strong>
            </Col>
        </Row>
    )

    return (
        cart.length === 0 ?
        (
            <>
                <ListGroup className='m-2'>
                    <ListGroup.Item>Carrito vacío</ListGroup.Item>
                </ListGroup>
                <NavLink to={`/`} className='btn btn-dark'>Seguir comprando</NavLink>
            </>
        ) :
        (
            <>
                { cartToolsRender }
                <ListGroup className='m-2'>{ 
                    cart.map((item) => {
                        return (
                            <ListGroup.Item key={item.id}>
                                <Row className='flex'>
                                    <Col xs='12' md='2'>
                                        <img src={item.pictureUrl} alt='' className='Image-cart-size'></img>
                                    </Col>
                                    <Col xs='12' md='6' className='text-left'>
                                        <p>
                                            <strong>{item.title}</strong>
                                        </p>
                                        <Button variant="outline-primary" onClick={() => removeItem(item.id)}>Eliminar</Button>
                                    </Col>
                                    <Col xs='6' md='2'>x {item.quantity}</Col>
                                    <Col xs='6' md='2' className='text-right Cart-item-price-total'>
                                        $ {item.total}
                                        <p className='Cart-item-price-subtotal'>($ {item.price} x {item.quantity})</p>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        )
                    })
                }</ListGroup>
                { cartToolsRender }
                <div className='m-2'>
                    <Row className='flex'>
                        <Col xs='12'>
                            <NavLink to={`/checkout`} className='btn btn-dark col-12'>Checkout</NavLink>
                        </Col>
                    </Row>
                </div>
                <Loader show={showLoader} />
            </>
        )
    )
}

export default Cart