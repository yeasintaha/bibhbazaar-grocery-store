import React from 'react'
import ReactNavbar from "react-responsive-animate-navbar"


function React_Navbar() {
    return (
      <ReactNavbar
        color="rgb(25, 25, 25)"
        logo="logo_banner\logo.png"
        menu={[
          { name: "Home", to: "/" },
          { name: "About", to: "/grocery" },
          { name: "Services", to: "/all_products" },
          { name: "SignIn", to: "/sigin" },
        ]}
        
      />
    );
}

export default React_Navbar;
