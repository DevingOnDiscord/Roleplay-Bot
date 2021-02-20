import djs from 'discord.js'

module.exports = {
    name: 'clockout',
    description: 'Clocks the user out',
    aliases: ['clock-out', 'clocking-out'],
    async execute(client:djs.Client, message:djs.Message, args, config){
        const filter : TSFixMe = response => {
            return response.author.id === message.author.id
        };
        
        message.channel.send("What department are you clocking out of?").then(() => {
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000,
                errors: ["time"]
            }).then(collected => {
                var department = collected.first().content;
                // See https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=bulkDelete
                message.bulkDelete(2)
                const clockoutEmbed : djs.MessageEmbed = new djs.MessageEmbed()
                .setTitle('Clocked Out')
                .setColor(config["main_config"].colorhex)
                .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://hyperz.dev/discord')
                .addFields(
                    { name: 'Department', value: `${department}`},
                    { name: 'Employee', value: `${message.author.username}`},
                    { name: 'Time', value: `${message.createdAt}`},
                    )
                    .setFooter(`${config["main_config"].copyright}`)
                    // Property 'send' does not exist on type 'GuildChannel'.
                    message.guild.channels.cache.get(config["rp_bot_config"].clock_out_channel).send(clockoutEmbed).catch(e => {
                        console.error(e);
                    })
                    message.delete().catch(err => console.log(err));
                })
            })
        },
    }
    