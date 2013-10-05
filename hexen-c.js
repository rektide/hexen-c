var data= []
function inz(datum){data.push(new Buffer(datum).toString())}
process.stdin.on("data",inz)
process.stdin.on("end",function(){
	var hexes= /[0-9A-F]/,
	  agg= {}
	function eventTrigger(n){
		agg[n]= (agg[n]||-1)+1
	}
	for(var i in data)
		for(var j in data[i])
			if(hexes.test(data[i][j]))
				eventTrigger(data[i][j])
	console.log(agg)
})
