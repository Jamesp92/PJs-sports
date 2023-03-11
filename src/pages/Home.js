import MlbGames from "./MlbGames";
import "./Home.css"
import HockeyLiveScores from "./HockeyLiveScores";
import BasketBallLiveScores from "./BasketballLiveScores";




function Home() {
  return (
    <>
      <div class="columns">
        <div class="column"><HockeyLiveScores /></div>
        <div class="column"><BasketBallLiveScores /></div>
          <div class="column">
            <p> <MlbGames /></p>
          </div>
        </div>    
    </>
  )}
export default Home;

<marquee direction = "up"><MlbGames /></marquee>