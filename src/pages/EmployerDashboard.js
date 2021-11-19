import Nav from '../components/Nav'
import { Link } from 'react-router-dom';

function EmployerDashboard() {
  return (
    <>
      <Nav currentView="employer" />
      <section className="compantInfo">
        <h4>Company Name</h4>
        <p>Location</p>
        <p>Employees</p>
      </section>
      <section className="postings">
        <div className="nav">
          <h4>Your Postings</h4>
          <Link to="/form"><button>Post a Job</button></Link>
        </div>
      </section>
    </>
  )
}

export default EmployerDashboard;