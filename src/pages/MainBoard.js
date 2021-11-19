import Nav from "../components/Nav";

function EmployerDashboard() {
  return (
    <>
      <Nav currentView="seeker" />
      <article className="jobCard">
        <h4>Software Engineer</h4>
        <p>Juno College</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugit totam deleniti quidem nam, voluptatem repudiandae, sed amet dolorum quia rem voluptatum maiores magnam. Consectetur libero assumenda laudantium vel modi.</p>
      </article>
      <article className="jobCard">
        <h4>Software Engineer</h4>
        <p>Juno College</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugit totam deleniti quidem nam, voluptatem repudiandae, sed amet dolorum quia rem voluptatum maiores magnam. Consectetur libero assumenda laudantium vel modi.</p>
      </article>
    </>
  )
}

export default EmployerDashboard;