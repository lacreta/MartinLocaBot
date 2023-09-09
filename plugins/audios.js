const handler = (_0x30eb34) => _0x30eb34;

handler['all'] = async function (_0x1f05aa, { conn: _0x4499a9 }) {
  const _0x51ea07 = global['db']['data']['chats'][_0x1f05aa['chat']];
  
  // Verificar si el mensaje de texto coincide con ciertas palabras clave
  if (/^(hola|Hola|Holis|ola)$/i.test(_0x1f05aa['text']) && _0x51ea07['audios'] && !_0x51ea07['isBanned']) {
    let _0x7efc1a = './lib/img/Hola.mp3';
    
    // Enviar un mensaje de audio de saludo al chat
    this['sendPresenceUpdate']('recording', _0x1f05aa['chat']);
    this['sendMessage'](_0x1f05aa['chat'], {
      'audio': {
        'url': _0x7efc1a
      },
      'fileName': 'error.mp3',
      'mimetype': 'audio/mp4',
      'ptt': !![]
    }, { 'quoted': _0x1f05aa });
  }
  
  // Verificar si el mensaje de texto contiene ciertas palabras clave
  if (!_0x51ea07['isBanned'] && _0x51ea07['audios'] && _0x1f05aa['text'].match(/(descargas|Descargas|DESCARGAS)/gi)) {
    let _0x4da7c2 = './lib/img/miku.mp3';
    
    // Enviar un mensaje de audio relacionado con "miku" al chat
    this['sendPresenceUpdate']('recording', _0x1f05aa['chat']);
    this['sendMessage'](_0x1f05aa['chat'], {
      'audio': {
        'url': _0x4da7c2
      },
      'fileName': 'error.mp3',
      'mimetype': 'audio/mp4',
      'ptt': !![]
    }, { 'quoted': _0x1f05aa });
  }
  
  // Verificar si el mensaje de texto coincide con las palabras clave "luz," "Luz," o "lu"
  if (/^(luz|Luz|lu|Lu)$/i.test(_0x1f05aa['text']) && _0x51ea07['audios'] && !_0x51ea07['isBanned']) {
    let _0x7efc1a = './lib/img/Luz.mp3';
    
    // Enviar un mensaje de audio relacionado con "luz" al chat
    this['sendPresenceUpdate']('recording', _0x1f05aa['chat']);
    this['sendMessage'](_0x1f05aa['chat'], {
      'audio': {
        'url': _0x7efc1a
      },
      'fileName': 'error.mp3',
      'mimetype': 'audio/mp4',
      'ptt': !![]
    }, { 'quoted': _0x1f05aa });
  }
  
  // Verificar si el mensaje de texto coincide con las palabras clave relacionadas con "muerto"
  if (/^(semurio|murio|muelto|muerto|mueito|Mueito|Semurio|Murio|Muelto|Muerto|murio|Murio)$/i.test(_0x1f05aa['text']) && _0x51ea07['audios'] && !_0x51ea07['isBanned']) {
    let _0xmuertoAudio = './lib/img/semurio.mp3';
    
    // Enviar un mensaje de audio relacionado con "muerto" al chat
    this['sendPresenceUpdate']('recording', _0x1f05aa['chat']);
    this['sendMessage'](_0x1f05aa['chat'], {
      'audio': {
        'url': _0xmuertoAudio
      },
      'fileName': 'error.mp3',
      'mimetype': 'audio/mp4',
      'ptt': !![]
    }, { 'quoted': _0x1f05aa });
  }
  
  return !0x0;
};

export default handler;
