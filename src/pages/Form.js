import Nav from "../components/Nav"
import classes from '../App.module.scss';
import { useState } from "react";
import uniqueId from '../functions/id-generator'
import firebase from "../firebase";

const handleSubmit = (e) => {
  e.preventDefault();
}


function Form() {
  const [userInput, setUserInput] = useState({
    id: uniqueId(2),
    title: "",
    company: "",
    link: "",
    place: "",
    description: ""
  })

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
    dbRef.once('value', snapshot => {
      newKey = snapshot.val().length
      console.log(newKey);
      const newRef = firebase.database().ref(`job-data/${newKey}`);
      newRef.update(userInput);
      console.log(`${newKey}: ${userInput}`)
    })
  }

  return (
    <>
      <Nav currentView="form" />
      <main className={classes.cardFull}>
        <form onSubmit={handleSubmit} className={classes.addJob}>
          <h3>Post a New Role</h3>
          <label htmlFor="title" >job title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="e.g. software engineer"
            onChange={handleInputChange}
          />
          <label htmlFor="companyName">company name</label>
          <input
            type="text"
            name="company"
            id="companyName"
            placeholder="e.g. amazon"
            onChange={handleInputChange}
          />
          <label htmlFor="location">location</label>
          <input
            type="text"
            name="place"
            id="location"
            placeholder="e.g. toronto, on"
            onChange={handleInputChange}
          />
          <label htmlFor="description">job description</label>
          <textarea rows="5" cols="50" name="description" placeholder="describe the role..." onChange={handleInputChange}>
          </textarea>
          <button className={classes.btn}>Submit to Board</button>
        </form>
      </main>
    </>
  )
}

export default Form;