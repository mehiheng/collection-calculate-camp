'use strict';

function grouping_count(collection) {
  let result={};
	  for(let element of collection){
		  if(result.hasOwnProperty(element)){
			  result[element]+=1;
		  }else{
			  result[element]=1;
		  }
	  }
  return result;
}


module.exports = grouping_count;
