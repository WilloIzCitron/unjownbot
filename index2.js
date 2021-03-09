const Discord = require('discord.js');
const config = require('./config.json')

const FAQ = require('./commands/FAQ.js')
const commandHandler = require('./commands/basics.js');
const roles = require('./commands/roles.js')
const react = require('./commands/reactions.js')
const ping = require('./commands/ping.js')
const egg = require('./commands/egg.js')
const pog = require('./commands/pog.js')
const ohno = require('./commands/ohno.js')
const auto = require('./commands/auto.js')

const client = new Discord.Client();

client.once('ready', () => {
  console.log('🤖 Beep beep! I am ready!');
});

client.on('message', auto)
client.on('message', commandHandler);
client.on('message', FAQ);
client.on('message', roles);
client.on('message', react);
client.on('message', ping);
client.on('message', egg);
client.on('message', ohno);
client.on('message', pog);

client.login(config.token);
