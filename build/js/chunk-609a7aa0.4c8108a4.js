(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-609a7aa0"],{"0428":function(e,t,a){"use strict";a("38e0")},3573:function(e,t,a){"use strict";var n=a("b2b3");const o={class:"page-content"},c=Object(n["createTextVNode"])(" 新建数据 "),l={class:"handle-btns"},r=Object(n["createTextVNode"])(" 编辑 "),i=Object(n["createTextVNode"])("删除");function s(e,t,a,s,p,d){const b=Object(n["resolveComponent"])("el-button"),m=Object(n["resolveComponent"])("HyTable");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",o,[Object(n["createVNode"])(m,Object(n["mergeProps"])({listData:e.dataList,listCount:e.dataCount},e.contentTableConfig,{page:e.pageInfo,"onUpdate:page":t[0]||(t[0]=t=>e.pageInfo=t)}),Object(n["createSlots"])({headerHandler:Object(n["withCtx"])(()=>[e.isCreate?(Object(n["openBlock"])(),Object(n["createBlock"])(b,{key:0,type:"primary",size:"medium",onClick:e.handleNewClick},{default:Object(n["withCtx"])(()=>[c]),_:1},8,["onClick"])):Object(n["createCommentVNode"])("",!0)]),status:Object(n["withCtx"])(e=>[Object(n["createVNode"])(b,{plain:"",size:"mini",type:e.row.enable?"success":"danger"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.row.enable?"启用":"禁用"),1)]),_:2},1032,["type"])]),createAt:Object(n["withCtx"])(t=>[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(e.$filters.formatTime(t.row.createAt)),1)]),updateAt:Object(n["withCtx"])(t=>[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(e.$filters.formatTime(t.row.createAt)),1)]),handler:Object(n["withCtx"])(t=>[Object(n["createElementVNode"])("div",l,[e.isUpdate?(Object(n["openBlock"])(),Object(n["createBlock"])(b,{key:0,size:"mini",type:"text",onClick:a=>e.handleEditClick(t.row)},{default:Object(n["withCtx"])(()=>[r]),_:2},1032,["onClick"])):Object(n["createCommentVNode"])("",!0),e.isDelete?(Object(n["openBlock"])(),Object(n["createBlock"])(b,{key:1,size:"mini",type:"text",onClick:a=>e.handleDeleteClick(t.row)},{default:Object(n["withCtx"])(()=>[i]),_:2},1032,["onClick"])):Object(n["createCommentVNode"])("",!0)])]),_:2},[Object(n["renderList"])(e.otherPropSlots,t=>({name:t.slotName,fn:Object(n["withCtx"])(a=>[t.slotName?Object(n["renderSlot"])(e.$slots,t.slotName,{key:0,row:a.row},void 0,!0):Object(n["createCommentVNode"])("",!0)])}))]),1040,["listData","listCount","page"])])}var p=a("0613");const d={class:"hy-table"},b={class:"header"},m={class:"title"},u={class:"handler"},g={key:0,class:"footer"};function j(e,t,a,o,c,l){const r=Object(n["resolveComponent"])("solt"),i=Object(n["resolveComponent"])("el-table-column"),s=Object(n["resolveComponent"])("el-table"),p=Object(n["resolveComponent"])("el-pagination");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",d,[Object(n["createElementVNode"])("div",b,[Object(n["createVNode"])(r,{name:"header"},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div",m,Object(n["toDisplayString"])(e.title),1)]),_:1}),Object(n["createElementVNode"])("div",u,[Object(n["renderSlot"])(e.$slots,"headerHandler",{},void 0,!0)])]),Object(n["createVNode"])(s,Object(n["mergeProps"])({data:e.listData,border:"",style:{width:"100%"},onSelectionChange:e.handleSelectionChange},e.childrenProps),{default:Object(n["withCtx"])(()=>[e.showIndexColumn?(Object(n["openBlock"])(),Object(n["createBlock"])(i,{key:0,type:"selection",align:"center",width:"60"})):Object(n["createCommentVNode"])("",!0),e.showIndexColumn?(Object(n["openBlock"])(),Object(n["createBlock"])(i,{key:1,type:"index",label:"序号",align:"center",width:"80"})):Object(n["createCommentVNode"])("",!0),(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.propList,t=>(Object(n["openBlock"])(),Object(n["createBlock"])(i,Object(n["mergeProps"])({key:t.prop,align:"center"},t,{"show-overflow-tooltip":""}),{default:Object(n["withCtx"])(a=>[Object(n["renderSlot"])(e.$slots,t.slotName,{row:a.row},()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(a.row[t.prop]),1)],!0)]),_:2},1040))),128))]),_:3},16,["data","onSelectionChange"]),e.showFooter?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",g,[Object(n["createVNode"])(r,{name:"footer"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(p,{currentPage:e.page.currentPage,"onUpdate:currentPage":t[0]||(t[0]=t=>e.page.currentPage=t),"page-size":e.page.pageSize,"onUpdate:page-size":t[1]||(t[1]=t=>e.page.pageSize=t),"page-sizes":[10,20,30,40],layout:"total, sizes, prev, pager, next, jumper",total:e.listCount,onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange},null,8,["currentPage","page-size","total","onSizeChange","onCurrentChange"])]),_:1})])):Object(n["createCommentVNode"])("",!0)])}var O=Object(n["defineComponent"])({props:{title:{type:String,default:""},listData:{type:Array,required:!0},listCount:{type:Number,default:0},propList:{type:Array,required:!0},showIndexColumn:{type:Boolean,default:!1},showSelectColumn:{type:Boolean,default:!1},page:{type:Object,default:()=>({currentPage:0,pageSize:10})},showFooter:{type:Boolean,default:!0},childrenProps:{type:Object,default:()=>({})}},emits:["selectionChange","update:page"],setup(e,{emit:t}){const a=e=>{t("selectionChange",e)},n=a=>{t("update:page",{...e.page,pageSize:a})},o=a=>{t("update:page",{...e.page,currentPage:a})};return{handleSelectionChange:a,handleSizeChange:n,handleCurrentChange:o}}}),C=(a("0428"),a("62d4")),h=a.n(C);const f=h()(O,[["render",j],["__scopeId","data-v-d908c480"]]);var w=f,N=w;function k(e,t){const a=Object(p["c"])(),n=a.state.login.permissions,o=`system:${e}:${t}`;return!!n.find(e=>e===o)}var y=Object(n["defineComponent"])({components:{HyTable:N},props:{contentTableConfig:{type:Object,require:!0},pageName:{type:String,required:!0}},emits:["newBtnClick","editBtnClick"],setup(e,{emit:t}){var a;const o=Object(p["c"])(),c=k(e.pageName,"create"),l=k(e.pageName,"update"),r=k(e.pageName,"delete"),i=k(e.pageName,"query"),s=Object(n["ref"])({currentPage:1,pageSize:10});Object(n["watch"])(s,()=>{d()});const d=(t={})=>{i&&o.dispatch("system/getPageListAction",{pageName:e.pageName,queryInfo:{offset:(s.value.currentPage-1)*s.value.pageSize,size:s.value.pageSize,...t}})};d();const b=Object(n["computed"])(()=>o.getters["system/pageListData"](e.pageName)),m=Object(n["computed"])(()=>o.getters["system/pageListCount"](e.pageName)),u=null===(a=e.contentTableConfig)||void 0===a?void 0:a.propList.filter(e=>"status"!==e.slotName&&("createAt"!==e.slotName&&("updateAt"!==e.slotName&&"handler"!==e.slotName))),g=t=>{console.log(t),o.dispatch("system/deletePageDataAction",{pageName:e.pageName,id:t.id})},j=()=>{t("newBtnClick")},O=e=>{t("editBtnClick",e)};return{dataList:b,dataCount:m,pageInfo:s,getPageData:d,otherPropSlots:u,isCreate:c,isUpdate:l,isDelete:r,handleDeleteClick:g,handleNewClick:j,handleEditClick:O}}});a("cd7c");const v=h()(y,[["render",s],["__scopeId","data-v-688980c2"]]);var S=v;t["a"]=S},"38e0":function(e,t,a){},ab96:function(e,t,a){"use strict";a.r(t);var n=a("b2b3");const o={class:"menu"};function c(e,t,a,c,l,r){const i=Object(n["resolveComponent"])("PageContent");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",o,[Object(n["createVNode"])(i,{contentTableConfig:e.contentTableConfig,pageName:"menu"},null,8,["contentTableConfig"])])}var l=a("3573");const r={title:"菜单列表",propList:[{prop:"name",label:"菜单名称",minWidth:"100"},{prop:"type",label:"类型",minWidth:"60"},{prop:"url",label:"菜单url",minWidth:"100"},{prop:"icon",label:"菜单icon",minWidth:"100"},{prop:"permission",label:"按钮权限",minWidth:"100"},{prop:"createAt",label:"创建时间",minWidth:"220",slotName:"createAt"},{prop:"updateAt",label:"更新时间",minWidth:"220",slotName:"updateAt"},{label:"操作",minWidth:"120",slotName:"handler"}],showIndexColumn:!1,showSelectColumn:!1,childrenProps:{rowKey:"id",treeProp:{children:"children"}},showFooter:!1};var i=Object(n["defineComponent"])({name:"hy-menu",components:{PageContent:l["a"]},setup(){return{contentTableConfig:r}}}),s=a("62d4"),p=a.n(s);const d=p()(i,[["render",c]]);t["default"]=d},cd7c:function(e,t,a){"use strict";a("ff04")},ff04:function(e,t,a){}}]);
//# sourceMappingURL=chunk-609a7aa0.4c8108a4.js.map