module.exports = function getZerosCount(number) {
  let res=0;
    let prom=0;

	for(let i=0;i<=number;i++){
        prom=i;
	    while(prom%5==0){
            res++;
            prom=prom/5;
    }
             return Math.floor(prom);
    }
}
