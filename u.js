var _ = require('underscore');
afun= function(tempsum, cb ){
    setTimeout( 
	function(){
		console.log(tempsum); 
        	cb(tempsum);
	} , 1000);
}
var sum=0;
//no need to call async.foreachlimit 1
//no need to use fiber
_.each([1,2,3], function(num){
	sum+=num;
	afun(sum, function(){
		console.log(num + 'done');
	});
} )
