import React from 'react'
import styled from 'styled-components'
import PaymentIcon from '@material-ui/icons/Payment';
function CartTotal() {
    return (
        <Container>
            <CartHeader>
                <HeaderLeft>
                    Total Price
                </HeaderLeft>
                <HeaderRight>
                    <Right>
                        <PaymentIcon/> VND
                    </Right>
                </HeaderRight>
            </CartHeader>
        </Container>
    )
}

export default CartTotal

const Container =styled.div`
    display:flex;
    flex:0.3;
    background-color:white;
`
const CartHeader = styled.div`
    height:30px;
    box-shadow:0px 2px 2px rgba(0,0,0,0.5);
    width:100%;
    display:flex;
    justify-content:space-between;
    padding:10px;
    align-items:center;

`
const HeaderLeft = styled.div`
    letter-spacing:5px;
`
const HeaderRight = styled.div`
    display:flex;
    align-items:center;
`
const Right = styled.div`
    display:flex;
    align-items:center;
`