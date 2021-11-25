import classes from '../App.module.scss';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <section className={classes.wrapperLogin}>
      <article className={classes['cardMed']}>
        <Landing />
      </article>
    </section>
  )
}

function Landing() {
  return (
    <>
      <h1>Grapes</h1>
      <p>Jobs for developers</p>
      <Link to="board"><button className={classes.btn}>Enter</button></Link>
      <Link to="employer">Employer? Login</Link>
    </>
  )
}

export default Home;