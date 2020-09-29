var nextWord = function (oriArray,clickedFlower){
	var newArray = [clickedFlower];
	var len = newArray.length;
	oriArray.pop(clickedFlower);
	var minFlower; // ?
	var collect = {};
	var leng = oriArray.length - 1;
	while (leng !== 0){
		for (let i in oriArray){
			if (i !== undefined){
			    var strIndex = 0;
				var dif = oriArray[i].charCodeAt(strIndex) - newArray[len - 1].charCodeAt(strIndex);
                if (dif > 0){
				  while (dif in collect){
                    strIndex += 1;
					dif = oriArray[i].charCodeAt(strIndex) - newArray[len - 1].charCodeAt(strIndex);
				  }
				  collect[dif] = oriArray[i];
			  }
            }
		}
	
		var min = 99999;
		for (let j in collect){
			if (Number(j) <= min){
				min = Number(j);
				closestFlower = collect[j];
			}
		}

		newArray.push(closestFlower);
		leng -= 1;
		oriArray.pop(closestFlower);
	}

	return newArray;
};
flowers = ['daffodil','cherryblossom','lily','daisy','sunflower','tulip','rose','waterlily'];
console.log(nextWord(flowers,'lily'));