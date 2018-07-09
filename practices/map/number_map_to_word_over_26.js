'use strict';
var number_map_to_word_over_26 = function(collection){
  let result=[];
  for(let a of collection){
    if(a>26){
      let origin="a";
      origin+=(String.fromCharCode(a+96-26));
      result.push(origin);
    }else{
      result.push(String.fromCharCode(a+96));
    }
  }
  return result;
};

module.exports = number_map_to_word_over_26;
