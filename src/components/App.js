import Navbar from "./NavBar"
import UpComingPeacockEvents from "../pages/UpComingPeacockEvents"
import AllSports from "../pages/AllSports"
import Home from "../pages/Home"
import { Route, Routes } from "react-router-dom"
import MlbGames from "../pages/MlbGames"
import HockeyLiveScores from "../pages/HockeyLiveScores"
import BasketBallLiveScores from "../pages/BasketballLiveScores"
import LatestHighlights from "../pages/LatestHighLights"
import MlbHighlights from "../pages/MlbHighlights"


function App() {
  return (
    <>
      <Navbar />
      <div className="container is-mobile">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/allsports" element={<AllSports />} />
          <Route path="/peacock" element={<UpComingPeacockEvents />} />
          <Route path="/Mlbgames" element={<MlbGames />} />
          <Route path="/HockeyScores" element={<HockeyLiveScores />} />
          <Route path="/BasketBallScores" element={<BasketBallLiveScores />} />
          <Route path="/latestHighlights" element={<LatestHighlights/>} />
          <Route path="/MlbHighLights" element={<MlbHighlights />} />
        </Routes>
      </div>
    </>
  )
}

export default App