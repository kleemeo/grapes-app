import { Link } from "react-router-dom";

function Nav(props) {
  console.log(this)
  return (
    <div className="wrapper">
      <h1>Grapes</h1>
      {props.currentView === 'employer' && <Link to="/board">Board</Link>}
      {props.currentView === 'seeker' && <Link to="/">Back</Link>}
      {props.currentView === 'form'}
    </div>
  )
}

export default Nav;