const changeBtn = document.getElementById('bodyChange');

var back = 1

window.onload = () => {

	changeBtn.onclick = function(e) {
		console.log(e)
		
		textZone = document.getElementById("textzone")

		p = document.createElement("p")
		p.innerText = back ? 'yes' : 'no'
		back = back ? 0 : 1
		textZone.innerHTML = ""
		textZone.appendChild(p)
	}
}