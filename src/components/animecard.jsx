import React from "react";

export default function AnimeCard({title,rating,index,handlerating, handleremove}){
    return(
        <div className="animeTitleCard">
            <p>{title}</p>
            <div className="ratingContainer">
                {[1,2,3,4,5].map((ratingValue,ratingIndex) => (
                    <span className={`fa fa-star ${rating >= (ratingIndex+1)? 'checked':''}`} onClick={()=>{handlerating(index,ratingValue)}}></span>
                ))}
            </div>
            <span className="removeButton" onClick={handleremove}>x</span>
        </div>
    )
}