const os = require("os");
const packageJson = require("./package.json"); // Get package details

module.exports = {
  //====================menu=================================
  MENUMSG: function (pushname, config) {
    return `
> [✨ Tharun's AI Assistant ✨]
> 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*
> ==========================
> ♠ 𝙾𝚠𝚗𝚎𝚛  : ${config.OWNER_NAME}
> ♠ 𝙼𝚎𝚖    : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB
> ==========================`.trim();
  },
  //======================download============================
  TIKTOK: function (datas,pushname, q) {
    return `
> [✨ Tharun's AI Assistant ✨]
> 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*
> [ T I K T O K  D L ]
> ========================
> * Title  * ${datas.title}
> * Author * ${datas.author}
> * URL    * ${q}
> ========================`.trim();
  },
  FACEBOOK: function (title,pushname, q) {
    return `
> [✨ Tharun's AI Assistant ✨]
> 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*
> [ F A C E B O O K  D L ]
> =======================
> *TITLE* - ${title}
> *Url*   - ${q} 
> =======================`.trim();
  },
  TWITTER: function (videoDescription, videoTitle,pushname) {
    return `
${config.BOTNAME || "> [✨ Tharun's AI Assistant ✨]"}
> 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*
> [ T W I T T E R  D L ]
> =======================
> *Desc*  : ${videoDescription || "N/A"}
> *Title* : ${videoTitle}
> =======================`.trim();
  },
  DIRECT: function(pushname,fileName,fileSize,fileType){
    return `
"> [✨ Tharun's AI Assistant ✨]
> 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*      
> [ D I R E C T  D L ]
> =======================        
> *File Name:* ${fileName}
> *File Size:* ${fileSize}
> *File Type:* ${fileType}
> =======================`
  },
  MEDIAFIRE: function(pushname,data,fileSize){
    return `
> [✨ Tharun's AI Assistant ✨]
> 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*
> [ M E D I A F I R A ]
> ======================
> *File Name:* ${data.title}
> *File Size:* ${fileSize}
> ======================`
  },
  APK: function(pushname,data,correctsize) {
    return `
> [✨ Tharun's AI Assistant ✨]
> 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*
> [ A P K  D L ]
> =======================
> *Nᴀᴍᴇ :* ${data.datalist.list[0].name}
> *Sɪᴢᴇ :* ${correctsize}MB
> *Pᴀᴄᴋᴀɢᴇ :* ${data.datalist.list[0].package}
> *Lᴀꜱᴛ Uᴘᴅᴀᴛᴇ :* ${data.datalist.list[0].updated}
> *Dᴇᴠᴇʟᴏᴘᴇʀꜱ :* ${data.datalist.list[0].developer.name}
> =======================`
  },
  SPOTIFY: function(pushname,item) {
    return `
${config.BOTNAME || "> [✨ Tharun's AI Assistant ✨]"}
> 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*
> [ S P O T I F Y  D L ]
> =====================
> *Title*  :${item.trackName}
> *Artist* : ${item.artistName}
> *Album*  : ${item.albumName}
> *Duration*: ${item.duration}
> *URL*: [Click Here](${item.externalUrl})
> =====================`
  },
  //=================main==================================
  IMG: "https://i.ibb.co/GSZTRmw/IMG-4873.png",
  ALIVEVOICE: "./src/media/Auto_voice/alive.aac",
  MOVIETITLE: "> *『⚡ Tharun's AI Assistant CINEMA 』*",
  ALIVEMSG: function (config, pushname, runtime) {
    return `
    > [✨ Tharun's AI Assistant ✨]
    > 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*
    > [  A  L  I  V  E  ]
    > =======================
    > ✘◍ 𝗜'𝗺 𝗔𝗹𝗶𝘃𝗲, 𝗧𝗵𝗮𝗻𝗸𝘀 𝗳𝗼𝗿 𝗔𝘀𝗸𝗶𝗻𝗴!
    >>>>>>>>>>>>>>>>>>>>>>>>>
    ┏━━━━❮𝑻𝑶𝑫𝑎𝒚❯━━━━
    ┃ *${new Date().toLocaleDateString("en-GB", {timeZone: "Asia/Colombo",})}*
    ┃ *${new Date().toLocaleTimeString("en-GB", {timeZone: "Asia/Colombo",})}*
    ┗━━━━━━━━━━━━━━━
    >>>>>>>>>>>>>>>>>>>>>>>>>
    ┏━━━━❮𝗦𝘁𝗮𝘁𝘂𝘀 𝗗𝗲𝘁𝗮𝗶𝗹𝘀❯━━━
    ┃𝙼𝚘𝚍𝚎 : ${config.MODE}
    ┃𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
    ┃𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB
    ┗━━━━━━━━━━━━━━━
    > ======================`.trim();
  },
  //====================movie======================================
  GROUP: function (groupName, config,oce) {
    return `
> 📨 *𝙎𝙝𝙖𝙧𝙚𝙙 𝙄𝙣:* ${oce}${groupName}${oce}
> 🛡️ *𝘼𝙙𝙢𝙞𝙣:* ${oce}${config.MNAME}${oce}`.trim();
  },
  SINHALASUB: function (movieData,oce) {
    return `
> *『⚡ Tharun's AI Assistant CINEMA 』*
> =====================
> 🎬 *Title:* ${oce}${movieData.title}${oce}
> 📝 *Tagline:* ${oce}${movieData.metadata.tagline || "N/A"}${oce}
> ⭐ *IMDb:* ${oce}${movieData.metadata.imdbRating || "N/A"}${oce}
> 🗓️ *Year:* ${oce}${movieData.metadata.year}${oce}
> 🌍 *Country:* ${oce}${movieData.metadata.country}${oce}
> 🎭 *Genres:* ${oce}${movieData.metadata.genres.join(", ")}${oce}
> ⏱️ *Duration:* ${oce}${movieData.metadata.duration}${oce}
> 🗣️ *Language:* ${oce}${movieData.metadata.language}${oce}
> 👨‍💻 *Subtitle By:* ${oce}${movieData.metadata.subtitleAuthor}${oce}
> 🌐 *Subtitle Site:* ${oce}${movieData.metadata.subtitleSite}${oce}
> =====================
> 📌 *Description:*  
> ${oce}_${movieData.description}_${oce}`.trim();
  },
  CINESUBZ: function (title, metadata, rating,tagline,genres,quality,description,oce) {
    return `
> *『⚡ Tharun's AI Assistant CINEMA 』*
> =====================
> 🎬 *Title:* ${oce}${title}${oce}
> 📝 *Tagline:* ${oce}${tagline || "N/A"}${oce}
> ⭐ *IMDb:* ${oce}${typeof rating === 'object' ? rating.value : rating}${oce}
> 🗓️ *Year:* ${oce}${metadata?.year || "N/A"}${oce}
> 🌍 *Country:* ${oce}${metadata?.country || "N/A"}${oce}
> 🎭 *Genres:* ${oce}${genres}${oce}
> ⏱️ *Duration:* ${oce}${metadata?.runtime || metadata?.duration || "N/A"}${oce}
> 🗣️ *Language:* ${oce}${metadata?.language || "English"}${oce}
> 👨‍💻 *Subtitle By:* ${oce}${metadata?.subtitleBy || "N/A"}${oce}
> 📊 *Quality:* ${oce}${quality}${oce}
> =====================
> 📌 *Description:*  
> ${oce}_${description ? description.substring(0, 400) + (description.length > 400 ? "..." : "") : "No description available."}_${oce}`.trim();
  },
  CINETVSHOW: function (episodeInfo,quality,oce) {
    return `
> *『⚡ Tharun's AI Assistant CINEMA 』*
> =====================
> 📺 *Series:* ${oce}${episodeInfo.series || "N/A"}${oce}
> 🎬 *Episode:* ${oce}${episodeInfo.seasonEpisode || "N/A"}${oce}
> 🏷️ *Title:* ${oce}${episodeInfo.episodeTitle || "N/A"}${oce}
> 📅 *Date:* ${oce}${episodeInfo.date || "N/A"}${oce}
> ⭐ *Rating:* ${oce}${episodeInfo.rating?.value || "N/A"}/10${oce}
> 📊 *Quality:* ${oce}${quality || "480p"}${oce}
> =====================
> 📌 *Episode Info:*
> ${oce}_${episodeInfo.title || "No additional information available."}_${oce}`.trim();
  },
  CINETVSHOWALLDL: function (seriesTitle,rating,metadata,genres,movieData,oce) {
    return `
> *『⚡ Tharun's AI Assistant CINEMA 』*
> =====================
> 🎬 *Series:* ${oce}${seriesTitle}${oce}
> ⭐ *IMDb:* ${oce}${rating}${oce}
> 🗓️ *Year:* ${oce}${metadata.year || "N/A"}${oce}
> 🎭 *Genres:* ${oce}${genres}${oce}
> 📊 *Seasons:* ${oce}${movieData.seasons.length}${oce}
> 🌐 *Language:* ${oce}${metadata.language || "English"}${oce}
> =====================
> 📌 *Series Description:*  
> ${oce}_${movieData.description || "No description available."}_${oce}`.trim();
  },
  //=====================youtube===========================================
  SONG: function (data,pushname,oce) {
    return `
> [✨ Tharun's AI Assistant ✨]
> 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*
> ==========================
> ${oce}[  S  O  N  G    D  L  ]${oce}
> >>>>>>>>>>>>>>>>>>>>>>>>>>
> 🎶 *Title:* ${data.title}
> ⏱️ *Duration:* ${data.timestamp}
> 👁️ *Views:* ${data.views}
> 📅 *Uploaded On:* ${data.ago}
> 🔗 *Link:* ${data.url}
> >>>>>>>>>>>>>>>>>>>>>>>>>>
> =========================`.trim();
  },
  YTMP3: function (data) {
    return `
> [✨ Tharun's AI Assistant ✨]
> ==========================
> ➥ *Title:* ${data.title} 
> ➥ *Duration:* ${data.timestamp} 
> ➥ *Uploaded On:* ${data.ago} 
> ➥ *Link:* ${data.url}
> ==========================
        `.trim();
  },
  VIDEO: function (data,pushname,oce) {
    return  `
> [✨ Tharun's AI Assistant ✨]
> 𝙷𝚎𝚕𝚕𝚘 𝚃𝚑𝚎𝚛𝚎 *${pushname}*
> ==========================
> ${oce}[  Y O U T U B E    D  L  ]${oce}
> >>>>>>>>>>>>>>>>>>>>>>>>>>
> 🎶 *Title:* ${data.title}
> ⏱️ *Duration:* ${data.timestamp}
> 👁️ *Views:* ${data.views}
> 📅 *Uploaded On:* ${data.ago}
> 🔗 *Link:* ${data.url}
> >>>>>>>>>>>>>>>>>>>>>>>>>>
> =========================`.trim();
  },
  YTMP4: function (data) {
    return `
> [✨ Tharun's AI Assistant ✨]
> ==========================
> ➥ *Title:* ${data.title} 
> ➥ *Duration:* ${data.timestamp} 
> ➥ *Uploaded On:* ${data.ago} 
> ➥ *Link:* ${data.url}
> ==========================
        `.trim();
  },
};
