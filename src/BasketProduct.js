import React from 'react'
import styled from 'styled-components'
import { useStateValue } from './StateProvider'
function BasketProduct({id,image,name,price}) {

    const [{basket},dispatch] = useStateValue();


    const removeItems = () =>{
        dispatch({
            type:"REMOVE_FROM_BASKKET",
            id:id,
        })
    }

    return (
        <Container>
            <ProductLeft>
                <Image src={image}/>
            </ProductLeft>
            <ProductRight>
                <Name>
                 {name}
                </Name>
                <Rating>★★★★★
                </Rating>
                <Price>
                {price} VND
                </Price>
                <ActionOption>
                    <Button>-
                    </Button>
                    <Button>+
                    </Button>
                    <RemoveButton onClick={removeItems}>
                        Remove
                    </RemoveButton>
                </ActionOption>
            </ProductRight>
        </Container>
    )
}

export default BasketProduct

const Container = styled.div`
    display:flex;
`
const ProductLeft = styled.div``
const Image = styled.img`
    max-height:200px;
`
const ProductRight = styled.div``
const Name = styled.div`
    margin-bottom:4px;
`
const Rating = styled.div`
    margin-bottom:4px;
`
const Price = styled.div`
    margin-bottom:4px;  
`
const ActionOption = styled.div`
    display:flex;
    align-items:center;
`
const Button = styled.div`
    background-color:gray;
    height:20px;
    width:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:2px;
    border:1px solid black;
    color:white;
`
const RemoveButton = styled.div`
    height:20px;
    width:65px;
    background-color:gray;
    color:white;
    font-size:small;
    display:flex;
    justify-content:center;
    align-items:center;
    border:1px solid black;
    margin:2px;
`

