import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import ItemList from '../ItemList/ItemList'
import { getProducts } from '../../database/products'
import Loader from '../Loader/Loader'

const ItemListContainer = ({greeting}) => {
    const [productList, setProductList] = useState([])
    const [showLoader, setShowLoader] = useState(false)
    
    const { categoryId } = useParams();

    useEffect(() => {
        setShowLoader(true)

        getProducts(categoryId)
        .then((result) => {
            setProductList(result)
        }, (err) => {
            console.log('Error: ' + err)
        }).catch((ex) => {
            console.log('Excepción: ' + ex)
        }).finally(() => {
            setShowLoader(false)
        })
    }, [categoryId])

    return(
        <div>
            <h1>{greeting}</h1>
            {
                productList.length > 0 ?
                (
                    <ItemList productList={productList}></ItemList>
                ) :
                (
                    <Alert variant='warning' className='m-2'>
                        No hay productos disponibles para mostrar.
                    </Alert>
                )
            }
            <Loader show={showLoader} />
        </div>
    )
}

export default ItemListContainer