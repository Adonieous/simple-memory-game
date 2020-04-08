const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log("Streamstatus by DayZoonHD");

  client.user
    .setActivity(`🌹 your mom`, {
      type: "STREAMING",
      url:
        "https://www.youtube.com/watch?v=D9g4Cbl-cUM&t=16s"
    })
    .then(presence =>
      console.log(
        `Your Status has been set to  ${
          presence.game ? presence.game.none : "none"
        }`
      )
    )
    .catch(console.error);
});

client.login("NDYzODI0MDYyNDM1Njg4NDQ4.Xffpnw.Ulv-XEQCsZczqLzY9_cGpsTNYXQ");
0