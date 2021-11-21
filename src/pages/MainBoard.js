import Nav from "../components/Nav";
import classes from '../App.module.scss';
import JobCard from "../components/JobCard";

function EmployerDashboard() {
  return (
    <>
      <Nav currentView="seeker" />
      <main className={`${classes.cardFull} ${classes.topShadow} ${classes.jobBoard}`}>
        {/* <div className={classes.filterList}>
          <button className={classes.filterBtn}>Toronto, BC</button>
        </div> */}
        <JobCard
          title="Software Engineer"
          companyName="Google"
          location="Toronto, ON"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugit totam deleniti quidem nam, voluptatem repudiandae, sed amet dolorum quia rem voluptatum maiores magnam. Consectetur libero assumenda laudantium vel modi."
        />
      </main>
    </>
  )
}

export default EmployerDashboard;