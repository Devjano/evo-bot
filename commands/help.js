const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 5,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setTitle(`**Hyper Music  Commands**`)

    .setDescription(` 
> **Music Command**
> \` $play\` • \`$stop\` • \`$skip\` • \`$skipto\` • \`$volume \`
> \` $queue\` • \`$loop\` • \`$pause\` • \`$nowplaying \`
> \` $shuffle\` • \`$uptime\` • \`$search\` • \`$remove \`
> \` $clip\` • \`$clips\` • \`$lyrics\` • \`$move\` • \`$playlist \`
> **Info Command**
> \` $bot\` • \`$support\` • \`$invite\` • \`$help\` • \`$ping\` • \`$website \`

> **[ \`invite\` ](https://discord.com/api/oauth2/authorize?client_id=780578520870158337&permissions=8&scope=bot)**  
> **[ \`support\` ](https://discord.gg/7sEtecbAM6)**                                                             
 `)
    
    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);

  }
};
