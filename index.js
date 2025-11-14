//--------1.Array - Basics--------
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(fruits[0]);
console.log(fruits);

fruits.forEach((fruit) => { console.log(fruit); });

//First and Last elements
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

//Adding an element
fruits.push("Pineapple");
console.log(fruits);

//Removing an element
fruits.splice(1.1);
console.log(fruits);

//length of the array
console.log(fruits.length);



//---------2.Array Methods---------
const numbers = [2, 5, 8, 10, 12];
console.log(numbers);

//Mapping
const doubled = numbers.map(num => num * 2);
console.log(doubled);

//Filtering
const greater6 = numbers.filter(num => num > 6);
console.log(greater6);

//Reducing
const total = numbers.reduce((sum, num) => sum + num, 0);
console.log(total);

//Check if values exists
const check = numbers.includes(8);
console.log(check);

//Find index value
const index = numbers.indexOf(10);
console.log(index);

//Sorting
const sortAarry = numbers.sort((a, b) => a - b);
console.log(sortAarry);


//-------3.Objects - Basics--------
const student = {
    name: "Nirmal",
    age: 21,
    Faculty: "Computing",
    subjects: ["Web Developepment","Database Systems", "Programming"]
};

//Print Student's name and faculty
console.log(student.name);
console.log(student.Faculty);

//Add new property
student.batch = "22/23";

//Change property
student.age = 22;
console.log(student);

//Print all subjects
student.subjects.forEach(sub => console.log(sub));


//--------4.Nested Object and Arrays--------
//Array of Objects
const students = [ {name: "Kavindu", age: 21, faculty: "Computing"}, 
                   {name: "Nimesha", age: 22, faculty: "Engineering"}, 
                   {name: "Dinuka", age: 23, faculty: "Business"} ];

//All student names
students.forEach(student => console.log(student.name));

//Filter by age
const ageFilter = students.filter(student => student.age > 21);
console.log(ageFilter);

//Array of faculties
const faculties = students.map(student => student.faculty);
console.log(faculties);


//Object Containing an Array of Objects
const classroom = {
  className: "IT2025",
  teacher: "Mr. Perera",
  students: [
    {name: "Kavindu", age: 21},
    {name: "Nimesha", age: 22},
    {name: "Dinuka", age: 23}
  ]
};

//Print teacher's name
console.log(classroom.teacher);

//Add new student
classroom.students.push({name: "Saman", age: 20});
console.log(classroom.students);

//Print all student names
classroom.students.forEach(student => console.log(student.name));



//-------5.Challenge activity--------
const products = [ {name: "Keyboard", price: 2500, qty: 2}, 
                   {name: "Mouse", price: 1500, qty: 3 }, 
                   {name: "Monitor", price: 22000, qty: 1} ];

//Total value 
const totalValue = products.reduce((total, product) => 
      total + (product.price * product.qty), 0);

console.log("Total Inventory Value: " + totalValue);



