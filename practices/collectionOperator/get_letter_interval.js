'use strict';

function get_letter_interval(number_a, number_b) {
  let result=[];
  if(number_a<number_b){
    for(let num=number_a;num<=number_b;num++){
      result.push(String.fromCharCode(num+96));
    }
  }else if(number_a>number_b){
    for(let num=number_b;num<=number_a;num++){
      result.push(String.fromCharCode(num+96));
    }
    result.reverse();
  }else if(number_a===number_b){
    result.push(String.fromCharCode(number_a+96));
  }
  return result;
}

module.exports = get_letter_interval;
