import{j as o,c as a,I as i}from"./Icon-nzNWBV38.js";import"./index-CecxcEPL.js";const c=Object.keys(i.regular).map(n=>n),d={title:"Design System/Components/Molecules/Icon Button",component:a,argTypes:{variation:{options:["primary","secondary","transparent"],control:{type:"select"}},shape:{control:"radio",options:["square","round"]},iconName:{control:"select",options:c},size:{options:["small","medium","large"],control:{type:"radio"}},handleClick:{action:"clicked"}}},e={args:{variation:"primary",iconName:"home",disabled:!1,size:"medium",shape:"square"},render:n=>o.jsxs("div",{style:{display:"flex",justifyContent:"center",width:"100%"},children:[" ",o.jsx(a,{...n})]})};var t,s,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    variation: "primary",
    iconName: "home",
    disabled: false,
    size: "medium",
    shape: "square"
  },
  render: (props: IconButtonProps) => <div style={{
    display: "flex",
    justifyContent: "center",
    width: "100%"
  }}>
      {" "}
      <IconButtonStory {...props} />
    </div>
}`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const l=["IconButton"];export{e as IconButton,l as __namedExportsOrder,d as default};
