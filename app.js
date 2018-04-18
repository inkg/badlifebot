// Calling Packages
const Discord = require('discord.js');
const client = new Discord.Client();
                        //const fs = require('fs');

// JSON File
                        //const commands = JSON.parse(fs.readFileSync("Storage/commands.json", "utf8"));


// Prefix
const prefix = '!';

// Listener Event
client.on('message', message => {

    // Variables 
    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1); 


    // Ping
    if (msg === prefix + 'PING') { 

        message.channel.send('Ping!'); 
    }


    // Suppresion de messages
    if (msg.startsWith(prefix + 'PURGE')) { 
  
        async function purge() {
            message.delete();

            
            if (!message.member.roles.find("name", "NMLsm")) { 
                message.channel.send('Vous avez besoin du rôle \`NMLsm\` pour utiliser cette commande.'); 
                return;
            }


            if (isNaN(args[0])) {

                message.channel.send('**Veuillez utiliser un nombre comme argument.** \n'+ prefix + '**purge <nombre>**');
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]});
            console.log(fetched.size + ' messages trouvés, suppresion...'); 

            // Suppresion de messages
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Erreur: ${error}`));

        }

        purge();

    }

    // Help
    if (msg.startsWith(prefix + 'HELP')) {
        var help_embed = new Discord.RichEmbed()
            .setColor('#D9F200')
            .addField('__Commandes disponibles__', "**!keys** > Affiche les touches en jeu.\n**!vote** > Pour aider le serveur.\n**!ip** > Affiche l'ip du serveur.\n**!reglement** > Affiche le lien du reglement.\n**!site** > Affiche les lien des sites.")
            .setFooter('Développer par @inkgtv')
        message.channel.sendEmbed(help_embed);

    };

    // Touche
    if (msg.startsWith(prefix + 'KEYS')) {
        var help_embed = new Discord.RichEmbed()
            .setColor('#01FEDC')
            .addField('__Touches disponibles en jeu__',"**F1** > Menu personnel, inventaire, véhicule.\n**F3** > Changer le volume de la voix.\n**F5** > Menu accessopires.\n**F6** > Menu métier.\n**F9** > Menu animations et démarches.\n**K** > Téléphone.\n**U** > Vérouiller le véhicule.\n**N** > Chat Vocal InGame.\n**Y** > Régulateur de vitesse.")
        message.channel.sendEmbed(help_embed);

    };

    // Vote
    if (msg.startsWith(prefix + 'VOTE')) {
        var help_embed = new Discord.RichEmbed()
            .setColor('#1AFE01')
            .addField("__Bonjour, c'est moi le bot !__","**Dis moi tu n'aurais pas une petite minute pour un petit vote ?\nMerci d'avance,** https://gta.top-serveurs.net/bad-life-rp")
    message.channel.sendEmbed(help_embed);

    };

    // Ip
    if (msg.startsWith(prefix + 'IP')) {
        var help_embed = new Discord.RichEmbed()
            .setColor('#6FFE01')
            .addField("__L'ip du serveur__","> **85.201.12.46:30120**\n__***Sous-Whitelist !***__")
    message.channel.sendEmbed(help_embed);

    };

    // Mod
    if (msg.startsWith(prefix + 'MOD')) {

        if (!message.member.roles.find("name", "NMLmod")) { 
            message.channel.send('Vous avez besoin du rôle \`NMLmod\` pour utiliser cette commande.'); 
            return;
        };
        var help_embed = new Discord.RichEmbed()
            .setColor('#F30000')
            .addField("__Commandes de modération__","Suppresion de message > **!purge <nombre>**\nProchaine update > **!update**")
    message.channel.sendEmbed(help_embed);

    };

    // Reglement
    if (msg.startsWith(prefix + 'REGLEMENT')) {
        var help_embed = new Discord.RichEmbed()
            .setColor('#F36100')
            .addField("__***Le réglement c'est par ici.***__","http://badlife.xyz/reglement-du-serveur")
    message.channel.sendEmbed(help_embed);

    };

    // Site
    if (msg.startsWith(prefix + 'SITE')) {
        var help_embed = new Discord.RichEmbed()
            .setColor('#6FFE01')
            .addField("__***Sites***__","http://badlife.xyz/\nhttp://badlife.xyz/duss-auto")
    message.channel.sendEmbed(help_embed);

    };
  
      // Classement Karting
     if (msg.startsWith(prefix + 'KARTING')) {
        var help_embed = new Discord.RichEmbed()
            .setColor('#F36100')
            .addField("__***Le classement du Karting!***__","https://docs.google.com/spreadsheets/d/1wBSgR-MSQtgTD7B9XAlSfuaz0JbpltlISA3ZZlMuILw/edit?usp=sharing")
    message.channel.sendEmbed(help_embed);

    };


    // Next Update
     if (msg.startsWith(prefix + 'UPDATE')) {

        if (!message.member.roles.find("name", "NMLmod")) { 
            message.channel.send('Vous avez besoin du rôle \`NMLmod\` pour utiliser cette commande.'); 
            return;
        };
        var help_embed = new Discord.RichEmbed()
            .setColor('#5D56B2')
            .addField("__***Prochaine update***__","Timer pour les messages auto.\nNombre de joueurs EN LIGNE.")
            .setFooter('Dernière update > 18/04/18')
    message.channel.sendEmbed(help_embed);
    
    };


});



client.on('ready', () => {
    client.user.setPresence({game: { name: "!help | NML RP", type: 0}});

    // Pour voir si le client est lancé.
    console.log('bot NML Lancée.');

});

client.login(process.env.BOT_TOKEN);
