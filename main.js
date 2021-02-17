const fart = require('discord.js');
const config = require('./config.json');
const client = new fart.Client();

client.commands = new fart.Collection();
client.events = new fart.Collection();

['Command', 'Event'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, fart, config)
})

client.login(config["main_config"].token)
