import { useContext, useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext/CartContext'
import { addOrder } from '../../database/orders'
import Loader from '../Loader/Loader'

const Checkout = () => {
    const [orderId, setOrderId] = useState(null)
    const [ordered, setOrdered] = useState(false)
    const [orderFailed, setOrderFailed] = useState(false)
    const [orderMessage, setOrderMessage] = useState('')
    const [showLoader, setShowLoader] = useState(false)

    const { cart, cartTotalPrice, clearCart } = useContext(CartContext)

    const confirmOrder = (event) => {
        const form = event.currentTarget;

        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity() !== false) {
            setShowLoader(true)

            addOrder(form.name.value, form.phone.value, form.email.value, cart, cartTotalPrice)
            .then((result) => {
                setOrderId(result)
                setOrderFailed(false)
                setOrderMessage(`Orden confirmada, su Id es: ${result}`)
                clearCart()
            }, (err) => {
                setOrderFailed(true)
                setOrderMessage(`${err}`)
            }).catch((ex) => {
                setOrderFailed(true)
                setOrderMessage(`Excepción: ${ex}`)
            }).finally(() => {
                setShowLoader(false)
            })

            setOrdered(true)
        }
    }

    return(
    <>
    {
        ordered ? (
            <Alert variant={ orderFailed ? 'danger' : 'success' } className='m-2'>
                {orderMessage}
            </Alert>
        ) : (
            cart.length === 0 ?
            (
                <>
                    <Alert variant='warning' className='m-2'>
                        Para poder confirmar una orden debe agregar productos al carrito.
                    </Alert>
                    <NavLink to={`/`} className='btn btn-dark'>¡Ir de compras!</NavLink>
                </>
            ) :
            (
                <Row className='mt-2'>
                    <Col xs='12' md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={ confirmOrder }>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Cosme Fulanito" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="phone">
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control type="text" placeholder="+5493875111111" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" required />
                            </Form.Group>
                            <Button type="submit">Confirmar orden</Button>
                        </Form>
                    </Col>
                </Row>
            )
        )
    }
        <Loader show={showLoader} />
    </>)
}

export default Checkout