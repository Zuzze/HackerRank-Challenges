var btn = document.getElementById("btn");
btn.addEventListener("click",function() {
	var buttonVal = this.innerHTML;
	this.innerHTML = parseInt(buttonVal)+1;
});