const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'yardım',
    aliases: ['h'],
    showHelp: false,
    utilisation: '{prefix}yardım',

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.setDescription('UTRENIA Müzik');
        embed.addField(`Kullanıla Bilir - ${commands.size} Komut Var`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(' | '));

        embed.setTimestamp();
        embed.setFooter('Müzik Botu Komutları - Edited Abbas ❤️', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};