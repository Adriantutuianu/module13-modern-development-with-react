function Maths(props) {
  console.log(props);
  let result;

  switch (props.operator) {
    case "+":
      result = props.num1 + props.num2;
      break;

    default:
      break;
  }

  return (
    <>
      <p>{result}</p>
    </>
  );
}

export default Maths;
