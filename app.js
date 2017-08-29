//this is the npm packages
var inquirer = require ("inquirer");
var mysql = require("mysql");


//conection thingy
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon_db"
});

// variable for connection
connection.connect(function(err) {
  if (err) throw err;
  console.log("Ready to buy");
  selectFunction()
});

//uses selectionFunction to read data and console back the id, name, price, quantity. 
function selectFunction() {
  connection.query("SELECT item_id, product_name, price, stock_quantity FROM products", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
            console.log([res[i].item_id, res[i].product_name, res[i].price, res[i].stock_quantity]);
        }

//prompt the user

inquirer.prompt ([
{
  type: 'input',
  name: "purchase",
  message: "What product ID would you like to purchase? (Please select num 1-10)",
}
])
//provides an answer to the user with a number. If it is less than 10. It returns an else statement.
//it doesn't select from the list, however, the list is up til 10 so we set a restriction. 
.then(function(answer1) {
 if (answer1.purchase < 11) {
console.log("We have that in stock")

//prompts user how much they want to buy of the item 
inquirer.prompt ([
{
  type: 'input',
  name: "buy",
  message: "Great! How much of the item do you want to buy?",
}
])

.then(function(answer2) {

  //this console.logs the answer the two prompts to check if they are within scope

  console.log (answer2.buy);
  console.log(answer1.purchase);

  //this should update the query by using the first prompt to input the user input of purchase into the number of quantity. 
  //this should select the results (user input number of item) of quantity within the item_id
  connection.query("UPDATE products SET stock_quantity=res[answer1.purchase].stock_quantity - answer2.buy WHERE item_id=res[answer1.purchase].item_id")   
  if (err) throw err;

  //this should display the the updated results
    console.log(res[i].item_id, res[i].product_name, res[i].price, res[i].stock_quantity);

  //this should display the price
    console.log(res[answer1.purchase].price * answer2.buy)
});
}

//else error
else {
  console.log("Sorry, we don't carry that");
}

});

});

}





// function createProduct() {
//   console.log("Inserting a new product...\n");
//   var query = connection.query(
//     "INSERT INTO products SET ?",
//     {
//       flavor: "Rocky Road",
//       price: 3.0,
//       quantity: 50
//     },
//     function(err, res) {
//       console.log(res.affectedRows + " product inserted!\n");
//       // Call updateProduct AFTER the INSERT completes
//       updateProduct();
//     }
//   );

//   // logs the actual query being run
//   console.log(query.sql);
// }

// function updateProduct() {
//   console.log("Updating all Rocky Road quantities...\n");
//   var query = connection.query(
//     "UPDATE products SET ? WHERE ?",
//     [
//       {
//         quantity: 100
//       },
//       {
//         flavor: "Rocky Road"
//       }
//     ],
//     function(err, res) {
//       console.log(res.affectedRows + " products updated!\n");
//       // Call deleteProduct AFTER the UPDATE completes
//       deleteProduct();
//     }
//   );

//   // logs the actual query being run
//   console.log(query.sql);
// }

// function deleteProduct() {
//   console.log("Deleting all strawberry icecream...\n");
//   connection.query(
//     "DELETE FROM products WHERE ?",
//     {
//       flavor: "strawberry"
//     },
//     function(err, res) {
//       console.log(res.affectedRows + " products deleted!\n");
//       // Call readProducts AFTER the DELETE completes
//       readProducts();
//     }
//   );
// }

// function readProducts() {
//   console.log("Selecting all products...\n");
//   connection.query("SELECT * FROM products", function(err, res) {
//     if (err) throw err;
//     // Log all results of the SELECT statement
//     console.log(res);
//     connection.end();
//   });
// }
