import React, { useState } from "react";

export default function Note(){
    const [isread, setIsRead] = useState(false);

    function handleNote(){
        setIsRead(current => !current);
    }

    return(
        <div className="noteSection">
            <div className="noteContainer" style={{"display": isread? "none":"block"}}>
                <h1>Note:</h1>
                <p>
                    This is a static version of the web application. The backend functionalities have been disabled because it is hosted using GitHub Pages, which only supports static webpages. Dynamic elements have been replaced with placeholder text to give an illustration of how the application would look if the backend were operational.
                </p>
                <button onClick={handleNote}>Okay</button>
            </div>
        </div>
    )
}