import ItemList from '../ItemList/ItemList'
import { getProducts } from '../../mockAsync'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
    const [productList, setProductList] = useState([])
    
    const { categoryId } = useParams();

    useEffect(() => {
        getProducts(categoryId)
        .then((result) => {
            setProductList(result)
        }, (err) => {
            console.log('Error: ' + err)
        }).catch((ex) => {
            console.log('Excepción: ' + ex)
        })
    }, [categoryId])

    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList productList={productList}></ItemList>
        </div>
    )
}

export default ItemListContainer