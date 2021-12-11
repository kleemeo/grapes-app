import classes from '../App.module.scss';
// import firebase from '../firebase';

// individual cards to show posting
function JobCard(props) {
  const onJobClick = () => {
    window.open(props.url, '_blank', 'noopener');
  }
  // const handleLike = (e) => {
  //   console.log(props.index)
  //   let pressed = localStorage.getItem(`pressed-${props.id}`)
  //   if (!pressed) {
  //     localStorage.setItem(`pressed-${props.id}`, true);
  //     const dbRef3 = firebase.database().ref(`indeed-scrape2/${props.index}/likes`)
  //     dbRef3.transaction(value => value + 1);
  //   }
  // }

  return (
    <article className={classes.jobCard} onClick={onJobClick}>
      <h4>{props.title}</h4>
      <h5>{props.companyName} | <span className={classes.cityText}>{props.location}</span></h5>
      {(props.date) && <h5>{props.date.slice(6)}</h5>}
      <p>{props.description}</p>
      {(props.url) && <a href={props.url} target="_blank" rel="noreferrer">Link to Posting</a>}
      {/* <button onClick={() => handleLike()}>Likes: {props.likes}</button> */}
    </article>
  )
}

export default JobCard;