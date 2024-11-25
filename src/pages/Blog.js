import '../App.css';
import NavBar from '../NavBar';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const Blog = () => {
    const { pathname } = useLocation;
    
    useEffect(() => {
        window.scrollTo({ top: 0});
      }, [pathname]);
    
    return(
        <div>
            <NavBar />
            <p style={{color: "white"}}>BLOG PAGE IS NOT CREATED YET... PLEASE VISIT LATER</p>
        </div>
    )
}

export default Blog;