 function jspt(){
	 mode:0,
	 test:function(name,callback){
	     var t1=(new Date()).getTime();
		 callback();
		 var t2=(new Date()).getTime();	 	 
		 console.info("%s 执行时间：%d ms",name,(t2-t1));
	 }
	 
  }