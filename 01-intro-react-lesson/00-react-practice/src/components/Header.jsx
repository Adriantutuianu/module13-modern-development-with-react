import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

function Header() {
  const myStyles = {
    headerStyles: {
      background: "green",
    },
    h1Style: {
      color: "black",
    },
  };

  return (
    <header className="header" style={myStyles.headerStyles}>
      <h1 style={myStyles.h1Style}>Welcome</h1>
    </header>
  );
}

export default Header;
