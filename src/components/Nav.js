import { Link } from "react-router-dom";
import classes from '../App.module.scss';

// navigation component
function Nav(props) {
  return (
    <nav className={classes.nav}>
      <ul className={classes.navList}>
        <h1><Link to="/" className={classes.logo}>Grapes</Link></h1>
        <ul className={classes.navBtnList}>
          <li>
            {/* set what links to show depending on page */}
            {props.currentView === 'employer' && <Link to="/board">Board</Link>}
            {props.currentView === 'seeker' && <Link to="/employer">Employer? Login</Link>}
            {props.currentView === 'form' && <Link to="/dashboard">Back</Link>}
          </li>
        </ul>
      </ul>
    </nav>
  )
}

export default Nav;