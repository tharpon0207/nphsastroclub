import '../App.css';

const Input = ({title, sample, name, type, value, onChange}) => {
    return(
        <div className='inputDiv'>
            <label className='inputTitle' for={name}>{title}</label><br />
            <input className='Input' type={type} placeholder={sample} id={name} name={name} value={value} onChange={onChange}/>
        </div>
    )
}

export default Input;