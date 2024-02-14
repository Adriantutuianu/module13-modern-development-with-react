// Create a new component named "Maths"
// Render one Maths component in the place of each "?" mark
// Maths should accept 3 props
// num1, operator, and num2

import Maths from "./Maths";

// Maths should return a span tag displaying the result e.g.  19 + 341 = 360
function Calculator() {
  return (
    <>
      <p>
        19 + 341 = <Maths num1={19} operator="+" num2={341} />{" "}
      </p>
      {/* <p>
        42 - 17 = <Maths num1={} operator={} num2={} />{" "}
      </p>
      <p>
        100 * 3 = <Maths num1={} operator={} num2={} />{" "}
      </p>
      <p>
        96 / 4 = <Maths num1={} operator={} num2={} />{" "}
      </p> */}
    </>
  );
}

export default Calculator;
