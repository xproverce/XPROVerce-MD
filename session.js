//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                     XPROVERCE MD NEW                                               //
//                                                                                                      //
//                                         Ｖ：1.0                                                       //
//                                                                                                      //
//
//                      ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
//                      █▄▀█▀▄██░▄▄░██░▄▄▀██░▄▄▄░████░███░██░▄▄▄██░▄▄▀██░▄▄▀██░▄▄▄
//                      ███░████░▀▀░██░▀▀▄██░███░█████░█░███░▄▄▄██░▀▀▄██░█████░▄▄▄
//                      █▀▄█▄▀██░█████░██░██░▀▀▀░█████▄▀▄███░▀▀▀██░██░██░▀▀▄██░▀▀▀
//                      ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © XPROVerce MD
//  * @version      : 1.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
// ⛥┌┤
// */
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "```XPRO~pf2CLsy8```",
PORT: process.env.PORT || "8000"
};
