import '../App.css';
import NavBar from '../NavBar';
import DoubleInput from '../formComponents/DoubleInput';
import Input from '../formComponents/Input';
import { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState(
        {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirm: ''
        }
    );

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
                    <p className='welcome'>Make an Account!</p>
                    <fieldset>
                        <DoubleInput value1={formData.firstName} value2={formData.lastName} onChange1={(e) => setFormData({...formData, firstName: e.target.value})} onChange2={(e) => setFormData({...formData, lastName: e.target.value})}/>
                        <Input title={"School Email"} sample={"astronomy@stu.npenn.org"} name={"email"} type={"email"} value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                        <Input title={"Password"} sample={"abcd1234"} name={"password"} type={"password"} value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}/>
                        <Input title={"Confirm Password"} sample={"abcd1234"} name={"password"} type={"password"} value={formData.confirm} onChange={(e) => setFormData({...formData, confirm: e.target.value})}/>
                        <div className='submitDiv'>
                            <input type="submit" value={"submit"} className="submitButton" disabled={[formData.firstName, formData.lastName, formData.email, formData.password, formData.confirm].some(field => field === '') || formData.password !== formData.confirm} />
                        </div>
                        {([formData.firstName, formData.lastName, formData.email, formData.password, formData.confirm].some(field => field === '') || formData.password !== formData.confirm) &&
                            <div><p className='question' style={{color: "lightgray"}}>NOTE: The submit button is disabled because either all fields are not answered or the passwords do not match.</p></div>
                        }
                        
                        <p className='question'>Already have an account? log in <span><a href="/#/login" className='at'>here!</a></span></p>
                    </fieldset>
                    </>
                ) : (
                    <fieldset>
                        <div>
                            <p className='thankyou'>
                                Thank you!
                            </p>
                            <p className='contacttext'>
                                For questions or change in account information, contact <span style={{color: 'cyan'}}>arponth@stu.npenn.org</span>
                                <br></br>
                                <span className='hereLink'><a href='/#/blog' className='at'>Enjoy the blog!</a></span>
                            </p>
                        </div>
                    </fieldset>
                )
            }
        </form>
    )
}

export default Form;