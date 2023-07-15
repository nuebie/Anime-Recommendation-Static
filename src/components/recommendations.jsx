import React, {useContext} from "react";
import AnimeRecomCard from "./animerecomcard";
import Loader from "./loader";
import { context } from "../App";

export default function Recommendations(){
    const animeRecommendations = ["Fullmetal Alchemist: Brotherhood", "Black Clover", "Yu Yu Hakusho", "Haikyuu!!", "Sword Art Online", "JoJo's Bizarre Adventure", "Tokyo Ghoul", "The Seven Deadly Sins", "Gintama", "Assassination Classroom"];
    const {isLoading} = useContext(context);
    return(
        <div className="recommendationSection">
            <div className="recommendationcontainer">
                <div className="recommendationList">
                    <h1>Recommendations</h1>
                    <div className="recommendationListInner">
                        <div className={`animeRecommendationWrapper ${isLoading === 1? "currLoading":''} ${isLoading === 2? "finLoading":''}`}>
                            {isLoading === 1 && <Loader/>}
                            {isLoading === 2 && animeRecommendations.map(title=> (
                                <AnimeRecomCard title={title}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}