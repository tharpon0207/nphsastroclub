const DoubleInput = ({onChange1, onChange2, value1, value2}) => {
    return(
        <div>
            <div className="doubleInputContainer">
                <div className="miniInputContainer">
                    <label className="miniInputTitle" for="fname">First Name</label><br />
                    <input className="miniInput" type="text" placeholder="First Name" id="fname" name="fname" value={value1} onChange={onChange1}></input>
                </div>
                <div className="miniInputContainer">
                    <label className="miniInputTitle" for="lname" style={{textAlign: "left"}}>Last Name</label><br />
                    <input className="miniInput" type="text" placeholder="Last Name" id="lname" name="lname" value={value2} onChange={onChange2}></input>
                </div>
            </div>
        </div>
    )
}

export default DoubleInput;