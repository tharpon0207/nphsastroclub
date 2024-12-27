import '../App.css';

export default function Withdrawal({label, size, onChange, value}){
    return(
        <div style={{textAlign: "center"}}>
            <div style={{textAlign: 'center'}} className='dropdownLabel'>
                <p className='dropdownLabel' style={{fontSize: {size}}}>{label}</p>
            </div>
            <div style={{textAlign: 'center'}}>
                <select id='withdrawal' name='withdrawal' className='dropdown' value={value} onChange={onChange} required>
                    <option value={''}>select</option>
                    <option value={10}> 10 </option>
                    <option value={11}> 11 </option>
                    <option value={12}> 12 </option>
                    <option value={0}>other</option>
                </select>
            </div>  
        </div>)
}