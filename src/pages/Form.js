import Nav from "../components/Nav"
import classes from '../App.module.scss';
import { useEffect, useState } from "react";
import uniqueId from '../functions/id-generator'
import firebase from "../firebase";
import useInput from "../hooks/useInput";
import { Link, Routes, Route, useNavigate, useParams } from "react-router-dom";
import JobCard from "../components/JobCard";

function Form() {
  const navigate = useNavigate();
  const params = useParams();
  const loadParams = (params.formId) ? true : false;

  console.log(`loadParams: ${loadParams}`)

  let prevData = {};
  useEffect(() => {
    console.log(params.formId)
    const dbRef = firebase.database().ref(`review/${params.formId}`);
    dbRef.get().then(snapshot => {
      prevData = snapshot.val()
      console.log(prevData)
      if (params.formId) {
        titleSetHandler(prevData.title)
        locationSetHandler(prevData.place)
        companySetHandler(prevData.company)
        descriptionSetHandler(prevData.description)
      }
    })
  }, [])

  // custom hook for form validation that can pass in a validation function
  const {
    value: enteredTitle,
    isValid: titleIsValid,
    hasError: titleHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    paramSetHandler: titleSetHandler,
    reset: resetTitle } = useInput(value => value.trim() !== '');

  const {
    value: enteredCompany,
    isValid: companyIsValid,
    hasError: companyHasError,
    valueChangeHandler: companyChangeHandler,
    inputBlurHandler: companyBlurHandler,
    paramSetHandler: companySetHandler,
    reset: resetCompany } = useInput(value => value.trim() !== '');

  const {
    value: enteredLocation,
    isValid: locationIsValid,
    hasError: locationHasError,
    valueChangeHandler: locationChangeHandler,
    inputBlurHandler: locationBlurHandler,
    paramSetHandler: locationSetHandler,
    reset: resetLocation } = useInput(value => value.trim() !== '');

  const {
    value: enteredDescription,
    isValid: descriptionIsValid,
    hasError: descriptionHasError,
    valueChangeHandler: descriptionChangeHandler,
    inputBlurHandler: descriptionBlurHandler,
    paramSetHandler: descriptionSetHandler,
    reset: resetDescription } = useInput(value => (value.trim() !== '' && value.length >= 150));

  let formIsValid = (titleIsValid && companyIsValid && locationIsValid && descriptionIsValid) ? true : false;

  const testButton = () => {
    console.log(prevData.title)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const dbRef = firebase.database().ref('review');
    let newKey;

    const dataObj = {
      id: uniqueId(2),
      title: enteredTitle,
      company: enteredCompany,
      link: "",
      place: enteredLocation,
      description: enteredDescription
    }

    console.log(dataObj)

    // reset form
    resetTitle();
    resetCompany();
    resetLocation();
    resetDescription();

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

    const newRef = firebase.database().ref(`review/${dataObj.id}`);
    newRef.set(dataObj);

    navigate(`/review/${dataObj.id}`);
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

          <button disabled={!formIsValid} className={classes.btn} onSubmit={handleSubmit}>Review Posting</button>
        </form>
        <button onClick={testButton}>Test Log</button>
      </main>
    </>
  )
}

export default Form;