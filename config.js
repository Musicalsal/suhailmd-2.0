const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "true" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "true" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254746314005";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_13_11_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU5LFxuICAgICAgICA2NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgODgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTEsXG4gICAgICAgIDkyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM0LFxuICAgICAgICA1LFxuICAgICAgICA4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwLFxuICAgICAgICA1MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDM0LFxuICAgICAgICAxMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgNjgsXG4gICAgICAgIDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDk5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDksXG4gICAgICAgIDI1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI2LFxuICAgICAgICA5MixcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjksXG4gICAgICAgIDg1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDQsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgODUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDksXG4gICAgICAgIDQ0LFxuICAgICAgICAxLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTIsXG4gICAgICAgIDc4LFxuICAgICAgICA5NixcbiAgICAgICAgODAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDMyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDUzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMixcbiAgICAgICAgMzIsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc1LFxuICAgICAgICA0LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImNHR05tR1dpNUl3RllOR3FyRlUvVjJObFBpWHVtT0VRd2dIcnhJeWtTbzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInFJZThycmlwU3QyOVZKTXFlYzBJU0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzYxMThlMWYtYmIwMi00MDlmLWE0MGEtZDcwNTY5YTczMThjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk3LFxuICAgICAgMTIxLFxuICAgICAgMTQyLFxuICAgICAgMjI5LFxuICAgICAgODksXG4gICAgICA2LFxuICAgICAgOTAsXG4gICAgICA0MixcbiAgICAgIDU1LFxuICAgICAgNjYsXG4gICAgICAyMDAsXG4gICAgICAxMTUsXG4gICAgICAxMTQsXG4gICAgICAyMTksXG4gICAgICAxMTgsXG4gICAgICAxMzcsXG4gICAgICA2NixcbiAgICAgIDY5LFxuICAgICAgMTU1LFxuICAgICAgNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUzLFxuICAgICAgODcsXG4gICAgICAxODIsXG4gICAgICAxNDUsXG4gICAgICAyMjIsXG4gICAgICAxOTQsXG4gICAgICAxNzUsXG4gICAgICAzOCxcbiAgICAgIDEzMyxcbiAgICAgIDIwNyxcbiAgICAgIDE1OSxcbiAgICAgIDY3LFxuICAgICAgNSxcbiAgICAgIDUyLFxuICAgICAgMTg3LFxuICAgICAgMjgsXG4gICAgICA3NCxcbiAgICAgIDIxOCxcbiAgICAgIDIxOSxcbiAgICAgIDIzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyTVBRSDZaOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzQ2MzE0MDA1OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0OTcyMzE4ODczMjEyMDoxNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNK3l4T3dERUppcG03b0dHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjNYdlFFR0NWZ1E1RE9OZGNES0xtUHpOS2djWVkrMktaMWREeCtUNkF1eUk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwia0NRRWV5VklQMFkyRWdBN21XWWVqN3UrVDZpd0s4dFJ4Q3BkaXV3SVVmSllma3BXRzlOYVFwUE5JOThnUWdBbCtCelprV0hkVHJtTTcyU25NY2FMQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNmwyVFN2eHc2T0VwYytlaWMxaU4zTTBCOElQSHYxR0kyZ3ROWXRqdk9UTWRiTFRTV3JPZHZQM1ZCVkJvemxTWGxJYVpyNHBxNjVzdFFJeHdTYmV1aHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQ2MzE0MDA1OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTYy="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "3", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Hacky_Sal",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
