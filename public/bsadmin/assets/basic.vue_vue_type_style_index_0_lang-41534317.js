import{d as E,r as i,aG as U,o as P,au as R,u as p,a as t,A as r,w as l,$ as _,D as F,E as I,aH as L,l as W,c as b,J as v,k as x,I as g,S as C,a0 as V,y as z,t as y,K as J,B as M,q as $,v as q,aI as A,aJ as H}from"./index-3b328f2a.js";/* empty css                     */const K={class:"p-6 form-body"},j={class:"line-height-2 pt-2 text-grey h10 w-100 text-tips"},O=E({name:"/setting/basic"}),Y=E({...O,props:{group:{default:"basic"}},setup(S){const h=S,n=i("left");window.innerWidth<1450?n.value="top":n.value="left";const m=i(h.group??"basic");U(()=>{window.innerWidth<1450?n.value="top":n.value="left"});const w=i([]),d=i(!1),k=()=>(d.value=!0,_.get("setting/"+h.group).then(s=>{s.code===_.ResponseCode.SUCCESS&&(w.value=s.data)}).finally(()=>{F(()=>{d.value=!1})})),T=(s,u,f)=>{d.value||_.post("setting/basic/Edit",{gruop:u,key:f.name,value:s}).then(c=>{c.code!==_.ResponseCode.SUCCESS&&$.error(c.message)})};return P(()=>{k()}),(s,u)=>{const f=q,c=A,B=H,D=I,N=L;return R((t(),r(D,{class:"bg-white rounded-4 flex-1 flex overflow-hidden flex-column p-6",size:"large","label-position":"top"},{default:l(()=>[W(B,{modelValue:p(m),"onUpdate:modelValue":u[0]||(u[0]=o=>M(m)?m.value=o:null),"tab-position":p(n),class:"flex-1 setting-tabs overflow-hidden"},{default:l(()=>[(t(!0),b(g,null,v(p(w),o=>(t(),r(c,{name:o.name,label:o.label},{default:l(()=>[x("div",K,[(t(!0),b(g,null,v(o.children,e=>(t(),r(f,{label:e.label,class:"border-bottom border-bottom-dashed p-4 hover-bg-hover rounded-4"},{default:l(()=>[(t(),r(C(e.component),V({modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,placeholder:e.placeholder},e.props??{},{onChange:a=>T(a,o.name,e)}),{default:l(()=>[e.children?(t(!0),b(g,{key:0},v(e.children,a=>(t(),r(C(e.children_component),V(a.props??{},{key:a.value,value:a.value,label:["el-select"].includes(e.component)?a.title:a.value}),{default:l(()=>[z(y(a.title),1)]),_:2},1040,["value","label"]))),128)):J("",!0)]),_:2},1040,["modelValue","onUpdate:modelValue","placeholder","onChange"])),x("div",j,y(e.tips),1)]),_:2},1032,["label"]))),256))])]),_:2},1032,["name","label"]))),256))]),_:1},8,["modelValue","tab-position"])]),_:1})),[[N,p(d)]])}}});export{Y as _};