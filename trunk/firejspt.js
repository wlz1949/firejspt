/**
* Project Name:Fire JavaScript Performance Test
* Description：Using Firebug's Console to do the Javascript performance test,help you find performance bottlenecks.
* Author： kacakong@gmail.com  
* Version: v1.0 beta
* Sample: jspt.test(function(){  testFun();  }); 
*/
 var jspt={
	 run:true,
	 limit:20,
	 test:function(callback,name){
	     if (this.run==true){		    
		    if (typeof(console)!="undefined"){
			     var body=callback.toString();		
				 if (name==null){
					var name= body.replace("function () {\n","");
					var name= name.replace("\n}","");
				 }	 
				 var t1=(new Date()).getTime();
				 callback();				
				 var t2=(new Date()).getTime();	 	 
				 var space=(t2-t1);
				 if (space<this.limit){
					console.info("%s 执行时间：%d ms",name,space);
				 }else{
					console.warn("%s 执行时间：%d ms ,请立即优化！",name,space);
				 }
			}else{
				 callback();
			}		     
		 }else{
		     callback();
		 }
		 
	 }	 
  }