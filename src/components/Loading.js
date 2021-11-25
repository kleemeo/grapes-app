import classes from '../App.module.scss';

// loading component for load
function Loading() {
  return (
    <section className={classes.loading}>
      <i className="fas fa-circle-notch fa-spin"></i>
      <h4>Working on it...</h4>
    </section>
  )
}

export default Loading;