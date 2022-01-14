import classes from '../App.module.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Home() {
  return (
    <>
      <main>
        <section className={classes.wrapperLogin}>
          <article className={classes['cardMed']}>
            <Landing />
          </article>
        </section>
      </main>
    </>
  )
}

function Landing() {

  useEffect(() => {
    fetch("http://api.frontendeval.com/fake/crypto/usd")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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