import { Link } from "react-router-dom";
import classes from '../App.module.scss';

function Nav(props) {
  console.log(this)
  return (
    <nav className={classes.nav}>
      <ul className={classes.navList}>
        <h1>Grapes</h1>
        {props.currentView === 'employer' && <Link to="/board"><button className={classes.navBtn}>Board</button></Link>}
        {props.currentView === 'seeker' && <Link to="/">Back</Link>}
        {props.currentView === 'form'}
      </ul>
    </nav>
  )
}

export default Nav;