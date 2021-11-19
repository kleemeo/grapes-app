import { Link } from "react-router-dom";

function EmployerLogin() {
  return (
    <>
      <h1>Employer</h1>
      <p>enter your code</p>
      <label htmlFor="employerCode"></label>
      <input type="text" id="employerCode" />
      <Link to="/dashboard"><button>Enter</button></Link>
    </>
  )
}

export default EmployerLogin;