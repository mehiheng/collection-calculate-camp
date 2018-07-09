'use strict';
var map_to_three_multiples = function(collections){
  let result=[];
  for(let a of collections){
    result.push(a*3);
  }
  return result;
};

module.exports = map_to_three_multiples;
