import React, { useState } from 'react'
import styled from 'styled-components'
import { useStateValue } from './StateProvider'
function Product({id, name, price, image}) {
    const [readmore,setReadmore] = useState(false);
    const [{basket}, dispatch] = useStateValue();
    console.log(basket);
    const addToBasket = () =>{
        dispatch(
            {type:"ADD_TO_BASKET",
             item: {
                id:id,
                name:name,
                image:image,
                price:price,
             },
            }    
        )
    }

    return (
        <Container>
            <Info>
                <p>{readmore ? 'name' : name.substring(0,50) }...</p>
            </Info>
            <Rating>★★★★★</Rating>
            <Price>
                <h3>{price} VND</h3>
            </Price>
            <Image src={image}/>
            <AddButton onClick={addToBasket}>
                Add To Basket
            </AddButton>
        </Container>
    )
}

export default Product

const Container = styled.div`
    background-color:white;
    z-index:100;
    flex:1;
    margin:10px;
    padding:20px;
    max-height:350px;
    display:flex;
    flex-direction:column;
    box-shadow:0 2px 2px rgba(0,0,0,.5);
`
const Info = styled.div``
const Price = styled.div``
const Image = styled.img`
    max-height:150px;
    object-fit:contain;
    margin-top:5px;
`
const AddButton =styled.div`
    background-color:gray;
    width:100px;
    height:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:white;
    border:2px solid black;
    font-size:smaller;
`
const Rating = styled.div``