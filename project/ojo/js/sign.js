    class Login{
        constructor(){
            this.url = "http://api.icodeilife.cn:81/user";
            this.user = $(".txt");
            this.pass = $(".pass");
            this.btn = $(".bon");
			this.state = $(".zt span")
            this.addEvent();
        }
        addEvent(){
            var that = this;
            this.btn.click(function(){
                that.load()
            })
        }
        load(){
			
            $.ajax({
                url:this.url,
                data:{
                    type:"login",
                    user:this.user.val(),
                    pass:this.pass.val(),
                },
                success:(res)=>{
					if(this.user.val() == "") return;
                    this.res = JSON.parse(res);
					if(this.res.code == 2){
                        this.state.html("帐号密码不符，请<a href='sign.html'>重新登录</a>")
                    }else if(this.res.code == 1){
                        this.setState()
                        this.state.html("登录成功,3秒后跳转到<a href='index.html'>首页</a>");
                        // setTimeout(() => {
                        //     location.href="index.html";
                        // }, 3000);
                    }else if(this.res.code == 0){
                        this.state.html("不存在该用户信息，请<a href='sign-z.html'>注册</a>")
                    }

                }
            })
        }
        setState(){
            localStorage.setItem("loginUser",JSON.stringify(this.res.msg));
        }
    }
    
    new Login();