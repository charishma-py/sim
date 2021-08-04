const simpleInterest = document.querySelector('.simple-interest');
const button = document.querySelector('.button');
const results = document.querySelector('.results');

function calculateResults(e) 
	const principal = document.querySelector('#principal');
	const rate = document.querySelector('#rate');
	const time = document.querySelector('#time');
	const monthlyPayment = document.querySelector('#payment');
	const totalInterest = document.querySelector('#interest');
	const totalAmount = document.querySelector('#total');
	const p = parseFloat(principal.value);
	const r = parseFloat(rate.value);
	const t = parseFloat(time.value);
	const interest = (p*t*r/100);
	const payment = ((interest + p) / (t * 12)).toFixed(2);
	const total = (interest + p).toFixed(2);
	
	if (isFinite(payment)) {
		totalInterest.innerHTML = '$' + (interest).toFixed(2);
		monthlyPayment.innerHTML = '$' + payment;
		totalAmount.innerHTML = '$' + total;
		button.classList.remove('loading');
		results.classList.remove('hide');
	} else {
		showError('Please check your numbers and try again.');
		button.classList.remove('loading');
	}
}

function showError(error) {
	const errorMessage = document.createElement('div');
	const calculate = document.querySelector('#calculate');

	errorMessage.className = 'error';
	errorMessage.appendChild(document.createTextNode(error));
	simpleInterest.insertBefore(errorMessage, calculate);
	setTimeout(clearError, 3000);
}

function clearError() {
	document.querySelector('.error').remove();
}

button.addEventListener('click', (e) => {
	console.log('Calculating...');
		button.classList.add('loading');
		setTimeout(calculateResults, 2000);
		e.preventDefault();
});
