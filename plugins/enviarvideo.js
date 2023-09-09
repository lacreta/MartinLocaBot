let handler = async (_0x2be075, { conn: _0x5dbab6 }) => {
    try {
      let _0x11096e = './lib/img/perdonenme.mp4'; // Reemplaza 'URL_DEL_VIDEO.mp4' con la URL real del video que deseas enviar
  
      if (_0x2be075['isGroup']) {
        _0x5dbab6['sendMessage'](_0x2be075['chat'], {
          'video': {
            'url': _0x11096e,
            'mimetype': 'video/mp4',
            'caption': '' // Puedes agregar un texto opcional aquí si lo deseas
          }
        }, { 'quoted': _0x2be075 });
      } else {
        const _0x102aa1 = {
          'key': {
            'participants': '0@s.whatsapp.net',
            'remoteJid': 'status@broadcast',
            'fromMe': ![],
            'id': 'Halo'
          },
          'message': {
            'contactMessage': {
              'vcard': 'BEGIN:VCARD\x0aVERSION:3.0\x0aN:Sy;Bot;;;\x0aFN:y\x0aitem1.TEL;waid=' + _0x2be075['sender']['split']('@')[0x0] + ':' + _0x2be075['sender']['split']('@')[0x0] + '\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD'
            }
          },
          'participant': '0@s.whatsapp.net'
        };
  
        _0x5dbab6['sendMessage'](_0x2be075['chat'], {
          'video': {
            'url': _0x11096e,
            'mimetype': 'video/mp4',
            'caption': '' // Puedes agregar un texto opcional aquí si lo deseas
          }
        }, { 'quoted': _0x102aa1 });
      }
    } catch {}
  };
  
  handler['command'] = /^(perdonenme|Perdonenme|losiento|Losiento|ecuseme|Ecuseme|Excuseme|sorry|Sorry)$/i;
  
  export default handler;
  