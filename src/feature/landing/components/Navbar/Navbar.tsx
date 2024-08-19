import { useState } from "react";
import NavBar from "../../../../components/Navbar/Navbar";
import { LogoIcon } from "../../../../assets/svg/LogoIcon";

export const NavBarMain = () => {

    const [isOpen, setIsOpen] = useState(true);

    return (
        <NavBar>
            <NavBar.Logo><LogoIcon/></NavBar.Logo>
            <NavBar.Hamburger onClick={() => setIsOpen(!isOpen)} />
            <NavBar.Menu isOpen={isOpen}>                
                <NavBar.MenuItem><a href="#feature">Feature</a></NavBar.MenuItem>
                <NavBar.MenuItem><a href="#pricing">Pricing</a></NavBar.MenuItem>
                <NavBar.MenuItem><a href="#testimonial">Testimonial</a></NavBar.MenuItem>
                <NavBar.MenuItem><a href="#help">Help</a></NavBar.MenuItem>
                <NavBar.MenuItem><a href="#singin">Sing in</a></NavBar.MenuItem>
                <NavBar.MenuItem><a href="#singup">Sing up</a></NavBar.MenuItem>
            </NavBar.Menu>
        </NavBar>
    )
}