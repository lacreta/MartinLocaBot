import _0x5900b0 from'got';const stringify=_0x5ceb79=>JSON['stringify'](_0x5ceb79,null,0x2),parse=_0xab78dc=>JSON['parse'](_0xab78dc,(_0x1b9c27,_0x2ca7ca)=>{if(_0x2ca7ca!==null&&typeof _0x2ca7ca==='object'&&'type'in _0x2ca7ca&&_0x2ca7ca['type']==='Buffer'&&'data'in _0x2ca7ca&&Array['isArray'](_0x2ca7ca['data']))return Buffer['from'](_0x2ca7ca['data']);return _0x2ca7ca;});class CloudDBAdapter{constructor(_0x4205b4,{serialize:serialize=stringify,deserialize:deserialize=parse,fetchOptions:fetchOptions={}}={}){this['url']=_0x4205b4,this['serialize']=serialize,this['deserialize']=deserialize,this['fetchOptions']=fetchOptions;}async['read'](){try{const _0x9f2291=await _0x5900b0(this['url'],{'method':'GET','headers':{'Accept':'application/json;q=0.9,text/plain'},...this['fetchOptions']});if(_0x9f2291['statusCode']!==0xc8)throw _0x9f2291['statusMessage'];return this['deserialize'](_0x9f2291['body']);}catch(_0x1fbcb6){return null;}}async['write'](_0x58fa9a){const _0x5d0bcc=await _0x5900b0(this['url'],{'method':'POST','headers':{'Content-Type':'application/json'},...this['fetchOptions'],'body':this['serialize'](_0x58fa9a)});if(_0x5d0bcc['statusCode']!==0xc8)throw _0x5d0bcc['statusMessage'];return _0x5d0bcc['body'];}}export default CloudDBAdapter;