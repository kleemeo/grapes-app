import Nav from '../components/Nav'
import { Link } from 'react-router-dom';
import DashTable from '../components/DashTable';
import classes from '../App.module.scss';

function EmployerDashboard() {
  return (
    <>
      <Nav currentView="employer" />
      <main className={`${classes.cardFull} ${classes.topShadow}`}>
        <section className={classes.companyInfo}>
          <h3>Your Company Name</h3>
          <div className={classes.flexHorizontal}>
            <h4>Your Postings</h4>
            <Link to="/form"><button className={classes.navBtn}>Post a New Role</button></Link>
          </div>
        </section>
        <section className={classes.postings}>
          <div className={classes.wrapper}>
          </div>
          <DashTable className={classes.table} />
        </section>
      </main>
    </>
  )
}

export default EmployerDashboard;