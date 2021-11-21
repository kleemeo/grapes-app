import Nav from "../components/Nav";
import classes from '../App.module.scss';
import JobCard from "../components/JobCard";
import { useEffect, useState } from "react";
import firebase from '../firebase';

// const getDataFromFb = () => {

//   const dbRef = firebase.database().ref('job-data');

//   let dbData;

//   dbRef.on('value', snapshot => {
//     const data = snapshot.val();
//     dbData = data;
//     dbData.forEach((job, index) => {
//       job.description = job.description.slice(0, 500)
//       console.log(job.description)
//     })
//   })


// }

function EmployerDashboard() {

  const [jobData, setJobData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    const dbRef = firebase.database().ref('job-data');

    let dbData;

    dbRef.on('value', snapshot => {
      const data = snapshot.val().reverse();
      dbData = data;
      dbData.forEach((job, index) => {
        job.description = job.description.slice(0, 500)
      })
      console.log(dbData)
      setJobData(dbData)
      setIsLoading(false);
    })

  }, [isLoading])

  return (
    <>
      <Nav currentView="seeker" />
      <main className={`${classes.cardFull} ${classes.topShadow} ${classes.jobBoard}`}>
        {(isLoading) && <h2>LOADING...</h2>}
        {jobData.map((job) => {
          return (
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