import Navbar from "./NavBar"
import MlbHighlights from "../pages/MlbHighlights"
import UpComingPeacockEvents from "../pages/UpComingPeacockEvents"
import AllSports from "../pages/AllSports"
import Home from "../pages/Home"
import { Route, Routes } from "react-router-dom"
import MlbGames from "../pages/MlbGames"
import HockeyLiveScores from "../pages/HockeyLiveScores"
import BasketBallLiveScores from "../pages/BasketballLiveScores"


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/allsports" element={<AllSports />} />
          <Route path="/peacock" element={<UpComingPeacockEvents />} />
          <Route path="/MlbHighlights" element={<MlbHighlights />} />
          <Route path="/Mlbgames" element={<MlbGames />} />
          <Route path="/HockeyScores" element={<HockeyLiveScores />} />
          <Route path="/BasketBallScores" element={<BasketBallLiveScores />} />
        </Routes>
      </div>
    </>
  )
}

export default App