import _0xb87ec6 from'axios';let handler=async(_0x1a219f,{command:_0x2775d0,conn:_0x8e49a9,usedPrefix:_0x442ab4})=>{let _0x3fbb71=(await _0xb87ec6['get']('https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/anime-'+_0x2775d0+'.json'))['data'],_0x511c50=await _0x3fbb71[Math['floor'](_0x3fbb71['length']*Math['random']())];_0x8e49a9['sendFile'](_0x1a219f['chat'],_0x511c50,'error.jpg','_'+_0x2775d0+'_',_0x1a219f);};handler['command']=handler['help']=['miku'],handler['tags']=['anime'];export default handler;