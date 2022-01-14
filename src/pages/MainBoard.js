import Nav from "../components/Nav";
import classes from '../App.module.scss';
import JobCard from "../components/JobCard";
import { useEffect, useState } from "react";
import firebase from '../firebase';
import Loading from "../components/Loading";
import moment from "moment";

function EmployerDashboard() {

  const [jobData, setJobData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showIndeed, setShowIndeed] = useState(false);
  const [showLinkedin, setShowLinkedin] = useState(false);
  const [liData, setLiData] = useState([]); // linkedin data

  useEffect(() => {

    // fetch data from firebase to populate job board
    const dbRef2 = firebase.database().ref('indeed-scrape');
    let dbData;

    dbRef2.on('value', snapshot => {
      const data = snapshot.val();
      dbData = data;
      setJobData(dbData)
      // setIsLoading(false);
    })

    const dbRef3 = firebase.database().ref('linkedin-scrape');
    dbRef3.on('value', snapshot => {
      let jobArr = Object.values(snapshot.val());
      setLiData(jobArr.reverse());
      setIsLoading(false);
    })


  }, [isLoading])

  return (
    <>
      <Nav currentView="seeker" />
      <header>
        <h2>front-end remote roles</h2>
        <button className={classes.dashBtn} onClick={() => { setShowIndeed(true); setShowLinkedin(false) }}>Indeed</button>
        <button className={classes.dashBtn} onClick={() => { setShowIndeed(false); setShowLinkedin(true) }}>LinkedIn</button>
      </header>
      <main>
        {(isLoading) && <Loading />}


        {showIndeed && (

          <section className={`${classes.jobBoard}`}>
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
                  date={(job.postDate) && job.postDate.slice(6)}
                  likes={job.likes}
                />
              )
            })}
          </section>
        )}

        {showLinkedin && (

          <section className={`${classes.jobBoard}`}>
            {liData.map((job, index) => {
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
                  date={(job.postDate) && moment(job.postDate).startOf('day').fromNow()}
                  likes={job.likes}
                />
              )
            })}
          </section>
        )}
      </main>
    </>
  )
}

export default EmployerDashboard;