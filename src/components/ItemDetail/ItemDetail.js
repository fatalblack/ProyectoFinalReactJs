import ItemCount from '../ItemCount/ItemCount'
import {Card} from 'react-bootstrap'

const ItemDetail = ({product}) => {
    const onAddCallback = (total) => {
        console.log('Se agregaron ' + total + ' unidades')
    }

    return (
        <Card className='col-sm-4 offset-md-4'>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <img src={product.pictureUrl} alt="" className='Image-default-size'></img>
                <Card.Text>
                    <strong>{product.price}</strong>
                </Card.Text>
                <Card.Text>
                    Stock disponible: {product.stock}
                </Card.Text>
                <Card.Text>
                    {product.description}
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <ItemCount stock={product.stock} initial={1} onAdd={(total) => {onAddCallback(total)}}></ItemCount>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail