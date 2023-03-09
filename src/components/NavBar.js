import { Link, useMatch, useResolvedPath } from "react-router-dom"

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
      PJ's Sports
      </Link>
      <ul>
        <CustomLink to="/pricing">All Sports</CustomLink>
        <CustomLink to="/about"></CustomLink>
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