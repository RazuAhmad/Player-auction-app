import React, { useEffect, useState } from "react";
import PlayerList from "./Components/PlayerList/PlayerList";
import fakeData from "./Data/fakeData.json";
const App = () => {
  const [playerAuction, setPlayerAuction] = useState([]);
  const [auctionPlayer, setAuctionPlayer] = useState([]);
  useEffect(() => {
    setPlayerAuction(fakeData);
  }, []);

  const selectedPlayer = (clickedPlayer) => {
    // console.log(clickedPlayer);
    setAuctionPlayer([...auctionPlayer, clickedPlayer]);
  };
  const totalPrice = auctionPlayer.reduce(
    (total, player) => total + parseFloat(player.price),
    0
  );

  console.log(auctionPlayer);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>
        Player Added: {auctionPlayer.length}
      </h2>
      <ul>
        {auctionPlayer.map((nk) => (
          <li>{nk.name}</li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>
      {playerAuction.map((nk) => (
        <PlayerList
          singlePlayer={nk}
          key={nk.id}
          selectedPlayer={selectedPlayer}
        />
      ))}
    </div>
  );
};

export default App;
