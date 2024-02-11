// Create a new component named "Maths"
// Render one Maths component in the place of each "?" mark
// Maths should accept 3 props
// num1, operator, and num2
// Maths should return a span tag displaying the result e.g.  19 + 341 = 360
function Calculator() {
  return (
    <>
      <p>19 + 341 = ?</p>
      <p>42 - 17 = ?</p>
      <p>100 * 3 = ?</p>
      <p>96 / 4 = ?</p>
    </>
  );
}

export default Calculator;
