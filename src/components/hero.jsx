import React from "react";
import Navbar from "./navbar";
import heroimage from '../images/sampleimg.jpg'

export default function Hero({scrollToWatched}){
    return(
        <div className="heroSection">
            <div className="heroContainer">
                <Navbar/>
                <div className="heroMain">
                    <div className="left">
                        <h1>Looking For a New Anime to Watch?</h1>
                        <p>Rate a few animes that you have watched and we will recommend some animes that you might enjoy using Artificial Intelligence (AI).</p>
                        <button className="heroButton" id="trybutton" onClick={scrollToWatched}>Try Now</button>
                    </div>
                    <div className="right">
                        <img src={heroimage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}