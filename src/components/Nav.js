import { Link } from "react-router-dom";
import classes from '../App.module.scss';

function Nav(props) {
  return (
    <nav className={classes.nav}>
      <ul className={classes.navList}>
        <h1><Link to="/" className={classes.logo}>Grapes</Link></h1>
        <ul className={classes.navBtnList}>
          <li>
            {props.currentView === 'employer' && <Link to="/board">Board</Link>}
            {props.currentView === 'seeker' && <Link to="/dashboard">Employer? Login</Link>}
            {props.currentView === 'form' && <Link to="/dashboard">Back</Link>}
          </li>
          {/* <li><Link to="/">Home</Link></li> */}
        </ul>
      </ul>
    </nav>
  )
}

export default Nav;