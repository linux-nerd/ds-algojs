/**
 * @author abhishek
 */

/**
 * created a namespace named BUNNY 
 */
var BUNNY = BUNNY || {};

BUNNY.createNameSpace = function(namespace){
	var nameSpaceParts = namespace.split(".");
	var parent = BUNNY;
	
	// we want to be able to include or exclude the root namespace so we strip
    // it if it's in the namespace
    if (nameSpaceParts[0] === "BUNNY") {
        nameSpaceParts = nameSpaceParts.slice(1);
    }
    
    // loop through the parts and create a nested namespace if necessary
    for (var i=0; i < nameSpaceParts.length; i++){
    	var partName = nameSpaceParts[i];
    	
    	// check if the current parent already has the namespace declared
        // if it isn't, then create it
        if(typeof parent[partName] === 'undefined'){
        	parent[partName] = {};
        }
        
        // get a reference to the deepest element in the hierarchy so far
        parent = parent[partName];
    }
    // the parent is now constructed with empty namespaces and can be used.
    // we return the outermost namespace
    return parent;
};
