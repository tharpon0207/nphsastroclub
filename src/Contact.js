import './App.css';
import { Link as RouterLink } from 'react-router-dom';

const Contact = () => {
    return(
        <div className='contactDiv'>
            <p className='contactDivTitle'>Contact Us / Social Media</p>
            <p className='contactDivText'>Contact us for any questions or suggestions:</p>
            <p className='contactDivText'>Email: <span className='contactDivInfo'><a href='mailto:arponth@stu.npenn.org' target='_blank' rel='noreferrer' className='at'>arponth@stu.npenn.org</a></span></p>
            <p className='contactDivText'>Social Media:</p>
            <p className='contactDivText'>Instagram: <span className='contactDivInfo'><a href='https://www.instagram.com/nphsastronomyclub/' target='_blank' rel='noreferrer' className='at'>nphsastronomyclub</a></span></p>
            <p className='contactDivText'>Patch Notes: <span className='contactDivInfo'><RouterLink to={"/patchnotes"} className='at'>Here</RouterLink></span></p>
        </div>
    )
}

export default Contact;