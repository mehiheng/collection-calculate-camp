'use strict';
var number_map_to_word = function(collection){
  let result=[];
  for(let element of collection){
    result.push(String.fromCharCode(element+96));
  }
  return result;
};

module.exports = number_map_to_word;
