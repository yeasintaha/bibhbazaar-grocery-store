import React from 'react'
import {Nav,NavLogo,NavbarContainer,MobileIcon,NavMenu,NavItem,NavLinks} from './NavbarElements';
import {FaBars} from 'react-icons/fa'

const Navbar = ()=> {
    return (
        <div>
          <Nav>
              <NavbarContainer>
                  <NavLogo to="/">
                      
                  </NavLogo>
                  <MobileIcon>
                      <FaBars/>
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to="about">
                              About
                          </NavLinks>
                      </NavItem>
                  </NavMenu>
              </NavbarContainer>
          </Nav>  
        </div>
    )
}

export default Navbar;
