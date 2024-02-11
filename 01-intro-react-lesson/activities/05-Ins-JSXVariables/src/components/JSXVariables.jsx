const name = 'Ahmed';
const num1 = 1;
const num2 = 2;

function JSXVariables() {
  return (
    <div className="container">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          {/* JavaScript expressions can be escaped inside of curly braces */}

          <h1 className="display-6">My name is {name}. But you can call me...</h1>
          <h1 className="display-5 fw-bold">The JSX Boss!</h1>
          <hr />
          <h2>I can do math: {num1 + num2}.</h2>
          <h2>
            I can generate random numbers:
            {Math.floor(Math.random() * 10) + 1},
            {Math.floor(Math.random() * 10) + 1},
            {Math.floor(Math.random() * 10) + 1}.
          </h2>
          <h2>I can even reverse my name: {name.split('').reverse()}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
