import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import SpongeBobCard from "./components/SpongeBobCard";
// import SquidwardCard from "./components/SquidwardCard";
// import MrKrabsCard from "./components/MrKrabsCard";
import Card from "./components/Card";
import friendsList from "./friends.json";

function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      {friendsList.map((friend) => {
        return <Card imgSrc={friend.image} name={friend.name} />;
      })}
      {/* <SpongeBobCard />
      <MrKrabsCard />
      <SquidwardCard /> */}
    </Wrapper>
  );
}

export default App;
