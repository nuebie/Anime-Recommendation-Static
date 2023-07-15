import React, { useState } from "react";
import SearchAnime from "./searchbar";
import AnimeCard from "./animecard";

export default function WatchedAnime({scrollToRecommendations}){
    const animeTitles = ["One Piece", "Naruto", "Dragon Ball Z", "Bleach", "Attack on Titan", "My Hero Academia", "Hunter x Hunter", "Demon Slayer", "One Punch Man", "Fairy Tail"];
    const stars = ["★","★","★","★","★"];
    const [selectedAnime, setSelectedAnime] = useState([
        {title: "One Piece", rating: 1, isSelected: true}, {title: "Naruto", rating: 1, isSelected: true}, {title: "Dragon Ball Z", rating: 1, isSelected: true}, {title: "Bleach", rating: 1, isSelected: true},
        {title: "Attack on Titan", rating: 1, isSelected: true}, {title: "My Hero Academia", rating: 1, isSelected: true}, {title: "Hunter x Hunter", rating: 1, isSelected: true}, {title: "Demon Slayer", rating: 1, isSelected: true},
        {title: "One Punch Man", rating: 1, isSelected: true}, {title: "Fairy Tail", rating: 1, isSelected: true}
    ]);

    function handlerating(index, newRating){
        let newObj = selectedAnime[index];
        newObj = {...newObj, rating: newRating};
        let newSelectedAnime = [...selectedAnime];
        newSelectedAnime[index] = newObj;
        console.log(newSelectedAnime);
        setSelectedAnime(newSelectedAnime);
        //alert(index+" "+newRating)
    }

    function handleremove(index){
        let newArr = [...selectedAnime];
        newArr.splice(index,1);
        setSelectedAnime(newArr);
    }
    
    return(
        <div className="watchedAnimeSection">
            <div className="watchedAnimeContainer">
                <SearchAnime/>
                <div className="selectedAnimeContainer">
                    <div className="selectedAnime">
                        <h1>Watched Anime:</h1>
                        <div className="selectedAnimeList">
                            <div className="selectedAnimeListWrapper">
                            {selectedAnime.map((obj,objIndex) => (
                                <AnimeCard title={obj.title} rating={obj.rating} index={objIndex} handlerating={handlerating} handleremove={()=>{handleremove(objIndex)}}/>
                            ))}
                            </div>
                        </div>
                        <button className="getRecommendationButton" onClick={scrollToRecommendations}>Get Recommendations</button>
                    </div>
                </div>
            </div>
        </div>
    )
}