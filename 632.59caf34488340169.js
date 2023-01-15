"use strict";(self.webpackChunkWebMiniGames=self.webpackChunkWebMiniGames||[]).push([[632],{3999:(P,y,o)=>{o.d(y,{i:()=>I});var r=o(8274),l=o(4408);const u=new(o(7565).v)(l.o),d=u;var m=o(9751),S=o(3532);class I{constructor(h,b){this.injector=h,this.changeDetector=this.injector.get(r.sBO),this.interval$=function M(a=0,h=u){return a<0&&(a=0),function w(a=0,h,b=d){let x=-1;return null!=h&&((0,S.K)(h)?b=h:x=h),new m.y(C=>{let A=function T(a){return a instanceof Date&&!isNaN(a)}(a)?+a-b.now():a;A<0&&(A=0);let $=0;return b.schedule(function(){C.closed||(C.next($++),0<=x?this.schedule(void 0,x):C.complete())},A)})}(a,a,h)}(b)}ngOnInit(){this.subscription=this.interval$.subscribe(h=>{this.onComponentRefresh(),this.changeDetector.markForCheck()})}ngOnDestroy(){this.subscription.unsubscribe()}}I.\u0275fac=function(h){return new(h||I)(r.Y36(r.zs3),r.Y36("REFRESH_RATE"))},I.\u0275cmp=r.Xpm({type:I,selectors:[["ng-component"]],decls:0,vars:0,template:function(h,b){},encapsulation:2})},789:(P,y,o)=>{o.d(y,{t:()=>l});var r=o(8274);class l{transform(u){const d=Date.now()-u;return{minutes:Math.floor(d%36e5/6e4),seconds:Math.floor(d%6e4/1e3)}}}l.\u0275fac=function(u){return new(u||l)},l.\u0275pipe=r.Yjl({name:"elapsedTime",type:l,pure:!0})},518:(P,y,o)=>{o.d(y,{e:()=>f});var r=o(6895),l=o(8274);class f{}f.\u0275fac=function(d){return new(d||f)},f.\u0275mod=l.oAB({type:f}),f.\u0275inj=l.cJS({imports:[r.ez]})},5782:(P,y,o)=>{o.d(y,{R:()=>u});var r=o(8274),l=o(6895);const f=function(d){return{width:d}};class u{}u.\u0275fac=function(m){return new(m||u)},u.\u0275cmp=r.Xpm({type:u,selectors:[["app-progress-bar"]],inputs:{progress:"progress"},decls:5,vars:7,consts:[[1,"bar"],[1,"bar__progress-number"],[1,"bar__progress",3,"ngStyle"]],template:function(m,S){1&m&&(r.TgZ(0,"div",0)(1,"span",1),r._uU(2),r.ALo(3,"number"),r.qZA(),r._UZ(4,"div",2),r.qZA()),2&m&&(r.xp6(2),r.hij("",r.xi3(3,2,S.progress,"1.0-0")," %"),r.xp6(2),r.Q6J("ngStyle",r.VKq(5,f,S.progress+"%")))},dependencies:[l.PC,l.JJ],styles:[".bar[_ngcontent-%COMP%]{position:relative;width:100%;height:1.75rem;overflow:hidden;border-radius:.5rem;background-color:var(--color-dark-1)}.bar__progress-number[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.bar__progress[_ngcontent-%COMP%]{height:100%;background-color:#1fdc58;transition:width .5s}"],changeDetection:0})},5412:(P,y,o)=>{o.d(y,{m1:()=>rt});var r=o(9751),l=o(727),f=o(4408);let d,u=1;const m={};function S(s){return s in m&&(delete m[s],!0)}const T={setImmediate(s){const t=u++;return m[t]=!0,d||(d=Promise.resolve()),d.then(()=>S(t)&&s()),t},clearImmediate(s){S(s)}},{setImmediate:M,clearImmediate:I}=T,a={setImmediate(...s){const{delegate:t}=a;return(t?.setImmediate||M)(...s)},clearImmediate(s){const{delegate:t}=a;return(t?.clearImmediate||I)(s)},delegate:void 0};var b=o(7565);const C=new class x extends b.v{flush(t){this._active=!0;const e=this._scheduled;this._scheduled=void 0;const{actions:n}=this;let i;t=t||n.shift();do{if(i=t.execute(t.state,t.delay))break}while((t=n[0])&&t.id===e&&n.shift());if(this._active=!1,i){for(;(t=n[0])&&t.id===e&&n.shift();)t.unsubscribe();throw i}}}(class h extends f.o{constructor(t,e){super(t,e),this.scheduler=t,this.work=e}requestAsyncId(t,e,n=0){return null!==n&&n>0?super.requestAsyncId(t,e,n):(t.actions.push(this),t._scheduled||(t._scheduled=a.setImmediate(t.flush.bind(t,void 0))))}recycleAsyncId(t,e,n=0){var i;if(null!=n?n>0:this.delay>0)return super.recycleAsyncId(t,e,n);const{actions:c}=t;null!=e&&(null===(i=c[c.length-1])||void 0===i?void 0:i.id)!==e&&(a.clearImmediate(e),t._scheduled=void 0)}});var $=o(7579),U=o(6063);class D extends $.x{constructor(t=1/0,e=1/0,n=U.l){super(),this._bufferSize=t,this._windowTime=e,this._timestampProvider=n,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,t),this._windowTime=Math.max(1,e)}next(t){const{isStopped:e,_buffer:n,_infiniteTimeWindow:i,_timestampProvider:c,_windowTime:p}=this;e||(n.push(t),!i&&n.push(c.now()+p)),this._trimBuffer(),super.next(t)}_subscribe(t){this._throwIfClosed(),this._trimBuffer();const e=this._innerSubscribe(t),{_infiniteTimeWindow:n,_buffer:i}=this,c=i.slice();for(let p=0;p<c.length&&!t.closed;p+=n?1:2)t.next(c[p]);return this._checkFinalizedStatuses(t),e}_trimBuffer(){const{_bufferSize:t,_timestampProvider:e,_buffer:n,_infiniteTimeWindow:i}=this,c=(i?1:2)*t;if(t<1/0&&c<n.length&&n.splice(0,n.length-c),!i){const p=e.now();let g=0;for(let v=1;v<n.length&&n[v]<=p;v+=2)g=v;g&&n.splice(0,g+1)}}}var W=o(576);function z(s){return!!s&&(s instanceof r.y||(0,W.m)(s.lift)&&(0,W.m)(s.subscribe))}var F=o(9646),L=o(233),N=o(515),Z=o(2843),Y=o(7159),J=o(5121),X=o(5363),B=o(8505),G=o(1365),K=o(4004),Q=o(262),V=o(4482),k=o(5403),q=o(8421),_=o(5032);function E(s){return(0,V.e)((t,e)=>{(0,q.Xf)(s).subscribe((0,k.x)(e,()=>e.complete(),_.Z)),!e.closed&&t.subscribe(e)})}var tt=o(5698),et=o(1884),nt=o(3099),O=o(8274);function j(s){return"function"==typeof s.ngrxOnStoreInit}function R(s){return"function"==typeof s.ngrxOnStateInit}const it=new O.OlP("@ngrx/component-store Initial State");let rt=(()=>{class s{constructor(e){this.destroySubject$=new D(1),this.destroy$=this.destroySubject$.asObservable(),this.stateSubject$=new D(1),this.isInitialized=!1,this.state$=this.select(n=>n),this.\u0275hasProvider=!1,e&&this.initState(e),this.checkProviderForHooks()}ngOnDestroy(){this.stateSubject$.complete(),this.destroySubject$.next()}updater(e){return n=>{let c,i=!0;const g=(z(n)?n:(0,F.of)(n)).pipe((0,X.Q)(L.N),(0,B.b)(()=>this.assertStateIsInitialized()),(0,G.M)(this.stateSubject$),(0,K.U)(([v,lt])=>e(lt,v)),(0,B.b)(v=>this.stateSubject$.next(v)),(0,Q.K)(v=>i?(c=v,N.E):(0,Z._)(v)),E(this.destroy$)).subscribe();if(c)throw c;return i=!1,g}}initState(e){(0,Y.x)([e],L.N).subscribe(n=>{this.isInitialized=!0,this.stateSubject$.next(n)})}setState(e){"function"!=typeof e?this.initState(e):this.updater(e)()}patchState(e){const n="function"==typeof e?e(this.get()):e;this.updater((i,c)=>({...i,...c}))(n)}get(e){let n;return this.assertStateIsInitialized(),this.stateSubject$.pipe((0,tt.q)(1)).subscribe(i=>{n=e?e(i):i}),n}select(...e){const{observablesOrSelectorsObject:n,projector:i,config:c}=function ct(s){const t=Array.from(s);let e={debounce:!1};if(function at(s){return typeof s.debounce<"u"}(t[t.length-1])&&(e={...e,...t.pop()}),1===t.length&&"function"!=typeof t[0])return{observablesOrSelectorsObject:t[0],projector:void 0,config:e};const n=t.pop();return{observablesOrSelectorsObject:t,projector:n,config:e}}(e);return(function ut(s,t){return Array.isArray(s)&&0===s.length&&t}(n,i)?this.stateSubject$:(0,J.a)(n)).pipe(c.debounce?function ot(){return s=>new r.y(t=>{let e,n;const i=new l.w0;return i.add(s.subscribe({complete:()=>{e&&t.next(n),t.complete()},error:c=>{t.error(c)},next:c=>{n=c,e||(e=C.schedule(()=>{t.next(n),e=void 0}),i.add(e))}})),i})}():s=>s,i?(0,K.U)(g=>n.length>0&&Array.isArray(g)?i(...g):i(g)):s=>s,(0,et.x)(),function st(s,t,e){let n,i=!1;return s&&"object"==typeof s?({bufferSize:n=1/0,windowTime:t=1/0,refCount:i=!1,scheduler:e}=s):n=s??1/0,(0,nt.B)({connector:()=>new D(n,t,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:i})}({refCount:!0,bufferSize:1}),E(this.destroy$))}effect(e){const n=new $.x;return e(n).pipe(E(this.destroy$)).subscribe(),i=>(z(i)?i:(0,F.of)(i)).pipe(E(this.destroy$)).subscribe(p=>{n.next(p)})}checkProviderForHooks(){C.schedule(()=>{if((0,O.X6Q)()&&(j(this)||R(this))&&!this.\u0275hasProvider){const e=[j(this)?"OnStoreInit":"",R(this)?"OnStateInit":""].filter(n=>n);console.warn(`@ngrx/component-store: ${this.constructor.name} has the ${e.join(" and ")} lifecycle hook(s) implemented without being provided using the provideComponentStore(${this.constructor.name}) function. To resolve this, provide the component store via provideComponentStore(${this.constructor.name})`)}})}assertStateIsInitialized(){if(!this.isInitialized)throw new Error(`${this.constructor.name} has not been initialized yet. Please make sure it is initialized before updating/getting.`)}}return s.\u0275fac=function(e){return new(e||s)(O.LFG(it,8))},s.\u0275prov=O.Yz7({token:s,factory:s.\u0275fac}),s})()}}]);