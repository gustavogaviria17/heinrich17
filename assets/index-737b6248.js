import{u as i,a0 as o,B as n,K as y,r as s,j as t,Y as I}from"./index-676e7855.js";const $=i.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`,z=i.div`
  position: relative;
  text-align: center;
`,l=i.div`
  display: inline-block;
  transform: skew(-45deg);
`,p=i.div`
  height: 180px;
  overflow: hidden;

  &:after {
    background: linear-gradient(90deg, transparent, rgba(173, 173, 173, 0.8), transparent);
    border-radius: 50%;
    bottom: 0px;
    content: '';
    height: 100%;
    position: absolute;
    right: -5px;
    width: 10px;
    z-index: 9999;
  }

  ${({type:e})=>e==="second"&&o`
      box-shadow: inset 20px 0px 20px -15px rgba(150, 150, 150, 0.8),
        20px 0px 20px -15px rgba(150, 150, 150, 0.8);
      width: 150px;
    `}

  ${({type:e})=>(e==="first"||e==="third")&&o`
      width: 250px;
    `}

  ${({type:e})=>e==="first"&&o`
      &:after {
        left: -5px;
      }
    `}

  @media ${n.fromTablet} {
    height: 100px;
    width: 80px;
  }
`,x=i.span`
  background: #07b3f9;
  border-radius: 50%;
  color: white;
  display: inline-block;
  font-size: 120px;
  font-weight: bold;
  height: 150px;
  line-height: 150px;
  position: relative;
  top: 8%;
  transform: skew(45deg);
  width: 150px;

  ${({type:e})=>e==="second"&&o`
      left: 0;
    `}

  ${({type:e})=>e==="first"&&o`
      right: 20%;
    `}

  ${({type:e})=>e==="third"&&o`
      left: 20%;
    `}

  @media ${n.fromTablet} {
    width: 80px;
    height: 80px;
    line-height: 80px;
    font-size: 52px;
  }
`,k=i.div`
  background: #535353;
  border-radius: 50%;
  color: #a2a2a2;
  display: block;
  font-size: 32px;
  font-style: italic;
  height: 80px;
  left: 24%;
  line-height: 80px;
  position: relative;
  top: -290px;
  width: 80px;
  z-index: 9999;

  @media (max-width: 1023px) {
    left: 12%;
  }

  @media ${n.fromTablet} {
    top: -160px;
    left: 15%;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
  }
`,T=i.span`
  border-bottom: 15px solid transparent;
  border-left: 20px solid #535353;
  border-top: 15px solid transparent;
  bottom: -4px;
  content: '';
  height: 0;
  position: absolute;
  right: -4px;
  transform: rotate(45deg);
  width: 0;
  z-index: 999;

  @media ${n.fromTablet} {
    border-left: 10px solid #535353;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    bottom: -3px;
    right: -1px;
  }
`,D=i.h2`
  color: #a2a2a2;
  font-size: 32px;
  font-weight: bold;
  padding-bottom: 20px;

  @media ${n.fromTablet} {
    font-size: 24px;
  }
`,S=()=>{const e=y(),[u,h]=s.useState(0),[v,c]=s.useState(0),[j,f]=s.useState(0),w=()=>{let r=0;const d=30,g=setInterval(()=>{r>100?(clearInterval(g),h(4)):(h(a()),r++)},d),b=setInterval(()=>{r>80?(clearInterval(b),c(0)):(c(a()),r++)},d),m=setInterval(()=>{r>40?(clearInterval(m),f(4)):(f(a()),r++)},d);return()=>{clearInterval(g),clearInterval(b),clearInterval(m)}},a=()=>Math.floor(Math.random()*9)+1;return s.useEffect(w,[]),t.jsx($,{children:t.jsxs(z,{children:[t.jsx(l,{children:t.jsx(p,{type:"third",children:t.jsx(x,{type:"third",children:j})})}),t.jsx(l,{children:t.jsx(p,{type:"second",children:t.jsx(x,{type:"second",children:v})})}),t.jsx(l,{children:t.jsx(p,{type:"first",children:t.jsx(x,{type:"first",children:u})})}),t.jsxs(k,{children:["OH!",t.jsx(T,{})]}),t.jsx(D,{children:"Sorry! Page not found"}),t.jsx(I,{onClick:()=>e("/"),size:"large",type:"primary",children:"Go to the Home"})]})})};export{S as default};
