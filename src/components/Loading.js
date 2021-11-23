import classes from '../App.module.scss';

function Loading() {
  return (
    <section className={classes.loading}>
      <i class="fas fa-cog fa-spin"></i>
      <h4>Working on it...</h4>
    </section>
  )
}

export default Loading;