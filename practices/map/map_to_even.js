'use strict';
function map_to_even(collection){
  let result=[];
  for(let a of collection){
    result.push(a*2);
  }
  return result;
}
module.exports = map_to_even;
