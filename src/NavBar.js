import "./App.css";
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { useState } from "react";

const NavBar = () => {
    const location = useLocation();
    const isDesktop = useMediaQuery({minWidth: 1000})
    const [selected, setSelected] = useState(false);
    const select = () => setSelected(!selected);

    return(
        <div className="navBar">
           {isDesktop ?
            <>
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
                <ScrollLink to='Contact' spy={true} smooth={true} offset={-120} duration={600} className='navBarButton'>Contact</ScrollLink>
                </>
                )
            }
            <a className="navBarButton" href="/#/login">Log In</a>
            <a className="navBarButton" href="/#/blog">Blog</a>
        </>    
        
        :
            <div className="menuDiv">
                <button className={selected ? "navBarButton-active" : 'navBarButton'} onClick={select} type="button"> Menu </button>
                {selected &&
                    <div className="menuDropDown">
                    {location.pathname === "/" ?
                    (<ScrollLink to='Home' spy={true} smooth={true} offset={0} duration={600} className='menuButton'>Home</ScrollLink>)
                    :
                    (<RouterLink to={"/#Events"} className='menuButton'>Home</RouterLink>)}
                    {location.pathname === "/" &&
                    (
                    <>
                    <ScrollLink to='News' spy={true} smooth={true} offset={-150} duration={600} className='menuButton'>News</ScrollLink>
                    <ScrollLink to='Events' spy={true} smooth={true} offset={-70} duration={600} className='menuButton'>Events</ScrollLink>
                    <ScrollLink to='Cabinet' spy={true} smooth={true} offset={-120} duration={600} className='menuButton'>Cabinet</ScrollLink>
                    <ScrollLink to='Contact' spy={true} smooth={true} offset={-120} duration={600} className='menuButton'>Contact</ScrollLink>
                    </>
                    )}
                    <a className="menuButton" href="/#/login">Log In</a>
                    <a className="menuButton" href="/#/blog">Blog</a>
                    </div>
                }
            </div>
        }
        </div>
    )
}

export default NavBar;