'use strict';

function get_intersection(collection_a, collection_b) {
  let result=[];
  for(let b of collection_b){
    for(let a of collection_a){
      if(a===b){
        result.push(b);
      }
    }
  }
  return result;
}

module.exports = get_intersection;
