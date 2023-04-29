const pp = '.src/qris.jpeg'
let handler =  m => m.reply(`
CLAYMORE STORE
*PAYMENT*

DANA : 082324075079 | DERIS
GOPAY : 082324075079 | DERIS FIRMANSYAH / RITA ANDRIANI
QRIS : READY !!
`.trim()) // Tambah sendiri kalo mau
handler.help = ['payment']
handler.tags = ['info']
handler.command = /^(payment|payment|\?)$/i

export default handler
