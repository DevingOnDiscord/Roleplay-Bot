import djs from 'discord.js'

module.exports = {
    name: 'ip',
    description: 'Sends the server ip.',
    aliases: ['ip2'],
    async execute(client:djs.Client, message:djs.Message, args, config){
        const pingEmbed : djs.MessageEmbed= new djs.MessageEmbed()
        .setColor(config["main_config"].colorhex)
        .setAuthor(`${message.guild.name}'s Server IP`)
        .setDescription(`${config["rp_bot_config"].ip}`)
    
        message.channel.send(pingEmbed)
        message.delete().catch(err => console.log(err));
    },
}