import{generateWAMessageFromContent}from'@whiskeysockets/baileys';import*as _0x3af9cd from'fs';let handler=async(_0x328b41,{conn:_0xd16d7a,text:_0x968739,participants:_0x420ef0,isOwner:_0x547096,isAdmin:_0x3d0f82})=>{try{let _0x281f6a=_0x420ef0['map'](_0x480173=>_0xd16d7a['decodeJid'](_0x480173['id'])),_0x5ae760=_0x328b41['quoted']?_0x328b41['quoted']:_0x328b41||_0x328b41['text']||_0x328b41['sender'],_0x2a69fc=_0x328b41['quoted']?await _0x328b41['getQuotedObj']():_0x328b41['msg']||_0x328b41['text']||_0x328b41['sender'],_0x185c28=_0xd16d7a['cMod'](_0x328b41['chat'],generateWAMessageFromContent(_0x328b41['chat'],{[_0x328b41['quoted']?_0x5ae760['mtype']:'extendedTextMessage']:_0x328b41['quoted']?_0x2a69fc['message'][_0x5ae760['mtype']]:{'text':''||_0x2a69fc}},{'quoted':_0x328b41,'userJid':_0xd16d7a['user']['id']}),_0x968739||_0x5ae760['text'],_0xd16d7a['user']['jid'],{'mentions':_0x281f6a});await _0xd16d7a['relayMessage'](_0x328b41['chat'],_0x185c28['message'],{'messageId':_0x185c28['key']['id']});}catch{let _0xc0dcef=_0x420ef0['map'](_0x5da398=>_0xd16d7a['decodeJid'](_0x5da398['id'])),_0x2a3792=_0x328b41['quoted']?_0x328b41['quoted']:_0x328b41,_0x592f68=(_0x2a3792['msg']||_0x2a3792)['mimetype']||'',_0x5687c5=/image|video|sticker|audio/['test'](_0x592f68),_0x44dde6=String['fromCharCode'](0x200e),_0x4d1c66=_0x44dde6['repeat'](0x352),_0x32064f=''+(_0x968739?_0x968739:'*Hola\x20:D*');if(_0x5687c5&&_0x2a3792['mtype']==='imageMessage'&&_0x32064f){var _0x3738f4=await _0x2a3792['download']?.();_0xd16d7a['sendMessage'](_0x328b41['chat'],{'image':_0x3738f4,'mentions':_0xc0dcef,'caption':_0x32064f,'mentions':_0xc0dcef},{'quoted':_0x328b41});}else{if(_0x5687c5&&_0x2a3792['mtype']==='videoMessage'&&_0x32064f){var _0x3738f4=await _0x2a3792['download']?.();_0xd16d7a['sendMessage'](_0x328b41['chat'],{'video':_0x3738f4,'mentions':_0xc0dcef,'mimetype':'video/mp4','caption':_0x32064f},{'quoted':_0x328b41});}else{if(_0x5687c5&&_0x2a3792['mtype']==='audioMessage'&&_0x32064f){var _0x3738f4=await _0x2a3792['download']?.();_0xd16d7a['sendMessage'](_0x328b41['chat'],{'audio':_0x3738f4,'mentions':_0xc0dcef,'mimetype':'audio/mp4','fileName':'Hidetag.mp3'},{'quoted':_0x328b41});}else{if(_0x5687c5&&_0x2a3792['mtype']==='stickerMessage'&&_0x32064f){var _0x3738f4=await _0x2a3792['download']?.();_0xd16d7a['sendMessage'](_0x328b41['chat'],{'sticker':_0x3738f4,'mentions':_0xc0dcef},{'quoted':_0x328b41});}else await _0xd16d7a['relayMessage'](_0x328b41['chat'],{'extendedTextMessage':{'text':_0x4d1c66+'\x0a'+_0x32064f+'\x0a',...{'contextInfo':{'mentionedJid':_0xc0dcef,'externalAdReply':{'thumbnail':imagen1,'sourceUrl':'https://github.com/Yovanihades1212/HADES-BOT-MDV2'}}}}},{});}}}}};handler['command']=/^(hidetag|notificar|notify)$/i,handler['group']=!![],handler['admin']=!![];export default handler;