import _0x1880d6 from'node-fetch';import _0x5512d4 from'axios';import{load}from'cheerio';let handler=async(_0x2cfa2d,{text:_0x52c4c8,usedPrefix:_0x26a78f,command:_0x26f307,conn:_0x3439be})=>{let _0x532b1e={'key':{'participants':'0@s.whatsapp.net','remoteJid':'status@broadcast','fromMe':![],'id':'Halo'},'message':{'contactMessage':{'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:Sy;Bot;;;\x0aFN:y\x0aitem1.TEL;waid='+_0x2cfa2d['sender']['split']('@')[0x0]+':'+_0x2cfa2d['sender']['split']('@')[0x0]+'\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD'}},'participant':'0@s.whatsapp.net'};if(!_0x52c4c8)return _0x3439be['reply'](_0x2cfa2d['chat'],'*[❗]ɪɴɢʀᴇsᴀ\x20ᴇʟ\x20ɴᴏᴍʙʀᴇ\x20\x20de\x20pelis\x20ǫᴜᴇ\x20ǫᴜɪᴇʀᴇs*',_0x532b1e,_0x2cfa2d);await _0x3439be['reply'](_0x2cfa2d['chat'],'⌛\x20_Cargando..._\x0a▰▰▰▱▱▱▱▱▱',_0x532b1e,_0x2cfa2d);let _0x3dae74,_0x3a28fa;try{_0x3dae74=await searchC(_0x52c4c8),_0x3a28fa='https://cinefilosoficial.com/wp-content/uploads/2021/07/cuevana.jpg';}catch{_0x3dae74=await searchP(_0x52c4c8),_0x3a28fa='https://elcomercio.pe/resizer/RJM30xnujgfmaODGytH1rRVOrAA=/400x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/BJ2L67XNRRGHTFPKPDOEQ2AH5Y.jpg';}if(_0x3dae74=='')throw'*[❗]\x20𝙽𝙾\x20𝚂𝙴\x20𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙾\x20𝙽𝙸𝙽𝙶𝚄𝙽𝙰\x20𝙿𝙴𝙻𝙸𝙲𝚄𝙻𝙰*';let _0x2ca7dc=await _0x3dae74['map'](_0x226451=>'*🎬\x20•\x20Nombre:*\x20'+_0x226451['title']+'\x0a*🍿\x20•\x20Url:*\x20'+_0x226451['link'])['join']`\n\n───────────────\n\n`,_0x223fcc='*💫\x20•\x20Bloqueador\x20de\x20anuncios\x20recomendado:*\x20Block\x20This\x0a*⛨\x20•\x20Link:*\x20https://block-this.com/block-this-latest.apk\x0a\x0a≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣\x0a\x0a';_0x3439be['sendMessage'](_0x2cfa2d['chat'],{'image':{'url':_0x3a28fa},'caption':_0x223fcc+_0x2ca7dc},{'quoted':_0x2cfa2d});};handler['command']=['cuevana','pelisplus'];export default handler;const safeLoad=async(_0x1d4126,_0x47e375={})=>{try{const {data:_0x427e1e}=await _0x5512d4['get'](_0x1d4126,_0x47e375),_0x3b5339=load(_0x427e1e);return _0x3b5339;}catch(_0x54f5a6){if(_0x54f5a6['response'])throw new Error(_0x54f5a6['response']['statusText']);throw _0x54f5a6;}};async function searchC(_0x5e17de,_0x418305=0x1){const _0x9d259e=await safeLoad('https://cuevana3.mu/page/'+_0x418305+'/',{'params':{'s':_0x5e17de}}),_0x5c325e=[];return _0x9d259e('.results-post\x20>\x20article')['each']((_0xb40234,_0x242d8f)=>{const _0x22d165=_0x9d259e(_0x242d8f),_0x1018b3=_0x22d165['find']('header\x20>\x20h2')['text'](),_0x201749=_0x22d165['find']('.lnk-blk')['attr']('href');_0x5c325e['push']({'title':_0x1018b3,'link':_0x201749});}),_0x5c325e;}async function searchP(_0x4b451e,_0x44d2da=0x1){const _0x3c82ea=await safeLoad('https://pelisplushd.cx/search/',{'params':{'s':_0x4b451e,'page':_0x44d2da}}),_0x3cba3d=[];return _0x3c82ea('a[class^=\x27Posters\x27]')['each']((_0x5dc8cd,_0x12f867)=>{const _0x1e68b8=_0x3c82ea(_0x12f867),_0x515918=_0x1e68b8['find']('.listing-content\x20>\x20p')['text'](),_0x28d9e6=_0x1e68b8['attr']('href');_0x3cba3d['push']({'title':_0x515918,'link':_0x28d9e6});}),_0x3cba3d;}