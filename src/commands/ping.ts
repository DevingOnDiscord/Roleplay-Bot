import djs from 'discord.js'

module.exports = {
    name: 'ping',
    description: 'Pings the bot.',
    aliases: ['beep', 'tag'],
    async execute(client:djs.Client, message:djs.Message, args, config){
        const pingEmbed : djs.MessageEmbed = new djs.MessageEmbed()
        .setColor(config["main_config"].colorhex)
        .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://hyperz.dev/discord')
        .setDescription('The bot is currently online!')
    
        message.channel.send(pingEmbed)
        message.delete().catch(err => console.log(err));
    },
}