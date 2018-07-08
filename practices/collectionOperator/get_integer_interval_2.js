'use strict';

function get_integer_interval_2(number_a, number_b) {
  let result=[];
  if(number_a<number_b){
    for(let num=number_a;num<=number_b;num++){
      if(num%2===0){
        result.push(num);
      }
    }
  }else if(number_a>number_b){
    for(let num=number_b;num<=number_a;num++){
      if(num%2===0){
        result.push(num);
      }
      result.reverse();
    }
  }else if(number_a===number_b&&(number_a%2===0)){
    result.push(number_a)
  }
  return result;
}

module.exports = get_integer_interval_2;
