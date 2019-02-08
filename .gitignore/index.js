const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = 'C.'
var token = 'NTQzMjMzNzQxMjc2MDUzNTA0.Dz7y6w._6anvEZmoZABY-S_Pwx-Y3echAc'

client.login(token);

client.on('ready', function(){
    client.user.setgame("CL4P-TR4P C.")
          console.log("je suis pret")
})
