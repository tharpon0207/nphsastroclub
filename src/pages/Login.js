import '../App.css';
import NavBar from '../NavBar';
import { useState } from 'react';
import Input from '../formComponents/Input';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const Login = () => {
    const [formData, setFormData] = useState(
        {
            email: '',
            password: '',
        }
    );

    const { pathname } = useLocation;
    
    useEffect(() => {
        window.scrollTo({ top: 0});
      }, [pathname]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setPage(2);
    }

    const [page, setPage] = useState(1);
    
    return(
        <form onSubmit={handleSubmit}>
                <NavBar />
                { page === 1 ?
                (
                   <>
                    <p className='welcome'>Welcome Back!</p>
                    <fieldset>
                        <Input title={"School Email"} sample={"astronomy@stu.npenn.org"} name={"email"} type={"email"} value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                        <Input title={"Password"} sample={"abcd1234"} name={"password"} type={"password"} value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}/>
                        <div className='submitDiv'>
                            <input type="submit" value={"submit"} className="submitButton" disabled={[formData.email, formData.password].some(field => field === '')} />
                        </div>
                        <p className='question'>Do not have an acoount? Create one <span><a href="/#/form" className='at'>here!</a></span></p>
                    </fieldset>
                    </>
                ) : (
                    <fieldset>
                        <div>
                            <p className='loggedin'>
                                Successfuly Logged In!
                            </p>
                            <p className='contacttext'>
                                <span className='hereLink'><a href='/#/blog' className='at'>Enjoy the blog!</a></span>
                            </p>
                        </div>
                    </fieldset>
                )
            }
        </form>
    )
}

export default Login;