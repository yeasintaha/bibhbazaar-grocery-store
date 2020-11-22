import styled from 'styled-components';
import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'


export const Nav = styled.nav`
    background: #000;
    height : 80px;
    display: flex;
    justify-content: center;
    align-items:center;
    font-size:1rem;
    position:sticky;
    top:0;
    z-index:100;

    @media screen and (max-width:960px){
        transition:0.7s all ease;
    }
`




export const NavbarContainer  = styled.div`
    display:flex;
    justify-content:space-between;
    height:80px;
    z-index: 1;
    width:100%;
    padding: 0 24px;
    max-width: 1100px;  

`
export const NavLogo = styled(LinkRouter)`
    color:#fff;
    justify-self:flex-start;
    cursor:pointer;
    font-size:1.5rem;
    align-items: center;
    vertical-align: center;
    font-weight: bold;
    text-decoration:none;
`
export const MobileIcon = styled.div`
    display:none;
    
    @media screen and (max-width:800px){
        display:block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%,60%);
        font-size:1.8rem;
        cursor:pointer;
        color: #fff;

    }

`
export const NavMenu = styled.ul`
    display:flex;
    align-items:center;
    list-style:none;
    text-align:center;
    margin-right:-15px;

    @media screen and (max-screen:800px){
        display:none;
    }

`

export const NavItem = styled.li`
    height: 80px;    
`

export const NavLinks = styled(LinkScroll)`
    color:#fff;
    align-items:center;
    text-decoration:none;
    padding:0;
    height:100%;
    cursor:pointer;

    &.active{
        border-bottom: 3px solid #01b
    }

`



