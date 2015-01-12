(function(){var a,b=function(a,b){return function(){return a.apply(b,arguments)}};console.log("'Allo from CoffeeScript!"),a=function(){function a(a,c,d,e){var f;this.arrivalRate=a,this.serviceRate=c,this.maxSize=null!=d?d:1/0,this.selector=e,this.service=b(this.service,this),this.arrive=b(this.arrive,this),this.draw=b(this.draw,this),this.people=[],this.index=0,this.timeScale=1e3,f=d3.select(this.selector).append("div").classed("form-group",!0).datum(this),f.append("label").text("arrival"),f.append("input").attr("name","arrival").attr("value",this.arrivalRate).on("change",function(a){return a.arrivalRate=parseFloat(this.value)}),f=d3.select(this.selector).append("div").classed("form-group",!0).datum(this),f.append("label").text("service"),f.append("input").attr("name","service").attr("value",this.serviceRate).on("change",function(a){return a.serviceRate=parseFloat(this.value)}),f=d3.select(this.selector).append("div").classed("form-group",!0).datum(this),f.append("label").text("max size"),f.append("input").attr("name","max").attr("value",this.maxSize).on("change",function(a){return a.maxSize=parseInt(this.value)}),d3.select(this.selector).append("div").attr("id","queue"),d3.timer(this.arrive,this.arrivalRate*this.timeScale),d3.timer(this.service,this.serviceRate*this.timeScale)}return a.prototype.draw=function(){var a;return a=d3.select(this.selector).select("#queue").selectAll("img").data(this.people,function(a){return a}),a.enter().append("img"),a.attr("width",50).attr("height",150).attr("src","images/customer.png"),a.exit().remove(),!0},a.prototype.arrive=function(){return console.log("customer "+this.index+" arrived!"),this.people.length<this.maxSize?this.people.push(this.index++):console.log("customer "+this.index+" was rejected!"),d3.timer(this.arrive,this.arrivalRate*this.timeScale),this.draw(),console.log("Next customer in "+this.arrivalRate),!0},a.prototype.service=function(){var a;return a=this.people.shift(),console.log("customer "+a+" serviced."),d3.timer(this.service,this.serviceRate*this.timeScale),this.draw(),!0},a}(),window.world=new a(1,1.2,null,".growing")}).call(this);