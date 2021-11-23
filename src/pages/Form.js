import Nav from "../components/Nav"
import classes from '../App.module.scss';
import { useState } from "react";
import uniqueId from '../functions/id-generator'
import firebase from "../firebase";
import useInput from "../hooks/useInput";
import { Link, Routes, Route } from "react-router-dom";
import JobCard from "../components/JobCard";

function Form() {
  const [userInput, setUserInput] = useState({
    id: uniqueId(2),
    title: "",
    company: "",
    link: "",
    place: "",
    description: ""
  })

  // custom hook for form validation that can pass in a validation function
  const {
    value: enteredTitle,
    isValid: titleIsValid,
    hasError: titleHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler } = useInput(value => value.trim() !== '');

  const {
    value: enteredCompany,
    isValid: companyIsValid,
    hasError: companyHasError,
    valueChangeHandler: companyChangeHandler,
    inputBlurHandler: companyBlurHandler } = useInput(value => value.trim() !== '');

  const {
    value: enteredLocation,
    isValid: locationIsValid,
    hasError: locationHasError,
    valueChangeHandler: locationChangeHandler,
    inputBlurHandler: locationBlurHandler } = useInput(value => value.trim() !== '');

  const {
    value: enteredDescription,
    isValid: descriptionIsValid,
    hasError: descriptionHasError,
    valueChangeHandler: descriptionChangeHandler,
    inputBlurHandler: descriptionBlurHandler } = useInput(value => (value.trim() !== '' && value.length >= 100));

  let formIsValid = (titleIsValid && companyIsValid && locationIsValid && descriptionIsValid) ? true : false;

  const handleInputChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setUserInput({
      ...userInput,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const dbRef = firebase.database().ref('job-data');
    let newKey;

    setUserInput({
      ...userInput,
      id: uniqueId(2),
      title: enteredTitle,
      company: enteredCompany,
      link: "",
      place: enteredLocation,
      description: enteredDescription
    })

    console.log(userInput)

    // dbRef.once('value', snapshot => {
    //   newKey = snapshot.val().length
    //   console.log(newKey);
    //   const newRef = firebase.database().ref(`job-data/${newKey}`);
    //   newRef.update(userInput);
    //   console.log(`${newKey}: ${userInput}`)
    // })
  }

  return (
    <>
      <Nav currentView="form" />
      <main className={classes.cardFull}>
        <form onSubmit={handleSubmit} className={classes.addJob}>
          <h3>Post a New Role</h3>

          <label htmlFor="title" >job title</label>
          <input
            className={titleHasError && classes.invalidInput}
            type="text"
            name="title"
            id="title"
            placeholder="e.g. software engineer"
            onChange={titleChangeHandler}
            onBlur={titleBlurHandler}
            value={enteredTitle}
            maxLength="50"
          />
          {titleHasError && <p className={classes.errorText}>input cannot be empty</p>}

          <label htmlFor="companyName">company name</label>
          <input
            className={companyHasError && classes.invalidInput}
            type="text"
            name="company"
            id="companyName"
            placeholder="e.g. amazon"
            onChange={companyChangeHandler}
            onBlur={companyBlurHandler}
            value={enteredCompany}
            maxLength="50"
          />
          {companyHasError && <p className={classes.errorText}>name cannot be empty</p>}

          <label htmlFor="location">location</label>
          <input
            className={locationHasError && classes.invalidInput}
            type="text"
            name="place"
            id="location"
            placeholder="e.g. toronto, on"
            onChange={locationChangeHandler}
            onBlur={locationBlurHandler}
            value={enteredLocation}
            maxLength="35"
          />
          {locationHasError && <p className={classes.errorText}>location cannot be empty</p>}

          <label htmlFor="description">job description</label>
          <textarea
            className={descriptionHasError && classes.invalidInput}
            rows="5"
            cols="50"
            name="description"
            placeholder="describe the role..."
            onChange={descriptionChangeHandler}
            onBlur={descriptionBlurHandler}
            value={enteredDescription}
            maxLength="1000"
          >
          </textarea>
          {descriptionHasError && <p className={classes.errorText}>description cannot be empty or less than 100 characters</p>}

          <button disabled={!formIsValid} className={classes.btn}>Submit to Board</button>
          <Routes>
            <Route path="review" element={<h2>Test text</h2>} />
          </Routes>
          <Link to={'review'}>Test Link</Link>
        </form>
      </main>
    </>
  )
}

export default Form;