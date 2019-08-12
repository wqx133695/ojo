 class Car{
     constructor(){
         this.tbody = document.querySelector("tbody");
         this.url = "http://localhost/ojo/json/sj.json";
         this.load();
         this.addEvent()
     }
     addEvent(){
         var that = this;
         this.tbody.addEventListener("click",function(eve){
             if(eve.target.className == "del"){
                 that.id = eve.target.parentNode.getAttribute("index");
                 eve.target.parentNode.remove();
                 that.changeCookie(function(i){
                     that.sj.splice(i,1)
                 });
             }
         })
         this.tbody.addEventListener("input",function(eve){
             if(eve.target.className == "num"){
                 that.id = eve.target.parentNode.parentNode.getAttribute("index");
                 that.changeCookie(function(i){
                     that.sj[i].num = eve.target.value;
                 });
             }
         })
     }
     changeCookie(callback){
         var i = 0;
         this.goods.some((val,index)=>{
             i = index;
             return val.id == this.id;
         })
         callback(i);
         setCookie("sj",JSON.stringify(this.sj));
     }
     load(){
         var that = this;
         ajaxGet(this.url,function(res){
             that.res = JSON.parse(res);
             that.getCookie()
         })
     }
     getCookie(){
         this.sj = getCookie("sj") ? JSON.parse(getCookie("sj")) : [];
         this.display();
     }
     display(){
         var str = "";
         this.res.forEach((resVal)=>{
             this.sj.forEach((sjVal)=>{
                 if(resVal.shopid == sjVal.id){
                     str += `<tr index="${resVal.shopid}">
                                 <td><img src="${resVal.url}"></td>
                                 <td>${resVal.name}</td>
                                 <td>${resVal.price}</td>
                                 <td><input class="num" type="number" value="${sjVal.num}" min=1></td>
                                 <td class="del">删除</td>
                             </tr>`;
                 }
             })
         })
         this.tbody.innerHTML = str;
     }
 }
 
 new Car;