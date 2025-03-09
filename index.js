// Declare customerName globally
var customerName = 'bob';

// Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob'; // Implicitly global variable
}

// Function to overwrite bestCustomer
function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;
}

// Declare a constant for least favorite customer
const leastFavoriteCustomer = 'someone';

// Function to change leastFavoriteCustomer (which should fail)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'another person'; // This will throw an error
}
