function JSXVariables() {
  const name= "Adrian";
  const nameLength =name.length;
  const react ="React is awesome!"
  const capitalize = (str)=> {
    return str.toUpperCase()
  }
  return (
    <div className="container">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Hi! My name is {name}</h1>
          <h2>My name has {nameLength} letters</h2>
          <h2>I think {react}</h2>
          <h2>BONUS {capitalize('another test')}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
