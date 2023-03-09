import Navbar from "./NavBar"
import MlbHighlights from "../pages/MlbHighlights"
import UpComingPeacockEvents from "../pages/UpComingPeacockEvents"
import AllSports from "../pages/AllSports"
import Home from "../pages/Home"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/allsports" element={<AllSports />} />
          <Route path="/peacock" element={<UpComingPeacockEvents />} />
        </Routes>
      </div>
    </>
  )
}

export default App