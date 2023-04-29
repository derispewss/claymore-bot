let handler =  m => m.reply(`
*CLAYMORE STORE*

*list menu claymore store*

*.mla*
*.mlb*
*.payment*
*.joki*
*.weekly*

// admin
*.saldo*
*.admin*
ketik menu tersebut , jika ingin mengetahui isi menu tersebut...
`.trim()) // Tambah sendiri kalo mau
handler.help = ['list']
handler.tags = ['info']
handler.command = /^(list|list|\?)$/i

export default handler
