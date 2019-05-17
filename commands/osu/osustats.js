import getJson from "get-json"
module.exports.run = async (cmd, client, channel, config) => {
    let messageArray = cmd.split(' ');
    let command = messageArray[0];
    if(command == "!osustats")
    {
        getJson("https://osu.ppy.sh/api/get_user?k="+config.osuApiKey+"&u="+messageArray[1], async (error, response) => {
            let r = await response;
            if(r.length > 0) {
                let url = "https://osu.ppy.sh/u/"+r[0].user_id;
                client.say(channel, url+" "+r[0].username.charAt(0).toUpperCase()+r[0].username.slice(1)+" : \n PP: "+r[0].pp_raw+" \n Accuracy : "+r[0].accuracy.substr(0, 4)+" \n Rank : "+ r[0].pp_rank+" \n Country rank : "+ r[0].pp_country_rank);
            } else {
                client.say(channel, "Aucun utilisateur trouvé.");
                return;
            }
        })
       
    }
}

module.exports.help = {
    name: "osustats",
    commande: "!osustats",
    level: "Public",
    description: "Renvoie les stats du joueur zouzou"
}