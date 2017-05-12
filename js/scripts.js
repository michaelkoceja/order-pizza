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

    var inputtedFirstName = $("input#firstName").val();
    var inputtedLastName = $("input#lastName").val();

    var newCustomer = new Customer(inputtedFirstName, inputtedLastName);

    $(".newOrder").each(function() {
      var inputtedsauceType = $(this).find("input.sauceType").val();
      var inputtedcheese = $(this).find("input.cheese").val();
      var inputtedmeatType = $(this).find("input.meatType").val();
      var inputtedtoppings = $(this).find("input.toppings").val();
      var newOrder = new Order(inputtedsauceType, inputtedcheese, inputtedmeatType, inputtedtoppings);
      newOrder.order.push(newOrder);
      });

    });
  });
});

//gather user inputs
