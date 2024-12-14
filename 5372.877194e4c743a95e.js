"use strict";(self.webpackChunktype_generator=self.webpackChunktype_generator||[]).push([[5372],{5372:(In,le,J)=>{J.r(le),J.d(le,{CompletionAdapter:()=>nt,DefinitionAdapter:()=>$t,DiagnosticsAdapter:()=>tt,DocumentColorAdapter:()=>dt,DocumentFormattingEditProvider:()=>ct,DocumentHighlightAdapter:()=>Jt,DocumentLinkAdapter:()=>Kt,DocumentRangeFormattingEditProvider:()=>lt,DocumentSymbolAdapter:()=>st,FoldingRangeAdapter:()=>gt,HoverAdapter:()=>rt,ReferenceAdapter:()=>Qt,RenameAdapter:()=>Yt,SelectionRangeAdapter:()=>pt,WorkerManager:()=>de,fromPosition:()=>R,fromRange:()=>se,getWorker:()=>kn,setupMode:()=>wn,toRange:()=>b,toTextEdit:()=>U});var At=J(7196),Et=Object.defineProperty,Lt=Object.getOwnPropertyDescriptor,It=Object.getOwnPropertyNames,Ot=Object.prototype.hasOwnProperty,fe=(e,r,i,n)=>{if(r&&"object"==typeof r||"function"==typeof r)for(let t of It(r))!Ot.call(e,t)&&t!==i&&Et(e,t,{get:()=>r[t],enumerable:!(n=Lt(r,t))||n.enumerable});return e},f={};fe(f,At,"default");var ge,q,pe,B,I,m,V,ve,$,me,he,de=class{constructor(e){this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval(()=>this._checkIfIdle(),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker())}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){this._worker&&Date.now()-this._lastUsedTime>12e4&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=f.editor.createWebWorker({moduleId:"vs/language/json/jsonWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId,enableSchemaRequest:this._defaults.diagnosticsOptions.enableSchemaRequest}}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let r;return this._getClient().then(i=>{r=i}).then(i=>{if(this._worker)return this._worker.withSyncedResources(e)}).then(i=>r)}};(ge||(ge={})).is=function r(i){return"string"==typeof i},function(e){e.is=function r(i){return"string"==typeof i}}(q||(q={})),function(e){e.MIN_VALUE=-2147483648,e.MAX_VALUE=2147483647,e.is=function r(i){return"number"==typeof i&&e.MIN_VALUE<=i&&i<=e.MAX_VALUE}}(pe||(pe={})),function(e){e.MIN_VALUE=0,e.MAX_VALUE=2147483647,e.is=function r(i){return"number"==typeof i&&e.MIN_VALUE<=i&&i<=e.MAX_VALUE}}(B||(B={})),function(e){e.create=function r(n,t){return n===Number.MAX_VALUE&&(n=B.MAX_VALUE),t===Number.MAX_VALUE&&(t=B.MAX_VALUE),{line:n,character:t}},e.is=function i(n){let t=n;return a.objectLiteral(t)&&a.uinteger(t.line)&&a.uinteger(t.character)}}(I||(I={})),function(e){e.create=function r(n,t,o,s){if(a.uinteger(n)&&a.uinteger(t)&&a.uinteger(o)&&a.uinteger(s))return{start:I.create(n,t),end:I.create(o,s)};if(I.is(n)&&I.is(t))return{start:n,end:t};throw new Error(`Range#create called with invalid arguments[${n}, ${t}, ${o}, ${s}]`)},e.is=function i(n){let t=n;return a.objectLiteral(t)&&I.is(t.start)&&I.is(t.end)}}(m||(m={})),function(e){e.create=function r(n,t){return{uri:n,range:t}},e.is=function i(n){let t=n;return a.objectLiteral(t)&&m.is(t.range)&&(a.string(t.uri)||a.undefined(t.uri))}}(V||(V={})),function(e){e.create=function r(n,t,o,s){return{targetUri:n,targetRange:t,targetSelectionRange:o,originSelectionRange:s}},e.is=function i(n){let t=n;return a.objectLiteral(t)&&m.is(t.targetRange)&&a.string(t.targetUri)&&m.is(t.targetSelectionRange)&&(m.is(t.originSelectionRange)||a.undefined(t.originSelectionRange))}}(ve||(ve={})),function(e){e.create=function r(n,t,o,s){return{red:n,green:t,blue:o,alpha:s}},e.is=function i(n){const t=n;return a.objectLiteral(t)&&a.numberRange(t.red,0,1)&&a.numberRange(t.green,0,1)&&a.numberRange(t.blue,0,1)&&a.numberRange(t.alpha,0,1)}}($||($={})),function(e){e.create=function r(n,t){return{range:n,color:t}},e.is=function i(n){const t=n;return a.objectLiteral(t)&&m.is(t.range)&&$.is(t.color)}}(me||(me={})),function(e){e.create=function r(n,t,o){return{label:n,textEdit:t,additionalTextEdits:o}},e.is=function i(n){const t=n;return a.objectLiteral(t)&&a.string(t.label)&&(a.undefined(t.textEdit)||M.is(t))&&(a.undefined(t.additionalTextEdits)||a.typedArray(t.additionalTextEdits,M.is))}}(he||(he={}));var _e,Q,S=function(e){return e.Comment="comment",e.Imports="imports",e.Region="region",e}(S||{});!function(e){e.create=function r(n,t,o,s,u,g){const c={startLine:n,endLine:t};return a.defined(o)&&(c.startCharacter=o),a.defined(s)&&(c.endCharacter=s),a.defined(u)&&(c.kind=u),a.defined(g)&&(c.collapsedText=g),c},e.is=function i(n){const t=n;return a.objectLiteral(t)&&a.uinteger(t.startLine)&&a.uinteger(t.startLine)&&(a.undefined(t.startCharacter)||a.uinteger(t.startCharacter))&&(a.undefined(t.endCharacter)||a.uinteger(t.endCharacter))&&(a.undefined(t.kind)||a.string(t.kind))}}(_e||(_e={})),function(e){e.create=function r(n,t){return{location:n,message:t}},e.is=function i(n){let t=n;return a.defined(t)&&V.is(t.location)&&a.string(t.message)}}(Q||(Q={}));var ke,H,D,M,Y,F,be,G,Z,K,C,ee,we,Ae,te,Ee,ne,P,T=function(e){return e.Error=1,e.Warning=2,e.Information=3,e.Hint=4,e}(T||{});!function(e){e.is=function r(i){const n=i;return a.objectLiteral(n)&&a.string(n.href)}}(ke||(ke={})),function(e){e.create=function r(n,t,o,s,u,g){let c={range:n,message:t};return a.defined(o)&&(c.severity=o),a.defined(s)&&(c.code=s),a.defined(u)&&(c.source=u),a.defined(g)&&(c.relatedInformation=g),c},e.is=function i(n){var t;let o=n;return a.defined(o)&&m.is(o.range)&&a.string(o.message)&&(a.number(o.severity)||a.undefined(o.severity))&&(a.integer(o.code)||a.string(o.code)||a.undefined(o.code))&&(a.undefined(o.codeDescription)||a.string(null===(t=o.codeDescription)||void 0===t?void 0:t.href))&&(a.string(o.source)||a.undefined(o.source))&&(a.undefined(o.relatedInformation)||a.typedArray(o.relatedInformation,Q.is))}}(H||(H={})),function(e){e.create=function r(n,t,...o){let s={title:n,command:t};return a.defined(o)&&o.length>0&&(s.arguments=o),s},e.is=function i(n){let t=n;return a.defined(t)&&a.string(t.title)&&a.string(t.command)}}(D||(D={})),function(e){e.replace=function r(o,s){return{range:o,newText:s}},e.insert=function i(o,s){return{range:{start:o,end:o},newText:s}},e.del=function n(o){return{range:o,newText:""}},e.is=function t(o){const s=o;return a.objectLiteral(s)&&a.string(s.newText)&&m.is(s.range)}}(M||(M={})),function(e){e.create=function r(n,t,o){const s={label:n};return void 0!==t&&(s.needsConfirmation=t),void 0!==o&&(s.description=o),s},e.is=function i(n){const t=n;return a.objectLiteral(t)&&a.string(t.label)&&(a.boolean(t.needsConfirmation)||void 0===t.needsConfirmation)&&(a.string(t.description)||void 0===t.description)}}(Y||(Y={})),function(e){e.is=function r(i){return a.string(i)}}(F||(F={})),function(e){e.replace=function r(o,s,u){return{range:o,newText:s,annotationId:u}},e.insert=function i(o,s,u){return{range:{start:o,end:o},newText:s,annotationId:u}},e.del=function n(o,s){return{range:o,newText:"",annotationId:s}},e.is=function t(o){const s=o;return M.is(s)&&(Y.is(s.annotationId)||F.is(s.annotationId))}}(be||(be={})),function(e){e.create=function r(n,t){return{textDocument:n,edits:t}},e.is=function i(n){let t=n;return a.defined(t)&&te.is(t.textDocument)&&Array.isArray(t.edits)}}(G||(G={})),function(e){e.create=function r(n,t,o){let s={kind:"create",uri:n};return void 0!==t&&(void 0!==t.overwrite||void 0!==t.ignoreIfExists)&&(s.options=t),void 0!==o&&(s.annotationId=o),s},e.is=function i(n){let t=n;return t&&"create"===t.kind&&a.string(t.uri)&&(void 0===t.options||(void 0===t.options.overwrite||a.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||a.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||F.is(t.annotationId))}}(Z||(Z={})),function(e){e.create=function r(n,t,o,s){let u={kind:"rename",oldUri:n,newUri:t};return void 0!==o&&(void 0!==o.overwrite||void 0!==o.ignoreIfExists)&&(u.options=o),void 0!==s&&(u.annotationId=s),u},e.is=function i(n){let t=n;return t&&"rename"===t.kind&&a.string(t.oldUri)&&a.string(t.newUri)&&(void 0===t.options||(void 0===t.options.overwrite||a.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||a.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||F.is(t.annotationId))}}(K||(K={})),function(e){e.create=function r(n,t,o){let s={kind:"delete",uri:n};return void 0!==t&&(void 0!==t.recursive||void 0!==t.ignoreIfNotExists)&&(s.options=t),void 0!==o&&(s.annotationId=o),s},e.is=function i(n){let t=n;return t&&"delete"===t.kind&&a.string(t.uri)&&(void 0===t.options||(void 0===t.options.recursive||a.boolean(t.options.recursive))&&(void 0===t.options.ignoreIfNotExists||a.boolean(t.options.ignoreIfNotExists)))&&(void 0===t.annotationId||F.is(t.annotationId))}}(C||(C={})),function(e){e.is=function r(i){return i&&(void 0!==i.changes||void 0!==i.documentChanges)&&(void 0===i.documentChanges||i.documentChanges.every(t=>a.string(t.kind)?Z.is(t)||K.is(t)||C.is(t):G.is(t)))}}(ee||(ee={})),function(e){e.create=function r(n){return{uri:n}},e.is=function i(n){let t=n;return a.defined(t)&&a.string(t.uri)}}(we||(we={})),function(e){e.create=function r(n,t){return{uri:n,version:t}},e.is=function i(n){let t=n;return a.defined(t)&&a.string(t.uri)&&a.integer(t.version)}}(Ae||(Ae={})),function(e){e.create=function r(n,t){return{uri:n,version:t}},e.is=function i(n){let t=n;return a.defined(t)&&a.string(t.uri)&&(null===t.version||a.integer(t.version))}}(te||(te={})),function(e){e.create=function r(n,t,o,s){return{uri:n,languageId:t,version:o,text:s}},e.is=function i(n){let t=n;return a.defined(t)&&a.string(t.uri)&&a.string(t.languageId)&&a.integer(t.version)&&a.string(t.text)}}(Ee||(Ee={})),function(e){e.PlainText="plaintext",e.Markdown="markdown",e.is=function r(i){return i===e.PlainText||i===e.Markdown}}(ne||(ne={})),function(e){e.is=function r(i){const n=i;return a.objectLiteral(i)&&ne.is(n.kind)&&a.string(n.value)}}(P||(P={}));var Ie,Oe,Re,Ne,z,De,Me,Fe,h=function(e){return e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25,e}(h||{}),Le=function(e){return e.PlainText=1,e.Snippet=2,e}(Le||{});!function(e){e.create=function r(n,t,o){return{newText:n,insert:t,replace:o}},e.is=function i(n){const t=n;return t&&a.string(t.newText)&&m.is(t.insert)&&m.is(t.replace)}}(Ie||(Ie={})),function(e){e.is=function r(i){const n=i;return n&&(a.string(n.detail)||void 0===n.detail)&&(a.string(n.description)||void 0===n.description)}}(Oe||(Oe={})),function(e){e.create=function r(i){return{label:i}}}(Re||(Re={})),function(e){e.create=function r(i,n){return{items:i||[],isIncomplete:!!n}}}(Ne||(Ne={})),function(e){e.fromPlainText=function r(n){return n.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},e.is=function i(n){const t=n;return a.string(t)||a.objectLiteral(t)&&a.string(t.language)&&a.string(t.value)}}(z||(z={})),function(e){e.is=function r(i){let n=i;return!!n&&a.objectLiteral(n)&&(P.is(n.contents)||z.is(n.contents)||a.typedArray(n.contents,z.is))&&(void 0===i.range||m.is(i.range))}}(De||(De={})),function(e){e.create=function r(i,n){return n?{label:i,documentation:n}:{label:i}}}(Me||(Me={})),function(e){e.create=function r(i,n,...t){let o={label:i};return a.defined(n)&&(o.documentation=n),o.parameters=a.defined(t)?t:[],o}}(Fe||(Fe={}));var Ue,X=function(e){return e.Text=1,e.Read=2,e.Write=3,e}(X||{});!function(e){e.create=function r(i,n){let t={range:i};return a.number(n)&&(t.kind=n),t}}(Ue||(Ue={}));var je,xe,Te,_=function(e){return e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26,e}(_||{});!function(e){e.create=function r(i,n,t,o,s){let u={name:i,kind:n,location:{uri:o,range:t}};return s&&(u.containerName=s),u}}(je||(je={})),function(e){e.create=function r(i,n,t,o){return void 0!==o?{name:i,kind:n,location:{uri:t,range:o}}:{name:i,kind:n,location:{uri:t}}}}(xe||(xe={})),function(e){e.create=function r(n,t,o,s,u,g){let c={name:n,detail:t,kind:o,range:s,selectionRange:u};return void 0!==g&&(c.children=g),c},e.is=function i(n){let t=n;return t&&a.string(t.name)&&a.number(t.kind)&&m.is(t.range)&&m.is(t.selectionRange)&&(void 0===t.detail||a.string(t.detail))&&(void 0===t.deprecated||a.boolean(t.deprecated))&&(void 0===t.children||Array.isArray(t.children))&&(void 0===t.tags||Array.isArray(t.tags))}}(Te||(Te={}));var Pe,ye,We,Be,Ve,Se,He,ze,Xe,Je,qe,ie,oe,$e,Qe,Ye,Ge,Ze,Ke,Ce,et,re=function(e){return e.Invoked=1,e.Automatic=2,e}(re||{});!function(e){e.create=function r(n,t,o){let s={diagnostics:n};return null!=t&&(s.only=t),null!=o&&(s.triggerKind=o),s},e.is=function i(n){let t=n;return a.defined(t)&&a.typedArray(t.diagnostics,H.is)&&(void 0===t.only||a.typedArray(t.only,a.string))&&(void 0===t.triggerKind||t.triggerKind===re.Invoked||t.triggerKind===re.Automatic)}}(Pe||(Pe={})),function(e){e.create=function r(n,t,o){let s={title:n},u=!0;return"string"==typeof t?(u=!1,s.kind=t):D.is(t)?s.command=t:s.edit=t,u&&void 0!==o&&(s.kind=o),s},e.is=function i(n){let t=n;return t&&a.string(t.title)&&(void 0===t.diagnostics||a.typedArray(t.diagnostics,H.is))&&(void 0===t.kind||a.string(t.kind))&&(void 0!==t.edit||void 0!==t.command)&&(void 0===t.command||D.is(t.command))&&(void 0===t.isPreferred||a.boolean(t.isPreferred))&&(void 0===t.edit||ee.is(t.edit))}}(ye||(ye={})),function(e){e.create=function r(n,t){let o={range:n};return a.defined(t)&&(o.data=t),o},e.is=function i(n){let t=n;return a.defined(t)&&m.is(t.range)&&(a.undefined(t.command)||D.is(t.command))}}(We||(We={})),function(e){e.create=function r(n,t){return{tabSize:n,insertSpaces:t}},e.is=function i(n){let t=n;return a.defined(t)&&a.uinteger(t.tabSize)&&a.boolean(t.insertSpaces)}}(Be||(Be={})),function(e){e.create=function r(n,t,o){return{range:n,target:t,data:o}},e.is=function i(n){let t=n;return a.defined(t)&&m.is(t.range)&&(a.undefined(t.target)||a.string(t.target))}}(Ve||(Ve={})),function(e){e.create=function r(n,t){return{range:n,parent:t}},e.is=function i(n){let t=n;return a.objectLiteral(t)&&m.is(t.range)&&(void 0===t.parent||e.is(t.parent))}}(Se||(Se={})),function(e){e.is=function r(i){const n=i;return a.objectLiteral(n)&&(void 0===n.resultId||"string"==typeof n.resultId)&&Array.isArray(n.data)&&(0===n.data.length||"number"==typeof n.data[0])}}(He||(He={})),function(e){e.create=function r(n,t){return{range:n,text:t}},e.is=function i(n){const t=n;return null!=t&&m.is(t.range)&&a.string(t.text)}}(ze||(ze={})),function(e){e.create=function r(n,t,o){return{range:n,variableName:t,caseSensitiveLookup:o}},e.is=function i(n){const t=n;return null!=t&&m.is(t.range)&&a.boolean(t.caseSensitiveLookup)&&(a.string(t.variableName)||void 0===t.variableName)}}(Xe||(Xe={})),function(e){e.create=function r(n,t){return{range:n,expression:t}},e.is=function i(n){const t=n;return null!=t&&m.is(t.range)&&(a.string(t.expression)||void 0===t.expression)}}(Je||(Je={})),function(e){e.create=function r(n,t){return{frameId:n,stoppedLocation:t}},e.is=function i(n){return a.defined(n)&&m.is(n.stoppedLocation)}}(qe||(qe={})),function(e){e.Type=1,e.Parameter=2,e.is=function r(i){return 1===i||2===i}}(ie||(ie={})),function(e){e.create=function r(n){return{value:n}},e.is=function i(n){const t=n;return a.objectLiteral(t)&&(void 0===t.tooltip||a.string(t.tooltip)||P.is(t.tooltip))&&(void 0===t.location||V.is(t.location))&&(void 0===t.command||D.is(t.command))}}(oe||(oe={})),function(e){e.create=function r(n,t,o){const s={position:n,label:t};return void 0!==o&&(s.kind=o),s},e.is=function i(n){const t=n;return a.objectLiteral(t)&&I.is(t.position)&&(a.string(t.label)||a.typedArray(t.label,oe.is))&&(void 0===t.kind||ie.is(t.kind))&&void 0===t.textEdits||a.typedArray(t.textEdits,M.is)&&(void 0===t.tooltip||a.string(t.tooltip)||P.is(t.tooltip))&&(void 0===t.paddingLeft||a.boolean(t.paddingLeft))&&(void 0===t.paddingRight||a.boolean(t.paddingRight))}}($e||($e={})),function(e){e.createSnippet=function r(i){return{kind:"snippet",value:i}}}(Qe||(Qe={})),function(e){e.create=function r(i,n,t,o){return{insertText:i,filterText:n,range:t,command:o}}}(Ye||(Ye={})),function(e){e.create=function r(i){return{items:i}}}(Ge||(Ge={})),function(e){e.create=function r(i,n){return{range:i,text:n}}}(Ze||(Ze={})),function(e){e.create=function r(i,n){return{triggerKind:i,selectedCompletionInfo:n}}}(Ke||(Ke={})),function(e){e.is=function r(i){const n=i;return a.objectLiteral(n)&&q.is(n.uri)&&a.string(n.name)}}(Ce||(Ce={})),function(e){function t(o,s){if(o.length<=1)return o;const u=o.length/2|0,g=o.slice(0,u),c=o.slice(u);t(g,s),t(c,s);let v=0,d=0,k=0;for(;v<g.length&&d<c.length;)s(g[v],c[d])<=0?o[k++]=g[v++]:o[k++]=c[d++];for(;v<g.length;)o[k++]=g[v++];for(;d<c.length;)o[k++]=c[d++];return o}e.create=function r(o,s,u,g){return new yt(o,s,u,g)},e.is=function i(o){let s=o;return!!(a.defined(s)&&a.string(s.uri)&&(a.undefined(s.languageId)||a.string(s.languageId))&&a.uinteger(s.lineCount)&&a.func(s.getText)&&a.func(s.positionAt)&&a.func(s.offsetAt))},e.applyEdits=function n(o,s){let u=o.getText(),g=t(s,(v,d)=>{let k=v.range.start.line-d.range.start.line;return 0===k?v.range.start.character-d.range.start.character:k}),c=u.length;for(let v=g.length-1;v>=0;v--){let d=g[v],k=o.offsetAt(d.range.start),p=o.offsetAt(d.range.end);if(!(p<=c))throw new Error("Overlapping edit");u=u.substring(0,k)+d.newText+u.substring(p,u.length),c=k}return u}}(et||(et={}));var a,yt=class{constructor(e,r,i,n){this._uri=e,this._languageId=r,this._version=i,this._content=n,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){let r=this.offsetAt(e.start),i=this.offsetAt(e.end);return this._content.substring(r,i)}return this._content}update(e,r){this._content=e.text,this._version=r,this._lineOffsets=void 0}getLineOffsets(){if(void 0===this._lineOffsets){let e=[],r=this._content,i=!0;for(let n=0;n<r.length;n++){i&&(e.push(n),i=!1);let t=r.charAt(n);i="\r"===t||"\n"===t,"\r"===t&&n+1<r.length&&"\n"===r.charAt(n+1)&&n++}i&&r.length>0&&e.push(r.length),this._lineOffsets=e}return this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);let r=this.getLineOffsets(),i=0,n=r.length;if(0===n)return I.create(0,e);for(;i<n;){let o=Math.floor((i+n)/2);r[o]>e?n=o:i=o+1}let t=i-1;return I.create(t,e-r[t])}offsetAt(e){let r=this.getLineOffsets();if(e.line>=r.length)return this._content.length;if(e.line<0)return 0;let i=r[e.line];return Math.max(Math.min(i+e.character,e.line+1<r.length?r[e.line+1]:this._content.length),i)}get lineCount(){return this.getLineOffsets().length}};!function(e){const r=Object.prototype.toString;e.defined=function i(p){return typeof p<"u"},e.undefined=function n(p){return typeof p>"u"},e.boolean=function t(p){return!0===p||!1===p},e.string=function o(p){return"[object String]"===r.call(p)},e.number=function s(p){return"[object Number]"===r.call(p)},e.numberRange=function u(p,N,ue){return"[object Number]"===r.call(p)&&N<=p&&p<=ue},e.integer=function g(p){return"[object Number]"===r.call(p)&&-2147483648<=p&&p<=2147483647},e.uinteger=function c(p){return"[object Number]"===r.call(p)&&0<=p&&p<=2147483647},e.func=function v(p){return"[object Function]"===r.call(p)},e.objectLiteral=function d(p){return null!==p&&"object"==typeof p},e.typedArray=function k(p,N){return Array.isArray(p)&&p.every(N)}}(a||(a={}));var tt=class{constructor(e,r,i){this._languageId=e,this._worker=r,this._disposables=[],this._listener=Object.create(null);const n=o=>{let u,s=o.getLanguageId();s===this._languageId&&(this._listener[o.uri.toString()]=o.onDidChangeContent(()=>{window.clearTimeout(u),u=window.setTimeout(()=>this._doValidate(o.uri,s),500)}),this._doValidate(o.uri,s))},t=o=>{f.editor.setModelMarkers(o,this._languageId,[]);let s=o.uri.toString(),u=this._listener[s];u&&(u.dispose(),delete this._listener[s])};this._disposables.push(f.editor.onDidCreateModel(n)),this._disposables.push(f.editor.onWillDisposeModel(t)),this._disposables.push(f.editor.onDidChangeModelLanguage(o=>{t(o.model),n(o.model)})),this._disposables.push(i(o=>{f.editor.getModels().forEach(s=>{s.getLanguageId()===this._languageId&&(t(s),n(s))})})),this._disposables.push({dispose:()=>{f.editor.getModels().forEach(t);for(let o in this._listener)this._listener[o].dispose()}}),f.editor.getModels().forEach(n)}dispose(){this._disposables.forEach(e=>e&&e.dispose()),this._disposables.length=0}_doValidate(e,r){this._worker(e).then(i=>i.doValidation(e.toString())).then(i=>{const n=i.map(o=>function Bt(e,r){let i="number"==typeof r.code?String(r.code):r.code;return{severity:Wt(r.severity),startLineNumber:r.range.start.line+1,startColumn:r.range.start.character+1,endLineNumber:r.range.end.line+1,endColumn:r.range.end.character+1,message:r.message,code:i,source:r.source}}(0,o));let t=f.editor.getModel(e);t&&t.getLanguageId()===r&&f.editor.setModelMarkers(t,r,n)}).then(void 0,i=>{console.error(i)})}};function Wt(e){switch(e){case T.Error:return f.MarkerSeverity.Error;case T.Warning:return f.MarkerSeverity.Warning;case T.Information:return f.MarkerSeverity.Info;case T.Hint:return f.MarkerSeverity.Hint;default:return f.MarkerSeverity.Info}}var nt=class{constructor(e,r){this._worker=e,this._triggerCharacters=r}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,r,i,n){const t=e.uri;return this._worker(t).then(o=>o.doComplete(t.toString(),R(r))).then(o=>{if(!o)return;const s=e.getWordUntilPosition(r),u=new f.Range(r.lineNumber,s.startColumn,r.lineNumber,s.endColumn),g=o.items.map(c=>{const v={label:c.label,insertText:c.insertText||c.label,sortText:c.sortText,filterText:c.filterText,documentation:c.documentation,detail:c.detail,command:Ht(c.command),range:u,kind:St(c.kind)};return c.textEdit&&(v.range=function Vt(e){return typeof e.insert<"u"&&typeof e.replace<"u"}(c.textEdit)?{insert:b(c.textEdit.insert),replace:b(c.textEdit.replace)}:b(c.textEdit.range),v.insertText=c.textEdit.newText),c.additionalTextEdits&&(v.additionalTextEdits=c.additionalTextEdits.map(U)),c.insertTextFormat===Le.Snippet&&(v.insertTextRules=f.languages.CompletionItemInsertTextRule.InsertAsSnippet),v});return{isIncomplete:o.isIncomplete,suggestions:g}})}};function R(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function se(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function b(e){if(e)return new f.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function St(e){const r=f.languages.CompletionItemKind;switch(e){case h.Text:return r.Text;case h.Method:return r.Method;case h.Function:return r.Function;case h.Constructor:return r.Constructor;case h.Field:return r.Field;case h.Variable:return r.Variable;case h.Class:return r.Class;case h.Interface:return r.Interface;case h.Module:return r.Module;case h.Property:return r.Property;case h.Unit:return r.Unit;case h.Value:return r.Value;case h.Enum:return r.Enum;case h.Keyword:return r.Keyword;case h.Snippet:return r.Snippet;case h.Color:return r.Color;case h.File:return r.File;case h.Reference:return r.Reference}return r.Property}function U(e){if(e)return{range:b(e.range),text:e.newText}}function Ht(e){return e&&"editor.action.triggerSuggest"===e.command?{id:e.command,title:e.title,arguments:e.arguments}:void 0}var rt=class{constructor(e){this._worker=e}provideHover(e,r,i){let n=e.uri;return this._worker(n).then(t=>t.doHover(n.toString(),R(r))).then(t=>{if(t)return{range:b(t.range),contents:Xt(t.contents)}})}};function it(e){return"string"==typeof e?{value:e}:function zt(e){return e&&"object"==typeof e&&"string"==typeof e.kind}(e)?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"}}function Xt(e){if(e)return Array.isArray(e)?e.map(it):[it(e)]}var Jt=class{constructor(e){this._worker=e}provideDocumentHighlights(e,r,i){const n=e.uri;return this._worker(n).then(t=>t.findDocumentHighlights(n.toString(),R(r))).then(t=>{if(t)return t.map(o=>({range:b(o.range),kind:qt(o.kind)}))})}};function qt(e){switch(e){case X.Read:return f.languages.DocumentHighlightKind.Read;case X.Write:return f.languages.DocumentHighlightKind.Write;case X.Text:return f.languages.DocumentHighlightKind.Text}return f.languages.DocumentHighlightKind.Text}var $t=class{constructor(e){this._worker=e}provideDefinition(e,r,i){const n=e.uri;return this._worker(n).then(t=>t.findDefinition(n.toString(),R(r))).then(t=>{if(t)return[ot(t)]})}};function ot(e){return{uri:f.Uri.parse(e.uri),range:b(e.range)}}var Qt=class{constructor(e){this._worker=e}provideReferences(e,r,i,n){const t=e.uri;return this._worker(t).then(o=>o.findReferences(t.toString(),R(r))).then(o=>{if(o)return o.map(ot)})}},Yt=class{constructor(e){this._worker=e}provideRenameEdits(e,r,i,n){const t=e.uri;return this._worker(t).then(o=>o.doRename(t.toString(),R(r),i)).then(o=>function Gt(e){if(!e||!e.changes)return;let r=[];for(let i in e.changes){const n=f.Uri.parse(i);for(let t of e.changes[i])r.push({resource:n,versionId:void 0,textEdit:{range:b(t.range),text:t.newText}})}return{edits:r}}(o))}},st=class{constructor(e){this._worker=e}provideDocumentSymbols(e,r){const i=e.uri;return this._worker(i).then(n=>n.findDocumentSymbols(i.toString())).then(n=>{if(n)return n.map(t=>function Zt(e){return"children"in e}(t)?at(t):{name:t.name,detail:"",containerName:t.containerName,kind:ut(t.kind),range:b(t.location.range),selectionRange:b(t.location.range),tags:[]})})}};function at(e){return{name:e.name,detail:e.detail??"",kind:ut(e.kind),range:b(e.range),selectionRange:b(e.selectionRange),tags:e.tags??[],children:(e.children??[]).map(r=>at(r))}}function ut(e){let r=f.languages.SymbolKind;switch(e){case _.File:return r.File;case _.Module:return r.Module;case _.Namespace:return r.Namespace;case _.Package:return r.Package;case _.Class:return r.Class;case _.Method:return r.Method;case _.Property:return r.Property;case _.Field:return r.Field;case _.Constructor:return r.Constructor;case _.Enum:return r.Enum;case _.Interface:return r.Interface;case _.Function:return r.Function;case _.Variable:return r.Variable;case _.Constant:return r.Constant;case _.String:return r.String;case _.Number:return r.Number;case _.Boolean:return r.Boolean;case _.Array:return r.Array}return r.Function}var Kt=class{constructor(e){this._worker=e}provideLinks(e,r){const i=e.uri;return this._worker(i).then(n=>n.findDocumentLinks(i.toString())).then(n=>{if(n)return{links:n.map(t=>({range:b(t.range),url:t.target}))}})}},ct=class{constructor(e){this._worker=e}provideDocumentFormattingEdits(e,r,i){const n=e.uri;return this._worker(n).then(t=>t.format(n.toString(),null,ft(r)).then(o=>{if(o&&0!==o.length)return o.map(U)}))}},lt=class{constructor(e){this._worker=e,this.canFormatMultipleRanges=!1}provideDocumentRangeFormattingEdits(e,r,i,n){const t=e.uri;return this._worker(t).then(o=>o.format(t.toString(),se(r),ft(i)).then(s=>{if(s&&0!==s.length)return s.map(U)}))}};function ft(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var dt=class{constructor(e){this._worker=e}provideDocumentColors(e,r){const i=e.uri;return this._worker(i).then(n=>n.findDocumentColors(i.toString())).then(n=>{if(n)return n.map(t=>({color:t.color,range:b(t.range)}))})}provideColorPresentations(e,r,i){const n=e.uri;return this._worker(n).then(t=>t.getColorPresentations(n.toString(),r.color,se(r.range))).then(t=>{if(t)return t.map(o=>{let s={label:o.label};return o.textEdit&&(s.textEdit=U(o.textEdit)),o.additionalTextEdits&&(s.additionalTextEdits=o.additionalTextEdits.map(U)),s})})}},gt=class{constructor(e){this._worker=e}provideFoldingRanges(e,r,i){const n=e.uri;return this._worker(n).then(t=>t.getFoldingRanges(n.toString(),r)).then(t=>{if(t)return t.map(o=>{const s={start:o.startLine+1,end:o.endLine+1};return typeof o.kind<"u"&&(s.kind=function Ct(e){switch(e){case S.Comment:return f.languages.FoldingRangeKind.Comment;case S.Imports:return f.languages.FoldingRangeKind.Imports;case S.Region:return f.languages.FoldingRangeKind.Region}}(o.kind)),s})})}},pt=class{constructor(e){this._worker=e}provideSelectionRanges(e,r,i){const n=e.uri;return this._worker(n).then(t=>t.getSelectionRanges(n.toString(),r.map(R))).then(t=>{if(t)return t.map(o=>{const s=[];for(;o;)s.push({range:b(o.range)}),o=o.parent;return s})})}};function ae(e){return 32===e||9===e}function y(e){return 10===e||13===e}function j(e){return e>=48&&e<=57}new Array(20).fill(0).map((e,r)=>" ".repeat(r));var x=200,rn=(new Array(x).fill(0).map((e,r)=>"\n"+" ".repeat(r)),new Array(x).fill(0).map((e,r)=>"\r"+" ".repeat(r)),new Array(x).fill(0).map((e,r)=>"\r\n"+" ".repeat(r)),new Array(x).fill(0).map((e,r)=>"\n"+"\t".repeat(r)),new Array(x).fill(0).map((e,r)=>"\r"+"\t".repeat(r)),new Array(x).fill(0).map((e,r)=>"\r\n"+"\t".repeat(r)),function en(e,r=!1){const i=e.length;let n=0,t="",o=0,s=16,u=0,g=0,c=0,v=0,d=0;function k(l,A){let O=0,L=0;for(;O<l||!A;){let w=e.charCodeAt(n);if(w>=48&&w<=57)L=16*L+w-48;else if(w>=65&&w<=70)L=16*L+w-65+10;else{if(!(w>=97&&w<=102))break;L=16*L+w-97+10}n++,O++}return O<l&&(L=-1),L}function bt(){if(t="",d=0,o=n,g=u,v=c,n>=i)return o=i,s=17;let l=e.charCodeAt(n);if(ae(l)){do{n++,t+=String.fromCharCode(l),l=e.charCodeAt(n)}while(ae(l));return s=15}if(y(l))return n++,t+=String.fromCharCode(l),13===l&&10===e.charCodeAt(n)&&(n++,t+="\n"),u++,c=n,s=14;switch(l){case 123:return n++,s=1;case 125:return n++,s=2;case 91:return n++,s=3;case 93:return n++,s=4;case 58:return n++,s=6;case 44:return n++,s=5;case 34:return n++,t=function ue(){let l="",A=n;for(;;){if(n>=i){l+=e.substring(A,n),d=2;break}const O=e.charCodeAt(n);if(34===O){l+=e.substring(A,n),n++;break}if(92!==O){if(O>=0&&O<=31){if(y(O)){l+=e.substring(A,n),d=2;break}d=6}n++}else{if(l+=e.substring(A,n),n++,n>=i){d=2;break}switch(e.charCodeAt(n++)){case 34:l+='"';break;case 92:l+="\\";break;case 47:l+="/";break;case 98:l+="\b";break;case 102:l+="\f";break;case 110:l+="\n";break;case 114:l+="\r";break;case 116:l+="\t";break;case 117:const w=k(4,!0);w>=0?l+=String.fromCharCode(w):d=4;break;default:d=5}A=n}}return l}(),s=10;case 47:const A=n-1;if(47===e.charCodeAt(n+1)){for(n+=2;n<i&&!y(e.charCodeAt(n));)n++;return t=e.substring(A,n),s=12}if(42===e.charCodeAt(n+1)){n+=2;const O=i-1;let L=!1;for(;n<O;){const w=e.charCodeAt(n);if(42===w&&47===e.charCodeAt(n+1)){n+=2,L=!0;break}n++,y(w)&&(13===w&&10===e.charCodeAt(n)&&n++,u++,c=n)}return L||(n++,d=1),t=e.substring(A,n),s=13}return t+=String.fromCharCode(l),n++,s=16;case 45:if(t+=String.fromCharCode(l),n++,n===i||!j(e.charCodeAt(n)))return s=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return t+=function N(){let l=n;if(48===e.charCodeAt(n))n++;else for(n++;n<e.length&&j(e.charCodeAt(n));)n++;if(n<e.length&&46===e.charCodeAt(n)){if(n++,!(n<e.length&&j(e.charCodeAt(n))))return d=3,e.substring(l,n);for(n++;n<e.length&&j(e.charCodeAt(n));)n++}let A=n;if(n<e.length&&(69===e.charCodeAt(n)||101===e.charCodeAt(n)))if(n++,(n<e.length&&43===e.charCodeAt(n)||45===e.charCodeAt(n))&&n++,n<e.length&&j(e.charCodeAt(n))){for(n++;n<e.length&&j(e.charCodeAt(n));)n++;A=n}else d=3;return e.substring(l,A)}(),s=11;default:for(;n<i&&En(l);)n++,l=e.charCodeAt(n);if(o!==n){switch(t=e.substring(o,n),t){case"true":return s=8;case"false":return s=9;case"null":return s=7}return s=16}return t+=String.fromCharCode(l),n++,s=16}}function En(l){if(ae(l)||y(l))return!1;switch(l){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}return{setPosition:function p(l){n=l,t="",o=0,s=16,d=0},getPosition:()=>n,scan:r?function Ln(){let l;do{l=bt()}while(l>=12&&l<=15);return l}:bt,getToken:()=>s,getTokenValue:()=>t,getTokenOffset:()=>o,getTokenLength:()=>n-o,getTokenStartLine:()=>g,getTokenStartCharacter:()=>o-v,getTokenError:()=>d}});var E,vt="delimiter.bracket.json",mt="delimiter.array.json",cn="delimiter.colon.json",ln="delimiter.comma.json",fn="keyword.json",dn="keyword.json",gn="string.value.json",pn="number.json",vn="string.key.json",mn="comment.block.json",hn="comment.line.json",W=class wt{constructor(r,i){this.parent=r,this.type=i}static pop(r){return r?r.parent:null}static push(r,i){return new wt(r,i)}static equals(r,i){if(!r&&!i)return!0;if(!r||!i)return!1;for(;r&&i;){if(r===i)return!0;if(r.type!==i.type)return!1;r=r.parent,i=i.parent}return!0}},ht=class ce{constructor(r,i,n,t){this._state=r,this.scanError=i,this.lastWasColon=n,this.parents=t}clone(){return new ce(this._state,this.scanError,this.lastWasColon,this.parents)}equals(r){return r===this||!!(r&&r instanceof ce)&&this.scanError===r.scanError&&this.lastWasColon===r.lastWasColon&&W.equals(this.parents,r.parents)}getStateData(){return this._state}setStateData(r){this._state=r}};function kn(){return new Promise((e,r)=>{if(!E)return r("JSON not registered!");e(E)})}var bn=class extends tt{constructor(e,r,i){super(e,r,i.onDidChange),this._disposables.push(f.editor.onWillDisposeModel(n=>{this._resetSchema(n.uri)})),this._disposables.push(f.editor.onDidChangeModelLanguage(n=>{this._resetSchema(n.model.uri)}))}_resetSchema(e){this._worker().then(r=>{r.resetSchema(e.toString())})}};function wn(e){const r=[],i=[],n=new de(e);function t(){const{languageId:s,modeConfiguration:u}=e;kt(i),u.documentFormattingEdits&&i.push(f.languages.registerDocumentFormattingEditProvider(s,new ct(E))),u.documentRangeFormattingEdits&&i.push(f.languages.registerDocumentRangeFormattingEditProvider(s,new lt(E))),u.completionItems&&i.push(f.languages.registerCompletionItemProvider(s,new nt(E,[" ",":",'"']))),u.hovers&&i.push(f.languages.registerHoverProvider(s,new rt(E))),u.documentSymbols&&i.push(f.languages.registerDocumentSymbolProvider(s,new st(E))),u.tokens&&i.push(f.languages.setTokensProvider(s,function un(e){return{getInitialState:()=>new ht(null,null,!1,null),tokenize:(r,i)=>function _n(e,r,i,n=0){let t=0,o=!1;switch(i.scanError){case 2:r='"'+r,t=1;break;case 1:r="/*"+r,t=2}const s=rn(r);let u=i.lastWasColon,g=i.parents;const c={tokens:[],endState:i.clone()};for(;;){let v=n+s.getPosition(),d="";const k=s.scan();if(17===k)break;if(v===n+s.getPosition())throw new Error("Scanner did not advance, next 3 characters are: "+r.substr(s.getPosition(),3));switch(o&&(v-=t),o=t>0,k){case 1:g=W.push(g,0),d=vt,u=!1;break;case 2:g=W.pop(g),d=vt,u=!1;break;case 3:g=W.push(g,1),d=mt,u=!1;break;case 4:g=W.pop(g),d=mt,u=!1;break;case 6:d=cn,u=!0;break;case 5:d=ln,u=!1;break;case 8:case 9:d=fn,u=!1;break;case 7:d=dn,u=!1;break;case 10:d=u||1===(g?g.type:0)?gn:vn,u=!1;break;case 11:d=pn,u=!1}if(e)switch(k){case 12:d=hn;break;case 13:d=mn}c.endState=new ht(i.getStateData(),s.getTokenError(),u,g),c.tokens.push({startIndex:v,scopes:d})}return c}(e,r,i)}}(!0))),u.colors&&i.push(f.languages.registerColorProvider(s,new dt(E))),u.foldingRanges&&i.push(f.languages.registerFoldingRangeProvider(s,new gt(E))),u.diagnostics&&i.push(new bn(s,E,e)),u.selectionRanges&&i.push(f.languages.registerSelectionRangeProvider(s,new pt(E)))}r.push(n),E=(...s)=>n.getLanguageServiceWorker(...s),t(),r.push(f.languages.setLanguageConfiguration(e.languageId,An));let o=e.modeConfiguration;return e.onDidChange(s=>{s.modeConfiguration!==o&&(o=s.modeConfiguration,t())}),r.push(_t(i)),_t(r)}function _t(e){return{dispose:()=>kt(e)}}function kt(e){for(;e.length;)e.pop().dispose()}var An={wordPattern:/(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string"]},{open:"[",close:"]",notIn:["string"]},{open:'"',close:'"',notIn:["string"]}]}}}]);