import Nav from "../components/Nav"
import { Link } from "react-router-dom"

const handleSubmit = (e) => {
  e.preventDefault();
}


function Form() {
  return (
    <>
      <Nav />
      <Link to="/dashboard">back</Link>
      <form onSubmit={handleSubmit}>
        <h3>Add Posting</h3>
        <label htmlFor="title">job title</label>
        <input type="text" id="title" />
        <label htmlFor="companyName">company name</label>
        <input type="text" id="companyName" />
        <label htmlFor="description">job description</label>
        <textarea rows="5" cols="50" name="description" placeholder="describe the role...">
        </textarea>
        <button>Post to Board</button>
      </form>
    </>
  )
}

export default Form;