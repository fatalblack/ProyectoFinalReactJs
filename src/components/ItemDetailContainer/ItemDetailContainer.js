import ItemDetail from '../ItemDetail/ItemDetail'
import { getProduct } from '../../mockAsync'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])

    const { itemId } = useParams();

    useEffect(() => {
        getProduct(itemId)
        .then((result) => {
            setProduct(result)
        }, (err) => {
            console.log('Error: ' + err)
        }).catch((ex) => {
            console.log('Excepción: ' + ex)
        })
    }, [itemId])

    return(
        <div className='m-2'>
            <ItemDetail product={product}></ItemDetail>
        </div>
    )
}

export default ItemDetailContainer