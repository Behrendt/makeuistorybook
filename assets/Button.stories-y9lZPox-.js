import{j as n,B as i,I as c}from"./Chip-FBPmBl95.js";import"./index-CecxcEPL.js";const o=Object.keys(c.regular).map(t=>t),m={title:"Design System/Components/Molecules/Button",component:i,argTypes:{variation:{options:["primary","secondary"],control:{type:"select"}},size:{options:["small","medium","large"],control:{type:"radio"}},startIconName:{control:"select",options:["",...o]},endIconName:{control:"select",options:["",...o]},handleClick:{action:"clicked"}}},e={args:{variation:"primary",disabled:!1,size:"medium",label:"Button",startIconName:"home",endIconName:void 0},render:t=>n.jsxs("div",{style:{display:"flex",justifyContent:"center",width:"100%"},children:[" ",n.jsx(i,{...t})]})};var s,r,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variation: "primary",
    disabled: false,
    size: "medium",
    label: "Button",
    startIconName: "home",
    endIconName: undefined
  },
  render: (props: ButtonProps) => <div style={{
    display: "flex",
    justifyContent: "center",
    width: "100%"
  }}>
      {" "}
      <ButtonStory {...props} />
    </div>
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const p=["Button"];export{e as Button,p as __namedExportsOrder,m as default};
