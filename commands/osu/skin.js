module.exports.run = async (cmd, client, channel, config) => {
    if(cmd == "!skin")
    {
        client.say(channel, "Alicrity V1.2 https://www.mediafire.com/file/y0umw7nfh33a581/-+Alacrity+v1.2-.osk");
    }
}

module.exports.help = {
    name: "skin",
    commande: "!skin",
    level: "Public",
    description: "Envoie le skin que j'utilise"
}