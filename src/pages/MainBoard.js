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
    const dbRef = firebase.database().ref('job-data');
    let dbData;
    dbRef.on('value', snapshot => {
      const data = snapshot.val().reverse();
      dbData = data;
      dbData.forEach(job => {
        job.description = job.description.slice(0, 500)
      })
      setJobData(dbData)
      setIsLoading(false);
    })

  }, [isLoading])

  return (
    <>
      <Nav currentView="seeker" />
      <main className={`${classes.cardFull} ${classes.topShadow} ${classes.jobBoard}`}>
        {(isLoading) && <Loading />}
        {jobData.map((job) => {
          return (
            // renter to JobCard with fetched date into props
            <JobCard
              key={job.id}
              title={job.title}
              companyName={job.company}
              location={job.place}
              description={job.description + '...'}
              url={(job.link) && job.link}
            />
          )
        })}
      </main>
    </>
  )
}

export default EmployerDashboard;