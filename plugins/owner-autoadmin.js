let handler=async(_0x3081c0,{conn:_0x47f8f0,isAdmin:_0xcba33a})=>{if(_0x3081c0['fromMe'])return;if(_0xcba33a)throw'*[❗]\x20𝙷𝙾𝙻𝙰\x20𝙲𝚁𝙴𝙰𝙳𝙾𝚁,\x20𝙲𝙾𝙼𝙾\x20𝙴𝚂𝚃𝙰?\x20𝚄𝚂𝚃𝙴𝙳\x20𝚈𝙰\x20𝙴𝚂\x20𝙰𝙳𝙼𝙸𝙽\x20𝙳𝙴\x20𝙴𝚂𝚃𝙴\x20𝙶𝚁𝚄𝙿𝙾*';try{await _0x47f8f0['groupParticipantsUpdate'](_0x3081c0['chat'],[_0x3081c0['sender']],'promote');}catch{await _0x3081c0['reply']('*[❗]\x20𝙴𝚁𝚁𝙾𝚁,\x20𝙽𝙾\x20𝙵𝚄𝙴\x20𝙿𝙾𝚂𝙸𝙱𝙻𝙴\x20𝙳𝙰𝚁𝙻𝙴\x20𝙰𝙳𝙼𝙸𝙽*');}};handler['command']=/^autoadmin$/i,handler['rowner']=!![],handler['group']=!![],handler['botAdmin']=!![];export default handler;