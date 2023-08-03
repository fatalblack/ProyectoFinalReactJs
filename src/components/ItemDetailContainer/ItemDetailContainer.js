import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProduct } from '../../database/products'
import Loader from '../Loader/Loader'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const [showError, setShowError] = useState(false)
    const [showLoader, setShowLoader] = useState(false)

    const { itemId } = useParams();

    useEffect(() => {
        setShowLoader(true)
        
        getProduct(itemId)
        .then((result) => {
            setProduct(result)
        }, (err) => {
            console.log('Error: ' + err)
            setShowError(true)
        }).catch((ex) => {
            console.log('Excepción: ' + ex)
            setShowError(true)
        }).finally(() => {
            setShowLoader(false)
        })
    }, [itemId])

    return(
        <div className='m-2'>
            { showError ?
            (
                <Alert variant='warning' className='m-2'>
                    El producto seleccionado es inexistente.
                </Alert>
            ):
            (
                <ItemDetail product={product}></ItemDetail>
            )}
            
            <Loader show={showLoader} />
        </div>
    )
}

export default ItemDetailContainer