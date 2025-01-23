//Task 1 - Store Inventory
let products = ["Cheese", "Rice", "Dog", "Eat", "Pasta"]
console.log(products)
products.push("Pizza")
         //Added Pizza
console.log(products)
console.log(products.pop());
         //Removed Pizza
console.log(products)

//Task 2 - Student Scores
let studentScores = [10, 20, 30, 40, 50]
         //Initial Student Scores
studentScores[1] = 25
         //Updated Second Score
let averageScore = (155 / 5);
         //Averaged Scores
console.log("Scores With Updated Second Scores:", studentScores)
console.log("Average of All Scores:", averageScore)   

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
  console.log(employee);

//Task 4 - Customer Database
let customers = [{
    name: "Mike", email: "mike@gmail.com", purchaseAmount: 25},
    {name: "Joey", email: "joey@gmail.com", purchaseAmount: 35},  
    {name: "Jackson", email: "jackson@gmail.com", purchaseAmount: 27} 
] 
         //Added New Customer Alexa
customers.push({ name: "Alexa", email: "alexa@gmail.com", purchaseAmount: 23})
console.log(customers)

//Task 5 - Order Porcessing System
let order = {
    orderId: 24456,
    customerName: "Grayson",
    amount: 257,
    calculateTax: function() {return this.amount * 10}
    } 
    console.log(order)
    










//REMINDER BEFORE TURNING IN ASSIGNMENT: REMEMBER TO COMMIT EACH TASK!!!!!!!!!!!!!!!!!!!!