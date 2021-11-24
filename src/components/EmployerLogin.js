import { Link, useNavigate } from "react-router-dom";
import classes from '../App.module.scss';
import { useState } from "react";
import firebase from "../firebase";
import { useAuth } from "../hooks/use-auth";

function EmployerLogin() {
  let navigate = useNavigate();
  let [enteredCode, setEnteredCode] = useState('');
  let [codeIsInvalid, setCodeIsInvalid] = useState(false);
  let auth = useAuth();

  const codeInputHandler = (e) => {
    let enteredVal = e.target.value;
    setEnteredCode(enteredVal)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const dbRef = firebase.database().ref('employer/key');
    dbRef.get().then(snapshot => {
      const key = snapshot.val().toString()
      if (enteredCode === key) {
        auth.signin('user', () => {
          navigate('/dashboard')
        });
      } else {
        setCodeIsInvalid(true);
        setEnteredCode('');
      }
    })
  }

  return (
    <section className={classes.wrapperLogin}>
      <article className={classes['cardMed']}>
        <h1>Hi, Employer</h1>
        <p>enter your code</p>

        <form className={classes.loginForm} onSubmit={handleSubmit}>
          <label htmlFor="employerCode"></label>
          <input autoFocus="autofocus" className={codeIsInvalid ? classes.invalidCode : undefined} type="password" id="employerCode" maxLength="10" onChange={codeInputHandler} value={enteredCode} />
          <button className={`${classes.btn}`} >Enter</button>
          <Link className={classes.inlineBlock} to="/">Back</Link>
        </form>
      </article>
    </section>
  )
}

export default EmployerLogin;