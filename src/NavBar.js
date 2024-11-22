import "./App.css";
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();
    return(
    <div className="navBar">
        {
            location.pathname === "/" ?
                (<ScrollLink to='Home' spy={true} smooth={true} offset={0} duration={600} className='navBarButton'>Home</ScrollLink>)
            :
            (<RouterLink to={"/#Events"} className='navBarButton'>Home</RouterLink>)
        }
        {
            location.pathname === "/" &&
            (
            <>
            <ScrollLink to='News' spy={true} smooth={true} offset={-150} duration={600} className='navBarButton'>News</ScrollLink>
            <ScrollLink to='Events' spy={true} smooth={true} offset={-70} duration={600} className='navBarButton'>Events</ScrollLink>
            <ScrollLink to='Cabinet' spy={true} smooth={true} offset={-120} duration={600} className='navBarButton'>Cabinet</ScrollLink>
            </>
            )
        }
        <a className="navBarButton" href="/#/form">Sign Up</a>
        <a className="navBarButton" href="/#/login">Log In</a>
        <a className="navBarButton" href="/#/blog">Blog</a>
    </div>
    )
}

export default NavBar;