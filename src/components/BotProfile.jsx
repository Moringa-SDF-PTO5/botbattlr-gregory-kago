

import React from 'react';

const BotProfile = ({ bot }) => {
  return (
    <div>
      <h2>{bot.name} Profile</h2>
      <p>Serial Number: {bot.serialNumber}</p>
      {/* Add more details based on your bot structure */}
    </div>
  );
};

export default BotProfile;
