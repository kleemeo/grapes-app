import { Link } from "react-router-dom";
import classes from '../App.module.scss';

function SeekerLogin() {
  return (
    <>
      <h1>Hello, Seeker</h1>
      <p>enter your code</p>
      <form action="">
        <label htmlFor="seekerCode"></label>
        <input type="text" id="seekerCode" maxLength="10" />
        <Link to="/board"><button className={`${classes.btn}`}>Enter</button></Link>
      </form>
    </>
  )
}

export default SeekerLogin;