import React from "react";
import AnimeRecomCard from "./animerecomcard";

export default function Recommendations(){
    const animeRecommendations = ["Fullmetal Alchemist: Brotherhood", "Black Clover", "Yu Yu Hakusho", "Haikyuu!!", "Sword Art Online", "JoJo's Bizarre Adventure", "Tokyo Ghoul", "The Seven Deadly Sins", "Gintama", "Assassination Classroom"];

    return(
        <div className="recommendationSection">
            <div className="recommendationcontainer">
                <div className="recommendationList">
                    <h1>Recommendations</h1>
                    <div className="recommendationListInner">
                        <div className="animeRecommendationWrapper">
                            {animeRecommendations.map(title=> (
                                <AnimeRecomCard title={title}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}