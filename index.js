const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('message', message => {
    if (message.type === 'GUILD_MEMBER_JOIN') {
        const user = message.author.username;
        const discriminator = message.author.discriminator;
        message.channel.send(`** Добро пожаловать, сестра @${user}! :raising_hand:**
** Расскажи нам немного о себе: **
:zero: Как тебя зовут?
:one: Чем занимаешься [учишься/работаешь]?
`);
    }
});