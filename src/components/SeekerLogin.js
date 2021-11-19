import { Link } from "react-router-dom";

function SeekerLogin() {
  return (
    <>
      <h1>Seeker</h1>
      <p>enter your code</p>
      <label htmlFor="seekerCode"></label>
      <input type="text" id="seekerCode" />
      <Link to="/board"><button>Enter</button></Link>
    </>
  )
}

export default SeekerLogin;