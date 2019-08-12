// 补零功能
function createZero(n){
    if(n.length<2 || n < 10){
        return "0"+n;
    }else{
        return n;
    }
}

// 范围随机数功能
function random(max,min){
    return Math.round(Math.random()*(max-min)+min)
}
// 日期的格式化
function createDate(){
		var d = new Date();
		var y = d.getFullYear()
		var m = d.getMonth()
		var date = d.getDate()
		var day = d.getDay()
		var h = d.getHours()
		var mts = d.getMinutes()
		var s = d.getSeconds()
		switch(day){
			case 0:day = "星期日";break;
			case 1:day = "星期一";break;
			case 2:day = "星期二";break;
			case 3:day = "星期三";break;
			case 4:day = "星期四";break;
			case 5:day = "星期五";break;
			case 6:day = "星期六";break;
		}
		return {
			year:y,
			month:createZero(m+1),
			date:createZero(date),
			day:day,
			hours:createZero(h),
			minutes:createZero(mts),
			seconds:createZero(s)
		}
	}
// 计算两个日期之间的差值
function dateDiff(date1,date2){
		var d1 = new Date(date1);
		
		var d2 = date2 ? new Date(date2) : new Date();

		var time = Math.abs(d1.getTime() - d2.getTime());
		var day = parseInt(time/1000/60/60/24);
		var h = parseInt((time - day*24*60*60*1000)/1000/60/60);
		var m = parseInt((time - day*24*60*60*1000 - h*60*60*1000)/1000/60);
		var s = parseInt((time - day*24*60*60*1000 - h*60*60*1000 - m*60*1000)/1000);
		return {
			day:day,
			hours:h,
			minutes:m,
			seconds:s,
			d1:d1,
			d2:d2
		}
		}
	
	
	
	//获取非行内样式
	function getStyle(ele,attr){
			if(ele.currentStyle){
				return ele.currentStyle[attr];
			}else{
				return getComputedStyle(ele,false)[attr];
			}
		}
		
		
		
		//事件冒泡：注意将事件对象传参
		function stopBubble(e){
			if(e.stopPropagation){
				e.stopPropagation();
			}else{
				e.cancelBubble = true;
			}
		}
		
		//		阻止默认事件
		//			事件对象
				
				function stopDefault(e){
					if(e.preventDefault){
						e.preventDefault();
					}else{
						e.returnValue = false;
					}
				}
		//	解决绑定兼容问题：
			function addEvent(ele,eventType,callback){
				if(ele.attachEvent){
					ele.attachEvent("on"+eventType,callback)
				}else{
					ele.addEventListener(eventType,callback)
				}
			}
	
		// 解决删除兼容问题：
		function addEvent(ele,eventType,callback){
		if(ele.detachEvent){
        ele.detachEvent("on"+eventType,callback)
		}else{
        ele.removeEventListener(eventType,callback)
		}
	}
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			