//背景轮播图
$(".ban").banner({
	items:$(".ban").find("img"),
	autoPlay:true,
	delayTime:3000,
	moveTime:2000,
	index:0
})

function xxk(){
	ob=document.querySelectorAll(".bq b")
	oul=document.querySelectorAll(".k ul")
	for(var i=0;i<ob.length;i++){
		ob[i].index = i;
		ob[i].onmousemove = function(){
			for(var j=0;j<ob.length;j++){
			ob[j].className = "";
			oul[j].style.display = "none";
				}
			this.className = "move";
			oul[this.index].style.display = "block";
		}
	}
}
xxk()

//商品数据
class f1{
	constructor() {
	    this.oul=document.querySelector(".f1-b-c");
		
		this.url="http://localhost/ojo/json/sj.json";
		
		this.load();
		this.addEvent();
		
		
	}
	addEvent(){
		var that=this;
		this.oul.addEventListener("click",function(eve){
			var e=eve || window.event;
			if(eve.target.className=="au"){
				that.id= eve.target.parentNode.getAttribute("bm");
				that.setCookie();
			}
		})		
	}
	setCookie(){
		console.log(1)
		  this.sj = getCookie("sj") ? JSON.parse(getCookie("sj")) : [];
		  
		if(this.sj.length==0){
			this.sj.push({
				id:this.id,
				num:1
			})
		}else{
			var i=0;
			var onoff= this.sj.some((val,index)=>{
				i= index;
				return val.id == this.id;
			})
			if(onoff){
				this.sj[i].num++
			}else{
				this.sj.push({
					id:this.id,
					num:1
				})
			}
		}
		setCookie("sj",JSON.stringify(this.sj));
	}
	
	
	load(){
		var that=this;
		ajaxGet(this.url,function(res){
			that.res=JSON.parse(res)
			that.display();
		})
	}
	display(){

		var str= "";
		this.res.forEach((val)=>{
			str +=`<li>
						<a href="xq.html" target="_self" class="a-box au" bm="${val.shopid}">
							<img src="${val.url}"/>
							<p>${val.name}</p>
							<b>RMB</b>
							<span>${val.price}</span>
						</a>
					</li>`
		})
		this.oul.innerHTML=str;
	}
	
}
new f1;


class f2{
	constructor() {
	    this.oul=document.querySelector(".f2-b-c");
		
		this.url="http://localhost/ojo/json/sj.json";
		
		this.load();
		this.addEvent();
		
		
	}
	addEvent(){
		var that=this;
		this.oul.addEventListener("click",function(eve){
			var e=eve || window.event;
			if(eve.target.className=="au"){
				that.id= eve.target.parentNode.getAttribute("bm");
				that.setCookie();
			}
		})		
	}
	setCookie(){
		console.log(1)
		  this.sj = getCookie("sj") ? JSON.parse(getCookie("sj")) : [];
		  
		if(this.sj.length==0){
			this.sj.push({
				id:this.id,
				num:1
			})
		}else{
			var i=0;
			var onoff= this.sj.some((val,index)=>{
				i= index;
				return val.id == this.id;
			})
			if(onoff){
				this.sj[i].num++
			}else{
				this.sj.push({
					id:this.id,
					num:1
				})
			}
		}
		setCookie("sj",JSON.stringify(this.sj));
	}
	
	
	load(){
		var that=this;
		ajaxGet(this.url,function(res){
			that.res=JSON.parse(res)
			that.display();
		})
	}
	display(){

		var str= "";
		this.res.forEach((val)=>{
			str +=`<li>
						<a href="#" class="a-box au" bm="${val.shopid}">
							<img src="${val.url}"/>
							<p>${val.name}</p>
							<b>RMB</b>
							<span>${val.price}</span>
						</a>
					</li>`
		})
		this.oul.innerHTML=str;
	}
	
}
new f2;

class dly{
	constructor() {
		this.msg = localStorage.getItem("loginUser");
		this.display()
	}
	display(){
		if(this.msg){
			$(".t-l").hide();
			$(".t-l-2").show();
			$(".t-l-2").find("span").html(JSON.parse(this.msg).user);
		}else{
			$(".t-l").show();
			$(".t-l-2").hide();
		}
		$(".t-l-2").find("a").click(function(){
			localStorage.removeItem("loginUser");
			$(".t-l").show();
			$(".t-l-2").hide();
		})
	}
}
		
		

new dly;

$(function(){
			
			$('.nv li').click(function(){
			 var t =$('.lou').eq($(this).index());
			 $("html").stop().animate({
			     scrollTop:t.offset().top
			 })	
			})
		})








