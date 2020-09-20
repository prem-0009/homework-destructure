console.clear();
/*You will probably not have to take destructuring to such a level as this but this is for you to really wrap your brains around the mechanics. 
EVERY EXERCISE SHOULD USE DESTRUCTURING*/

//3.  Destructure this object literal so that each value can be called by its key. Re-name the array values for the 'names' key of the ocean object to AT, PA, IN, and AR
const water = {
  lake: {
    description: "surrounded by land",
    popular: { state: "Michigan", name: "Lake Michigan" },
  },
  river: {
    definition: "flows towards ocean",
    known: { place: "New York", label: "Hudson River" },
  },
  ocean: {
    context: "body of water that composes much of a planet hydrosphere",
    names: ["Atlantic", "Pacific", "Indian", "Arctic"],
  },
};

let {
  lake: {
    description,
    popular: { state, name },
  },
  river: {
    definition,
    known: { place, label },
  },
  ocean: {
    context,
    names: [AT, PA, IN, AR],
  },
} = water;

console.log(name);

//4.  Using destructuring create a new array that maps through the items array and from each item in the loop, a string of the color and shape values should be logged.
//    for example one loop should return 'blue circle' from the items array. This is not a function. you will just map and use the items array as the only array.
let items = [
  { color: "blue", shape: "circle" },
  { color: "orange", shape: "triangle" },
  { color: "red", shape: "square" },
];

let stringOfColorNShapes = items.reduce((acc, curr, i, arr) => {
  let { color, shape } = curr;
  acc.push(color + " " + shape);
  return acc;
}, []);

console.log(stringOfColorNShapes);

//5.  Deconstruct the complete car object literal
//rename the array values inside the otherShops array to third, fourth, and for the last two values they should be in an array called fifth
const car = {
  carTypes: {
    one: { make: "Mercedes", model: "Meybach", year: 2020 },
    two: { make: "toyota", model: "Landcruiser", year: 2018 },
  },
  numWheels: 4,
  gps: true,
  autoSteer: true,
  repairPlaces: {
    main: "Dealership",
    second: "Roe Park Car Shop",
    otherShops: [
      "Bozo Repair",
      "Johnson Body",
      "Fixer Upper Central",
      "Last Chance Repairs",
    ],
  },
};
//Find a way to call just one variable name for each of the carTypes

let {
  carTypes: {
    one: { make, model, year },
    two: { make: make2, model: model2, year: year2 },
  },
  numWheels,
  gps,
  autoSteer,
  repairPlaces: {
    main,
    second,
    otherShops: [shopBZ, shopJB, shopFUC, shopLCR],
  },
} = car;

console.log(model2);

/*6.  Create a class Cars that takes make, color, and year
    Instantiate 4 cars, car1,car2, car3, car4
    Using destructuring declare the make, color and year variables for each car and console.log the variables
    OR SHOULD I SAY declare the make, color and year and list a string for each showing their values.*/
class Cars {
  constructor(make1, color1, year1) {
    this.make1 = make1;
    this.color1 = color1;
    this.year1 = year1;
  }
}

let car1 = new Cars("GM", "silver", 2018);
let car2 = new Cars("Honda", "gray", 2019);
let car3 = new Cars("Toyota", "white", 2017);
let car4 = new Cars("Tesla", "black", 2020);

let { make1, color1, year1 } = car1;
console.log(make1, color1, year1);
let { make1: a2, color1: b2, year1: c2 } = car2;
console.log(a2, b2, c2);
let { make1: a3, color1: b3, year1: c3 } = car3;
console.log(a3, b3, c3);
let { make1: a4, color1: b4, year1: c4 } = car4;
console.log(a4, b4, c4);

//7. Using destructuring, choose all the schools with a gpa higher than 3.5,
//and list the chosen object ascending by major and log the average gpa,
//use method chaining if you can

let schoolArray = [
  { school: "Pataway", major: "comp sci", year: "sophomore", gpa: 3.2 },
  { school: "Bronxville", major: "medicine", year: "junior", gpa: 4.0 },
  { school: "Scarsdale", major: "accounting", year: "freshman", gpa: 2.6 },
  { school: "Peekskill", major: "liberal arts", year: "freshman", gpa: 4.0 },
  { school: "Anopram", major: "accounting", year: "senior", gpa: 3.7 },
];
//gpa > 3.5
//by subject in ascending & log the average gpa

let hi = (arr) => {
  
  return arr
    .filter((item) => {
      let { gpa } = item;
    
      return gpa > 3.5 ;
    }).sort((a,b)=>(a.major > b.major) ? 1 : -1)
    

};
//
console.log(hi(schoolArray));
