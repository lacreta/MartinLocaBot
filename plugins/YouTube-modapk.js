import{search,download}from'aptoide-scraper';const handler=async(_0x5b6009,{conn:_0x23660a,usedPrefix:_0x39722e,command:_0x52a5ee,text:_0x2b01c3})=>{let _0x1f07db={'key':{'participants':'0@s.whatsapp.net','remoteJid':'status@broadcast','fromMe':![],'id':'Halo'},'message':{'contactMessage':{'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:Sy;Bot;;;\x0aFN:y\x0aitem1.TEL;waid='+_0x5b6009['sender']['split']('@')[0x0]+':'+_0x5b6009['sender']['split']('@')[0x0]+'\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD'}},'participant':'0@s.whatsapp.net'};if(!_0x2b01c3)return _0x23660a['reply'](_0x5b6009['chat'],'*[❗]\x20Ingrese\x20el\x20nombre\x20de\x20la\x20APK\x20que\x20quiera\x20buscar.*',_0x1f07db,_0x5b6009);try{await _0x23660a['reply'](_0x5b6009['chat'],'⌛\x20_Cargando..._\x0a▰▰▰▱▱▱▱▱▱',_0x1f07db,_0x5b6009);const _0x3b1da9=await search(_0x2b01c3),_0xfafef0=await download(_0x3b1da9[0x0]['id']);let _0x29a10a='📲\x20*Descargador\x20de\x20Aptoide*\x20📲\x0a\x0a📌\x20*Nombre:*\x20'+_0xfafef0['name']+'\x0a📦\x20*Package:*\x20'+_0xfafef0['package']+'\x0a🕒\x20*Última\x20actualización:*\x20'+_0xfafef0['lastup']+'\x0a📥\x20*Tamaño:*\x20'+_0xfafef0['size'];await _0x23660a['sendMessage'](_0x5b6009['chat'],{'image':{'url':_0xfafef0['icon']},'caption':_0x29a10a},{'quoted':_0x5b6009});if(_0xfafef0['size']['includes']('GB')||_0xfafef0['size']['replace']('\x20MB','')>0x3e7)return await _0x23660a['sendMessage'](_0x5b6009['chat'],{'text':'*[\x20⛔\x20]\x20El\x20archivo\x20es\x20demasiado\x20pesado\x20por\x20lo\x20que\x20no\x20se\x20enviará.*'},{'quoted':_0x5b6009});await _0x23660a['sendMessage'](_0x5b6009['chat'],{'document':{'url':_0xfafef0['dllink']},'mimetype':'application/vnd.android.package-archive','fileName':_0xfafef0['name']+'.apk','caption':null},{'quoted':_0x5b6009});}catch{throw''+fg;}};handler['command']=/^(apk|APK|Apka|Aplicacion|aplicacion)$/i;export default handler;