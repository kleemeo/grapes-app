import Nav from "../components/Nav"
import classes from '../App.module.scss';

const handleSubmit = (e) => {
  e.preventDefault();
}


function Form() {
  return (
    <>
      <Nav currentView="form" />
      <main className={classes.cardFull}>
        <form onSubmit={handleSubmit} className={classes.addJob}>
          <h3>Post a New Role</h3>
          <label htmlFor="title" >job title</label>
          <input type="text" id="title" placeholder="e.g. software engineer" />
          <label htmlFor="companyName">company name</label>
          <input type="text" id="companyName" placeholder="e.g. amazon" />
          <label htmlFor="location">location</label>
          <input type="text" id="location" placeholder="e.g. toronto, on" />
          <label htmlFor="description">job description</label>
          <textarea rows="5" cols="50" name="description" placeholder="describe the role...">
          </textarea>
          <button className={classes.btn}>Submit to Board</button>
        </form>
      </main>
    </>
  )
}

export default Form;