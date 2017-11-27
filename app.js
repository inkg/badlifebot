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

            
            if (!message.member.roles.find("name", "BadLifeMod")) { 
                message.channel.send('Vous avez besoin du rôle \`BadLifeMod\` pour utiliser cette commande.'); 
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
            .addField('__Commandes disponibles__', "**!keys** > Affiche les touches en jeu.\n**!vote** > Pour aider le serveur.\n**!ip** > Affiche l'ip du serveur.\n**!reglement** > Affiche le lien du reglement.")
            .setFooter('Développer par @inkgtv')
        message.channel.sendEmbed(help_embed);

    };

    // Touche
    if (msg.startsWith(prefix + 'KEYS')) {
        var help_embed = new Discord.RichEmbed()
            .setColor('#01FEDC')
            .addField('__Touches disponibles en jeu__',"**F1** > Menu personnel, inventaire, véhicule.\n**F2** > Menu métier.\n**F3** > Changer le volume de la voix.\n**F5** > Menu accessopires.\n**F9** > Menu animations et démarches.\n**K** > Téléphone.\n**U** > Vérouiller le véhicule.\n**N** > Chat Vocal InGame.\n**Y** > Régulateur de vitesse.")
        message.channel.sendEmbed(help_embed);

    };

    // Vote
    if (msg.startsWith(prefix + 'VOTE')) {
        var help_embed = new Discord.RichEmbed()
            .setColor('#1AFE01')
            .addField("__Bonjour, c'est moi le client !__","**Dis moi tu n'aurais pas une petite minute pour un petit vote ?\nMerci d'avance,** https://gta.top-serveurs.net/bad-life-rp")
    message.channel.sendEmbed(help_embed);

    };

    // Ip
    if (msg.startsWith(prefix + 'IP')) {
        var help_embed = new Discord.RichEmbed()
            .setColor('#6FFE01')
            .addField("__L'ip du serveur__","> **5.51.115.99**\n__***Sous-Whitelist !***__")
    message.channel.sendEmbed(help_embed);

    };

    // Mod
    if (msg.startsWith(prefix + 'MOD')) {

        if (!message.member.roles.find("name", "BadLifeMod")) { 
            message.channel.send('Vous avez besoin du rôle \`BadLifeMod\` pour utiliser cette commande.'); 
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
            .addField("Le réglement c'est par ici.","http://badlife.xyz/reglement-du-serveur")
    message.channel.sendEmbed(help_embed);

    };

    // Next Update
     if (msg.startsWith(prefix + 'UPDATE')) {

        if (!message.member.roles.find("name", "BadLifeMod")) { 
            message.channel.send('Vous avez besoin du rôle \`BadLifeMod\` pour utiliser cette commande.'); 
            return;
        };
        var help_embed = new Discord.RichEmbed()
            .setColor('#5D56B2')
            .addField("__***Prochaine update***__","N/A")
            .setFooter('Dernière update > 27/11/17')
    message.channel.sendEmbed(help_embed);
    
    };


});



client.on('ready', () => {
    client.user.setPresence({game: { name: "!help | BadLife RP", type: 0}});

    // Pour voir si le client est lancé.
    console.log('bot BADLIFE Lancée.');

});

client.login(process.env.BOT_TOKEN);
