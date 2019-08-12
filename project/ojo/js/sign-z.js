  	class Login{
  		constructor(){
  			this.url = "http://api.icodeilife.cn:81/user";
  			this.user = $(".txt");
  			this.pass1 = $(".pass1");
  			this.pass2 = $(".pass2");
  			this.tel = $(".phe");
  			this.btn = $(".btn");
  			this.zt = $(".zt");
  			this.pass1onOff = this.pass2onOff = this.yhonOff = this.phoneonOff = false;
  			this.addEvent();
  			console.log(this.url);
  		}
  			
  		addEvent(){
  			var that = this;
  			$(".txt").on("blur",function(){
  				var re1 = /^([\u2E80-\u9FFF\d\w-_]{6,18})$/
  				if(re1.test(this.value)){
  					that.zt.hide();
  					that.yhonoff = true;
  				console.log(that.yhonoff);
  				}else{
  					
  					that.zt.html("只能包含数字、字母为6-18位");
  					that.zt.show();
  					that.yhonoff = false;
  				}
  			});
  				
  				
  			$(".pass1").on("input",function(){	
  				var tsReg = /^[0-9a-zA-Z!@#$^]{6,18}$/;
  				if(tsReg.test(this.value)){
  					that.zt.hide();
  					that.pass1onoff = true;
					console.log(that.pass1onoff);
  					
  				}else{
  					that.zt.html("至少要6位数");
  					that.zt.show();
  					that.pass1onoff = false;
  				}
  				
  			})
  			
  			$(".pass2").on("blur",function(){	
  				if($(".pass2")[0].value == $(".pass1")[0].value){
  					that.zt.hide();
  					that.pass2onoff = true;
					console.log(that.pass2onoff);
  				}else{
  					that.zt.html("两次密码输入不一致");
  					that.zt.show();
  					that.pass2onoff = false;
  				}
  			})
  			
  			$(".phe").on("blur",function(){
  				
  				var phone = /^1[3|4|5|7|8|9][0-9]{9}$/;
  				if(phone.test(this.value)){
  					that.zt.hide();
  					that.phoneonoff = true;
					console.log(that.phoneonoff);
  				}else{
  					that.zt.html("请输入正确的手机号码");
  					that.zt.show();
  					that.phoneonoff = false;
  				}
  			})
  			$(".btn").on("click",function(){
  				if(that.yhonoff && that.pass1onoff && that.pass2onoff && that.phoneonoff){
  					that.load();
					console.log(that.load())
  				}else{
  					alert("注册失败");
  				}
  			})
  		}
  		
  		load(){
  			$.ajax({
  				url:this.url,
  				data:{
  					type:"register",
  					user:this.user.val(),
  					pass:this.pass1.val(),
  					tel:this.tel.val(),
  				},
  				success:(res)=>{
  					res = JSON.parse(res)
  					if(res.code == 0){
  						this.zt.html("注册失败，请重新注册");
  					}else if(res.code == 1 && this.pass2.val() == this.pass1.val()){
  						this.zt.html("注册成功，3秒后跳转到<a href='sign.html'>登陆</a>")
  						// setTimeout(()=>{
  						// 	location.href = "sign.html";
  						// },3000);
  					}
  				}
          	})
  		}
  		
  	}
  new Login;
  	