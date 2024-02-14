import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friendsData from "./friends.json";
import { useState } from "react";

function App() {
  const [friends, setFriends] = useState(friendsData);

  const remove = (id) => {
    const newFriends = friends.filter((friend) => {
      return friend.id !== id;
    });
    setFriends(newFriends);
  };
  return (
    <Wrapper>
      <Title>Friends List</Title>

      {friends.map((friend) => {
        return (
          <FriendCard
            key={friend.id}
            id={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            removeFriend={remove}
          />
        );
      })}
    </Wrapper>
  );
}

export default App;
