const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login("NDk0OTAxNTMxMzQ3NTE3NDQy.Do6QwA.p9Xr79gZixzuhcui5DwIjg0s7uE")
var prefix = ("?")
const ytdl = require('ytdl-core');
const queue = new Map();
var servers = {};

bot.on('ready', function() {
    bot.user.setPresence({ game: { name: 'la modération', type: 2} })
    bot.user.setStatus('dnd');
    console.log(`Logged in as ${bot.user.tag}!`);
})
bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', '👤 | Abonné')
    member.addRole(role)
})