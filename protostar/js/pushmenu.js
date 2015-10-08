/**
 * 
 */
window.openLoginWindow=function(){
	var content=$('pushmenu');
	size=content.getSize();
	PushBoxWindow.open(content, {handler: "append", size: size, anchor:this, push:true, classWindow:'pushmenu'}).addEvent('close',function(){
		//content.parentNode.removeChild(content);
		$('pushmenu-parent').appendChild(content);
	});		  

};
window.addEvent("load",function(){
	
	$('pushmenu-btn').addEvent('click', window.openLoginWindow);

});