// components/YourBotArmy.jsx

import React from "react";
import BotListItem from './BotListItem.jsx';
import "./YourBotArmy.css"; // Adjust the relative path as needed

const YourBotArmy = ({ army, removeBot, selectBot }) => {
  return (
    <div className="bot-army-container">
      <h2>Your Bot Army</h2>
      <ul className="bot-army-grid">
        {army.map((bot) => (
          <BotListItem
            key={bot.id}
            bot={bot}
            buttonText="Remove"
            onClick={() => removeBot(bot.id)}
            selectBot={() => selectBot(bot)}
          />
        ))}
      </ul>
    </div>
  );
};

export default YourBotArmy;

