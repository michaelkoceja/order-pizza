//Business Logic
//new order constructor
function PizzaOrder(pizzaPrice) {
  this.pizzaPrice = pizzaPrice
  this.toppings = [];
}

//new customer constructor
// function Customer(first, last) {
//   this.firstName = first;
//   this.lastName = last;
// }

//add to total based on selected size
PizzaOrder.prototype.newOrder = function(array) {
  var total = 4;
  if (this.toppings === "large") {
    total += 9;
  } else if (this.toppings === "medium") {
    total += 7;
  } else
    total += 5;
 //add number of selected toppings to total
  for(var index = 0; index < this.toppings.length; index++) {
    total += 1;
  }
  this.pizzaPrice = total;
  console.log(total);
};

//show pizza order information
PizzaOrder.prototype.showOrder = function () {
  return "You've orded a " + this.size + " with " + this.toppings + ".";
};

//new customer prototype
// Customer.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName + ",";
// };

//User Interface Logic
$(function() {
  $("#pizzaOrder").submit(function(event) {
    event.preventDefault();

    // var newCustomer = new Customer(inputtedFirstName, inputtedLastName)
    // var inputtedFirstName = $("input#firstName").val();
    // var inputtedLastName = $("input#lastName").val();

    // var selectedSize = $("select#pizzaSize").val();

    var newPizza = new PizzaOrder();

    var pizzaToppings = $("input:checkbox[name=selected-ingredient]:checked").each(function() {
      newPizza.toppings.push($(this).val());
    });

    var totalPizza = newPizza.newOrder(newPizza.newOrder);

    // $("#yourOrder").text(newPizza.pizzaPrice);

    console.log(pizzaToppings);
    alert(newPizza.showOrder());

    $("#completeOrder").show();
    $("#yourOrder").html(newPizza.showOrder());
    $("#yourOrder").text(newPizza.newOrder); //Trying to display total price

  });
});

//gather user inputs
