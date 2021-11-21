import { useState } from "react";
import EmployerLogin from "../components/EmployerLogin";
import SeekerLogin from "../components/SeekerLogin";
import classes from '../App.module.scss';

function Home() {

  const [showLanding, setShowLanding] = useState(true);
  const [isEmployer, setIsEmployer] = useState(false);
  const [isSeeker, setIsSeeker] = useState(false);

  const handleEmployerClick = () => {
    setShowLanding(false);
    setIsEmployer(true);
  }

  const handleSeekerClick = () => {
    setShowLanding(false);
    setIsSeeker(true);
  }

  return (
    <section className={classes.wrapperLogin}>
      <article className={classes['cardMed']}>
        {showLanding && <Landing handleEmployerClick={handleEmployerClick} handleSeekerClick={handleSeekerClick} />}
        {isEmployer && <EmployerLogin />}
        {isSeeker && <SeekerLogin />}
      </article>
    </section>
  )
}

function Landing(props) {
  return (
    <>
      <h1 className={''}>Grapes</h1>
      <p>Select your role</p>
      <button className={classes.btn} onClick={props.handleEmployerClick}>Employer</button>
      <button className={classes.btn} onClick={props.handleSeekerClick}>Seeker</button>
    </>
  )
}

export default Home;