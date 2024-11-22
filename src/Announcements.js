import announcementsList from "./exportLists/announcementsList"

const announcements = () => {
    return(
        <div>
            <p className='announcementsTitle'>Announcements / News Feed</p>
            <div className='announcementsDiv'>
                {announcementsList.map(an =>
                    <div key={an.id}>
                        <div className="announcement">
                            <div className="anTopDiv">
                                <div className="announcementIconContainer" />
                                <text className="anTitle">{an.title}</text>
                            </div>
                            <div className="anDate">
                                <i>{an.date}</i>
                            </div>
                            <div className="anBody">
                                {an.body}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default announcements;