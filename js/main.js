// add scripts

console.log("sanity check!");


var students = [
  {
   name: 'Derek',
   age: 25,
   city: 'Boulder'
  },
  {
   name: 'Liz',
   age: 28,
   city: 'Denver'
  },
  {
   name: 'Carl',
   age: 31,
   city: 'Boulder'
  },
  {
   name: 'Peter',
   age: 23,
   city: 'Boulder'
  },
  {
   name: 'Megan',
   age: 19,
   city: 'Denver'
  }
];

//vanilla JS
console.log('\nprintNames: ');
printNames(students);
console.log('\nprintAges: ');
printAges(students);
console.log('\nprintNameAndCity: ');
printNameAndCity(students);
console.log('\nprintIfFrom: ');
printIfFrom(students, 'Boulder');
console.log('\nprintIfOlder: ');
printIfOlder(students, 25);

//with _
// console.log('\n_ names:');
// _.each(students, function(a){console.log(a.name);});
// console.log('\n_ ages:');
// _.each(students, function(a){console.log(a.age);});

// console.log("\n_ name 'n city:");
// _.each(students, function(a){
//   console.log(a.name + ', ' + a.city);
// });

// console.log('\n_ name if from Boulder:');
// var boulderites = _.filter(students, function(a){
//   return a.city === 'Boulder';});
// _.each(boulderites, function(a){
//   console.log(a.name + ' is from ' + 'Boulder');
// });

// console.log('\n_ name if older than 25:');
// var olderThan = _.filter(students, function(a){
//   return a.age > 25;
// });
// _.each(olderThan, function(a){
//   console.log(a.name + ' is older than 25');
// });

//with lodash
console.log('\nlodash names:');
_.forEach(students, function(a){console.log(a.name);});
console.log('\nlodash ages:');
_.forEach(students, function(a){console.log(a.age);});

console.log("\nlodash name 'n city:");
_.forEach(students, function(a){
  console.log(a.name + ', ' + a.city);
});

console.log('\nlodash name if from Boulder:');
_.filter(students, function(a){
  return a.city === 'Boulder';
}).forEach(function(a){
  console.log(a.name + ' is from Boulder');
});

console.log('\nlodash name if older than 25:');
_.filter(students, function(a){
  return a.age > 25;
}).forEach(function(a){
  console.log(a.name + ' is older than 25');
});



function printNames(arr) {
  //print names to console
  arr.forEach(function(a){
    console.log(a.name);
  });
}

function printAges(arr) {
  //print ages to console
  arr.forEach(function(a){
    console.log(a.age);
  });
}

function printNameAndCity(arr) {
  //print Name, City
  arr.forEach(function(a){
    console.log(a.name + ', ' + a.city);
  });
}

function printIfFrom(arr, city) {
  //print if from city
  arr.filter(function(a){
    return a.city === city;
  }).forEach(function(b){
    console.log(b.name + ' is from ' + city);
  });
}

function printIfOlder(arr, age) {
  //print if older than age
  arr.filter(function(a){
    return a.age > age;
  }).forEach(function(b){
    console.log(b.name + ' is older than ' + age);
  });

}
