let colorNums=6;
let colors= generatecolor(colorNums);
let correctcolor=randcolor();
let squares=document.querySelectorAll('.square');
let head=document.querySelector('#rgbval')
let message=document.querySelector('#luck');
let header=document.querySelector('h1');
let reset=document.getElementById('reset');
let level=document.querySelectorAll('.mode')

for(var i=0;i<level.length;i++){
	level[i].addEventListener('click',function(){
		level[0].classList.remove('selected');
		level[1].classList.remove('selected');
		this.classList.add('selected');
		this.textContent==="Easy" ? colorNums=3 : colorNums=6;
		resetButton();
	})
}
const resetButton=()=>{
	colors=generatecolor(colorNums);
	correctcolor=randcolor();
	reset.textContent="New Colors"
	head.textContent=correctcolor;
	message.textContent=""
	message.style.color="#232323"
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.display = 'block';
		if(colors[i])
			squares[i].style.backgroundColor=colors[i];
		else
			squares[i].style.display = 'none'
	}
	header.style.backgroundColor = 'green'
	head.style.backgroundColor = 'green'
}
reset.addEventListener('click',function(){
	resetButton();
});

head.textContent=correctcolor.toUpperCase();
for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor=colors[i]
	squares[i].addEventListener('click',function(){
		var clickedcolor=this.style.backgroundColor;
		if (clickedcolor === correctcolor){
			message.textContent='You Won'
			message.style.color = correctcolor;
			reset.textContent="Play Again?"
			header.style.backgroundColor = clickedcolor;
			head.style.backgroundColor = clickedcolor;
			ChangeColor(clickedcolor);
		}
		else{
			this.style.backgroundColor='#232323'
			message.textContent='Try Again'
		}
	})
}
const ChangeColor=(colors)=>{
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors
	}
}

function randcolor(){
	var random=Math.floor(Math.random()*colors.length)
	return colors[random]
}

function generatecolor(num)	{
	var arr=[]
	for (var i = 0; i < num; i++) {
		arr.push(rgb());}
		return arr
	}

	function rgb(){
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		return "rgb(" + r + ", " + g + ", " + b + ")";
	}