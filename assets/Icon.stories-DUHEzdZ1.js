import{a as r,b as d,j as l,I as u}from"./Icon-nzNWBV38.js";import"./index-CecxcEPL.js";const h={title:"Design System/Components/Atoms/Icon",component:d},f=Object.keys(u.regular).map(o=>o),g=(o,s)=>s.split(".").reduce((n,e)=>n==null?void 0:n[e],o),p=(o,s="")=>Object.keys(o).reduce((n,e)=>{const c=s?`${s}.${e}`:e;return typeof o[e]=="string"?n.push(c):typeof o[e]=="object"&&o[e]!==null&&(n=n.concat(p(o[e],c))),n},[]),t={args:{name:"home",size:"medium",color:r.semantic.icon.default},argTypes:{name:{control:"select",options:f},size:{control:"radio",options:["small","medium","large","extraLarge"]},color:{control:"select",options:p(r.semantic.icon)}},render:({color:o,...s})=>{const n=g(r.semantic.icon,o);return l.jsx("div",{style:{display:"flex",justifyContent:"center",width:"100%"},children:l.jsx(d,{...s,color:n})})}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    name: "home",
    size: "medium",
    color: Colors.semantic.icon.default
  },
  argTypes: {
    name: {
      control: "select",
      options: iconNames
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large", "extraLarge"]
    },
    color: {
      control: "select",
      options: flattenColorTokens(Colors.semantic.icon)
    }
  },
  render: ({
    color,
    ...props
  }: IconProps) => {
    const resolvedColor = getNestedValue(Colors.semantic.icon, color); // Resolve color path

    return <div style={{
      display: "flex",
      justifyContent: "center",
      width: "100%"
    }}>
        <IconStory {...props} color={resolvedColor} />
      </div>;
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const y=["Icon"];export{t as Icon,y as __namedExportsOrder,h as default};
