'use strict';
const product = function(factor1){
    return function(factor2){
    const result = factor1 * factor2;
    return result;
    }
}

console.log(product(2)(4))