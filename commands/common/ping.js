module.exports.run = async (cmd, client, channel, config) => {
    if(cmd == "!ping")
    {
        client.say(channel, "Pong !");
    }
}

module.exports.help = {
    name: "ping",
    commande: "!ping",
    level: "Public",
    description: "Envoie un ping"
}