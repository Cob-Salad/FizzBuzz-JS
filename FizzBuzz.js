function fizzbuzz(){
  const count = 100;
  const fizz = "fizz";
  const buzz = "buzz";
  for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
      console.log(fizz + buzz + i);
    }else if (i % 3 == 0){
      console.log(fizz + i);
    }else if (i % 5 == 0){
      console.log(buzz + i);
    }
  }
}
fizzbuzz();
