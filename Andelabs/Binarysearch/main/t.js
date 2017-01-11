function binSearch(n, z) {
		var array = z.slice();
		var f = 0;
		var l = array.length-1;
		var count = 0;
		while (f < l) {
			var half = Math.floor(array.length/2);
			console.log("F: "+f+ ", L: "+l+" H: "+half);
	//		console.log(array);
			if (array[half] === n) {
				return {count: count, index:Math.floor((f+l)/2), length:z.length}
			} else if (n < array[half]) {
				
				l = l-half;
				console.log(l);
				array.splice(half);
				console.log(array)
				count++;
			} else {
				f = (f+half)+1;
				array =	array.splice(half,l);
				console.log("F: "+f+ ", L: "+l+" H: "+half);
				console.log(array);
				count++;
			}
			
		}
		return -1;
	}

	/*

var array = this.slice(),
		first_term = 0,
		last_term = array.length-1,
		count = 0;
	if (array[first_term] === n) {
		return {count: 0, index:first_term, length:this.length}
	} else if (array[last_term] === n){
		return {count: 0, index:last_term, length:this.length}
	} else {
		while( first_term <= last_term){			
			var half = Math.floor((first_term + last_term)/2);
			if (n === 40){
			console.log("HALF: "+half);
			}
			if (n === array[half]){
				return {count: count, index:half, length:this.length}
			} else if(half === 0 && array.length === 1){
				return {count: count, index:-1, length:this.length}
			} else if(n < array[half]) {
				last_term = half-1;
			} else if(n > array[half]) {
				first_term = half+1;
			}
			count++;
		}
		return {count: count, index:-1, length:this.length};
	}

	*/