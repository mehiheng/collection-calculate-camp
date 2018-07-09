'use strict';

function double_to_one(collection) {
let result=[];
let results=[];
for(let elements of collection){
if(elements.length>=1){
for(let element of elements){
results.push(element);
}
continue;
}
results.push(elements);
}
for(let element of results){
if(result.indexOf(element)===-1){
result.push(element);
}
}
return result;
}
module.exports = double_to_one;
