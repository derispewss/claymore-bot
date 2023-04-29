// contoh array
let data = [
    1500, 6000, 6000, 12000, 5000, 6000, 2500, 1500, 1500,
    3000, 1500, 12000, 2000, 2000, 500, 2000, 2000, 1000,
    5000, 5000, 1000, 4500, 4500, 5000, 4500, 1000, 1000
];

// menambahkan setiap nilai dalam array
let total = 0;
for (let i = 0; i < data.length; i++) {
total += data[i];
}

let handler =  m => m.reply(`
SALDO CLAYMORE STORE
Sebesar : Rp. *${total}*,-
`.trim()) // Tambah sendiri kalo mau

handler.help = ['saldo']
handler.tags = ['info']
handler.command = /^(saldo|saldo|\?)$/i

handler.owner = false
handler.admin = true

export default handler

