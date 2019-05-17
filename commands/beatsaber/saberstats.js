import getJson from "get-json"
module.exports.run = async (cmd, client, channel, config) => {
    let messageArray = cmd.split(' ');
    let command = messageArray[0];
    if(command == "!saberstats")
    {
        getJson("http://vps515477.ovh.net/profile/"+messageArray[1], async (error, response) => {
            let r = await response;
            if(r.error) {
                client.say(channel, "Aucun utilisateur trouvé.");
                return;
            }
            
            client.say(channel, r.url+" "+r.name+" : "+r.resume);
        })
       
    }
}

module.exports.help = {
    name: "saberstats",
    commande: "!saberstats",
    level: "Public",
    description: "Envoie les stats du joueur Beat Saber"
}