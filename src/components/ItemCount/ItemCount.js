import { useState } from 'react'
import {Button, InputGroup, Form, Card, Stack} from 'react-bootstrap'

const ItemCount = ({stock, initial, onAdd}) => {
    const [itemCount, addItemCount] = useState(initial)

    const deductItem = (quantity) => {
        const total = itemCount - quantity

        if(total < 0){
            addItemCount(0)
        }
        else {
            addItemCount(total)
        }
    }

    const addItem = (quantity) => {
        const total = itemCount + quantity

        if(total > stock){
            addItemCount(stock)
        }
        else {
            addItemCount(total)
        }
    }

    const onAddCallback = () => {
        if(stock === '0'){
            console.log('No ejecutamos callback por falta de stock')
        }
        else
        {
            onAdd(itemCount)
        }
        
    }

    return(
    <Stack direction='horizontal' className='col-xs-6 justify-content-center mt-2'>
        <Card>
            <Card.Body>
                <Card.Title>Producto test</Card.Title>
                <InputGroup>
                    <Button variant="outline-secondary" onClick={() => {deductItem(1)}}>-</Button>
                    <Form.Control aria-label={itemCount} value={itemCount} className='text-center' readOnly></Form.Control>
                    <Button variant="outline-secondary" onClick={() => {addItem(1)}}>+</Button>
                </InputGroup>
            </Card.Body>
        </Card>
        <Button variant="outline-primary" onClick={() => {onAddCallback()}} style={{ alignSelf: 'flex-end'}} className='ms-2'>Agregar al carrito</Button>
    </Stack>)
}

export default ItemCount