/**
 * 
 */
 window.addEvent("load",function(){
	    	  var content=$('pushmenu');
	    	 
	    	    $('pushmenu-btn').addEvent('click',function(){

	    	    	size=content.getSize();
	    	    	PushBoxWindow.open(content, {handler: "append", size: size, anchor:this, push:true, classWindow:'pushmenu'}).addEvent('close',function(){
	    	    		//content.parentNode.removeChild(content);
	    	    	    $('pushmenu-parent').appendChild(content);
		    	    });


		    	});

		 });