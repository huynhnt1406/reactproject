import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
function BannerOption() {
    return (
        <Container>
            <BannerOptionLine>
                <BannerHeadline>
                    Laptop products
                </BannerHeadline>
                <Link to="/" >Macbook</Link>
                <Link to="/" >Dell</Link>
                <Link to="/" >Hp</Link>
                <Link to="/" >Lenovo</Link>
                <Link to="/" >Asus</Link>
            </BannerOptionLine>
            <BannerOptionLine>
                <BannerHeadline>
                    Tablet products
                </BannerHeadline>
                <Link to="/" >Apple</Link>
                <Link to="/" >Samsung</Link>
                <Link to="/" >More brands...</Link>
            </BannerOptionLine>
            <BannerOptionLine>
                <BannerHeadline>
                    Phone products
                </BannerHeadline>
                <Link to="/" >Apple</Link>
                <Link to="/" >Samsung</Link>
                <Link to="/" >Asus</Link>
                <Link to="/" >Oppo</Link>
                <Link to="/" >XiaoMi</Link>
                <Link to="/" >More brands...</Link>
            </BannerOptionLine>
            <BannerOptionLine>
                <BannerHeadline>
                    Accesstories
                </BannerHeadline>
                <Link to="/" >Monitor</Link>
                <Link to="/" >Ram, CPU</Link>
                <Link to="/" >Cap Lighning, Type C</Link>
                <Link to="/" >Pin, Screen</Link>
                <Link to="/" >More...</Link>
            </BannerOptionLine>
        </Container>
    )
}

export default BannerOption

const Container = styled.div`
    z-index:300; 
    background:black;
    width:270px;   
    height:500px;
    overflow-y:scroll;
    position:absolute;
    top:60px;
    left:0;
`
const BannerOptionLine = styled.div`
    border-bottom:1px solid lightgray;
    padding-top:10px;
    padding-bottom:10px;
    z-index:100;  
    display:flex;
    padding-left:5vh;

    flex-direction:column;
    a{
        text-decoration:none;
        color:#f5f5f3;
        padding-left:20px;
        padding:5px;
        cursor:pointer;
        color:gray;
    }
    p{
        font-size:20px;
        font-weight:500;
        letter-spacing:3px;
    }
`
const BannerHeadline = styled.div`
    color:white;
    font-size:20px;
    letter-spacing:2px;
`
