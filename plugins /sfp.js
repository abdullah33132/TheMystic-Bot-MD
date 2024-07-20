import fs from 'fs'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `اشر على الكود الذي تريد وضعه في البوت?\n\الاستخدام:\n${usedPrefix + command} <اسم الملف>\n\مثال:\n${usedPrefix + command} menu`
    if (!m.quoted.text) throw `balas pesan nya!`
    let path = `plugins/${text}.js`
    await fs.writeFileSync(path, m.quoted.text)
    m.reply(`تم الحفظ الملف في ${path}`)
}
handler.help = ['ضعه']
handler.tags = ['owner']
handler.command = /^sfp|ضعه$/i

export default handler
