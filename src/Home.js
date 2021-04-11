import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import db from './firebase';
import Product from './Product'
function Home() {

    const [macbooks,setMacbooks] = useState([]);
    const [dells,setDells] = useState([]);

    useEffect(() => {
        db.collection("macbooks").onSnapshot(snapshot => {
            setMacbooks(snapshot.docs.map(doc => ({
                id:doc.id,
                data:doc.data()
            })))
        })
    }, [])
    useEffect(() => {
        db.collection("dells").onSnapshot(snapshot => {
            setDells(snapshot.docs.map(doc => ({
                id:doc.id,
                data:doc.data()
            })))
        })
    }, [])
    return (
        <Container>
            <Banner>
            </Banner>
            <Content>
                {
                    macbooks.map(({id,data}) =>(
                        <Product key={id} name={data.name} price={data.price} image={data.image}/>
                    ))
                }
                {
                    dells.map(({id,data}) =>(
                        <Product key={id} name={data.name} price={data.price} image={data.image}/>
                    )) 
                }
            </Content>
        </Container>
    )
}

export default Home

const Container = styled.div`
    max-width:1150px;
    margin-left:auto;
    margin-right:auto;
`
const Banner= styled.div`
    background-image: url("https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_2x._CB432469748_.jpg");
    min-height:600px;
    background-size:cover;
    background-position:left;
`
const Content = styled.div`
    margin-top:-350px;
    display:flex;
    flex-wrap:wrap;
`

