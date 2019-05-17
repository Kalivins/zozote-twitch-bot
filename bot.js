import getJSON from 'get-json'
import tmi from 'tmi.js'
import fs from "fs"
const commands = [];
const config = require('./botConfig.json')

module.exports.launchBot = () => {

    const opts = {
        identity: {
            username: "Zozote-bot",
            password: config.token
        },
        channels: [
            "zozozote"
        ]
    };

    const client = new tmi.client(opts);

    client.on('connected', (addr, port) => {
        console.log(`* Connected to ${addr}:${port}`);
    });

    client.on('message', (target, context, msg, self) => {
        let cmd = msg.split('!').join('');
        cmd = cmd.split(' ');
        cmd = cmd[0];
        let commandFile = commands.find(command => {
            if(command.help == cmd) {
                return command;
            }
        });
        if (commandFile) commandFile.props.run(msg, client, target, config);
    });

    client.connect();

}

module.exports.launchHandlers = () => {
    var walkSync = function (dir, filelist) {
        var files = fs.readdirSync(dir);
        filelist = filelist || [];
        files.forEach(function (file) {
            if (fs.statSync(dir + file).isDirectory()) {
                filelist = walkSync(dir + file + '/', filelist);
            } else {
                filelist.push(dir + file);
            }
        });
        return filelist;
    };
    var files = walkSync('./commands/');
    let jsfiles = files.filter(f => f.split(".").pop() === "js")
    if (jsfiles.length <= 0) {
        console.log("Aucune commandes enregistrer.");
        return;
    }

    jsfiles.forEach((f, i) => {
        let props = require(f);
        let moduleName = f.split('/');
        console.log(moduleName[3] + ' loaded !');
        let help = props.help.name;
        commands.push( { help, props });
    });
}