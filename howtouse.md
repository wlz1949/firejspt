#1

# Introduction #

How to use this firejspt


# Details #

1. You must insert it in your page at first:


&lt;script type="text/javascript" src="firejspt.js"  &gt;



&lt;/script&gt;



2. If you have a function like this:
> function testFun(){
> > for (var i=0;i<500;i++){
> > $("#test").html("Hello World");
> > }
> > }

**you can test the function's Performance with this code:**



&lt;script type="text/javascript"&gt;




> jspt.test(function(){testFun();});



&lt;/script&gt;




![http://www.kacakong.com/wp-content/uploads/2010/11/firejspt.jpg](http://www.kacakong.com/wp-content/uploads/2010/11/firejspt.jpg)

