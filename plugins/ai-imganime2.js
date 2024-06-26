import uploadImage from '../lib/uploadImage.js';

const handler = async (m, {conn, text, args, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || q.mediaType || '';

  if (!/image/g.test(mime)) throw 'Where is the image? You must attach an image with the command.';

  m.reply('_Please wait for the image..._');
  const data = await q.download?.();
  const image = await uploadImage(data);

  try {
    const anime = `https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolkeysapi}&img=${image}`;
    await conn.sendFile(m.chat, anime, 'error.jpg', null, m);
  } catch (i) {
    try {
      const anime2 = `https://api.zahwazein.xyz/photoeditor/jadianime?url=${image}&apikey=${keysxxx}`;
      await conn.sendFile(m.chat, anime2, 'error.jpg', null, m);
    } catch (a) {
      try {
        const anime3 = `https://api.caliph.biz.id/api/animeai?img=${image}&apikey=caliphkey`;
        await conn.sendFile(m.chat, anime3, 'error.jpg', null, m);
      } catch (e) {
        throw 'Error in DALL-E 2 API number 1. Please try again.';
      }
    }
  }
};

handler.help = ['toanime'];
handler.tags = ['transformer'];
handler.command = /^(imganime2)$/i;
handler.premium = true
export default handler;