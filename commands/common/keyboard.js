module.exports.run = async (cmd, client, channel, config) => {
    if(cmd == "!keyboard")
    {
        client.say(channel, "Corsair K90 RGB MX Silver Switch et Nono Keyboard MX Red ou Brown Switch");
    }
}

module.exports.help = {
    name: "keyboard",
    commande: "!keyboard",
    level: "Public",
    description: "Envoie le clavier que j'utilise"
}