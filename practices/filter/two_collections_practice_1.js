'use strict';

function choose_common_elements(collection_a, collection_b) {
	let result=[];
	for(let a of collection_a){
		for(let b of collection_b){
			if(a===b){
				result.push(a);
			}
		}
	}
	return result;
}




module.exports = choose_common_elements;
