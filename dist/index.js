"use strict";var v=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var f=v(function(B,b){
var c=require('@stdlib/math-base-special-abs/dist'),q=require('@stdlib/math-base-assert-is-nan/dist');function l(a,e,i,d){var u,n,t,r,s;if(a<=0)return NaN;if(a===1||i===0)return q(e[d])?NaN:0;if(t=d,r=e[t],q(r))return r;for(n=c(r),u=n,s=1;s<a;s++){if(t+=i,r=e[t],q(r))return r;r=c(r),r<n?n=r:r>u&&(u=r)}return u-n}b.exports=l
});var p=v(function(C,m){
var R=require('@stdlib/strided-base-stride2offset/dist'),_=f();function E(a,e,i){return _(a,e,i,R(a,i))}m.exports=E
});var x=v(function(D,g){
var N=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=p(),O=f();N(y,"ndarray",O);g.exports=y
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=x(),o,j=k(h(__dirname,"./native.js"));w(j)?o=z:o=j;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
