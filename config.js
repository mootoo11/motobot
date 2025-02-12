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
    // Existing Nodes
    {
      name: "Koi Node V4",
      password: process.env.NODE_PASSWORD_1,
      host: "lavav4.prplmoe.me",
      port: 1118,
      secure: false
    },
    {
      name: "ChalresNaig Node",
      password: process.env.NODE_PASSWORD_2,
      host: "lavahatry4.techbyte.host",
      port: 3000,
      secure: false
    },

    // Version 3.x (Unmaintained)
    {
      name: "AjieBlogs V3",
      password: "https://dsc.gg/ajidevserver",
      host: "lava-v3.ajieblogs.eu.org",
      port: 443,
      secure: true
    },
    {
      name: "Serenetia V3",
      password: "https://dsc.gg/ajidevserver",
      host: "lavalinkv3-id.serenetia.com",
      port: 443,
      secure: true
    },

    // Version 4.x
    {
      name: "AjieBlogs V4",
      password: "https://dsc.gg/ajidevserver",
      host: "lava-v4.ajieblogs.eu.org",
      port: 443,
      secure: true
    },
    {
      name: "Serenetia V4",
      password: "https://dsc.gg/ajidevserver",
      host: "lavalinkv4.serenetia.com",
      port: 443,
      secure: true
    },

    // Version 3.x & 4.x
    {
      name: "AjieBlogs V3 & V4",
      password: "https://dsc.gg/ajidevserver",
      host: "lava-all.ajieblogs.eu.org",
      port: 443,
      secure: true
    },
    {
      name: "Serenetia V3 & V4",
      password: "https://dsc.gg/ajidevserver",
      host: "lavalink.serenetia.com",
      port: 443,
      secure: true
    },

    // Version 4.0.8 Hosted by Weiss Owl
    {
      name: "Alfari V4.0.8",
      password: "catfein",
      host: "lavalink.alfari.id",
      port: 443,
      secure: true
    },

    // Version 4.0.8 | Lavalink by Patryk
    {
      name: "Muzykant V4.0.8",
      password: "https://discord.gg/v6sdrD9kPh",
      host: "lavalink_v4.muzykant.xyz",
      port: 443,
      secure: true
    },

    // Version 3.7.13 | Lavalink by Patryk
    {
      name: "Muzykant V3.7.13",
      password: "https://discord.gg/v6sdrD9kPh",
      host: "lavalink_v3.muzykant.xyz",
      port: 443,
      secure: true
    },

    // Version 3.7.13 (NO YT) | Lavalink by Patryk
    {
      name: "Muzykant V3.7.13 (NO YT)",
      password: "https://discord.gg/v6sdrD9kPh",
      host: "lavalink_v3_no_yt.muzykant.xyz",
      port: 443,
      secure: true
    }
  ]
};

