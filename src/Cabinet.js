import Members from "./exportLists/cabMembers";

const Cabinet = () => {
    return(
        <div>
            <div><p className="cabTitle">CLUB CABINET</p></div>
            <div className="cabinetContainer">
                {Members.map((member) => (
                    <Member name={member.name}  position={member.position} pfp={member.pfp} desc={member.desc} />
                ))}
            </div>
        </div>
    );
};

const Member = ({name, position, pfp, desc}) => {
    return(
        <div className="cabDiv">
            <div className="profile" style={{backgroundImage: `url(${pfp})`}}/>
            <div className="cabBody">
                <div className="cabName">{name}</div>
                <i className="cabPosition">{position}</i>
                <div className="cabDesc">{desc}</div>
            </div>
        </div>
    )
}

export default Cabinet;