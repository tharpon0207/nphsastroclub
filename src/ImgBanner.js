import './App.css';
import placeholder1 from './Images/placeholder1.jpg';
import placeholder2 from './Images/placeholder2.jpg';
import placeholder3 from "./Images/placeholder3.jpeg";
import {useState} from 'react';

const ImgBanner = () => {
    const imgs = [
        {id:0,value:placeholder1},
        {id:1,value:placeholder2},
        {id:2,value:placeholder3}
    ];

    const [index, setIndex] = useState(0);

    function changeIndexNext(){
        if(index < imgs.length-1){
            setIndex(index+1);
        }
    }

    function changeIndexPrev(){
        if(index !== 0){
            setIndex(index-1);
        }
    }


    
    return(
        <div className="imgBanner" style={{backgroundImage: `url(${imgs[index].value})`}}>
            <div className="imgNavContainer">
                <button className="imgNavButton" onClick={changeIndexPrev} disabled={index===0}>Prev</button>
                <button className="imgNavButton" onClick={changeIndexNext} disabled={index===imgs.length-1}>Next</button>
            </div>
        </div>
    )
}

export default ImgBanner;