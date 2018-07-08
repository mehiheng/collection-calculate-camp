'use strict';

function collect_all_even(collection) {
  let even=[];
  for(let element of collection){
    if(element%2===0){
      even.push(element);
    }
  }
  return even;
  console.info(even)
}

module.exports = collect_all_even;
