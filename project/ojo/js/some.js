class List{
	constructor() {
	    this.cont=document.querySelector(".cont");
		
		this.url="http://localhost/ojo/json/sj.json";
		
		this.load();
		this.addEvent();
		
		
	}
	addEvent(){
		var that=this;
		this.cont.addEventListener("click",function(eve){
			var e=eve || window.event;
			if(eve.target.className=="btn"){
				that.id= eve.target.parentNode.getAttribute("bm");
				that.setCookie();

			}
		})		
	}
	setCookie(){
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
		console.log(this.res);
		var str= "";
		this.res.forEach((val)=>{
			str +=`<li class="box" bm="${val.shopid}">
						<img src="${val.url}" >
						<b>${val.price}</b> 
						<p>${val.name}</p>
						<i class="btn">加入购物车</i>
					</li>`
					
		})
		this.cont.innerHTML=str;
	}
	
}
new List;