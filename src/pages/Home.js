import { useState } from "react";
import EmployerLogin from "../components/EmployerLogin";
import SeekerLogin from "../components/SeekerLogin";

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
    <>
      {showLanding && <Landing handleEmployerClick={handleEmployerClick} handleSeekerClick={handleSeekerClick} />}
      {isEmployer && <EmployerLogin />}
      {isSeeker && <SeekerLogin />}
    </>
  )
}

function Landing(props) {
  return (
    <>
      <h1>Grapes</h1>
      <p>Please select your role</p>
      <button onClick={props.handleEmployerClick}>Employer</button>
      <button onClick={props.handleSeekerClick}>Seeker</button>
    </>
  )
}

export default Home;