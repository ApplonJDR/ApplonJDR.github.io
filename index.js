const godsButton = document.getElementById('godsButton');
const racesButton = document.getElementById('racesButton');

window.onload = () => {

	godsButton.onclick = e => {
		console.log("GODS", e)
	}

	racesButton.onclick = e => {
		console.log("RACES", e)
	}
}