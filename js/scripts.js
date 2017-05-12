//Business Logic
//new customer constructor
function Customer(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.order = [];
}
//new order constructor
function Order(sauceType, cheese, meatType, toppings) {
  this.sauceType = sauceType;
  this.cheese = cheese;
  this.meatType = meatType;
  this.toppings = toppings;
}
//new customer prototype
Customer.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};
//new order prototype
Order.prototype.newOrder = function() {
  return this.sauceType + "," this.cheese + "," this.meatType + "," this.toppings;
}

//User Interface Logic
$(function() {
  $("pizzaOrder").submit(function(event) {

    event.preventDefault();
  });
});

//gather user inputs
