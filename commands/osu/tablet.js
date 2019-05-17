module.exports.run = async (cmd, client, channel, config) => {
    if(cmd == "!tablet")
    {
        client.say(channel, "Wacom Bamboo tablet CTL460");
    }
}

module.exports.help = {
    name: "tablet",
    commande: "!tablet",
    level: "Public",
    description: "Envoie la tablette que j'utilise"
}