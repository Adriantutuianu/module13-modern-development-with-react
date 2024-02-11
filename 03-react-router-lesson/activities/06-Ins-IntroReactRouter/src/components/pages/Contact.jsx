import { Link, Route, Routes } from 'react-router-dom';
import Learn from './Learn';

function Contact(props) {
  return (
    <>
      <h1>Contact Page</h1>
      <p>
        Bring her forward! The Knights Who Say Ni demand a sacrifice! I have to push the pram a lot. I'm not a witch. Well, what do you want? Well, I got better. Oh! Come and see the violence inherent in the system! Help, help, I'm being repressed!
      </p>
      <Link to="learn" role="button" className="btn btn-link">
        Learn More
      </Link>
      <Link to="contact" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Routes>
        <Route path="learn" element={<Learn />} />
      </Routes>
    </>
  );
}

export default Contact;
