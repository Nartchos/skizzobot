const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("/")

bot.on('ready', function() {
    bot.user.setGame("Rencontre love Fr");
    console.log("Connectedç");
});

bot.login("NDgyNTkzMjcxMzUzMTgwMTc1.DmHJ_g._mEZ_mG962n5WewaeClBF9oUVDM");

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n - /help \n - /infodiscord");
    }

    if (message.content === "salut"){
        message.channel.reply("Coucou :)");
    }

    if (message.content === "Salut"){
        message.channel.reply("Coucou :)");
    }

    if(message.content === prefix + "infodiscord") {
        var embed = new Discord.RichEmbed()
        .setDescription("Information du Discord")
        .addField("Nom du discord", message.guild.name)
        .addField("Crée le", message.guild.createdAt)
        .addField("Tu as rejoin le", message.member.joinedAt)
        .addField("Utilisateurs sur le discord", message.guild.memberCount)
        .setColor("0x0000FF")
    message.channel.sendEmbed(embed)

    }

    if (message.content.startsWith(prefix + "sondage")) {
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ")
        var embed = new Discord.RichEmbed()
            embed.setDescription("Sondage")
            embed.addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
            embed.setColor('#01A1FE')
        message.guild.channels.find("name", "sondage").sendEmbed(embed)
        .then(function (message){
            message.react("✔")
            message.react("✖")
        }).catch(function() {
        });
        }

});
