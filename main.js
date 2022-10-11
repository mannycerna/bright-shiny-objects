// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

/*
functionName:  createUser
parameters:  2 strings

return: object
{
    firstName: string
    lastName: string
}
putting firstName and lastName into an object
*/

function createUser(firstName, lastName){
    let user = {
        firstName: firstName,
        lastName: lastName
    }
    return user;
}
console.log(createUser('Manny', 'Cerna'));
console.log(createUser('Mesi', 'Kaleziq'));




/*
functionName setAge
parameters: user(object), age(number)
user = 
{
    firstName: string
    lastName: string
}

return: user
{
    firstName: sring,
    lastName: string,
    age: number
}
*/

function setAge(user, age){
    
       user.age = age;
       return user;
    }
   
console.log(setAge(createUser('Manny', 'Cerna'),25));
console.log(setAge(
    {firstName: 'Joe', lastName: 'Lane'}, 30));


function incrementAge(user){

        user.age = user.age+ 1
        return user
}

console.log(incrementAge(setAge(createUser('Angela','Merkel'), 66)));

// function name: fixCar
// parameters: car

// car: {
//     make: string
//     model: string
//     year: number
//     needsMaintenance: boolean
// }

// return car




function fixCar(car){
    car.needsMaintenance = false;
    return car;
}
/*
run with car object's key:value pairs encased {} to create the object 
console.log(fixCar(
{
make: 'Ford',
model: 'Mustang',
year: 1969,
needsMaintenance: true}));

 Or include the the car objects key:value pairs in a variable
*/
let car = {
make: 'Ford',
model: 'Mustang',
year: 1969,
needsMaintenance: true
};
console.log(fixCar(car));

/*
function addGrades
parameters: student (object) and newGrades array

student = {
    name: string
    email: string
    grades: array numbers

    return student object
}

grades parameter - array of numbers
*/
function addGrades(student, newGrades){
    
    //use concat solution
    // student.grades = student.grades.concat(newGrades);

    //alt solution using for loop

    for(let i = 0; i < newGrades.length; i++){
        student.grades.push(newGrades[i]);
    }

   return student;
}
let newGrades = [88,70,90];

let student =  {
    name: 'Anthony DeRosa',
    email: 'anthony.derosa@codeimmersives.com',
    grades: [80,100, 95]
}
console.log(addGrades(student, newGrades));



function getDataType(car, key){
   return typeof car[key]
    // length = car.length;
    // for (let i = 0; i < length; i++) {
    //     return typeof car[i][key];
    //     }
};
car = 
{
    make: 'ford',
    model: 'Mustang',
    year: 1969,
    needsMaintenance: false
};

console.log(getDataType (car, ['make']));
console.log(getDataType(car, 'model'));
console.log(getDataType(car, 'year'));
console.log(getDataType(car, 'needsMaintenance'));


function addTodo(todos, newTodo) {
    
    todos.push(newTodo);
    return todos;
    
}
todos = 
    [{ 
        title: 'Get gas', 
        isComplete: false },
    { 
        title: 'Buy bread', 
        isComplete: true
    }];

let newTodo = {
    title: 'Call mom', 
    isComplete: false
};

console.log(addTodo(todos, newTodo));

function addSong(playlist, newSong){
      playlist.songs.push(newSong);
      playlist['duration'] = (playlist['duration']+  newSong['duration']);
    return playlist;

};
let playlist = {
    title: 'My jams',
    duration: 7,
    songs: [
        {
            title: 'Texas Sun',
            artist: 'Khruangbin',
            duration: 4
        },
        {
            title: 'Malamente',
            artist: 'Rosalia',
            duration: 3
        }
    ]
    }
let newSong = {
        title: 'Old Friends',
        artist: 'Pinegrove',
        duration: 3
    };
console.log(addSong(playlist, newSong));


function updateReportCard(reportCard, nbr){
    reportCard.grades.push(nbr);
    /*
    Check to see if the array was updated with nbr value
    // console.log(reportCard['grades']);
    // console.log(reportCard['grades'].length)
    */

    if(nbr < reportCard.lowestGrade) {
        reportCard.lowestGrade = nbr;

    }
    else if(nbr > reportCard.highestGrade) {
        reportCard.highestGrade = nbr;
    }
    
    let sum = 0
    reportCard.grades.forEach(i => {
        sum += i/reportCard['grades'].length;
    });
    reportCard.averageGrade = sum;

    return reportCard;
    
  
}

let reportCard = {
    lowestGrade: 70,
    highestGrade: 96,
    averageGrade: 82,
    grades: [70, 96, 80]
};
console.log(updateReportCard(reportCard, 62));
// console.log(updateReportCard(reportCard, 100));


// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘