// JavaScript source code
var nextWord = function (oriArray,clickedFlower){
	var newArray = [clicked Flower];
	var len = newArray.length
	oriArray.pop(clickedFlower);
	var minFlower;
	var collect = {};
	var leng = oriArray.length - 1;
	while (leng !== 0){
		for (let i in oriArray){
			if (i !== undefined){
			    var strIndex = 0;
				var dif = oriArray[i].charCodeAt(strIndex) - newArray[len - 1].charCodeAt(strIndex);
				while (dif in collect === true){
					dif = oriArray[i].charCodeAt(strIndex + 1) - newArray[len - 1].charCodeAt(strIndex + 1);
				}
				collect[dif] = oriArray[i];
			}
		}
	
		var min = 0;
		for (let j in collect){
			if (Number(j) >= 0 && Number(j) <= min){
				min = Number(j);
				closeFlower = collect[j];
			}
		}

		newArray.push(closeFlower);
		leng -= 1;
		oriArray.pop(closeFlower);
	}

	return newArray;
};