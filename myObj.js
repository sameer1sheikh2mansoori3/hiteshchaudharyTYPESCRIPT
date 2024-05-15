"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myStudent = {
    name: "sameer",
    age: 200,
    email: "Sameer@gmail.com"
};
var myStudent1 = {
    name: 12344,
    age: 200,
    email: "Sameer@gmail.com"
};
var printName = function (myObj) {
    var name = myObj.name, age = myObj.age, email = myObj.email;
    console.log("we are having ".concat(name, " and ").concat(email));
};
printName(myStudent);
var createCourse = function () {
    var myCourse = {
        name: "hindi",
        price: 200
    };
    return myCourse;
};
console.log(createCourse());
