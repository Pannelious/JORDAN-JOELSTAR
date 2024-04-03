const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="Jordanzzz4444@gmail.com"
global.location="Edo,Nigeria."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Pannelious:masterpeace@atlascluster.ykfgwfj.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/Pannelious/MASTERPEACE-2637";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/LIc0X3xdxqB4SLCTRGydcy";
global.website=process.env.GURL || "https://chat.whatsapp.com/LIc0X3xdxqB4SLCTRGydcy" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b4a13299fe06a1450c1ad.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "263732872101" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "admin";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263732872101";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2,
global.disablepm = process.env.DISABLE_PM || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "https://telegra.ph/file/aba00eaf92da25574b507.mp4",
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "263732872101";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "263732872101";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Gifted Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©MASTERPEACE 🕸️" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Masterpeace ᴛᴇᴄʜ 』```", //*『sᴜʙsᴄʀɪʙᴇ • ɢɪғᴛᴇᴅ ᴛᴇᴄʜ』*\n https://chat.whatsapp.com/Dvsj2VsVyJf829LOsEzjtJ"),
 
  author : process.env.PACK_AUTHER|| "MASTERPEACE🤖",
  packname: process.env.PACK_NAME || "MASTERPEACE🤖",
  botname : process.env.BOT_NAME  || "MASTERPEACE 🤖",
  ownername:process.env.OWNER_NAME|| "MASTERPEACE",

  sessionName:process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0lJVjQ1Yk8zNzR3bFVQeHF2Q3lWRHJNL0FUeVluZUI3aFNFYysrR0YwND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUF3eEttbjhMYTFESjQ1VU1FZmp1M0dWQXlveS9SVm4yTlZWMk1aOEJ3RT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjT3VkTi9XSzhHS2VEeFM1dC9FeDVubS9TVDRzVmpZNWVvWjFrcFJvT1YwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpajNTR0lIMUNoSFI2L3FlMEFOVFQyZnFiMVZ0ejJnaFltZkVpL0RyRlJrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVKNU5GdnJHQWwvbms0RE5laHRmaVFUUHZOZG9KK21QWWpvYllWWHo3Vnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZUL1doVjFWZCthVE44Q1JaMFppRkxFN1duMXVOSlUxMm9rUkVQSzgwQjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUp1eE5rRjluRlN6eEMwYi9qRHdOU2hCT1hUTkNMcFpVUmpTOXFGWjhWYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNENlMUJRMDRFY2o2bElqMHJZTGRndTdTUEtuQ3ZDZTRWcHBVVXFjbkcxTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJWUHFaT3FlL2NHTVJ6ZVNvQXg3ZUwzZXB5OHZPWThHS1lPaVN6dFpPY2lCcEJhUHpIRXR1QTBEVnYwcjJ5SGZyb1B1T0ZvT0RDUGJVMURrMy9mOGl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ2LCJhZHZTZWNyZXRLZXkiOiJ5YWd1WTkzU2RqY1JKL2tQeDhhRXIzc3pwOEpocit3OVVPbHFPMjlBdVNVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJqdm03U1RXOFFuLWI1QnlTSXZzNnVnIiwicGhvbmVJZCI6Ijg2ZWI5ODM4LThiOWUtNDQzNy05ZGFiLWU3YWUxODAxY2Y4MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrbnBPdi9nQktTVWRWTG9uTzRsZmpzaTF3NWc9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhtcURWNlBDdVRkd1VhWnZtMXhUWkVKbExrTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xYeHpkd0VFTTM3bnJBR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjZFZEpnWnV2cUZ3R3Q2OEJ2T0NlcjFKTUJaVkhHL2J2NWRqODFyMVpoaVU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjY3QWVTYlVhNTdlUW0vdzhYS0JjeFNVa2RmbXNvRmJaUkthNk53bUpSVGhGaXdDQk1JV0JiZGQ2QUZjclpjOCt0Vk1SUk9pSWZyL2NjdnlOSFNRREN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJyaEVESE1tSlM5VGFVUHZwTHRyWG9sWVBBTGk0ZW8rVisvUzRUanZDc2hKZ0FLckFoQ1hDdm84VTIvMkJRMFBxYnl0eUZYS2JWK3RnZ2hPdjA2S25qZz09In0sIm1lIjp7ImlkIjoiMjc2NzgxMzkwNzM6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwn5KIxaTFts6yxJTFlPCfkogifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc2NzgxMzkwNzM6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlaEhTWUdicjZoY0JyZXZBYnpnbnE5U1RBV1ZSeHYyNytYWS9OYTlXWVlsIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzExNzgzMzc2fQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "diVYfA5PJpwMSDrMCj2BYbnc",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "5826aaa5-a5e6-416d-bd26-bf54274c88f3",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "1",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "b83709a7a0691e09fbe13db39068056a",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "MASTERPEACE 2637 🤖",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 5,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "true",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
