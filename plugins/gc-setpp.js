let handler=async(_0x3bcabb,{conn:_0x4d5dae,usedPrefix:_0x560c51,command:_0x10f898})=>{let _0x17d97d=_0x3bcabb['quoted']?_0x3bcabb['quoted']:_0x3bcabb,_0x1c683f=(_0x17d97d['msg']||_0x17d97d)['mimetype']||_0x17d97d['mediaType']||'';if(/image/['test'](_0x1c683f)){let _0x3e1f92=await _0x17d97d['download']();if(!_0x3e1f92)throw'*⚠️️\x20Responde\x20a\x20una\x20imagen.*\x0a\x0a*⚠️️\x20Respond\x20to\x20an\x20image.*';await _0x4d5dae['updateProfilePicture'](_0x3bcabb['chat'],_0x3e1f92)['then'](_0x19a5db=>_0x3bcabb['reply']('⚘\x20*_Imagen\x20actualizada\x20con\x20éxito._*\x0a\x0a⚘\x20*_Image\x20updated\x20successfully._*'));}else throw'*⚠️️\x20Responde\x20a\x20una\x20imagen.*\x0a\x0a*⚠️️\x20Respond\x20to\x20an\x20image.*';};handler['command']=/^setpp(group|grup|gc)?$/i,handler['group']=!![],handler['admin']=!![],handler['botAdmin']=!![];export default handler;