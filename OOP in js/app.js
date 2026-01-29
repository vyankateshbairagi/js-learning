function Pencil(name, color , price ){
    this.name=name;
    this.color=color;
    this.price=price;

}

let pencil1 = new Pencil("nataraj" , "black", 10);
let pencil2 = new Pencil("natara" , "black", 10);
let pencil3 = new Pencil("natara" , "black", 10);



// example of oop in js with contructor function

console.log(pencil1);
console.log(pencil2);
console.log(pencil3);   


// output   
// Pencil { name: 'nataraj', color: 'black', price: 10 }
// Pencil { name: 'natara', color: 'black', price: 10 }
// Pencil { name: 'natara', color: 'black', price: 10 }

// here pencil is object and Pencil is constructor function

// we can create multiple object using constructor function
// each object will have its own properties and values
// this is the basic concept of oop in js
// constructor function is used to create multiple objects with same properties and methods



// we can also add methods to the constructor function
Pencil.prototype.getDetails = function(){
    return `Name: ${this.name}, Color: ${this.color}, Price: ${this.price}`;
}   
console.log(pencil1.getDetails());
console.log(pencil2.getDetails());
console.log(pencil3.getDetails());
// output
// Name: nataraj, Color: black, Price: 10
// Name: natara, Color: black, Price: 10
// Name: natara, Color: black, Price: 10
// here we have added a method getDetails to the Pencil constructor function
// now all the objects created using the Pencil constructor function can access the getDetails method   

// this is how we can use constructor function to create multiple objects with same properties and methods in js


