'use strict';

function collect_last_element(collection) {
  let last=0;
  for(let element of collection){
    last=element;
 }
 return last;
}

module.exports = collect_last_element;
