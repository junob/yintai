window.onload = function() {
	var win = $('.logo');
	for(var i=0;i<win.length;i++)
	{
		nodeLunbo(win[i],1);
		
	}
	function nodeLunbo(obj, num) {
		var box = $('.neil', obj)[0];
		var flag = true;
		var aw = 160;
		var btnL=$(".jtL",obj)[0];
		var btnR=$(".jtR",obj)[0];
		function moveL() {
			animate(box, {
				left: -aw
			}, function() {
				for(var i=0;i<num;i++){
				//box 左移
				var first = firstChild(box);
				//第一张图片插到最后面
				box.appendChild(first);
			}
				box.style.left = 0;
				flag = true;
			})
		}

		function moveR() {
			//先把最后一张图片放到第一张图片的前面，然后开始运动
			for(var i=0;i<num;i++){
			var first=firstChild(box);
			var last = lastChild(box);
			box.insertBefore(last, first);
		}
			box.style.left = -aw*num + 'px';
			animate(box, {
				left: 0
			}, function() {
				flag = true;
			})

		}

		btnR.onclick=function(){
			if(flag)
			{
				flag=false;
				moveL();
			}
		}
		btnL.onclick=function(){
			if(flag)
			{
				flag=false;
				moveR();
			}
		}

	}
}