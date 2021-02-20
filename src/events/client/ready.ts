import fs from 'fs'
import ms from 'ms'

module.exports = (client, config) =>{
  
  console.log(`\x1b[36m ${String.raw` `} \x1b[0m`);
  console.log(`\x1b[36m ${String.raw`          Roleplay Bot        `} \x1b[0m`);
  console.log(`\x1b[36m ${String.raw` `} \x1b[0m`);
  console.log(`\x1b[36m ${String.raw`           Created By        `} \x1b[0m`);
  console.log(`\x1b[36m ${String.raw`         Astra & Hyperz        `} \x1b[0m`);
  console.log(`\x1b[36m ${String.raw` `} \x1b[0m`);
  
  console.log(`Make sure you have filled out your config.json file!`);
  
  // Here is where you can set the bots status!
  let statuses = [
    {
      activity: {
        name: `${config["presence_config"].presname1}`,
        type: `${config["presence_config"].prestype1}`
      }, status: `${config["presence_config"].presstatus1}`
    }, {
      activity: {
        name: `${config["presence_config"].presname2}`,
        type: `${config["presence_config"].prestype2}`
      }, status: `${config["presence_config"].presstatus2}`
    }, {
      activity: {
        name: `${config["presence_config"].presname3}`,
        type: `${config["presence_config"].prestype3}`
      }, status: `${config["presence_config"].presstatus3}`
    }
  ];
  // Fucking Hate Intervals
  let i = 0;
  setInterval(() => {
    let status = statuses[i];
    if(!status){
      status = statuses[0];
      i = 0;
    }
    client.user.setPresence(status);
    i++;
  }, config["presence_config"].preschangetimer);
  
  const channel : TSFixMe = client.channels.cache.get(config["main_config"].voicechanneltojoin);
  if (!channel) return console.error("The voice channel does not exist (change main_config's voicechanneltojoin)!");
  channel.join().then(() => {
    console.log("Successfully connected to the voice channel!");
  }).catch(e => { console.error(e); });
  
  console.log(`${client.user.tag}, By Hyperz & Astra is now READY!`);
}