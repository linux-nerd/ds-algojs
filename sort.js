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
 * obj = {list: list, order: asc/des}
 */
BUNNY.SORT.insertionSort = function(obj){
	if(obj.order === 'null'){
		obj.order = 'asc';
	}
	else if(obj.order !== 'asc' && obj.order !== 'des'){
		obj.order = 'asc';
	}
	
	if(obj.list.length > 1){
		for(var i=0; i < obj.list.length; i++){
			key = obj.list[i];
			
			j = i - 1;
			
			if(obj.order === 'asc'){
				while(j >= 0 && obj.list[j] > key){
					obj.list[j+1] = obj.list[j];
					j--;
				}
			}
			else if(obj.order === 'des'){
				while(j >= 0 && obj.list[j] < key){
					obj.list[j+1] = obj.list[j];
					j--;
				}
			}
			obj.list[j+1] = key;
		}
	}
	
	return obj.list;
};
