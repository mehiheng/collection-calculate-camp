'use strict';

function double_to_one(collection) {
let result=[];
for(let elements of collection){
if(elements.length>=1){
for(let element of elements){
result.push(element);
}
continue;
}
result.push(elements);
}
return result;
}

module.exports = double_to_one;
