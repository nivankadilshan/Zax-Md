const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "zaxmd001@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dodoma";
global.github = process.env.GITHUB || "https://github.com/Xiangzaoh/Zax-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZlD9sHltY52Bg1Vy2k";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaZlD9sHltY52Bg1Vy2k";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://iili.io/JgAR7WJ.jpg";
global.devs = "255688930205";
global.sudo = process.env.SUDO || "94710646007";
global.owner = process.env.OWNER_NUMBER || "94710646007";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://zax-md-beae6ed77007.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "ZAX;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUF2MExiS2RVU3MrMXQ5TzVFQkJndkh0Z08vb2w0SlNpYWo0SnBnNjNGRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidTBKclE4OVJJdjdpclFWOWlrV0NiU3MweXhYZ2hHSWtSbERzNkczL3dGND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVT3YvQ2FPRTJOZGRqcllnbmtnRUFRVUxQOWxSOUZBZmQyK3lNRDk2Zkd3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWekxHWks2MzlNcVBYRU1Lbi9ZWTlhSkFWRFpPTFBwb1B0bXVsRDlvR2lrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktJQkcxVWZWQkZHVUU3bHR0SHZudllCM1FQVk5oNUhrQ0lTMUZkNHhKRWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBTR2VNdnFEanIwS3pTUEEvOUVUNDg5cjl6cW1Qb053Q1RwYXdEY0tPeVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0FpUDRNQkRJb3FJTWpPS1gyOTZNSGhPTVhrdVBDeEgvZGc3UFRFaDRHQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidzdOa3BDczFHZ01tNzhuZC9DUnkzdzFqWHd6VlRvckVvK3FVUU8xSkNSWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBiMEFiZXVQdEp4eXJFMFZBelRmK3hyZzdhbXF5V3JXVW4vcVJ6UExacDhjS0JmWm1xa002eVBVTnlWdURpdjlCUDUzVmVxMlo5QnpDQVg5eXM3MkN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI3LCJhZHZTZWNyZXRLZXkiOiJ0ck41c0JKemxjazg0WXNzUCswb285dkZjeWRaMWVqSmhtajRkNU8zRCs0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzEwNjQ2MDA3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjYwNUVCOUI5QUUzODNBNEQ5Nzc5NDNCMUFFNjVCOUMyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzQ3OTUzMzB9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzEwNjQ2MDA3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjIzRUIwQUE3NEQwNUYzQUQ4NTUyQUZBOTM3OTRGNTFDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzQ3OTUzMzF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImZoSjN6N1BuUXBhV1hjbHhJclF5bXciLCJwaG9uZUlkIjoiZjc2Mzk0OTQtZTQxNC00ZTA1LWI2N2ItOTMyZjRmZDQwMzYzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlllRDBHNzJNeVcvZno4SnhZeUxzWHA2UmJyTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQ2t2ZFV4U1FvTTlIcDRlVEt1WmJ3S0NOMW89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUEw1M1hZU1EiLCJtZSI6eyJpZCI6Ijk0NzEwNjQ2MDA3OjI5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Im5pd2Fua2FkaWxzaGFuMjYifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ08zRTZMNENFTEhBbTdzR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InZqWncxMENKcjRVbklrZEVUa1lnL1VSVDRKUklENXdHdWg0OXVwT0pJVHM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlRhTDdrWVFqT2NVVjg0cG5WNUZMV1FkNnVpeWxkbFQxYkxYOTZ5elRVNVBJNTdraWp2Y240SnZxSDE0RjN2ZkVKS0ZnMlExYWhTdVR0cXN3Q2NZcUNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJsVDViN0FHR0xhaUJDZWo5RkI4SlBrQ3dNNnpvUzBsUkM4MHMwbjhwamJCUm1aZHdQRDZFakZPMmx0SW5UZUhqMGJCb3dhaVJDTlRzaG5ucGxhYktCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzEwNjQ2MDA3OjI5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmI0MmNOZEFpYStGSnlKSFJFNUdJUDFFVStDVVNBK2NCcm9lUGJxVGlTRTcifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzQ3OTUzMjYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSGp3In0=";

module.exports = {
  menu: process.env.MENU || "menu1",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©zᴀxᴍᴅ",
  author: process.env.PACK_AUTHER || "zᴀx-ᴍᴅ",
  packname: process.env.PACK_NAME || "zᴀx-bot",
  botname: process.env.BOT_NAME || "zᴀx ᴍᴅ",
  ownername: process.env.OWNER_NAME || "Mr Nivanka",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "zᴀx").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
