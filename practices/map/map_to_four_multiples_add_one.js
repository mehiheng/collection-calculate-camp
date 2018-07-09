'use strict';
var map_to_four_multiples_add_one = function(collection){
  let result=[];
  for(let a of collection){
    result.push(a*4+1);
  }
  return result;
};

module.exports = map_to_four_multiples_add_one;
