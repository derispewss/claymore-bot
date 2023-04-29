let handler =  m => m.reply(`
JOKI CLAYMORE STORE

HARGA PER BINTANG/PER POINT
Master 2000
GM 3000
Epic 4000
Legend 5500
Mitik 2000
Glory (pm admin)

HARGA PAKETAN
master-gm 40k
Gm-epic 65k
Epic -legend 105k
Legend-mitik 130k
Grading- 155k

Ketik .order untuk order !!
`.trim()) // Tambah sendiri kalo mau
handler.help = ['joki']
handler.tags = ['info']
handler.command = /^(joki|joki|\?)$/i

export default handler
