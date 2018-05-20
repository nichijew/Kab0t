const Discord = require("discord.js"); 

const TOKEN = "NDQ3NTQ5NDcwNTg3MDkyOTkz.DeJMcQ.bj9v5zZPKf3_woVOqwXfxX-rMLI"

var bot = new Discord.Client(); 

bot.on("ready", function() {
    console.log("Ready");
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == "!BoyzNight") {
        message.channel.sendMessage("Subscribe to ifunny.co/kabuk for free funny content");
    
    }

    if (message.content == "!boyznight") {
        message.channel.sendMessage("Subscribe to ifunny.co/kabuk for free funny content");
    
    }
    
    if (message.content == "!kapic") {
        let kapic = ["https://imgur.com/a/Qxf3ocD",
                     "https://imgur.com/a/yr7aUmY",
                     "https://imgur.com/a/wUWlnSM",
                     "https://imgur.com/a/b75xJu6",
                     "https://imgur.com/a/JfLN7b1",
                     "https://imgur.com/a/kIzSQWd",
                     "https://imgur.com/a/5htzIoA",
                     "https://imgur.com/a/enwDTbF",
                     "https://imgur.com/a/D71ouHC",
                     "https://imgur.com/a/jz9Dooq",
                     "https://imgur.com/a/gGRz0GU",
                     "https://imgur.com/a/yN9DOeo",
                     "https://imgur.com/a/jVnXsKG",
                     "https://imgur.com/a/5FOywtf",
                     "https://imgur.com/a/0bZk4op",]

let item = kapic[Math.floor(Math.random()*kapic.length)];
message.channel.sendMessage(item)

    }

    if (message.content == "!whitepeople") {
        message.channel.sendMessage("Cracka!");
    
    }

    if (message.content == "!freefunnycontent") {
        message.channel.sendMessage("http://ifunny.co/kabuk");
    
    }

    if (message.content == "water") {
        message.channel.sendMessage("https://imgur.com/a/Klkp1dH");
    
    }

});

bot.login(TOKEN);