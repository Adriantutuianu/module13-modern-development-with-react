function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt="SpongeBob" src={props.imgSrc} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> Fry Cook
          </li>
          <li>
            <strong>Location:</strong> A Pinapple Under the Sea
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
