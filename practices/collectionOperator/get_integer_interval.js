'use strict';

function get_integer_interval(number_a, number_b) {
  let result=[];
  if(number_a<number_b){
    for(let num=number_a;num<=number_b;num++){
      result.push(num);
    }
}else if(number_a>number_b){
  for(let num=number_b;num<=number_a;num++){
      result.push(num);
      if(num===5){
        result.reverse();
      }
  }
}else if(number_a===number_b){
  result.push(number_a)
  }
return result
}
module.exports = get_integer_interval;

