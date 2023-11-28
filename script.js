const first = document.getElementById('first');
const last = document.getElementById('last');
const number = document.getElementById('number');
const email = document.getElementById('email');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
	// event.preventDefault();
	alert(`First Name: ${first.value}
Last Name: ${last.value}
Phone Number: ${number.value}
Email ID: ${email.value}`);
})