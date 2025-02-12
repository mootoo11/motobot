module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://mootoo:167718al@mootoo.vh1bz.mongodb.net/?retryWrites=true&w=majority",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
    // Version 4.x
    {
      name: "AjieBlogs V4",
      password: "https://dsc.gg/ajidevserver",
      host: "lava-v4.ajieblogs.eu.org",
      port: 443,
      secure: true
    },
    {
      name: "AjieBlogs V3 & V4",
      password: "https://dsc.gg/ajidevserver",
      host: "lava-all.ajieblogs.eu.org",
      port: 443,
      secure: true
    }, 
    {
      name: "INZEWORLD.COM (DE)",
      password: "saher.inzeworld.com",
      host: "lava.inzeworld.com",
      port: 3128,
      secure: false
    },  
    {
      name: "ChalresNaig Node",
      password: "NAIGLAVA-dash.techbyte.host",
      host: "lavahatry4.techbyte.host",
      port: 3000,
      secure: false
    },
    {
      name: "ChalresNaig Node (Backup)",
      password: "charlesnaig-lavalink",
      host: "212.227.65.132",
      port: 10296,
      secure: false
    },
    {
      name: "JM Lite LAVALINK",
      password: "jmlitev4",
      host: "46.202.82.164",
      port: 1027,
      secure: false
    }
  ]
};







