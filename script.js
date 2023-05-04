//your code here
document.getElementById('letterCount').innerText =0;
let inp = document.getElementById('evaluatedText');
inp.addEventListener('input',()=>{
	document.getElementById('letterCount').innerText = inp.value.length;
})