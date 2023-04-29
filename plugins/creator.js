function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['seller', 'seller']
handler.tags = ['info']

handler.command = /^(seller|seller)$/i

export default handler
