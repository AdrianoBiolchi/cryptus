(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(27)},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),i=a.n(c),s=(a(9),a(1)),l=a(2),o=a(4),u=a(3),m=a(5),d=function(e){var t=e.branding;return r.a.createElement("nav",{className:"navbar mb-3 pt-3 pb-3 py-0  text-sm-center text-md-left"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/cryptus",className:"navbar-brand"},t),r.a.createElement("ul",{className:"navbar-nav mr-auto-right",alt:"fireSpot"},r.a.createElement("ul",{class:"navbar-nav mr-auto"},r.a.createElement("li",{class:"nav-item active"},r.a.createElement("img",{src:"fclogo.svg",width:"145",alt:""}))))))};d.defaultProps={branding:"Cryptus - Real Time Cryptos"};var h=d,v=a(11),p=function(e){var t="number"!==typeof parseInt(e.value)||isNaN(parseInt(e.value))?e.value:Math.round(parseInt(e.value));return r.a.createElement("div",{className:"card mr-0 custom-card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("img",{src:e.src,alt:e.src,className:"img-responsive float-right"}),r.a.createElement("h6",{className:"card-title mb-4 "},e.header," "),r.a.createElement("h2",{className:"mb-1 text-primary"},"$",t),r.a.createElement("p",{className:"card-text"},r.a.createElement("small",{className:"text-muted"},e.label))))},b=a(6),f=a.n(b),g=a(12),E=a.n(g),y=a(13),N=a.n(y),k=a(7),w=a.n(k),S=a(14),C=a.n(S);w.a.fcRoot(f.a,E.a,N.a,C.a);var j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).BASE_URL="https://api.cryptonator.com/api/full/",a.chartRef=null,a.state={btcusd:"-",ltcusd:"-",ethusd:"-",showChart:!1,initValue:0,dataSource:{chart:{caption:"Bitcoin Ticker",subCaption:"",xAxisName:"Local Time",yAxisName:"usd",numberPrefix:"R$",refreshinterval:"2",slantLabels:"1",numdisplaysets:"10",labeldisplay:"rotate",showValues:"0",showRealTimeValue:"0",theme:"fusion"},categories:[{category:[{label:a.clientDateTime().toString()}]}],dataset:[{data:[{value:0}]}]}},a.chartConfigs={type:"realtimeline",renderAt:"container",width:"100%",height:"350",dataFormat:"json"},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getDataFor("btc-usd","btcusd"),this.getDataFor("ltc-usd","ltcusd"),this.getDataFor("eth-usd","ethusd")}},{key:"startUpdatingData",value:function(){var e=this;setInterval(function(){fetch(e.BASE_URL+"btc-usd").then(function(e){return e.json()}).then(function(t){var a=e.clientDateTime(),n=t.ticker.price;e.chartRef.feedData("&label="+a+"&value="+n)})},2e3)}},{key:"getDataFor",value:function(e,t){var a=this;fetch(this.BASE_URL+e,{mode:"cors"}).then(function(e){return e.json()}).then(function(e){if("btcusd"===t){var n=a.state.dataSource;n.chart.yAxisMaxValue=parseInt(e.ticker.price)+5,n.chart.yAxisMinValue=parseInt(e.ticker.price)-5,n.dataset[0].data[0].value=e.ticker.price,a.setState({showChart:!0,dataSource:n,initValue:e.ticker.price},function(){a.startUpdatingData()})}a.setState(Object(v.a)({},t,e.ticker.price))})}},{key:"clientDateTime",value:function(){var e=new Date,a=e.getHours();return t.addLeadingZero(a)+":"+e.getMinutes()+":"+e.getSeconds()}},{key:"getChartRef",value:function(e){this.chartRef=e}},{key:"render",value:function(){return r.a.createElement("div",{className:"row mt-5 mt-xs-4"},r.a.createElement("div",{className:"col-12 mb-3"},r.a.createElement("div",{className:"card-deck custom-card-deck"},r.a.createElement(p,{header:"Bitcoin(BTC)",src:"/bitcoin.png",alt:"fireSpot",label:"(Price in USD)",value:this.state.btcusd}),r.a.createElement(p,{header:"Litecoin(LTC)",src:"/litecoin.png",alt:"fireSpot",label:"(Price in USD)",value:this.state.ltcusd}),r.a.createElement(p,{header:"Ethereum(ETH)",src:"/ethereum.png",alt:"fireSpot",label:"(Price in USD)",value:this.state.ethusd}))),r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"card custom-card mb-5 mb-xs-4"},r.a.createElement("div",{className:"card-body"},this.state.showChart?r.a.createElement(w.a,Object.assign({},this.chartConfigs,{dataSource:this.state.dataSource,onRender:this.getChartRef.bind(this)})):null))))}}],[{key:"addLeadingZero",value:function(e){return e<=9?"0"+e:e}}]),t}(r.a.Component),x=(a(26),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,{branding:"Cryptus - Real Time Cryptos"}),r.a.createElement("div",{className:"container"},r.a.createElement(j,null)))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){}},[[15,1,2]]]);
//# sourceMappingURL=main.db75a515.chunk.js.map