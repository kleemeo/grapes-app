import Nav from "../components/Nav";
import classes from '../App.module.scss';
import JobCard from "../components/JobCard";
import { useEffect, useState } from "react";
import firebase from '../firebase';
import Loading from "../components/Loading";

function EmployerDashboard() {

  const [jobData, setJobData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // fetch data from firebase to populate job board

    // const dbRef = firebase.database().ref('job-data');
    const dbRef2 = firebase.database().ref('indeed-scrape2');
    let dbData;

    dbRef2.on('value', snapshot => {
      const data = snapshot.val();
      dbData = data;
      // dbData.forEach(job => {
      //   job.description = job.description.slice(0, 500)
      // })
      setJobData(dbData)
      setIsLoading(false);
    })

  }, [isLoading])

  return (
    <>
      <Nav currentView="seeker" />
      <header>
        <h2>Currently queries for 'front end remote jobs' from ca.indeed.com</h2>
        <h3>Server will attempt to update daily</h3>
      </header>
      <main className={`${classes.jobBoard}`}>
        {(isLoading) && <Loading />}
        {jobData.map((job, index) => {
          return (
            // renter to JobCard with fetched date into props
            <JobCard
              index={index}
              id={job.id}
              key={job.id}
              title={job.title}
              companyName={job.company}
              // location={job.place}
              location={job.location}
              description={job.summary}
              // description={job.description + '...'}
              url={(job.url) && job.url}
              likes={job.likes}
            />
          )
        })}
      </main>
      <footer className={classes.footerBoard}><a href="https://junocollege.com/">Created at Juno College</a></footer>
    </>
  )
}

export default EmployerDashboard;