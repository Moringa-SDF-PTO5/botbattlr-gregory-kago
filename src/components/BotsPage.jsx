import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from './BotSpecs.jsx';


function BotsPage() {

  // State to hold all bots from the API
  const [bots, setBots] = React.useState([]);
  // State to hold enlisted bots in the army
  const [armyBots, setArmyBots] = React.useState([]);
  // State to hold the selected bot for detailed view
  const [selectedBot, setSelectedBot] = React.useState(null);

  // Fetch bots from the API on component mount or when armyBots change
  React.useEffect(() => {
    getBots();
  }, [armyBots]);

  // Function to fetch bots from the API
  const getBots = async () => {
    try {
      const response = await fetch("http://localhost:3000/bots");
      const data = await response.json();
      setBots(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to select a bot for detailed view
  const selectBot = (bot) => {
    setSelectedBot(bot);
  };

  // Function to enlist a bot into the army
  const enlistBot = (bot) => {
    const botExists = armyBots.find((b) => b.id === bot.id);
    if (!botExists) {
      setArmyBots([...armyBots, bot]);
    }
  };

  // Function to remove a bot from the army and delete it from the backend
  const removeBot = async (botId) => {
    try {
      // Delete the bot from the backend
      await fetch(`http://localhost:3000/bots/${botId}`, {
        method: "DELETE",
      });

      // Remove the bot from the army in the state
      const updatedArmy = armyBots.filter((b) => b.id !== botId);
      setArmyBots(updatedArmy);

      // Reset the selected bot in case it was the one being removed
      setSelectedBot(null);
    } catch (error) {
      console.log(error);
    }
  };

  // Function to reset the selected bot
  const resetSelectedBot = () => {
    setSelectedBot(null);
  };

  return (
    <div>
      <YourBotArmy army={armyBots} removeBot={removeBot} selectBot={selectBot} />
      {!selectedBot && <BotCollection bots={bots} selectBot= {selectBot} />}
      {selectedBot && (
        <BotSpecs enlistBot={enlistBot} resetSelectedBot={resetSelectedBot} bot={selectedBot} />
      )}
    </div>
  );
}

export default BotsPage;
