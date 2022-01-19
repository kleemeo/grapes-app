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
  const [showMyData, setShowMyData] = useState(false);
  const [liData, setLiData] = useState([]); // linkedin data
  const [myData, setMyData] = useState([]); // linkedin data


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
      jobArr.sort((b, a) => a.id - b.id)
      setLiData(jobArr);
      // setIsLoading(false);
    })

    const dbRef4 = firebase.database().ref('postings-cache');
    dbRef4.on('value', snapshot => {
      let jobArr = Object.values(snapshot.val());
      setMyData(jobArr);
      setIsLoading(false);
    })


  }, [isLoading])

  return (
    <>
      <Nav currentView="seeker" />
      {(isLoading) ? <Loading /> :
        <header>
          <h2>Remote Roles for Front-End Devs!</h2>
          <button className={classes.mainSelect} onClick={() => { setShowIndeed(true); setShowLinkedin(false); setShowMyData(false) }}>Indeed</button>
          <button className={classes.mainSelect} onClick={() => { setShowIndeed(false); setShowLinkedin(true); setShowMyData(false) }}>LinkedIn</button>
          <button className={classes.mainSelect} onClick={() => { setShowIndeed(false); setShowLinkedin(false); setShowMyData(true) }}>Custom Postings</button>
        </header>
      }

      <main>

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
            {liData.reverse().map((job, index) => {
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

        {showMyData && (

          <section className={`${classes.jobBoard}`}>
            {myData.map((job, index) => {
              return (
                // renter to JobCard with fetched date into props
                <JobCard
                  index={index}
                  id={job.id}
                  key={job.id}
                  title={job.title}
                  companyName={job.company}
                  location={job.place}
                  description={job.description.slice(0, 100)}
                  date={(job.date) && moment(job.data).startOf('day').fromNow()}
                  url={(job.url) ? job.url : '/'}
                // likes={job.likes}
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