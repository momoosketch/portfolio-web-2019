// JavaScript Document
var check=document.querySelector(".check");
check.addEventListener('click',idioma);

function idioma(){
	let id=check.checked;
	if(id==id){
		location.href="es/index.html"
	}else{
		location.href"en/index.html"
		
	}
}