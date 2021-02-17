module.exports = {
    name: 'cad',
    description: 'Sends the server application.',
    aliases: ['cadlink', 'mdt', 'mdtlink'],
    async execute(client, message, args, fart, config){
        const cadEmbed = new fart.MessageEmbed()
        .setColor(config["main_config"].colorhex)
        .setAuthor(`${message.guild.name}'s CAD System`)
        .setDescription(`[Click Me](${config["rp_bot_config"].cadlink})`)
    
        message.channel.send(cadEmbed)
        message.delete().catch(err => console.log(err));
    },
}