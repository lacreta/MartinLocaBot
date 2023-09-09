import GoogleTTS from 'node-google-tts-api';
import fs from 'fs';

const handler = async (_0x30eb34) => {
  const { conn, command, args } = _0x30eb34;

  // Verifica si el comando es .tts o !tts
  if (['.tts', '!tts'].includes(command) && args.length > 0) {
    const textToSpeak = args.join(' ');

    // Utiliza la biblioteca node-google-tts-api para generar el audio
    const gtts = new GoogleTTS(textToSpeak);
    const audioBuffer = await gtts.getBuffer();

    // Guarda el audio en un archivo temporal
    const audioFileName = 'tts_audio.mp3';
    fs.writeFileSync(audioFileName, audioBuffer);

    // Envía el audio al chat
    conn.sendMessage(_0x30eb34.chat, { audio: audioFileName }, { quoted: _0x30eb34 });
  }
};

export default handler;
