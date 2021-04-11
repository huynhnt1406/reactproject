
import React from 'react'
import styled from 'styled-components'
import { useStateValue } from './StateProvider'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BasketProduct from './BasketProduct';
function CartItems() {

    const [{basket}, dispatch] = useStateValue()

    return (
        <Container>
            <CartHeader>
                <HeaderLeft>
                    Your Basket
                </HeaderLeft>
                <HeaderRight>
                    <ShoppingCartIcon/>
                    {basket.length}
                </HeaderRight>
            </CartHeader>
            <CartContent>
                {
                    basket.map(item  =>(
                        <BasketProduct
                            id = {item.id}
                            name={item.name}
                            price ={ item.price}
                            image ={item.image}
                        />
                    ))
                
                }
            </CartContent>
        </Container>
    )
}

export default CartItems

const Container = styled.div`
    display:flex;
    flex:0.7;
    background-color:white;
    border-right:1px solid gray;
    flex-direction:column;
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
    margin-right:20px;
`
const CartContent = styled.div`
    margin-top:10px;
    height:600px;
    overflow-y:scroll;
`
