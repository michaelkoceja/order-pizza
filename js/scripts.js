//Business Logic
//new customer constructor
//new order constructor
function PizzaOrder(size, sauceType, cheese, meatType, toppings) {
  this.size = size;
  this.sauceType = sauceType;
  this.cheese = cheese;
  this.meatType = meatType;
  this.toppings = toppings;
}

function Customer(first, last) {
  // this.firstName = first;
  this.lastName = last;
}

//add to total based on selected size
PizzaOrder.prototype.newOrder = function() {
  var total = 4;
  if (this.size === "large") {
    total += 9;
  } else if (this.size === "medium") {
    total += 7;
  } else {
    total += 5;
  }
 //add number of selected toppings to total
  for(var index = 0; i < this.size.length; index++) {
    total += 1;
  }
  for(var index = 0; i < this.cheese.length; index++) {
    total += 1;
  }
  for(var index = 0; i < this.meatType.length; index++) {
    total += 1;
  }
  for(var index = 0; i < this.toppings.length; index++) {
    total += 1;
 }
};

//show pizza order information
PizzaOrder.prototype.showOrder = function () {
  return "You've orded a " + this.size + "with " + this.sauceType + "sauce, " + this.cheese + ", " + this.meatType.join(", ") + "and " + this.toppings.join(", ") + ".";
};

//new customer prototype
Customer.prototype.fullName = function() {
  return this.firstName + " " + this.lastName + ",";
};

//User Interface Logic
$(function() {
  $("#pizzaOrder").submit(function(event) {
    event.preventDefault();


    var inputtedFirstName = $("input#firstName").val();
    var inputtedLastName = $("input#lastName").val();

    var selectedSize = $("select#pizzaSize").val();
    var selectedSauceType = $("select#sauceType").val();
    var selectedCheese = $("select#cheese").val();
    var selectedMeatType = $("select#meatType").val();
    var selectedToppings = $("select#toppings").val();
    var selectedIngredients = [];
    $("input:checkbox[name=selected-ingredient]:checked").each(function() {
      selectedIngredients.push($(this).val());
      console.log();
    });

    var newOrder = new PizzaOrder(selectedSize, selectedSauceType, selectedCheese, selectedMeatType, selectedToppings);
    var newCustomer = new Customer(inputtedFirstName, inputtedLastName)


    $("#completeOrder").show();
    $("#yourOrder").html(newOrder.showOrder())
  });
});

//gather user inputs
