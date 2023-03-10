import MlbGames from "./MlbGames";
import "./Home.css"
import AllSports from "./AllSports";
import MlbHighlights from "./MlbHighlights";

function Home() {
  return (
    <>
  
  <div class="columns">
  <div class="column is-four-fifths"><MlbHighlights /></div>
  <div class="column"><marquee direction = "up"><MlbGames /></marquee></div>
  <div class="column">Auto</div>
</div>
    </>
  )}
export default Home;

<marquee direction = "up"><MlbGames /></marquee>