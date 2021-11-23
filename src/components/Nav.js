import { Link, useNavigate } from "react-router-dom";
import classes from '../App.module.scss';

function Nav(props) {
  return (
    <nav className={classes.nav}>
      <ul className={classes.navList}>
        <h1>Grapes</h1>
        <ul className={classes.navBtnList}>
          <li>
            {props.currentView === 'employer' && <Link to="/board">Board</Link>}
            {props.currentView === 'seeker' && null}
            {props.currentView === 'form' && <Link to="/dashboard">Back</Link>}
          </li>
          <li><Link to="/">Home</Link></li>
        </ul>
      </ul>
    </nav>
  )
}

export default Nav;