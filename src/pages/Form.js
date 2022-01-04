import Nav from "../components/Nav"
import classes from '../App.module.scss';
import { useEffect } from "react";
import uniqueId from '../functions/idGenerator'
import useInput from "../hooks/use-input";
import { capitalizeSentence } from "../functions/capitalizeSentence";
import { useNavigate, useParams } from "react-router-dom";
import firebase from "../firebase";

function Form() {
  const navigate = useNavigate();
  const params = useParams();

  // custom hook for form validation that can pass in a validation function, adds error class if it has error
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

  useEffect(() => {
    const dbRef = firebase.database().ref(`review/${params.formId}`);
    dbRef.get().then(snapshot => {
      if (params.formId) {
        initialReviewData(snapshot.val())
      }
    })
    // eslint-disable-next-line
  }, [params.formId])

  // populate data if it's entered with a :id in the url
  const initialReviewData = (dataObject => {
    titleSetHandler(dataObject.title)
    locationSetHandler(dataObject.place)
    companySetHandler(dataObject.company)
    descriptionSetHandler(dataObject.description)
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    let today = new Date().toLocaleDateString()

    // dataObj to populate database
    const dataObj = {
      id: (params.formId || uniqueId(2)),
      title: capitalizeSentence(enteredTitle.trim()),
      company: capitalizeSentence(enteredCompany.trim()),
      link: "",
      place: capitalizeSentence(enteredLocation.trim()),
      description: enteredDescription,
      date: today
    }

    // reset form
    resetTitle();
    resetCompany();
    resetLocation();
    resetDescription();

    const newRef = firebase.database().ref(`review/${dataObj.id}`);
    newRef.set(dataObj);

    // navigate to review page with data id after submit
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
            className={titleHasError ? classes.invalidInput : undefined}
            type="text"
            name="title"
            id="title"
            placeholder="e.g. software engineer"
            onChange={titleChangeHandler}
            onBlur={titleBlurHandler}
            value={enteredTitle}
            maxLength="50"
          />
          {titleHasError ? <p className={classes.errorText}>input cannot be empty</p> : undefined}

          <label htmlFor="companyName">company name</label>
          <input
            className={companyHasError ? classes.invalidInput : undefined}
            type="text"
            name="company"
            id="companyName"
            placeholder="e.g. amazon"
            onChange={companyChangeHandler}
            onBlur={companyBlurHandler}
            value={enteredCompany}
            maxLength="50"
          />
          {companyHasError ? <p className={classes.errorText}>name cannot be empty</p> : undefined}

          <label htmlFor="location">location</label>
          <input
            className={locationHasError ? classes.invalidInput : undefined}
            type="text"
            name="place"
            id="location"
            placeholder="e.g. toronto, on"
            onChange={locationChangeHandler}
            onBlur={locationBlurHandler}
            value={enteredLocation}
            maxLength="35"
          />
          {locationHasError ? <p className={classes.errorText}>location cannot be empty</p> : undefined}

          <label htmlFor="description">job description</label>
          <textarea
            className={descriptionHasError ? classes.invalidInput : undefined}
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
          {descriptionHasError ? <p className={classes.errorText}>description cannot be empty or less than 150 characters</p> : undefined}

          <button disabled={!formIsValid} className={classes.btn} onSubmit={handleSubmit}>Preview Posting</button>
        </form>
      </main>
    </>
  )
}

export default Form;