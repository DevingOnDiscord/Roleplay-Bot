module.exports = {
    name: 'clockin',
    description: 'Clocks the user in',
    aliases: ['clock-in', 'clocking-in'],
    async execute(client, message, args, fart, config){
        const filter = response => {
            return response.author.id === message.author.id
        };
        
    message.channel.send("What department are you clocking in as?").then(() => {
        message.channel.awaitMessages(filter, {
            max: 1,
            time: 60000,
            errors: ["time"]
        }).then(collected => {
            var department = collected.first().content;
            message.bulkDelete(2)
            const clockinEmbed = new fart.MessageEmbed()
            .setTitle('Clocked In')
            .setColor(config["main_config"].colorhex)
            .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://hyperz.dev/discord')
            .addFields(
                { name: 'Department', value: `${department}`},
                { name: 'Employee', value: `${message.author.username}`},
                { name: 'Time', value: `${message.createdAt}`},
            )
            .setFooter(`${config["main_config"].copyright}`)
            message.guild.channels.cache.get(config["rp_bot_config"].clock_in_channel).send(clockinEmbed).catch(e => {
                console.error(e);
            })
            message.delete().catch(err => console.log(err));
        }) 
    })
    },
}