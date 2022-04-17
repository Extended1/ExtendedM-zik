module.exports = {
    name: 'kapat',
    aliases: ['Bu komut Müziği kapatır'],
    utilisation: '{prefix}stop',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Şuanda çalan bir müzik yok!. ❌`);

        queue.destroy();

        message.channel.send(`Bu sunucuda çalan müzik kapatıldı, bir dahaki sefere görüşürüz. ✅`);
    },
};