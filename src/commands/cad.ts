import djs from 'discord.js'

module.exports = {
    name: 'cad',
    description: 'Sends the server application.',
    aliases: ['cadlink', 'mdt', 'mdtlink'],
    async execute(client:djs.Client, message:djs.Message, args, config){
        const cadEmbed : djs.MessageEmbed = new djs.MessageEmbed()
        .setColor(config["main_config"].colorhex)
        .setAuthor(`${message.guild.name}'s CAD System`)
        .setDescription(`[Click Me](${config["rp_bot_config"].cadlink})`)
    
        message.channel.send(cadEmbed)
        message.delete().catch(err => console.log(err));
    },
}