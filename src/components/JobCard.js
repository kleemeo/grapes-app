import classes from '../App.module.scss';

// individual cards to show posting
function JobCard(props) {
  return (
    <article className={classes.jobCard}>
      <h4>{props.title}</h4>
      <h5>{props.companyName} | <span className={classes.cityText}>{props.location}</span></h5>
      <p>{props.description}</p>
      {(props.url) && <a href={props.url} target="_blank" rel="noreferrer">Link to Posting</a>}
    </article>
  )
}

export default JobCard;