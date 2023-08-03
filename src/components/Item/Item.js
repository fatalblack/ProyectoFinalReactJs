import { Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Item = ({product}) => {
    return (
        <Card className="col-md-3 m-2">
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <img src={product.pictureUrl} alt="" className='Image-default-size'></img>
                <Card.Text>
                    <strong>$ {product.price}</strong>
                </Card.Text>
                <Card.Text>
                    Stock disponible: {product.stock}
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <NavLink to={`/item/${product.id}`} className="btn btn-outline-primary">Ver detalle</NavLink>
            </Card.Body>
        </Card>
    )
}

export default Item