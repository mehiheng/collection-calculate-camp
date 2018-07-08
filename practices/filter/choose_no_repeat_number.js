'use strict';

function choose_no_repeat_number(collection) {
  let result=[];
  for(let element of collection){
    if(result.indexOf(element)===-1){
      result.push(element);
    }
  }
  return result;
}

module.exports = choose_no_repeat_number;
