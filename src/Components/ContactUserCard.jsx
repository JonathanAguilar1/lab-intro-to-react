import profile from '../images/profile.png';

const ContactUserCard = () => {
  return (
    <div className="user-card">
      <img src={profile} alt="No" />
      <section className="card-info">
        <h3>John Doe</h3>
        <p>React Creator</p>
        <p>Lorem Ipsum</p>
      </section>
    </div>
  );
}

export default ContactUserCard;