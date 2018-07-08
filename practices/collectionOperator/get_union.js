'use strict';

function get_union(collection_a, collection_b) {
  for(let b of collection_b){
    if(collection_a.indexOf(b)===-1){
      collection_a.push(b);
    }
  }
  return collection_a;
}

module.exports = get_union;
/*
for(let b of collection_b){
  if(a===b){
    result.push(a);
    break;
  }
  result.push(a);
}*/