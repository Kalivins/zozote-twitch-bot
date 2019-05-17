module.exports.run = async (cmd, client, channel, config) => {
    if(cmd == "!tabletarea")
    {
        client.say(channel, "https://i.ibb.co/YtMq1Lp/tabletarea.png");
    }
}

module.exports.help = {
    name: "tabletarea",
    commande: "!tabletarea",
    level: "Public",
    description: "Envoie mon area (tablet)"
}