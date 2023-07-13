import Item from '../Item/Item'

const ItemList = ({productList}) => {
    return (
        <div className='row col-sm-12 justify-content-center'>
        {productList.map(p => 
            <Item key={'product-'+ p.id} product={p}></Item>
        )}
        </div>
    )
}

export default ItemList