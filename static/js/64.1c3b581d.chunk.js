(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1052:function(e,t,a){"use strict";a.r(t);var n=a(63),l=a(64),r=a(67),o=a(65),s=a(218),c=a(66),p=a(1),i=a.n(p),m=a(724),u=a(7),g=a(42),v=a.n(g),d=a(878),b=function(e){var t=v()("popover","show"),a=v()("popover-inner",e.innerClassName);return i.a.createElement(d.a,Object(u.a)({},e,{popperClassName:t,innerClassName:a}))};b.propTypes=d.b,b.defaultProps={placement:"right",placementPrefix:"bs-popover",trigger:"click"};var h=b,f=a(23),O=a(6),E=a.n(O),j=a(710),N={tag:j.p,className:E.a.string,cssModule:E.a.object},P=function(e){var t=e.className,a=e.cssModule,n=e.tag,l=Object(f.a)(e,["className","cssModule","tag"]),r=Object(j.l)(v()(t,"popover-header"),a);return i.a.createElement(n,Object(u.a)({},l,{className:r}))};P.propTypes=N,P.defaultProps={tag:"h3"};var y=P,k={tag:j.p,className:E.a.string,cssModule:E.a.object},w=function(e){var t=e.className,a=e.cssModule,n=e.tag,l=Object(f.a)(e,["className","cssModule","tag"]),r=Object(j.l)(v()(t,"popover-body"),a);return i.a.createElement(n,Object(u.a)({},l,{className:r}))};w.propTypes=k,w.defaultProps={tag:"div"};var x=w,C=a(717),q=a(719),M=a(718),T=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).toggle=a.toggle.bind(Object(s.a)(a)),a.state={popoverOpen:!1},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){return i.a.createElement("span",null,i.a.createElement(m.a,{className:"mr-1",color:"secondary",id:"Popover-"+this.props.id,onClick:this.toggle},this.props.item.text),i.a.createElement(h,{placement:this.props.item.placement,isOpen:this.state.popoverOpen,target:"Popover-"+this.props.id,toggle:this.toggle,trigger:"legacy",delay:0},i.a.createElement(y,null,"Popover Title"),i.a.createElement(x,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.")))}}]),t}(p.Component),S=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).toggle=a.toggle.bind(Object(s.a)(a)),a.state={popoverOpen:!1,popovers:[{placement:"top",text:"Top"},{placement:"bottom",text:"Bottom"},{placement:"left",text:"Left"},{placement:"right",text:"Right"}]},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(C.a,null,i.a.createElement(q.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Popovers"),i.a.createElement("div",{className:"card-header-actions"},i.a.createElement("a",{href:"https://reactstrap.github.io/components/popovers/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},i.a.createElement("small",{className:"text-muted"},"docs")))),i.a.createElement(M.a,null,i.a.createElement(m.a,{id:"Popover1",onClick:this.toggle},"Launch Popover"),i.a.createElement(h,{placement:"bottom",isOpen:this.state.popoverOpen,target:"Popover1",toggle:this.toggle},i.a.createElement(y,null,"Popover Title"),i.a.createElement(x,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.")))),i.a.createElement(C.a,null,i.a.createElement(q.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Popovers"),i.a.createElement("small",null," list")),i.a.createElement(M.a,null,this.state.popovers.map(function(e,t){return i.a.createElement(T,{key:t,item:e,id:t})}))))}}]),t}(p.Component);t.default=S}}]);
//# sourceMappingURL=64.1c3b581d.chunk.js.map