import MlbGames from "./MlbGames";
import "./Home.css"
import AllSports from "./AllSports";
import MlbHighlights from "./MlbHighlights";
import HockeyLiveScores from "./HockeyLiveScores";
import BasketBallLiveScores from "./BasketballLiveScores";
import LatestHighlights from "../components/LatestHighLights";



function Home() {
  return (
    <>
      <div class="columns">
        <div class="column is-one-fifth"><HockeyLiveScores /></div>
        <div class="column"><BasketBallLiveScores /></div>
          <div class="column">
            <h3>Mlb game Scores today</h3>
            <p class="moving-text"> <MlbGames /></p>
          </div>
      </div>
    </>
  )}
export default Home;

<marquee direction = "up"><MlbGames /></marquee>