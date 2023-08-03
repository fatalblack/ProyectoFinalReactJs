import ItemCount from '../ItemCount/ItemCount'
import { Card } from 'react-bootstrap'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext/CartContext'

const ItemDetail = ({product}) => {
    const { addItem } = useContext(CartContext)
    const [productAdded, setProductAdded] = useState(0)

    const onAddCallback = (total) => {
        setProductAdded(total)
        addItem(product, total)
    }

    return (
        <Card className='col-sm-4 offset-md-4'>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <img src={product.pictureUrl} alt="" className='Image-default-size'></img>
                <Card.Text>
                    <strong>$ {product.price}</strong>
                </Card.Text>
                <Card.Text>
                    Stock disponible: {product.stock}
                </Card.Text>
                <Card.Text>
                    {product.description}
                </Card.Text>
            </Card.Body>
            <Card.Body>
                {productAdded > 0 ?
                    <NavLink to={`/cart`} className="btn btn-primary">Finalizar compra</NavLink> :
                    <ItemCount stock={product.stock} initial={1} onAdd={(total) => {onAddCallback(total)}}></ItemCount>
                }
                
            </Card.Body>
        </Card>
    )
}

export default ItemDetail