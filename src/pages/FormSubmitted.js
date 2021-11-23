import Nav from "../components/Nav"
import classes from '../App.module.scss';
import { useState, useEffect } from "react";

function FormSubmitted() {

  const [submitSuccess, setSubmitSuccess] = useState(true);

  useEffect(() => {
  }, [])

  return (
    <>
      <Nav currentView="form" />
      <main className={classes.cardFull}>

        {
          submitSuccess ?

            <section className={`${classes.submitted} ${classes.success}`}>
              <i className="fas fa-check-circle"></i>
              <h4>Thank you for your submission</h4>
              <p>Currently, due to lack of staff, we will be <strong>automatically</strong> approving your submission. You should see it on the main job board shortly.</p>
            </section>

            :

            <section className={`${classes.submitted} ${classes.failed}`}>
              <i className="fas fa-times-circle"></i>
              <h4>Your submission failed</h4>
              <p>Sorry, something went wrong. Please try filling out the form and submitting again. You can press back to find your saved form. </p>
            </section>
        }
      </main>
    </>
  )
}

export default FormSubmitted;