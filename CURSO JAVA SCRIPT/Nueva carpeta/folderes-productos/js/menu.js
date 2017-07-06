var menu = document.getElementById('menu');
var altura = menu.offsetTop;
window.addEventListener('scroll', function(){
	if (window.pageYOffset > altura) {
		menu.classList.add('fixed');
	} else{
		menu.classList.remove('fixed');
	}
})



var menu1 = document.getElementById('menu1');
var bajo = menu1.offsetTop;
window.addEventListener('scroll', function(){
	if (window.pageYOffset > bajo) {
		menu1.classList.add('fixed');
	} else{
		menu1.classList.remove('fixed');
	}
})
