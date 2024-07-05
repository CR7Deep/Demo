import { Telegraf } from "telegraf";

import express from "express";

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async(ctx) =>{

    console.log('ctx', ctx);
    await ctx.reply(`Hey!! ${ctx.chat.first_name} Welcome to Ichiban Bot`);
});



// const express = require("express");
const PORT = process.env.PORT || 4040;
// const { handler } = require("./controller");

const app = express();
app.use(express.json());
app.post("*",async(req,res)=>{

    console.log(req.body);

    
});

app.get("*",async(req,res)=>{
     res.send("Bot is Live");
    
});

app.listen(PORT, function (err){
    if(err) console.log(err);
    console.log("Server is listnening on PORT",PORT);
}); 



bot.launch();

process.once('SIGINT',() => bot.stop('SIGINT'));
process.once('SIGTERM',() => bot.stop('SIGTERM'));

