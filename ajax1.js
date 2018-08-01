
function ajaxGet(hw,url,obj,callback ){//为了获取执行结果的值加一个回调函数
		var xhr = null;
		if(window.XMLHttpRequest){
			xhr = new XMLHttpRequest();
		}else{
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
		
		
    	if(hw == "GET"){
		    xhr.open(hw,url+"?"+  ww(obj) +"S="+new Date.getTime());//建立连接    /url . 地址  .查询串 .时间戳
	        xhr.send(null);//开始执行          
		}else{
			xhr.open(hw,url);//建立连接    /url 
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	    	xhr.send( ww(obj) );//开始执行        
		}
		
		
		xhr.onreadystatechange=function(){//执行状态监控
			if(xhr.readyState == 4){//请求状态值
				if(xhr.status == 200){//响应状态值
					callback(xhr.responseText);//返回执行结果
				}else{
					callback("发生错误:"+xhr.styatus+"错误文本"+xhr.statusText);
				}
			}
	
		}

	}
	
function ww(ob){//读取对象内容
		var arr= [] ;
         for(var item in ob){
         	arr.push( item +"="+ encodeURIComponent(ob[item]) );
         }
         return arr.join("&");
	}
	
	