//02.2 FizzBuzz

let i = 1;
for(i; i <=100; i++)
{
  const isDivisibleBy3 = (i%3 == 0),
        isDivisibleBy5 = (i%5 == 0);
  let result = "";
  if( isDivisibleBy3 || isDivisibleBy5){
    if(isDivisibleBy3)
      result += "Fizz";
    if(isDivisibleBy5)
      result += "Buzz";
  } 
  else
    result = i;
  console.log(result)
  result = "";
}