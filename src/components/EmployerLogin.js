import { Link } from "react-router-dom";
import classes from '../App.module.scss';

function EmployerLogin() {
  return (
    <>
      <h1>Hi, Employer</h1>
      <p>enter your code</p>
      <label htmlFor="employerCode"></label>
      <input type="text" id="employerCode" maxlength="10" />
      <Link to="/dashboard"><button className={`${classes.btn}`}>Enter</button></Link>
    </>
  )
}

export default EmployerLogin;