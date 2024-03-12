
import React from 'react';

const BotSpecs = ({ enlistBot, resetSelectedBot, bot }) => {
  return (
    <div>
      <h2>Bot Specifications</h2>
      <img src={bot.avatar_url} alt={'Avatar of ${bot.name}'} />
      <p>Name: {bot.name}</p>
      <p>Serial Number: {bot.serialNumber}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Bot Class : { bot.bot_class}</p>
      <p>Catchphrase: : {bot.catchphrase}</p>
      {/* Add more bot details based on your data structure */}
      <button onClick={() => enlistBot(bot)}>Enlist in Army</button>
      <button onClick={resetSelectedBot}>Back to Army</button>
    </div>
  );
};

export default BotSpecs; 
