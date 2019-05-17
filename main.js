import bot from './bot'

// Main
let launch = () => {
  
    bot.launchHandlers();
    bot.launchBot();
    
};

launch();