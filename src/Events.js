import EventsList from './exportLists/EventsList';
import pastEvents from './exportLists/PastEvents'
import { useState } from 'react';

export default function Events(){
    const [current, setCurrent] = useState(true);
    const selectC = () => {
        setCurrent(true)
    };

    const selectF = () => {
        setCurrent(false)
    };
    
    const events = EventsList.map(ev => 
        <div key={ev.id}>
            <div className="eventContainer">
            <Event Month={ev.month} Day={ev.day} Start={ev.start} End={ev.end} Title={ev.title} Desc={ev.desc}/>
            </div>
        </div>
    );

    const oldEvents = pastEvents.map(ev => 
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
                        <div className='tabContainer'>
                        <button className={current ? "tabButton-active" : 'tabButton'} onClick={selectC}> Upcoming Events</button>
                        <button className={!current ? "tabButton-active" : 'tabButton'} onClick={selectF}> Past Events</button>
                        </div>
                        {current ? (<>{events}</>) : (<>{oldEvents}</>)}
                    </div>
            </div>
        </div>
    )
}

const Event = ({Month, Day, Start, End, Title, Desc}) => {
    return(
       <div className='event'>
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