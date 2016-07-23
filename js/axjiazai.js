$(function(){
		var floors=$('.floor');
		var floorArr=[];
		var ch=document.documentElement.clientHeight;
		var jumpf=$('.jumpf')[0];
		var jump=$('.jump')[0];
		var jumpli=$('jumpli');
		var jumpzi=$('.jumpzi');
		var jumpflag=true;
		var back=$('.back')[0];
		var sflag=true;

	
		for(var i=0;i<floors.length;i++)
		{
			floorArr.push(floors[i].offsetTop-30);
		}	

		 // console.log(floorArr)
		//窗口滚动条效果
		//楼层跳转功能
	for(var i=0;i<floors.length;i++)
	{
		jumpzi[i].index=i;
		jumpzi[i].onclick=function(){
			jumpflag=false;
			for(var j=0;j<jumpzi.length;j++)
			{

				// jumpzi[j].style.display='none';
				// jumpli[j].style.display='block';
				animate(jumpzi[j],{opacity:0});
			}
				animate(jumpzi[this.index],{opacity:1});

			// jumpzi[this.index].style.display='block';
			// jumpli[this.index].style.display='none';
			//var obj=document.body.scrollTop?document.body:document.documentElement;
			animate(document.body,{scrollTop:floorArr[this.index]},function(){jumpflag=true});
			animate(document.documentElement,{scrollTop:floorArr[this.index]},function(){jumpflag=true});
		}
		

	}
	
	//返回顶部
	back.onclick=function(){
		animate(document.documentElement,{scrollTop:0});
		animate(document.body,{scrollTop:0});
	}
	document.body.onscroll=function(){
		var obj=document.body.scrollTop?document.body:document.documentElement;
		var scrolltop=obj.scrollTop;

		for(var i=0;i<floors.length;i++)
		{

			if(ch+scrolltop>=floorArr[i]+100)
			{
				var imgs=$('img',floors[i]);
				for(var j=0;j<imgs.length;j++)
				{
					imgs[j].src=imgs[j].getAttribute('imgpath');
				}
			}
			//如果开关==false,就不执行 滑到哪背景颜色挨个变到哪
			
			if(!jumpflag) return;
			//窗口按钮效果
			if(ch+scrolltop>=floorArr[i]+100)
			{
				for(var j=0;j<jumpzi.length;j++)
				{
					animate(jumpzi[j],{opacity:0})
					// jumpzi[j].style.display='none';
				}
					// jumpzi[i].style.display='none';

					animate(jumpzi[i],{opacity:1})
			}
		}
	//search 搜索框效果
		if(scrolltop>=floorArr[0]-200)
		{
			if(sflag)
			{
				sflag=false;
				// animate(back,{opacity:1});
				animate(jumpf,{right:15});
				// animate(xlssk,{top:0});
			}
			
		}else{
			if(!sflag)
			{
				sflag=true;
				// animate(back,{opacity:0});
				animate(jumpf,{right:-70});
				// animate(xlssk,{top:-50});
			}
		}
  }


})