const body = document.body;
const ui1 = document.querySelector('#userInput1');
const ui2 = document.querySelector('#userInput2');
const showId = document.querySelector('#showColorId');

const gradient = () => {
	body.style.background = `linear-gradient(to right, ${ui1.value}, ${ui2.value})`;
	if(ui1.value === '#ffffff' || ui2.value === '#ffffff') {
		body.style.color = 'black'
	} else {
		body.style.color = 'white'
	}

	showId.textContent = `${body.style.background};`;
}

ui1.addEventListener('input', gradient);
ui2.addEventListener('input', gradient);