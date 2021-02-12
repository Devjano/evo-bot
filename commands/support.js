const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "support",
  aliases: ["sp"],
  cooldown: 5,
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setDescription(` 
\`link server\`
**[ support ]**
**[ click here ](https://discord.gg/3wykSpqjZq)**   
 `)
    
    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);

  }
};
