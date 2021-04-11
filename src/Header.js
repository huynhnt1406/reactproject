import React, {useState} from 'react'
import styled from 'styled-components'
import PersonPinIcon from '@material-ui/icons/PersonPin';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import PageviewIcon from '@material-ui/icons/Pageview';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import BannerOption from './BannerOption';
import { useStateValue } from './StateProvider';
function Header() {

    const [{basket}, dispatch] = useStateValue();
    const [sidebar,setSidebar] = useState(true);
    return (
        <Container>
            <BannerButton onClick={() => setSidebar(!sidebar)}>
                ☰ 
            </BannerButton>
            <BannerSelect>
                {sidebar ? <BannerOption/> : "" }
            </BannerSelect>
            <HeaderIconLogo>
                <Link to="/">
                    <ChildFriendlyIcon/>
                    <h3>myShop</h3>
                </Link>
            </HeaderIconLogo>
            <HeaderLocation>
                <Link to="/personalize" title="your account">
                    <PersonPinIcon/>
                </Link>
                <HeaderOption>
                    <OptionLineOne>Hello,Huynh</OptionLineOne>
                    <OptionLineTwo>Set Location</OptionLineTwo>
                </HeaderOption>
            </HeaderLocation>
            <HeaderSearch>
                <HeaderSearchInput>
                </HeaderSearchInput>
                <SearchIcon>
                    <PageviewIcon/>
                </SearchIcon>
            </HeaderSearch>
            <HeaderShoppingCart>
                <Link to="/cart">
                    <ShoppingBasketIcon/>
                    <CartCount>{basket.length}</CartCount>
                </Link>
            </HeaderShoppingCart>
        </Container>
    )
}

export default Header

const Container = styled.div`
    height:40px;
    background-color:black;
    color:white;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:10px;
    position:relative;
`
const HeaderIconLogo = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    h3{
        padding-left:10px;
        letter-spacing:5px;
    }
    border-right:1px solid white;
    a{
        display:flex;
        text-decoration:none;
        color:white;
    }
`
const HeaderLocation = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    a{
        color:white;
    }
`
const HeaderOption = styled.div`
    padding-left:10px;
`

const OptionLineOne = styled.div`
    font-size:smaller;
`
const OptionLineTwo = styled.div`
    font-weight:600;
`   
const HeaderSearch = styled.div`
    display:flex;
    align-items:center;
    flex:1;
    margin-left:10px;
    margin-right:10px;
`
const HeaderSearchInput = styled.input`
    flex:1;
    height:27px;
    border:none;
    outline:none;
`

const HeaderShoppingCart = styled.div`
    display:flex;
    align-items:center;
    a{
        display:flex;
        color:white;
        text-decoration:none;
        align-items:center;
    }
`
const CartCount = styled.div`
    padding-left:10px;
`
const SearchIcon = styled.div`
    background-color:#f39c12;
    padding:1px;
`
const BannerButton = styled.div`
    box-shadow: 0px 2px 2px rgba(0,0,0,.5);
    cursor:pointer;
    font-size:23px;
`
const BannerSelect = styled.div`
`

