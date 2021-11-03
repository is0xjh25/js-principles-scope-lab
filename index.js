var customerName = "bob";
const leastFavoriteCustomer = "xxx";

function upperCaseCustomerName() {
	customerName = customerName.toUpperCase();
}

function setBestCustomer() {
	window.bestCustomer = "not bob";
}

function overwriteBestCustomer() {
	bestCustomer = "maybe bob";
}

function changeLeastFavoriteCustomer() {
	leastFavoriteCustomer = "yyy";
}