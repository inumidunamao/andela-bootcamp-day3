function findMissing(arr1, arr2){
	if ((!arr1 || !arr2) || (arr1.constructor !== Array || arr2.constructor !== Array)) return null;
	var notIn = (arguments[2]) ? arguments[2] : [];
	for (var i = 0; i < arr1.length; i++){
		if (arr2.indexOf(arr1[i]) === -1){
			notIn.push(arr1[i]);
		}
	}
	if (arguments[2]){
		return notIn;
	} else {
		var missing = findMissing(arr2, arr1, notIn);
		return (missing.length > 1) ? missing : (missing.length === 0) ? 0 : missing[0];
	}
}

module.exports = {findMissing:findMissing}