import { Telegraf } from "telegraf";



const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async(ctx) =>{

    console.log('ctx', ctx);
    await ctx.reply(`Hey!! ${ctx.chat.first_name} Welcome to Ichiban Bot`);
});



bot.command('test', async(ctx) =>{

    await ctx.reply('This is test command');
});

bot.launch();

process.once('SIGINT',() => bot.stop('SIGINT'));
process.once('SIGTERM',() => bot.stop('SIGTERM'));