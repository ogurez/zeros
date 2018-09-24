module.exports = function getZerosCount(number) {
    let res=0;
    let prom=0;

	for(let i=1;i<=number;i++){
      prom=i;
	    while(prom%5==0){
            prom=prom/5;
            res++;
    }
    }
    return res;
}


module.exports = function getZerosCount(number) {
    result = 0
    for (var i = 1; i <= number; i++) {
        temp = i
        while (temp%5 == 0){ 
              temp /= 5
              result++
        }
    }
    return result
 }