//Task 1 - Store Inventory.
let products = ["Cheese", "Rice", "Dog", "Eat", "Pasta"]
console.log("         Task 1 - Store Inventory")
console.log(products)
products.push("Pizza")
         //Added Pizza
console.log(products)
console.log(products.pop());
         //Removed Pizza
console.log(products)
         //Completed First Task

//Task 2 - Student Scores
         //Initial Student Scores
let studentScores = [10, 20, 30, 40, 50]
          //Updated Second Score 
studentScores[1] = 25
         //Averaged Scores
let averageScore = studentScores.reduce((sum, score) => sum + score, 0) / studentScores.length 
         //Logged Code Into Console
console.log("         Task 2 - Student Scores")
console.log("Scores With Updated Second Scores:", studentScores)
console.log("Average of All Scores:", averageScore)   
         //Completed Second Task 

//Task 3 - Employee Records
let employee = {
    name: "Adam",
    age: 24,
    department: "Cleaning",
    isActive: true
  };
         // Updated Department
  employee.department = "Cashier";
         // Added New Property Position
  employee.position = "Associate";
         //Logged Code Into Console
console.log("         Task 3 - Employee Records")
console.log(employee);     
         //Completed Third Task 

//Task 4 - Customer Database
let customers = [{
    name: "Mike", email: "mike@gmail.com", purchaseAmount: 25},
    {name: "Joey", email: "joey@gmail.com", purchaseAmount: 35},  
    {name: "Jackson", email: "jackson@gmail.com", purchaseAmount: 27} 
] 
         //Added New Customer Alexa
customers.push({ name: "Alexa", email: "alexa@gmail.com", purchaseAmount: 23})
         //Logged Code Into Console\
console.log("         Task 4 - Customer Database")
console.log(customers)
         //Completed Fourth Task

//Task 5 - Order Processing System
let order = {
    orderId: 24456,
    customerName: "Grayson",
    amount: 257,
    calculateTax: function() {return this.amount * 0.10}
    } 
         //Logged Code Into Console
console.log("         Task 5 - Order Processing System")
console.log("OrderId:", order.orderId);
console.log("Customer Name:", order.customerName);
console.log("Amount:", order.amount)
console.log("Amount with 10% Tax Rate:", order.calculateTax())  
         //Completed Fifth Task