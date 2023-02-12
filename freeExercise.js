/* const car = [
    {brand: "mercedes", model: "G class", engine: "6.3", start: 2000, end: 2020},
    {brand: "bmw", model: "e34", engine: "5.0", start: 1995, end: 2000},
    {brand: "audi", model: "s8", engine: "4.6", start: 1995, end: 2018},
    {brand: "volvo", model: "s90", engine: "2.4", start: 1990, end: 2007},
    {brand: "toyota", model: "camry", engine: "2.4", start: 2000, end: 2022},
    {brand: "toyota", model: "witz", engine: "3.5", start: 2000, end: 2022},
    {brand: "tesla", model: "s", engine: "electronic", start: 2005, end: 2023},
    {brand: "tesla", model: "s7", engine: "electronic", start: 2003, end: 2023},
];

const ages = [6, 3, 9, 7, 8, 3, 5, 2, 40, 1, 7, 4, 0, 3, 15, 30, 26, 35]; */


//forEach

/* car.forEach(model => {
    console.log(model);
}); */

/* let kinderGardenAge = [];
for (i = 0; i < ages.length; i++) {
    if(ages[i] <=5) {
        kinderGardenAge.push(ages[i])
    }
};
 */





//filter

/* const kinderGardenAge = ages.filter(ages => {
    if(ages <=5) {
        return true;
    }
}); 

console.log(kinderGardenAge); */




/* const canDrink = ages.filter(age => {
    if(age >= 21) {
        return true;
    }
});

console.log(canDrink); */




/* const carEngines = car.filter(function(car) {
    if (car.engine === "2.4") {
        return true
    }
});
 */

/* const carEngines = car.filter(car => car.engine === "2.4");

console.log(carEngines);
 */

/* const electoCar = car.filter(car => car.engine === "electronic");

console.log(electoCar); */
 


/* const tenYearsLasted = car.filter(car => car.end - car.start > 20);

console.log(tenYearsLasted); */



//map

/* const carNameYear = car.map(car => `${car.brand} - ${car.start}`);

console.log(carNameYear); */


/* const companyLasted = car.map(function(car){
    if(car.end - car.start > 20) {
        return `${car.brand} last 20 year`;
    }
    else{
        return `${car.brand} last not`;
    }
}); */

/* const companyLasted = car.map(car => {return(car.end - car.start >20) ? `${car.brand} - ${car.model} lasts more than 20 years` : `${car.brand} - ${car.model} last not`});

console.log(companyLasted); */


/* const twoNumberAge = ages.map(age => Math.sqrt(age)).map(age => age *2).map(age => age.toFixed(1)).sort((a, b) =>  a - b)

console.log(twoNumberAge); */




//sort

/* const sortedBrands = car.sort((a, b) => (a.start > b.start ? 1: -1));
console.log(sortedBrands); */


/* const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges); */





//reduce


/* const sumAges = ages.reduce((total, ages) => total + ages, 0);

console.log(sumAges); */



/* const totalYears = car.reduce((total, car) => total + (car.end - car.start), 0);

console.log(totalYears);
 */





// all of tmethods

/* const combined = ages
.map(age => age * 2)
.filter(age => age >= 15)
.sort((a, b) => a - b)
.reduce((total, age) => total + age, 0);

console.log(combined); */

