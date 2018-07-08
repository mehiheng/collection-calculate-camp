'use strict';

function get_letter_interval_2(number_a, number_b) {
  let result=[];
  if(number_a<number_b){
    for(let num=number_a;num<=number_b;num++){
      if((num/26)<=1){
        let origin="";
        origin+=String.fromCharCode(num+96)
        result.push(origin);
      }else if((num/26)<=2){
        let origin="a";
        origin+=String.fromCharCode(num+96-26)
        result.push(origin);
      }else if((num/26)<=3){
        let origin="b";
        origin+=String.fromCharCode(num+96-26*2)
        result.push(origin);
      }
    }
  }else if(number_a>number_b){
    for(let num=number_b;num<=number_a;num++){
      if((num/26)<=1){
        let origin="";
        origin+=String.fromCharCode(num+96)
        result.push(origin);
      }else if((num/26)<=2){
        let origin="a";
        origin+=String.fromCharCode(num+96-26)
        result.push(origin);
      }else if((num/26)<=3){
        let origin="b";
        origin+=String.fromCharCode(num+96-26*2)
        result.push(origin);
      }
    }
    result.reverse();
  }else if(number_a===number_b){
    if((number_a/26)<=1){
      let origin="";
      origin+=String.fromCharCode(number_a+96)
      result.push(origin);
    }else if((number_a/26)<=2){
      let origin="a";
      origin+=String.fromCharCode(number_a+96-26)
      result.push(origin);
    }else if((number_a/26)<=3){
      let origin="b";
      origin+=String.fromCharCode(number_a+96-26*2)
      result.push(origin);
    }
  }
  return result;
}

module.exports = get_letter_interval_2;

