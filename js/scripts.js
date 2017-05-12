//Business Logic
//new customer constructor
function Customer(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.order = [];
}
//new order constructor
function Order(size, sauceType, cheese, meatType, toppings) {
  this.size = size;
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
  return this.size + "," this.sauceType + "," this.cheese + "," this.meatType + "," this.toppings;
}

//User Interface Logic
$(function() {
  $("#pizzaOrder").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#firstName").val();
    var inputtedLastName = $("input#lastName").val();

    var newCustomer = new Customer(inputtedFirstName, inputtedLastName);
    var completeOrder = new Order(inputtedsize, inputtedsauceType, inputtedcheese, inputtedmeatType, inputtedtoppings)

    $(".newOrder").each(function() {
      var inputtedsize = $(this).find("input.size").val();
      var inputtedsauceType = $(this).find("input.sauceType").val();
      var inputtedcheese = $(this).find("input.cheese").val();
      var inputtedmeatType = $(this).find("input.meatType").val();
      var inputtedtoppings = $(this).find("input.toppings").val();
      var newOrder = new Order(inputtedsize, inputtedsauceType, inputtedcheese, inputtedmeatType, inputtedtoppings);
      newOrder.order.push(newOrder);
      });

      $("ul#completeOrder").append("<li><span class='contact'>" + completeOrder.newOrder() + "</span></li>");


    });
  });
});

//gather user inputs
