import React from "react";
import BotListItem from "./BotListItem";

const BotCollection = ({ bots, selectBot }) => {
  const botListStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)", // Adjust the number of columns as needed
	margin: '10px',
    gridGap: "10px", // Adjust the gap between grid items
  };

  return (
    <div className="bot-list-container">
      <h2>All Bots</h2>
      <ul className="bot-collection-grid" style={botListStyle}>
        {bots.map((bot) => (
          <BotListItem
            key={bot.id}
            bot={bot}
            buttonText="Select"
            onClick={() => selectBot(bot)}
          />
        ))}
      </ul>
    </div>
  );
};

export default BotCollection;
