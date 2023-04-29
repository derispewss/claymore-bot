// deris
let deris = [
    1500, 6000, 6000, 12000, 5000, 6000, 2500, 1500, 1500, 3000,
    1500, 12000, 2000, 2000, 500, 2000, 1000,5000, 5000,1000, 4500,
    4500, 4500, 1000, 1000
];

// jumlah deris
let td = 0;
for (let i = 0; i < deris.length; i++) {
td += deris[i];
}

// atha
let atha = [
    5000, 2000, 5000
];

// jumlah atha
let ta = 0;
for (let i = 0; i < atha.length; i++) {
ta += atha[i];
}

// faiz
let faiz = [
    
];

// jumlah faiz
let tf = 0;
for (let i = 0; i < faiz.length; i++) {
tf += faiz[i];
}

let handler =  m => m.reply(`
DATA SALDO ADMIN CLAYMORE

1. Deris F
Jumlah pembeli : 25
Saldo yang di dapat : Rp.*${td}*,-
2. Atha G
Jumlah pembeli : 2
Saldo yang di dapat : Rp.*${ta}*,-
3. Faiz E
Jumlah pembeli : 0
Saldo yang di dapat : Rp.*${tf}*,-

// note
- Jika buyer chat kontak kalian dan beli produk, itu terhitung pembeli
- Ayo tarik pelanggan dan cuan bersama 
`.trim()) // Tambah sendiri kalo mau
handler.help = ['admin']
handler.tags = ['info']
handler.command = /^(admin|admin|\?)$/i

handler.admin = true

export default handler