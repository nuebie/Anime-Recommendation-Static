import Note from './components/note';
import Hero from './components/hero';
import WatchedAnime from './components/watchedanime';
import Recommendations from './components/recommendations';
import './App.css';
import { Element, scroller } from "react-scroll";

function App() {
  
  function scrollToWatched(){
    scroller.scrollTo("watched", {
      smooth: true,
    });
  }

  function scrollToRecommendations(){
    scroller.scrollTo("recommendations", {
      smooth: true,
    });
  }
  
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
