import React from "react";
import DeleteButton from "./DeleteButton";

const BotListItem = ({ bot, buttonText, onClick, selectBot }) => {
  const botListItemStyle = {
    listStyleType: "none",
    padding: "10px",
    margin: "10px",
    border: "1px solid #ccc",
  };

  const botContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // Adjust the number of columns as needed
    gridGap: "10px", // Adjust the gap between grid items
    textAlign: "center",
  };

  const imgStyle = {
    maxWidth: "100%",
    height: "auto",
  };

  const buttonStyle = {
    marginTop: "10px",
  };

  return (
    <li style={botListItemStyle} className="bot-list-item">
      <div style={botContainerStyle}>
        <img style={imgStyle} src={bot.avatar_url} alt={`Avatar of ${bot.name}`} />
        <h3>{bot.name}</h3>
        <p>{bot.bot_class}</p>
        <p>Serial Number: {bot.catchphrase}</p>
        <button style={buttonStyle} onClick={onClick}>
          {buttonText}
        </button>
        <button style={buttonStyle} onClick={selectBot}>
          Select
        </button>
      </div>
    </li>
  );
};

export default BotListItem;
