import React, {createContext, useContext, useState} from 'react';
import Note from './components/note';
import Hero from './components/hero';
import WatchedAnime from './components/watchedanime';
import Recommendations from './components/recommendations';
import './App.css';
import { Element, scroller } from "react-scroll";

const context = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(0);
  
  function scrollToWatched(){
    scroller.scrollTo("watched", {
      smooth: true,
    });
  }

  function scrollToRecommendations(){
    setIsLoading(current => current===2? 1: current+1);
    setTimeout(() => {
      setIsLoading(current=> current+1)
    }, 3000);
    scroller.scrollTo("recommendations", {
      smooth: true,
    });
  }
  
  return (
    <div className="App">
      <context.Provider value={{isLoading,setIsLoading}}>
        <Note/>
        <Element name='hero'>
          <Hero scrollToWatched={scrollToWatched}/>
        </Element>
        <Element name='watched'>
          <WatchedAnime scrollToRecommendations={scrollToRecommendations}/>
        </Element>
        <Element name='recommendations'>
          <Recommendations/>
        </Element>
      </context.Provider>
    </div>
  );
}

export default App;
export {context};
