import React, { useState } from "react";
import "./PlayerList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const PlayerList = (props) => {
  //   console.log(props.singlePlayer);
  const { name, price, id, img } = props.singlePlayer;
  const selectedPlayer = props.selectedPlayer;
  const [displayPrice, setDisplayPrice] = useState("");

  const handleShowPrice = () => {
    console.log("Show Price");
    setDisplayPrice(price);
  };
  return (
    <div className="playerListDiv">
      <img style={{ width: "70px" }} src={img} alt="" />
      <h2>Player Name: {name}</h2>
      <p>Player Id: {id}</p>
      <p className="price">Price: ${displayPrice}</p>
      <button onClick={handleShowPrice}>Show price</button>
      <button onClick={() => selectedPlayer(props.singlePlayer)}>
        <FontAwesomeIcon icon={faUserPlus} /> Select This Player
      </button>
    </div>
  );
};

export default PlayerList;
