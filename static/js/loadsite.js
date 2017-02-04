var d = document;
var wrap = d.querySelector('.wrap');
var items = d.querySelector('.uitems');
var itemCount = d.querySelectorAll('.iitem').length;
var scroller = d.querySelector('.scroller');
var pos = 0;
var transform = Modernizr.prefixed('transform');

function setTransform() 
{
	items.style[transform] = 'translate3d(' + (-pos * items.offsetWidth) + 'px,0,0)';
}

function prev() 
{
	pos = Math.max(pos - 1, 0);
	setTransform();
}

function next() 
{
	pos = Math.min(pos + 1, itemCount + 1);
	setTransform();
}

window.addEventListener('resize', setTransform);



function go(html,classn)
{
	var httpclass = document.getElementById(classn);
	var xmlhttp = new XMLHttpRequest();
	var content_div = document.getElementById('nextdiv');
	var content_div1 = document.getElementById('nowdiv');
	var main = document.getElementById('mainmenu');
	var about = document.getElementById('aboutmenu');
	var service = document.getElementById('servicemenu');
	var technology = document.getElementById('techmenu');
	var solution = document.getElementById('solutionmenu');
	var contact = document.getElementById('contactmenu');
	var loadinghttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function(){
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			setTimeout(function(){
			next();	
			}, 200);
			setTimeout(function(){
			document.getElementById('wrap').className= "ui top np attached basic loading segment wrap";
			}, 500);
			setTimeout(function(){
			prev();
			}, 1000);
			content_div1.innerHTML = loadinghttp.responseText;
			content_div1.innerHTML = xmlhttp.responseText;
			    
			setTimeout(function(){
			document.getElementById('wrap').className= "ui top np attached basic segment wrap";
			}, 1500);
		}

		}
	main.className = "item";
	about.className = "item";
	service.className = "item";
	technology.className = "item";
	solution.className = "item";
	contact.className = "item";
	httpclass.className = "active item";
	loadinghttp.withCredentials = true ;
	xmlhttp.withCredentials = true ;
	loadinghttp.open("GET", 'xmlhttp/loading.html', true);
	xmlhttp.open("GET", html, true);
	loadinghttp.send(null);
	xmlhttp.send(null);
}
