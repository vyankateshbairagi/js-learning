let a = 10;

function outer() {
  let b = 20;

  function inner() {
    console.log(a, b);
  }
inner();


}

outer();    
