import '../App.css';
import { Link as RouterLink } from 'react-router-dom';

const Log = () => {
    return(
        <div className='patchNotes'>
            <p className='contactDivTitle'>Patch Notes</p>
            <RouterLink to={"/#Home"} className='logslink'>Return back to home page here</RouterLink>
            <p className='contactDivText'>v1.0</p>
        
            <p className='contactDivText'><span className='contactDivInfo'>11/22/2024</span></p>
            <p className='contactDivText'>
            <ol>
            <li style={{fontSize: '1.5rem', textAlign:'left'}}>Released website as a subdomain of kaabatech.com</li>    
            </ol>
            </p>

            <p className='contactDivText'><span className='contactDivInfo'>11/23/2024</span></p>
            <p className='contactDivText'>
            <ol>
            <li style={{fontSize: '1.5rem', textAlign:'left'}}>Fixed CSS coding for smaller screen compatibility (ex. cabinet, form, announcements)</li>    
            <li style={{fontSize: '1.5rem', textAlign:'left'}}>Added "Contact Us" portion in home page</li>  
            <li style={{fontSize: '1.5rem', textAlign:'left'}}>Created PATCH NOTES page</li>  
            </ol>
            </p>

            <p className='contactDivText'><span className='contactDivInfo'>11/24/2024</span></p>
            <p className='contactDivText'>
            <ol>
            <li style={{fontSize: '1.5rem', textAlign:'left'}}>Removed Sign Up Nav Bar, added Contact Us Nav Bar</li>     
            <li style={{fontSize: '1.5rem', textAlign:'left'}}>Changed favicon</li>     
            <li style={{fontSize: '1.5rem', textAlign:'left'}}>Automatically scrolls to top when entering a page</li>     
            </ol>
            </p>
        
        </div>
    )
}

export default Log;