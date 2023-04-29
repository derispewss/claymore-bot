let handler =  m => m.reply(`
untuk melihat menu ketik .list
`.trim())
handler.help = ['meno']
handler.tags = ['info']
handler.command = /^(menu|menu|\?)$/i

export default handler
