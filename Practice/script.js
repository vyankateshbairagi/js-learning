let a = 10;
  var c = 30;


function outer() {
  let b = 20;

  function inner() {
    console.log(a, b);
  }
inner();


}
console.log(c);
outer();    
