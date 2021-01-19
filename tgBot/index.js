const { Telegraf } = require("telegraf");
const CONFIG = require("./config");

const bot = new Telegraf(CONFIG.TOKEN);

bot.start((ctx) => {
  ctx.reply(
    `Identify.\nChat id is ${ctx.update.message.from.id}\tPut it in Your config file.`
  );
});

bot.launch();
