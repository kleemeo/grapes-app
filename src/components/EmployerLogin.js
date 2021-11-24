import { Link, useNavigate } from "react-router-dom";
import classes from '../App.module.scss';
import { useState } from "react";
import firebase from "../firebase";
import { useAuth } from "../hooks/use-auth";

function EmployerLogin() {
  let navigate = useNavigate();
  let [enteredCode, setEnteredCode] = useState('');
  let auth = useAuth();

  const codeInputHandler = (e) => {
    let enteredVal = e.target.value;
    setEnteredCode(enteredVal)
  }

  const handleSubmit = (e) => {
    console.log('submitted')
    e.preventDefault();
    const dbRef = firebase.database().ref('employer/key');
    dbRef.get().then(snapshot => {
      const key = snapshot.val()
      console.log(`key is ${key}`)
      console.log(`entered value: ${enteredCode}`)
      if (enteredCode === key) {
        console.log('key correct')
        auth.signin('user', () => {
          navigate('/dashboard')
        });
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
          <input type="text" id="employerCode" maxLength="10" onChange={codeInputHandler} />
          <button className={`${classes.btn}`} >Enter</button>
          <Link className={classes.inlineBlock} to="/">Back</Link>
        </form>
      </article>
    </section>
  )
}

export default EmployerLogin;