import{readFileSync,writeFileSync,existsSync}from'fs';const {initAuthCreds,BufferJSON,proto}=(await import('@whiskeysockets/baileys'))['default'];function bind(_0x2037a5){if(!_0x2037a5['chats'])_0x2037a5['chats']={};function _0x236fa7(_0x47fab3){if(!_0x47fab3)return;try{_0x47fab3=_0x47fab3['contacts']||_0x47fab3;for(const _0x258852 of _0x47fab3){const _0x5468b0=_0x2037a5['decodeJid'](_0x258852['id']);if(!_0x5468b0||_0x5468b0==='status@broadcast')continue;let _0x585415=_0x2037a5['chats'][_0x5468b0];if(!_0x585415)_0x585415=_0x2037a5['chats'][_0x5468b0]={..._0x258852,'id':_0x5468b0};_0x2037a5['chats'][_0x5468b0]={..._0x585415,...{..._0x258852,'id':_0x5468b0,..._0x5468b0['endsWith']('@g.us')?{'subject':_0x258852['subject']||_0x258852['name']||_0x585415['subject']||''}:{'name':_0x258852['notify']||_0x258852['name']||_0x585415['name']||_0x585415['notify']||''}}||{}};}}catch(_0x46eeea){console['error'](_0x46eeea);}}_0x2037a5['ev']['on']('contacts.upsert',_0x236fa7),_0x2037a5['ev']['on']('groups.update',_0x236fa7),_0x2037a5['ev']['on']('contacts.set',_0x236fa7),_0x2037a5['ev']['on']('chats.set',async({chats:_0x538435})=>{try{for(let {id:_0x260be6,name:_0x3c2014,readOnly:_0x411ebc}of _0x538435){_0x260be6=_0x2037a5['decodeJid'](_0x260be6);if(!_0x260be6||_0x260be6==='status@broadcast')continue;const _0x56888f=_0x260be6['endsWith']('@g.us');let _0x5bedd3=_0x2037a5['chats'][_0x260be6];if(!_0x5bedd3)_0x5bedd3=_0x2037a5['chats'][_0x260be6]={'id':_0x260be6};_0x5bedd3['isChats']=!_0x411ebc;if(_0x3c2014)_0x5bedd3[_0x56888f?'subject':'name']=_0x3c2014;if(_0x56888f){const _0xf394e2=await _0x2037a5['groupMetadata'](_0x260be6)['catch'](_0x234da3=>null);if(_0x3c2014||_0xf394e2?.['subject'])_0x5bedd3['subject']=_0x3c2014||_0xf394e2['subject'];if(!_0xf394e2)continue;_0x5bedd3['metadata']=_0xf394e2;}}}catch(_0x4dd942){console['error'](_0x4dd942);}}),_0x2037a5['ev']['on']('group-participants.update',async function _0x14881f({id:_0x44f03b,participants:_0x462ff8,action:_0xe4717d}){if(!_0x44f03b)return;_0x44f03b=_0x2037a5['decodeJid'](_0x44f03b);if(_0x44f03b==='status@broadcast')return;if(!(_0x44f03b in _0x2037a5['chats']))_0x2037a5['chats'][_0x44f03b]={'id':_0x44f03b};const _0x214ace=_0x2037a5['chats'][_0x44f03b];_0x214ace['isChats']=!![];const _0x1dbf85=await _0x2037a5['groupMetadata'](_0x44f03b)['catch'](_0x40571e=>null);if(!_0x1dbf85)return;_0x214ace['subject']=_0x1dbf85['subject'],_0x214ace['metadata']=_0x1dbf85;}),_0x2037a5['ev']['on']('groups.update',async function _0x38ed28(_0x82c4d7){try{for(const _0x381fd1 of _0x82c4d7){const _0x19f768=_0x2037a5['decodeJid'](_0x381fd1['id']);if(!_0x19f768||_0x19f768==='status@broadcast')continue;const _0x517aa5=_0x19f768['endsWith']('@g.us');if(!_0x517aa5)continue;let _0x369d17=_0x2037a5['chats'][_0x19f768];if(!_0x369d17)_0x369d17=_0x2037a5['chats'][_0x19f768]={'id':_0x19f768};_0x369d17['isChats']=!![];const _0xfdfbb8=await _0x2037a5['groupMetadata'](_0x19f768)['catch'](_0x4434e1=>null);if(_0xfdfbb8)_0x369d17['metadata']=_0xfdfbb8;if(_0x381fd1['subject']||_0xfdfbb8?.['subject'])_0x369d17['subject']=_0x381fd1['subject']||_0xfdfbb8['subject'];}}catch(_0x1bc9ca){console['error'](_0x1bc9ca);}}),_0x2037a5['ev']['on']('chats.upsert',function _0x4502a9(_0x57dca1){try{const {id:_0x318c96,name:_0x25b88c}=_0x57dca1;if(!_0x318c96||_0x318c96==='status@broadcast')return;_0x2037a5['chats'][_0x318c96]={..._0x2037a5['chats'][_0x318c96]||{},..._0x57dca1,'isChats':!![]};const _0x4e48ec=_0x318c96['endsWith']('@g.us');if(_0x4e48ec)_0x2037a5['insertAllGroup']()['catch'](_0x255cd2=>null);}catch(_0x1d1036){console['error'](_0x1d1036);}}),_0x2037a5['ev']['on']('presence.update',async function _0x40d20f({id:_0x246603,presences:_0xcd71e5}){try{const _0x473b92=Object['keys'](_0xcd71e5)[0x0]||_0x246603,_0x1db276=_0x2037a5['decodeJid'](_0x473b92),_0x54faaf=_0xcd71e5[_0x473b92]['lastKnownPresence']||'composing';let _0x370303=_0x2037a5['chats'][_0x1db276];if(!_0x370303)_0x370303=_0x2037a5['chats'][_0x1db276]={'id':_0x473b92};_0x370303['presences']=_0x54faaf;if(_0x246603['endsWith']('@g.us')){let _0x2578c0=_0x2037a5['chats'][_0x246603];if(!_0x2578c0)_0x2578c0=_0x2037a5['chats'][_0x246603]={'id':_0x246603};}}catch(_0x48cb95){console['error'](_0x48cb95);}});}const KEY_MAP={'pre-key':'preKeys','session':'sessions','sender-key':'senderKeys','app-state-sync-key':'appStateSyncKeys','app-state-sync-version':'appStateVersions','sender-key-memory':'senderKeyMemory'};function useSingleFileAuthState(_0x53fa84,_0x42696c){let _0x386f39,_0x104c90={},_0x34dd13=0x0;const _0x40c814=_0x261510=>{_0x42696c?.['trace']('saving\x20auth\x20state'),_0x34dd13++,(_0x261510||_0x34dd13>0x5)&&(writeFileSync(_0x53fa84,JSON['stringify']({'creds':_0x386f39,'keys':_0x104c90},BufferJSON['replacer'],0x2)),_0x34dd13=0x0);};if(existsSync(_0x53fa84)){const _0x4ff8dc=JSON['parse'](readFileSync(_0x53fa84,{'encoding':'utf-8'}),BufferJSON['reviver']);_0x386f39=_0x4ff8dc['creds'],_0x104c90=_0x4ff8dc['keys'];}else _0x386f39=initAuthCreds(),_0x104c90={};return{'state':{'creds':_0x386f39,'keys':{'get':(_0x5b2bc3,_0x2aee37)=>{const _0x495f65=KEY_MAP[_0x5b2bc3];return _0x2aee37['reduce']((_0x223e6e,_0x1281e6)=>{let _0x37ce11=_0x104c90[_0x495f65]?.[_0x1281e6];return _0x37ce11&&(_0x5b2bc3==='app-state-sync-key'&&(_0x37ce11=proto['AppStateSyncKeyData']['fromObject'](_0x37ce11)),_0x223e6e[_0x1281e6]=_0x37ce11),_0x223e6e;},{});},'set':_0x2b6b2e=>{for(const _0x29e1af in _0x2b6b2e){const _0x18e169=KEY_MAP[_0x29e1af];_0x104c90[_0x18e169]=_0x104c90[_0x18e169]||{},Object['assign'](_0x104c90[_0x18e169],_0x2b6b2e[_0x29e1af]);}_0x40c814();}}},'saveState':_0x40c814};}function loadMessage(_0x426b9e,_0x265ad8=null){let _0x171dc1=null;if(_0x426b9e&&!_0x265ad8){_0x265ad8=_0x426b9e;const _0x65610f=_0x439265=>_0x439265['key']?.['id']==_0x265ad8,_0x204b86={},_0x59630e=Object['entries'](_0x204b86)['find'](([,_0x524601])=>{return _0x524601['find'](_0x65610f);});_0x171dc1=_0x59630e?.[0x1]?.['find'](_0x65610f);}else{_0x426b9e=_0x426b9e?.['decodeJid']?.();const _0x1f8837={};if(!(_0x426b9e in _0x1f8837))return null;_0x171dc1=_0x1f8837[_0x426b9e]['find'](_0x54dad3=>_0x54dad3['key']['id']==_0x265ad8);}return _0x171dc1?_0x171dc1:null;}export default{'bind':bind,'useSingleFileAuthState':useSingleFileAuthState,'loadMessage':loadMessage};