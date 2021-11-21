import classes from '../App.module.scss';

function JobCard(props) {


  return (
    <article className={classes.jobCard}>
      <h4>{props.title}</h4>
      <h5>{props.companyName} | <span className={classes.cityText}>{props.location}</span></h5>
      <p>{props.description}</p>
      {(props.url) && <a href={props.url} target="_blank">Link to Posting</a>}
    </article>
  )
}

export default JobCard;