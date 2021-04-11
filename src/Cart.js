import React from 'react'
import CartItems from './CartItems';
import CartTotal from './CartTotal';
import { useStateValue } from './StateProvider';
import styled from 'styled-components'

function Cart() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <Container>
            <CartItems/>
            <CartTotal/>
        </Container>
    )
}

export default Cart

const Container = styled.div`
    display:flex;
    min-height:90vh;
    max-width:1150px;
    margin-left:auto;
    margin-right:auto;
    background-color:white;
`
