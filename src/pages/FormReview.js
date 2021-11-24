import Nav from "../components/Nav"
import classes from '../App.module.scss';
import { useState, useEffect } from "react";
import firebase from "../firebase";
import { Link, useParams, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

function FormReview() {
  let navigate = useNavigate();
  let params = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const dbRef = firebase.database().ref(`review/${params.formId}`);
    dbRef.get().then(snapshot => {
      setData({ ...snapshot.val() })
      if (snapshot.val() === null) {
        setIsSubmitted(true);
      }
    }).then(() => {
      setIsLoading(false);
    })
  }, [params.formId])

  const handleSubmit = (e) => {
    e.preventDefault();
    let newKey;
    // add data to firebase (without formal review), creates a new key based on last key in array
    const dbRef = firebase.database().ref('job-data');
    console.log(data)
    dbRef.once('value', snapshot => {
      newKey = snapshot.val().length
      if (newKey === 0) {
        const newRef = firebase.database().ref('job-data/0');
        newRef.set(data);
      } else {
        const newRef = firebase.database().ref(`job-data/${newKey}`);
        newRef.update(data);
      }
      console.log(`${newKey}: ${data}`)
    })

    // gets removed from review data stack
    firebase.database().ref(`review/${params.formId}`).remove();

    navigate(`/submit/${params.formId}`)
  }

  return (
    <>
      <Nav currentView="form" />
      <main className={classes.cardFull}>
        <form onSubmit={handleSubmit} className={classes.addJob}>
          <h3>Review Posting</h3>
          {isLoading && <Loading />}
          {isSubmitted && (
            <section className={`${classes.submitted} ${classes.failed}`}>
              <i className="fas fa-times-circle"></i>
              <h4>Sorry! This posting was already submitted or doesn't exists anymore! Please try submitting again.</h4>
            </section>
          )}
          {!isLoading && !isSubmitted && (
            <>
              <article className={classes.jobCard}>
                <h4>{data.title}</h4>
                <h5>{data.company} | <span className={classes.cityText}>{data.place}</span></h5>
                <p>{data.description}</p>
              </article>
              <Link to={`/form/${params.formId}`}>Edit</Link>
              <button className={classes.btn}>Submit</button>
            </>
          )
          }
        </form>
      </main>
    </>
  )
}

export default FormReview;