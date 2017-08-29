var inquirer = require ("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Bobasaur6^",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Ready to buy");
  selectFunction()
});

function selectFunction() {
  connection.query("SELECT item_id, product_name, price, stock_quantity FROM products", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
            console.log([res[i].item_id, res[i].product_name, res[i].price, res[i].stock_quantity]);
        }

inquirer.prompt ([
{
  type: 'input',
  name: "purchase",
  message: "What product ID would you like to purchase? (Please select num 1-10)",
}
])

.then(function(answer1) {
 if (answer1.purchase < 11) {
console.log("We have that in stock")

inquirer.prompt ([
{
  type: 'input',
  name: "buy",
  message: "Great! How much of the item do you want to buy?",
}
])

.then(function(answer2) {
  console.log (answer2.buy);
  console.log(answer1.purchase);
  connection.query("UPDATE products SET stock_quantity='res[answer1.purchase].stock_quantity - answer2.buy' WHERE item_id='PS4'")   
  if (err) throw err;
    console.log(res[i].item_id, res[i].product_name, res[i].price, res[i].stock_quantity);
    console.log(res[answer1.purchase].price *  answer2.buy)
});
}
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
