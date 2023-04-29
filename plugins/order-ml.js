let handler =  m => m.reply(`
*FORMAT ORDER MLBB*

ID & SERVER :
Nickname:
Nominal order :

ketik .seller untuk mengirimkan data dan bukti transfer
`.trim())
handler.help = ['order']
handler.tags = ['info']
handler.command = /^(order|order|\?)$/i

export default handler
