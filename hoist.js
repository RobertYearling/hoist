// Question 1:
console.log(hello);
var hello = 'world';
// Answer 1: Undefined because console.log is called before the variable

// Question 1 Rewritten
var hello;
console.log(hello);
hello = 'world';
// Answer 1: Undefined

// **********

// Question 2: Original
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// Answer 2: magnet

// Question 2:
var needle
function test(){
    var needle
    needle = 'magnet'
    console.log(needle)
}
needle = 'haystack'
test()

// Answer 2: magnet

// **********

// Question 3:
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// Answer 3: super cool

// Question 3:
var brendan;
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool';
console.log(brendan);
// Answer 3: super cool

// **********

// Question 4:
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// Answer 4: chicken, half-chicken

// Question 4:
var food;
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
food = 'chicken';
console.log(food);
eat();
// Answer 4: chicken, half-chicken

// **********

// Question 5 Original:
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// Answer 5: TypeError mean is not a function

// Question 5:
mean();
var mean = function() {
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
console.log(food);
// Answer 5: TypeError

// **********

// Question 6:
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// Asnwer 6: undefined, rock, r&b, disco

// Question 6:
var genre;
console.log(genre);
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
genre = "disco";
rewind();
console.log(genre);
// Asnwer 6: undefined, rock, r&b, disco

// **********

// Question 7:
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// Answer 7: san jose, seattle, burbank, san jose

// Question 7:
var dojo;
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);
// Answer 7: san jose, seattle, burbank, san jose

// **********

// Question 8:
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// Answer 8: Undefined

// Question 8:
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
// Answer 8: Undefined

