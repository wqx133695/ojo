		function Magnifier(){
			this.sBox=document.querySelector(".s_box");
			this.bBox=document.querySelector(".b_box");
			this.bImg=this.bBox.children[0];
			this.addEvent();
		}
		Magnifier.prototype.addEvent=function(){
			var that=this;
			
			this.sBox.onmouseenter=function(){
				that.show();
			}
			this.sBox.onmouseleave=function(){
				that.hide();
			}
			this.sBox.onmousemove=function(eve){
				var e=eve || window.event;
				that.move(e);
			}
		}
		Magnifier.prototype.show=function(){
			
			this.bBox.style.display="block";
			if(!this.span){
				this.span=document.createElement("span")
				var w=this.bBox.offsetWidth/this.bImg.offsetWidth*this.sBox.offsetWidth;
				var h=this.bBox.offsetHeight/this.bImg.offsetHeight*this.sBox.offsetHeight;
				this.span.style.cssText=`width:${w}px; height:${h}px; background:rgba(200,200,200,.5); position:absolute; left:0; top:0;`;
				this.sBox.appendChild(this.span);
			}
			this.span.style.display="block";	
		}
		Magnifier.prototype.hide=function(){
			this.bBox.style.display="none";
			this.span.style.display="none";
		}
		Magnifier.prototype.move=function(e){
			var l=e.pageX-this.sBox.offsetLeft-this.span.offsetWidth/2;
			var t=e.pageY-this.sBox.offsetTop-this.span.offsetHeight/2;
			if(l<0) l=0;
			if(t<0) t=0;
			if(l>this.sBox.offsetWidth-this.span.offsetWidth){
				l=this.sBox.offsetWidth-this.span.offsetWidth;
			};
			if(t>this.sBox.offsetHeight-this.span.offsetHeight){
				t=this.sBox.offsetHeight-this.span.offsetHeight;
			};
			this.span.style.left=l+"px";
			this.span.style.top=t+"px";
			
			var x=l/(this.sBox.offsetWidth-this.span.offsetWidth);
			var y=t/(this.sBox.offsetHeight-this.span.offsetHeight);
			console.log(y)
			this.bImg.style.left=-x*(this.bImg.offsetWidth-this.bBox.offsetWidth)+"px";
			this.bImg.style.top=-y*(this.bImg.offsetHeight-this.bBox.offsetHeight)+"px";
		}
		new Magnifier;
		
