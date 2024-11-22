import '../App.css';
import NavBar from "../NavBar";
import ImgBanner from '../ImgBanner';
import AboutUs from '../AboutUs';
import Cabinet from '../Cabinet';
import Events from '../Events';
import Announcements from '../Announcements';

function Home() {
  return (
    <div className="App" id='Home'>
        <NavBar />
        <p className='welcome'>Welcome to the North Penn Astronomy Club!</p>
        <ImgBanner />
        <AboutUs />
        <div id='News'>
          <Announcements />
        </div>
        <div className='Cabinet'>
          <Cabinet/>
        </div>
        <div id='Events'>
          <Events />
        </div>
    </div>
  );
}

export default Home;
