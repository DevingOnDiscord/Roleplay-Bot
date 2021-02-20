import djs from 'discord.js'

module.exports = {
    name: 'apply',
    description: 'Sends the server application.',
    aliases: ['app'],
    async execute(client:djs.Client, message:djs.Message, args, config){
        const pingEmbed : djs.MessageEmbed = new djs.MessageEmbed()
        .setColor(config["main_config"].colorhex)
        .setAuthor(`${message.guild.name}'s Server Application`)
        .setDescription(`[Click Me](${config["rp_bot_config"].applylink})`)
    
        message.channel.send(pingEmbed)
        message.delete().catch(err => console.log(err));
    },
}