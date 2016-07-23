//获取类名
function getClass(select, context) {
	var context = context ? context : document;
	if (document.getElementsByClassName) {
		return context.getElementsByClassName(select);
	} else {
		var all = context.getElementsByTagName('*');
		var arr = [];
		for (var i = 0; i < all.length; i++) {
			if (checkClass(all[i].className, select)) {
				arr.push(all[i]);
			}
		}
		return arr;
	}
}

function checkClass(className, select) {
	var arr = className.split(" ");
	for (var i in arr) {
		if (arr[i] == select)
			return true;
	}
	return false;
}

//获取内容
function setContext(obj, val) {
	if (val) {
		if (obj.innerText) {
			obj.innerText = val;
		} else {
			obj.textContent = val;
		}
	} else {
		if (obj.innerText) {
			return obj.innerText;
		} else {
			return obj.textContent;
		}
	}
}
//获取类名，id名等，还有函数
function $(selector,context){
	if(typeof selector=="string"){
		var context=context||document
	    if(selector.charAt(0)=="."){
		    return getClass(selector.slice(1),context);
	    }else if(selector.charAt(0)=="#"){
		    return document.getElementById(selector.slice(1));
	    }else if(/^[a-z][a-z1-6]{0,8}/.test(selector)){
		    return context.getElementsByTagName(selector);
	    }else if(/^<[a-z][a-z1-6]{0,8}>/.test(selector)){
	    	//创建新的元素 <div>
	    	return document.createElement(selector.slice(1,-1));
	    }
	}else if(typeof selector=="function"){
		addEvent(window,"load",selector)
	}
}
//添加事件兼容性函数
function  addEvent(obj,type,fun){
	if(obj.attachEvent)
	{
		obj.attachEvent("on"+type,fun);
	}else{
		obj.addEventListener(type,fun,false);
	}
}
//移除事件兼容性函数
function  removeEvent(obj,type,fun){
	if(obj.attachEvent)
	{
		obj.detachEvent("on"+type,fun);
	}else{
		obj.removeEventListener(type,fun,false);
	}
}
function mouseWheel(obj,downFn,upFn)
{
		if (document.attachEvent) {
				document.attachEvent("onmousewheel", scrollFn); 
				//IE、 opera
			} else if (document.addEventListener) {
				document.addEventListener("mousewheel", scrollFn, false);
				//chrome,safari -webkit-
				document.addEventListener("DOMMouseScroll", scrollFn, false);
				//firefox -moz-
		}

	function scrollFn(e){
	var ev=e||window.event;
	var dir=ev.wheelDelta||ev.detail;
	//console.log(dir)

	if(dir==-120 || dir==3)
	{
		downFn.call(obj)
	}else if(dir==120 || dir==-3)
	{
		upFn.call(obj)
	}
	//阻止浏览器默认行为
	if (ev.preventDefault )
	{
		ev.preventDefault(); 
	}else{
			ev.returnValue = false;
	}

}
}

/*
getStyle(one,"width")
功能  获取指定元素的某一指定样式
*/ 
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,null)[attr];
	}
}

// 获取指定元素的子节点 obj对象  type获取子节点的类型
function getChild(obj,type){
		var child=obj.childNodes;
		var type=type==undefined?true:type;
		var arr=[];
			
		for(var i=0;i<child.length;i++)
		{
			if(type==true)   //传true和不传type值
			{
				if(child[i].nodeType==1)
				{
					arr.push(child[i]);
				}
			}else{			//传false
				if(child[i].nodeType==1 || child[i].nodeType==3 && !(/^\s+$/.test(child[i].nodeValue)))
				{
					arr.push(child[i]);
				}
			}
		}
		return arr;
	}
//表示获取下一个兄弟节点(元素节点)
function getNext1(obj){
			var next=obj.nextSibling;
			if(next==null)
			{
				return false;
			}
			while(next.nodeType==8||(next.nodeType==3))
			{
				next=next.nextSibling;
				if(next==null)
				{
					return false;  
				}	
			}
			return next;	
		}
//打印出下一个文本节点的内容		
function getNext2(obj){
			var next=obj.nextSibling;
			if(next==null)
			{
				return false;
			}
			while(next.nodeType==8||(next.nodeType==3 && !(/^\s+$/.test(next.nodeValue))))
			{
				next=next.nextSibling;
				if(next==null)
				{
					return false;  
				}	
			}
			return next;
		}
//插入到一个节点之前
function insertBefore(obj,obj1)
	{
		var parent=obj1.parentNode;
		parent.insertBefore(obj,obj1)
	}
//插入到一个节点之后
	function insertAfter(obj,obj1)
	{
		var parent=obj1.parentNode;
		var next=getNext1(obj1);
		if(next)
		{
			parent.insertBefore(obj,next);
		}else{
			parent.appendChild(obj);
		}
	}

//自己写的获取firstChild方法  
	//var child=getChild(obj1,false);
	//	var first=child[0];
	function appendBefore(obj,obj1)
	{
		var child=getChild(obj1,false);
		var first=child[0];
		if(first)
		{
			insertBefore(obj,first);
		}else{
			obj1.appendChild(obj);
		}
	}

	function appendChild(obj,obj1)
	{
		obj1.appendChild(obj);
	}
	/*
firstChild()
*/

	function firstChild(obj, type) {
		return getChild(obj, false)[0];
	}
	/*
lastChild()
*/

	function lastChild(obj, type) {
		return getChild(obj, type)[getChild(obj, type).length - 1];
	}
	/*
randomChild
*/

	function randomChild(obj, type, num) {
		return getChild(obj, type)[num];
	}

