function handleSubmit(e) {
	e.preventDefault();
	const inputField = document.querySelector('input');
	if (inputField.value === '' || !isValidEmail(inputField.value)) {
		document.querySelector('form>label>span').classList.remove('hidden');
		document.querySelector('input').classList.add('invalid-form');
	} else {
		const card1 = document.querySelector('.card');
		const card2 = document.querySelector('.card-2');
		const name = inputField.value;
		document.querySelector('.card-2 span').textContent = name;
		if (card1.classList.contains('hidden')) {
			card1.classList.remove('hidden');
			card2.classList.add('hidden');
		} else {
			card1.classList.add('hidden');
			card2.classList.remove('hidden');
		}
	}

	function isValidEmail(email) {
		var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}
}
