'use strict';

function grouping_count(collection) {
  let result={};
  for(let element of collection){
    let index=collection.indexOf(element);
    if(index===-1){
      result[index]=1
    }else{
      result[index]+=1;
    }
  }
  return result;
}

module.exports = grouping_count;
