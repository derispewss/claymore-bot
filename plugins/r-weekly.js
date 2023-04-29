let handler =  m => m.reply(`
*CLAYMORE STORE*

*weekly pass diamond*

Status : ✅️
harga : Rp. 28.000,-

Ketik .order untuk order !!
`.trim()) // Tambah sendiri kalo mau
handler.help = ['weekly']
handler.tags = ['info']
handler.command = /^(weekly|weekly|\?)$/i

export default handler