function toTwenty(){
	var index = 0;
	for (var i = 1; i <= 20; i++ ) {
		this[index] = i;
		index++;
	}
	return this;
}

function toForty(){
	var index = 0;
	for (var i = 2; i <= 40; i+=2) {
		this[index] = i;
		index++;
	}
	return this;
}

function toOneThousand(){
	var index = 0;
	for (var i = 10; i <= 1000; i+=10) {
		this[index] = i;
		index++;
	}
	return this;	
}

function search(n) {
	if(n === null ) return {count:null, index:null, length:this.length}
	if(n === undefined ) return {count:undefined, index:undefined, length:this.length}
	if (n.constructor != Number) return {count:0, index:-1, length:this.length}
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
			var long_cut = Math.floor((first_term + last_term)/4);
			if (n === array[long_cut]){
				return {count: count, index:long_cut, length:this.length}
			} else if(n < array[long_cut]) {
				var half = long_cut;	
			} else {
				var half = Math.floor((first_term + last_term)/2);
			}
			if (n === array[half]){
				return {count: count, index:half, length:this.length}
			}else if (array[first_term] === n) {
				return {count: count, index:first_term, length:this.length}
			} else if (array[last_term-1] === n){
				return {count: count, index:last_term-1, length:this.length}
			}else if(half === 0 && array.length === 1){
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
}
Array.prototype.toTwenty = toTwenty;
Array.prototype.toForty = toForty;
Array.prototype.toOneThousand = toOneThousand;
Array.prototype.search = search;


module.exports = Array;