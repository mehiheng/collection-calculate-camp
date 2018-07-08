'use strict';

function choose_no_common_elements(collection_a, collection_b) {
		for(let b of collection_b){
			let index=collection_a.indexOf(b);
			if(index!=-1){
				collection_a.splice(index,1);
			}
		}
	return collection_a;
}



module.exports = choose_no_common_elements;
