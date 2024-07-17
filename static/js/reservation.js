let amount = 2;

const add = () => {
	amount++;
	document.getElementById("amount").innerHTML = amount;
}

const remove = () => {
	if(amount === 0) return;
	amount--;
	document.getElementById("amount").innerHTML = amount;
}