import EventsList from './exportLists/EventsList';

export default function Events(){
    const events = EventsList.map(ev => 
        <div key={ev.id}>
            <div className="eventContainer">
            <Event Month={ev.month} Day={ev.day} Start={ev.start} End={ev.end} Title={ev.title} Desc={ev.desc}/>
            </div>
        </div>
    );
    
    return(
        <div>
            <div className="eventsContainer">
                    <p className="eventsTitle">Events / Meetings</p>
                    <div className="eventsMiniContainer">
                        {events}
                    </div>
            </div>
        </div>
    )
}

const Event = ({Month, Day, Start, End, Title, Desc}) => {
    return(
       <div style={{display: 'flex'}}>
            <div className="eventDateTime">
                <text className="eventMonth">{Month}</text>
                <br />
                <text className="eventDay">{Day}</text>
                <br />
                <p className="eventTime">{Start} - {End}</p>
            </div>
            <div className="eventBody">
                <p className="eventHeader">{Title}</p>
                <p className="eventDesc">{Desc}</p>
            </div>
       </div>
    )
}