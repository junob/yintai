$(function(){
	var imgs=$(".bgt",$(".banner")[0]);
	var img=$(".bnt",$(".banner")[0]);
	// console.log(img)
	var lis=$('li',$('.fk')[0]);
	var win=$('.center')[0];
	var btnR=$('.btnR')[0];
	var btnL=$('.btnL')[0];
	// console.log(btnL)

	// var bkimgs=$('a',$('.zhong'));



	var flag=true;

	imgs[0].style.zIndex=1;
	lis[0].style.background='#E5004F';
	var num=0;
	 var t=setInterval(moveR,1000);

	
	win.onmouseover=function(){
		clearInterval(t);

	}
	win.onmouseout=function(){
		t=setInterval(moveR,1000);
	}


	function moveR(){
		num++;
		if(num==imgs.length||num==img.length)
		{
			num=0;
		}
		for(var i=0;i<imgs.length;i++)
		{
			img[i].style.zIndex=0;
			lis[i].style.background='#211616';
			animate(imgs[i],{opacity:0});
			animate(img[i],{opacity:0});
		}
		// img[num].style.zIndex=1;
		lis[num].style.background='#E5004F';
		animate(imgs[num],{opacity:1},function(){flag=true})
		animate(img[num],{opacity:1},function(){flag=true})
		
	}
	function moveL(){
		num--;
		if(num<0||num<0)
		{
			num=imgs.length-1;
		}
		for(var i=0;i<imgs.length;i++)
		{
			// imgs[i].style.zIndex=0;
			lis[i].style.background='#211616';
			animate(imgs[i],{opacity:0})
			animate(img[i],{opacity:0})
		}
		// imgs[num].style.zIndex=1;
		
		lis[num].style.background='#E5004F';
		animate(imgs[num],{opacity:1},function(){flag=true})	
		animate(img[num],{opacity:1},function(){flag=true})	
	}
	

		for (var i = 0; i < lis.length; i++) {
			lis[i].index = i;
			lis[i].onclick = function() {

				for (var j = 0; j < imgs.length; j++) {
					// imgs[j].style.zIndex = 0;
					lis[j].style.background = '#211616';
					animate(imgs[j],{opacity:0});
					animate(img[j],{opacity:0});
				}
				lis[this.index].style.background = '#E5004F';
				// imgs[this.index].style.zIndex = 1;
				animate(imgs[this.index],{opacity:1},function(){flag=true})
				animate(img[this.index],{opacity:1},function(){flag=true})
				 num = this.index;
			}
		}
	
	
		btnR.onclick=function(){
			if(flag)
			{
				flag=false;
				moveR();
			}
		}
		btnL.onclick=function(){
			if(flag)
			{
				flag=false;
				moveL();
			}	
		}

	//超值特卖选项卡效果  热门品牌
	var item = $('li',$('.ul1')[0]);
	var item2=$('li',$('.rmppTop')[0]);
	var list2=$('.areali');
	// console.log(list2)
	var list = $('ul',$('.waik')[0]);
	//console.log(list)
	for (var i in item) {
		item[i].index = i;
		item[i].onmouseover = function() {
			for(var j=0;j<list.length;j++)
			{
				list[j].style.display='none';
				item[j].className="";
			}
			list[this.index].style.display='block';
			item[this.index].className="cztmh";
		}

	}

	item2[0].className="rmppli";
	list2[0].style.display='block';
	for (var i in item2) {
		item2[i].index = i;
		var jilushu;
		item2[i].onmouseover = function() {
			list2[0].style.display='none';
			list2[1].style.display='none';
			item2[0].className="";
			item2[1].className="";
			list2[this.index].style.display='block';
			item2[this.index].className='rmppli';
		}
	}

	//banner选项卡效果
	var item1 = $('ul',$('.leftside')[0]);
	//console.log(item1)
	var list1 = $('.sub');
	//console.log(list1)
	// list[0].zIndex=1;
	for (var i in item1) {
		item1[i].index = i;
		item1[i].onmouseover = function() {
			list1[this.index].style.display='block';
		}
		item1[i].onmouseout = function() {
			list1[this.index].style.display='none';
		}
	}

	//银泰百货线框的效果
	var boxs=$('.box');

	for(var i=0;i<boxs.length;i++)
	{
		line(boxs[i]);
	}
	function line(obj){
		var bh=obj.offsetHeight;
		var bw=obj.offsetWidth;
		var left=$('.left',obj)[0];
		var top=$('.top',obj)[0];
		var right=$('.right',obj)[0];
		var bottom=$('.bottom',obj)[0];

		obj.onmouseover=function(){
			animate(top,{width:bw});
			animate(left,{height:bh});
			animate(right,{height:bh});
			animate(bottom,{width:bw});
		}
		obj.onmouseout=function(){
			animate(top,{width:0});
			animate(left,{height:0});
			animate(right,{height:0});
			animate(bottom,{width:0});
		}
	}
	
})