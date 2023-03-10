import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { MdOutlineSportsFootball,MdSportsBaseball, MdOutlineSportsSoccer } from "react-icons/md"

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
      <MdOutlineSportsFootball /> <MdSportsBaseball/>PJ's Sports<MdOutlineSportsSoccer />
      </Link>
      <ul>
        <CustomLink to="/peacock">Peacock Sports</CustomLink>
        <CustomLink to="/allsports">Sports Details</CustomLink>
        <CustomLink to="/Mlbhighlights">MLB Highlights</CustomLink>
        <CustomLink to="/Mlbgames">MLB games</CustomLink>
        <CustomLink to="/Mlbteams">MLB Teams</CustomLink>
        <CustomLink to="/HockeyScores">Hockey</CustomLink>
        <CustomLink to="/BasketBallScores">BasketBall</CustomLink>
      </ul>
    </nav>
  )
} 

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Navbar;