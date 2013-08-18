/**
 * @author abhishek
 */

/**
 * create a namespace DS in the global namespace BUNNY
 */
BUNNY.createNameSpace("BUNNY.SORT");

//creating the alias of the namespace
var sort = BUNNY.SORT;



/**
 * 
 * @param {Object} list
 */
BUNNY.SORT.insertionSort = function(list){
	
	function ascending(){
		for(var i=0; i < list.length; i++){
			key = list[i];
			
			j = i - 1;
			while(j >= 0 && list[j])
		}
	}
	
	return {
		list: list,
		asc: ascending
	};
};
