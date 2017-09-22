/*
* @Author: lenovo
* @Date:   2017-05-01 10:43:52
* @Last Modified by:   lenovo
* @Last Modified time: 2017-05-05 23:10:48
*/

'use strict';

$(function(){
	let yj=document.querySelector('.nav>.yiji');
	let ej=document.querySelector('.nav>.yiji>ul>li>.erji');

	let sl=document.querySelector('.star>.ss>.sl');
	let sr=document.querySelector('.star>.ss>.sr');

	let s1=document.querySelectorAll('.star>.sphoto>.s1')[0];
	let s2=document.querySelectorAll('.star>.sphoto>.s2')[0];
	// console.log(s1,s2)

	let tl=document.querySelector('.tjb>.rec>.title>.tt>.tl');
	let tr=document.querySelector('.tjb>.rec>.title>.tt>.tr');
	// let recommend=document.getElementsByClassName('recommend');
	console.log(tl,tr)

	let t1=document.querySelectorAll('.tjb>.rec>.photo>.t1')[0];
	let t2=document.querySelectorAll('.tjb>.rec>.photo>.t2')[0];
	console.log(t1,t2)

	let f1=document.querySelectorAll('.title .title2 .f1')[0];
	let f2=document.querySelectorAll('.title .title2 .f2')[0];
	let f3=document.querySelectorAll('.title .title2 .f3')[0];
	let f4=document.querySelectorAll('.title .title2 .f4')[0];
	// console.log(f1,f2,f3,f4)

	let mat1=document.querySelectorAll('.bphone .right>.mat1')[0];
	let mat2=document.querySelectorAll('.bphone .right>.mat2')[0];
	let mat3=document.querySelectorAll('.bphone .right>.mat3')[0];
	let mat4=document.querySelectorAll('.bphone .right>.mat4')[0];
	// console.log(mat1,mat2,mat3,mat4)

	let d1=document.querySelectorAll('.dpb>.acc>.title .title2 .s1')[0];
	let d2=document.querySelectorAll('.dpb>.acc>.title .title2 .s2')[0];
	let d3=document.querySelectorAll('.dpb>.acc>.title .title2 .s3')[0];
	let d4=document.querySelectorAll('.dpb>.acc>.title .title2 .s4')[0];
	// console.log(d1,d2,d3,d4)

	let acc1=document.querySelectorAll('.bphone .right>.acc1')[0];
	let acc2=document.querySelectorAll('.bphone .right>.acc2')[0];
	let acc3=document.querySelectorAll('.bphone .right>.acc3')[0];
	let acc4=document.querySelectorAll('.bphone .right>.acc4')[0];
	// console.log(acc1,acc2,acc3,acc4)

	let hots=document.getElementsByClassName('hot1');
	let arrs=document.getElementsByClassName('arr');
	// console.log(arrs)
	// console.log(hots)

	let left=$('.lt')[0];
	let right=$('.gt')[0];
	let win=$('.win')[0];
	let imgBox=$('.imgBox')[0];
	let lis=$('li',imgBox);
	

	let btn=$('.btn')[0];
	let btns=$('li',btn);
	lis[0].style.zIndex=10;
	let index=0;
	let t;
	
	t=setInterval(move,2000);
	
	win.onmouseenter=function(){
		clearInterval(t);
	}
	win.onmouseleave=function(){
		t=setInterval(move,2000);
	}
	left.onclick=function(){
		moveDown();
	}
	right.onclick=function(){
		move();
	}
	yj.onmouseenter=function(){
		ej.style.display='block';
	}
    yj.onmouseleave=function(){
		ej.style.display='none';
	}
	sl.onclick=function(){
		s1.style.transform='translateX(0)';
		s2.style.transform='translateX(0)';
		// console.log(1)
	}
	sr.onclick=function(){
		s1.style.transform='translateX(-1226px)';
		s2.style.transform='translateX(-1226px)';
		// console.log(2)
	}
	f2.onmouseenter=function(){
		mat1.style.display='none';
		mat2.style.display='none';
		mat4.style.display='none';
		mat3.style.display='block';
		f1.style.color='black';
		f1.style.border=0;
		f2.style.color='#ff6700';
		f2.style.borderBottom='1px solid #ff6700';
		f3.style.color='black';
		f3.style.border=0;
		f4.style.color='black';
		f4.style.border=0;
	}
	f1.onmouseenter=function(){
		mat2.style.display='none';
		mat1.style.display='block';
		mat3.style.display='none';
		mat4.style.display='none';
		f1.style.color='#ff6700';
		f1.style.borderBottom='1px solid #ff6700';
		f3.style.color='black';
		f3.style.border=0;
		f4.style.color='black';
		f4.style.border=0;
		f2.style.color='black';
		f2.style.border=0;
	}
	f3.onmouseenter=function(){
		mat1.style.display='none';
		mat2.style.display='block';
		mat3.style.display='none';
		mat4.style.display='none';
		f1.style.color='black';
		f1.style.border=0;
		f2.style.color='black';
		f2.style.border=0;
		f3.style.color='#ff6700';
		f3.style.borderBottom='1px solid #ff6700';
		f4.style.color='black';
		f4.style.border=0;
	}
	f4.onmouseenter=function(){
		mat1.style.display='none';
		mat4.style.display='block';
		mat2.style.display='none';
		mat3.style.display='none';
		f1.style.color='black';
		f1.style.border=0;
		f2.style.color='black';
		f2.style.border=0;
		f3.style.color='black';
		f3.style.border=0;
		f4.style.color='#ff6700';
		f4.style.borderBottom='1px solid #ff6700';
	}


	d4.onmouseenter=function(){
		acc1.style.display='none';
		acc4.style.display='block';
		acc2.style.display='none';
		acc3.style.display='none';
		d1.style.color='black';
		d1.style.border=0;
		d2.style.color='black';
		d2.style.border=0;
		d3.style.color='black';
		d3.style.border=0;
		d4.style.color='#ff6700';
		d4.style.borderBottom='1px solid #ff6700';
	}
	d3.onmouseenter=function(){
		acc1.style.display='none';
		acc2.style.display='block';
		acc4.style.display='none';
		acc3.style.display='none';
		d1.style.color='black';
		d1.style.border=0;
		d2.style.color='black';
		d2.style.border=0;
		d3.style.color='#ff6700';
		d3.style.borderBottom='1px solid #ff6700';
		d4.style.color='black';
		d4.style.border=0;
	}
	d2.onmouseenter=function(){
		acc1.style.display='none';
		acc3.style.display='block';
		acc2.style.display='none';
		acc4.style.display='none';
		d1.style.color='black';
		d1.style.border=0;
		d2.style.color='#ff6700';
		d2.style.borderBottom='1px solid #ff6700';
		d3.style.color='black';
		d3.style.border=0;
		d4.style.color='black';
		d4.style.border=0;
	}
	d1.onmouseenter=function(){
		acc4.style.display='none';
		acc1.style.display='block';
		acc2.style.display='none';
		acc3.style.display='none';
		d1.style.color='#ff6700';
		d1.style.borderBottom='1px solid #ff6700';
		d3.style.color='black';
		d3.style.border=0;
		d4.style.color='black';
		d4.style.border=0;
		d2.style.color='black';
		d2.style.border=0;
	}

	
	
	for(let i=0;i<hots.length;i++){
		hots[i].onmouseenter=function(){
			for(let j=0;j<arrs.length;j++){
				arrs[j].style.display='none';
				hots[j].style.color='black';
				hots[j].style.border=0;
			}
			arrs[i].style.display='block';
			hots[i].style.color='#ff6700';
			hots[i].style.borderBottom='1px solid #ff6700';
		}
	}

	for(let i=0;i<btns.length;i++){
		btns[i].onclick=function(){
			for(let j=0;j<btns.length;j++){
				lis[j].style.display='none';
				btns[j].style.background='#ccc';
			}
			btns[i].style.background='#ff6700';
			lis[i].style.display='block';
			index=i;
		}
	}
	function move(){
		index++;
		if(index==lis.length){
			index=0
		}
		for(let i=0;i<lis.length;i++){
			lis[i].style.display='none';
			btns[i].style.background='#ccc';
		}
		btns[index].style.background='#ff6700';
		lis[index].style.display='block';
	}
	function moveDown(){
		index--;
		if(index<0){
			index=lis.length-1;
		}
		if(index==lis.length){
			index=0
		}
		for(let i=0;i<lis.length;i++){
			lis[i].style.display='none';
			btns[i].style.background='#ccc';
		}
		btns[index].style.background='#ff6700';
		lis[index].style.display='block';
	}
	
})