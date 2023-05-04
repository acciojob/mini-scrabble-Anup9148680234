//your code here
let inp = document.getElementById('evaluatedText');
inp.addEventListener('input',()=>{
	document.getElementById('letterCount').innerText = inp.value.length;
})