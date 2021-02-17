module.exports = {
    name: 'help',
    description: 'Pings the bot.',
    aliases: ['helpmenu', 'helpme'],
    async execute(client, message, args, fart, config){
        const member = message.member
        const guild = message.guild.id
        const helpEmbed = new fart.MessageEmbed()
        .setColor(config["main_config"].colorhex)
        .setTitle(`${client.user.username} Help Menu (Admin):`)
        .setURL('https://github.com/AstraWrld')
        .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://hyperz.dev/discord')
        .setThumbnail(message.guild.iconURL())
        .addFields(
            { name: 'Commands:', value: '`help` - Shows **all** the __available__ commands!\n`Apply` - Sends a link to apply to the server.\n`cad` - Sends a link to the CAD System!\n`ip` - Sends the server IP!\n`clock-in` - Clocks a user in with the department of their choice.\n`clock-out` - Clocks a user out of their current department.\n`ping` - Pings the bot, if successful it will respond with **"Pong!"**'},
        )
        .setTimestamp()
        .setFooter(`${config["main_config"].copyright}`)
        message.author.send(helpEmbed)
        message.delete().catch(err => console.log(err));
    }
}