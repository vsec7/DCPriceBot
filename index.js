import fetch from "node-fetch";
import Discord from "discord.js";

const client = new Discord.Client();
client.login("Token Discord Bot");

async function getPrice() {
	const g = await fetch("https://api.pancakeswap.info/api/v2/tokens/0x5b5a3a45002736413613b8a4c46cc0d9d1d6f4ae");
	const hasil = await g.json();
  const perusd = parseFloat(hasil.data.price).toFixed(15)
  //const perBnb = parseFloat(hasil.data.price_BNB).toFixed(15)
  return perusd
}

async function main() {
  client.user
    .setActivity(`$ ${await getPrice()}`, { type: "WATCHING" })
    .then((presence) =>
      console.log(`Activity set to ${presence.activities[0].name}`)
    )
    .catch((err) => console.log(err));
}

setInterval(() => main(), 30000);
