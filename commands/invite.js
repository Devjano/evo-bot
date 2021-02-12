 const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `invite`,
  description: `Gives you an invite`,
  aliases: ["add"],
  cooldown: 4,
  edesc: "Type this command to get an invite link for the Bot, thanks for every Invite",
  execute(message, args, client) {
    //react with approve emoji
    message.react("769665713124016128");
    //send the invite embed
    message.reply(new MessageEmbed().setColor("BLACK").setTitle("**link bot**").setDescription("https://discord.com/api/oauth2/authorize?client_id=780578520870158337&permissions=8&scope=bot")
    .setFooter("🥺Invite Bot🥺", "https://phoneky.co.uk/thumbs/screensavers/down/music/music_me3s1nz7.gif"));

  }
}
