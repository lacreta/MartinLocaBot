let linkRegex=/chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;export async function before(_0x388bdd,{isAdmin:_0x49c888,isBotAdmin:_0x1bcbcb}){if(_0x388bdd['isBaileys']&&_0x388bdd['fromMe'])return!0x0;if(!_0x388bdd['isGroup'])return!0x1;let _0x42506d=global['db']['data']['chats'][_0x388bdd['chat']],_0x909bb9=_0x388bdd['key']['participant'],_0x6c969c=_0x388bdd['key']['id'],_0x29f968=global['db']['data']['settings'][this['user']['jid']]||{},_0xfe480b='@'+_0x388bdd['sender']['split']`@`[0x0];const _0x4e5557=linkRegex['exec'](_0x388bdd['text']),_0x5c8e96='https://chat.whatsapp.com';if(_0x49c888&&_0x42506d['antiLink']&&_0x388bdd['text']['includes'](_0x5c8e96))return _0x388bdd['reply']('*𝙷𝙴𝚈!!\x20𝙴𝙻\x20𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺\x20𝙴𝚂𝚃𝙰\x20𝙰𝙲𝚃𝙸𝚅𝙾,\x20𝙿𝙴𝚁𝙾\x20𝙴𝚁𝙴𝚂\x20𝚄𝙽\x20𝙰𝙳𝙼𝙸𝙽\x20😎,\x20𝚂𝙰𝙻𝚅𝙰𝙳𝙾/𝙰!*');if(_0x42506d['antiLink']&&_0x4e5557&&!_0x49c888){if(_0x1bcbcb){const _0x28bf47='https://chat.whatsapp.com/'+await this['groupInviteCode'](_0x388bdd['chat']);if(_0x388bdd['text']['includes'](_0x28bf47))return!0x0;}await this['sendMessage'](_0x388bdd['chat'],{'text':'*「\x20𝐀𝐍𝐓𝐈\x20𝐋𝐈𝐍𝐊𝐒\x20」*\x0a*𝙷𝙰𝚂𝚃𝙰\x20𝙻𝙰\x20𝚅𝙸𝚂𝚃𝙰\x20𝙱𝙰𝙱𝚈\x20👋\x20'+_0xfe480b+'\x20𝚁𝙾𝙼𝙿𝙸𝚂𝚃𝙴𝚂\x20𝙻𝙰𝚂\x20𝚁𝙴𝙶𝙻𝙰𝚂\x20𝙳𝙴𝙻\x20𝙶𝚁𝚄𝙿𝙾,\x20𝚂𝙴𝚁𝙰𝚂\x20𝙴𝚇𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝙳𝙾...!!*','mentions':[_0x388bdd['sender']]});if(!_0x1bcbcb)return _0x388bdd['reply']('*[❗𝐈𝐍𝐅𝐎❗]\x20𝙴𝙻\x20𝙱𝙾𝚃\x20𝙽𝙾\x20𝙴𝚂\x20𝙰𝙳𝙼𝙸𝙽,\x20𝙽𝙾\x20𝙿𝚄𝙴𝙳𝙴\x20𝙴𝚇𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝚁\x20𝙰\x20𝙻𝙰𝚂\x20𝙿𝙴𝚁𝚂𝙾𝙽𝙰𝚂*');if(_0x1bcbcb&&_0x29f968['restrict']){await conn['sendMessage'](_0x388bdd['chat'],{'delete':{'remoteJid':_0x388bdd['chat'],'fromMe':![],'id':_0x6c969c,'participant':_0x909bb9}});let _0x383adf=await conn['groupParticipantsUpdate'](_0x388bdd['chat'],[_0x388bdd['sender']],'remove');if(_0x383adf[0x0]['status']==='404')return;}else{if(!_0x29f968['restrict'])return _0x388bdd['reply']('*[❗𝐈𝐍𝐅𝐎❗]\x20𝙴𝙻\x20𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾\x20𝙳𝙴𝙻\x20𝙱𝙾𝚃\x20𝙽𝙾\x20𝚃𝙸𝙴𝙽𝙴\x20𝙷𝙰𝙱𝙸𝙻𝙸𝚃𝙰𝙳𝙾\x20𝙻𝙰𝚂\x20𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝙲𝙸𝙾𝙽𝙴𝚂\x20(#𝚎𝚗𝚊𝚋𝚕𝚎\x20𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝)\x20𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙴\x20𝙲𝙾𝙽\x20𝙴𝙻\x20𝙿𝙰𝚁𝙰\x20𝚀𝚄𝙴\x20𝙻𝙾\x20𝙷𝙰𝙱𝙸𝙻𝙸𝚃𝙴*');}}return!0x0;}