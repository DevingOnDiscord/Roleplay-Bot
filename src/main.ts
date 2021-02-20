const djs = require('discord.js');
const config = require('../config.json');
const client = new djs.Client();

client.commands = new djs.Collection();
client.events = new djs.Collection();

['Command', 'Event'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, djs, config)
})

client.login(config["main_config"].token)
