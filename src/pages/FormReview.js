import Nav from "../components/Nav"
import classes from '../App.module.scss';
import { useState, useEffect } from "react";
import uniqueId from '../functions/id-generator'
import firebase from "../firebase";
import useInput from "../hooks/useInput";
import { Link, Routes, Route, useParams, useNavigate } from "react-router-dom";

function FormReview() {
  let params = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(params.formId)
    const dbRef = firebase.database().ref(`review/${params.formId}`);
    dbRef.get().then(snapshot => {
      setData({ ...snapshot.val() })
      setIsLoading(false);
    })

  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    let newKey;

    // update to firebase
    // dbRef.once('value', snapshot => {
    //   newKey = snapshot.val().length
    //   console.log(newKey);
    //   if (newKey === 0) {
    //     const newRef = firebase.database().ref('review/0');
    //     newRef.update(dataObj);
    //   }
    //   const newRef = firebase.database().ref(`review/${newKey}`);
    //   newRef.update(dataObj);
    //   console.log(`${newKey}: ${dataObj}`)
    // })

  }

  return (
    <>
      <Nav currentView="form" />
      <main className={classes.cardFull}>
        <form onSubmit={handleSubmit} className={classes.addJob}>
          <h3>Review Posting</h3>
          {isLoading && <h4>LOADING...</h4>}
          {!isLoading && (
            <>
              <article className={classes.jobCard}>
                <h4>{data.title}</h4>
                <h5>{data.company} | <span className={classes.cityText}>{data.place}</span></h5>
                <p>{data.description}</p>
              </article>
              <Link to={`/form/${params.formId}`}>Edit</Link>
            </>
          )
          }
        </form>
      </main>
    </>
  )
}

export default FormReview;