'use strict';

function choose_even(collection) {
  let result=[];
  for(let element of collection){
    if(element%2===0){
      result.push(element);
    }
  }
  return result
}

module.exports = choose_even;
