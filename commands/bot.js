 const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "bot",
  aliases: ["b"],
  cooldown: 6,
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
   .setTitle(`**Info Hyper Music**`)
   
    
    .addField("`my name`", `**Hyper Music#0112**`, true)

    .addField("`My ID`",  `**780578520870158337**`, true)
    
    .addField( "`My Prefix` ",`**$**`,true)
    
    .addField("`Node.js Version`",  `**12**`, true)
    
    .addField("`Language Program`",  `**Java Script**`, true)
    
    .addField("`Discord.js `",  `**12.5.1**`, true)
    
    .addField( "`developer bot` ",`<@681553671364018196>`,true)
    
   
    
   
   
    .setDescription(`
\`ONLINE BOT\`
`)
    
    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);

  }
};
