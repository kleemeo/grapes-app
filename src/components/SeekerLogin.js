import { Link } from "react-router-dom";
import classes from '../App.module.scss';

function SeekerLogin() {
  return (
    <section className={classes.wrapperLogin}>
      <article className={classes['cardMed']}>
        <h1>Hello, Seeker</h1>
        <p>enter your code</p>
        <form action="">
          <label htmlFor="seekerCode"></label>
          <input type="text" id="seekerCode" maxLength="10" />
          <Link to="/board" disabled><button className={`${classes.btn}`}>Enter</button></Link>
          <Link className={classes.inlineBlock} to="/">Back</Link>
        </form>
      </article>
    </section>
  )
}

export default SeekerLogin;