import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { MdOutlineSportsFootball,MdSportsBaseball, MdOutlineSportsSoccer } from "react-icons/md"
import Logo from "../../src/Photos/PeejHead.PNG"

function Navbar() {
  return (
<nav class="navbar is-primary " role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <div class="site-title">
      <p><CustomLink to="https://www.youtube.com/watch?v=BaFU8Q7lr0k&ab_channel=PjPerry"><img src={Logo} width="50" height="100"></img></CustomLink></p>
    </div>
    <div class="site-title">
      <p><MdOutlineSportsFootball /> <MdSportsBaseball/>PJ's Sports<MdOutlineSportsSoccer /></p>
    </div>
    <div class="site-title">
          <p><CustomLink to="https://www.youtube.com/watch?v=BaFU8Q7lr0k&ab_channel=PjPerry"><img src={Logo} width="50" height="100"></img></CustomLink></p>
        </div>
  </div>
  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        <CustomLink to="/">Home</CustomLink>
      </a>
      <a class="navbar-item">
        <CustomLink to="/upcoming_events">Upcoming events</CustomLink>
      </a>
      <a class="navbar-item">
        <CustomLink to="/allsports">Sports Details</CustomLink>
      </a>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Live scores
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item">
          <CustomLink to="/Mlbgames">MLB</CustomLink>
          </a>
          <a class="navbar-item">
          <CustomLink to="/HockeyScores">Hockey</CustomLink>
          </a>
          <a class="navbar-item ">
          <CustomLink to="/BasketBallScores">Basketball</CustomLink>
          </a>
        </div>
      </div>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
          Sports Highlights
          </a>
          <div class="navbar-dropdown">
            <a class="navbar-item ">
            <CustomLink to="/latestHighlights">From around the world</CustomLink>
            </a>
            <a class="navbar-item">
            <CustomLink to="/MlbHighLights">MLB</CustomLink>
            </a>
          </div>
        </div>
    </div>
  </div>
</nav>
  )
} 

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <div className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  )
}

export default Navbar;