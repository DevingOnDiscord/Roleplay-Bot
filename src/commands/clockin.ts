import djs from 'discord.js'

module.exports = {
    name: 'clockin',
    description: 'Clocks the user in',
    aliases: ['clock-in', 'clocking-in'],
    async execute(client:djs.Client, msg:djs.Message, args, config){
        const filter : TSFixMe = response => {
            return response.author.id === msg.author.id
        };
        
        msg.channel.send("What department are you clocking in as?").then(() => {
            msg.channel.awaitMessages(filter, {
                max: 1,
                time: 60000,
                errors: ["time"]
            }).then(collected => {
                var department = collected.first().content;
                // See https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=bulkDelete
                msg.bulkDelete(2)
                const clockinEmbed : djs.MessageEmbed = new djs.MessageEmbed()
                .setTitle('Clocked In')
                .setColor(config["main_config"].colorhex)
                .setAuthor(`${msg.author.tag}`, `${msg.author.displayAvatarURL()}`, 'https://hyperz.dev/discord')
                .addFields(
                    { name: 'Department', value: `${department}`},
                    { name: 'Employee', value: `${msg.author.username}`},
                    { name: 'Time', value: `${msg.createdAt}`},
                    )
                    .setFooter(`${config["main_config"].copyright}`)
                    // Property 'send' does not exist on type 'GuildChannel'.
                    msg.guild.channels.cache.get(config["rp_bot_config"].clock_in_channel).send(clockinEmbed).catch(e => {
                        console.error(e);
                    })
                    msg.delete().catch(err => console.log(err));
                }) 
            })
        },
    }