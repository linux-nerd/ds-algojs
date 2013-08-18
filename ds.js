/**
 * @author abhishek
 * implementation of LIFO stacks.
 * 
 * methods - pop and push
 * push - add objects to the top.
 * pop - remove object from the top.
 */


/**
 * create a namespace DS in the global namespace BUNNY
 */
BUNNY.createNameSpace("BUNNY.DS");

//creating the alias of the namespace
var ds = BUNNY.DS;

/**
 * add a stack method to the DS namespace under global namespace BUNNY
 */
BUNNY.DS.stack = function(){
	/**
	 * private variable
	 * only accessible by push and pop methods
	 */
	var stack = [];
	
	/**
	 * exposing public methods - push and pop, getStackArray, getLength
	 */
	return {
		pop: function(){
			return stack.pop();
		},
		push: function(data){
			stack.push(data);
		},
		getStackArray : function(){
			return stack;
		},
		getLength: function(){
			return stack.length;
		}
	};
};


/**
 * add a queue (FIFO stack) method to the DS namespace under global namespace BUNNY
 */
BUNNY.DS.queue = function(){
	
	/**
	 * private variable
	 * only accessible by push and pop methods
	 */
	var stack = [];
	
	
	/**
	 * exposing public methods - push and pop, getStackArray, getLength
	 */
	return {
		dequeue: function(){
			return stack.pop();
		},
		enqueue: function(item){
			stack.unshift(item);
		},
		getQueue: function(){
			return stack;
		},
		getLength: function(){
			return stack.length;
		}
	}
};

/**
 * add a deque method to the DS namespace under global namespace BUNNY 
 */
BUNNY.DS.deque = function(){
	var stack = [];
	
	return {
		popBack: function(){
			return stack.pop();
		},
		pushBack: function(item){
			stack.push(item);
		},
		popFront: function(){
			stack.shift();
		},
		pushFront: function(item){
			stack.unshift(item);
		},
		getDeque: function(){
			return stack;
		},
		getLength: function(){
			return stack.length;
		}
	}
};

/**
 * 
 * this is a helper function which creates a node
 * @return 
 */
BUNNY.DS.makeNode = function(){
	return {data: null, next: null, prev: null};
}

/**
 * 
 */
BUNNY.DS.linkedList = function(){
	var length = 0,
		head = null;
	
	/**
	 * 
 	 * @param {Object} data
	 */	
	function addLast(data){
		var node = ds.makeNode(),
			current;
		node.data = data;
		
		//when the list is empty
		//i.e. adding the item to the empty list
		if(isNull()){
			head = node;
		}
		else{
			current = head;
			/**
			 * this loop will get to the last node
			 */
			while(current.next){
				current = current.next;
			}
			//adding at the end of the node
			node.prev = current;
			current.next = node;
			
		}
		length++;
	}
	
	/**
	 * 
 	 * @param {Object} data
	 */
	function addFirst(data){
		var node = ds.makeNode();
		node.data = data;
		
		//when the list is empty
		//i.e. adding the item to the empty list
		if(isNull()){
			head = node;
		}
		else{
			node.next = head;
			head.prev = node;
			head = node;
		}
		
		length++;
	}
	
	/**
	 * calls search data and looks for the data
	 * if the 
	 */
	function addAfter(dataFind, dataAdd){
		var find = searchData(dataFind);
		
		if(find.isThere){
			var node = ds.makeNode();
			node.data = dataAdd;
			node.next = find.current.next;
			node.prev = find.current;
			find.current.next = node;
			find.next.prev = node;
			
			return true;
		}
		else{
			return false;
		}
	}
	
	/**
	 * 
	 */
	function addBefore(dataFind, dataAdd){
		var find = searchData(dataFind);
		
		if(find.isThere){
			var node = ds.makeNode();
			node.data = dataAdd;
			node.next = find.current;
			find.current.prev = node;
			find.prev.next = node;
			node.prev = find.prev;
			
			return true;
		}
		else{
			return false;
		}
	}
	
	/**
	 * 
 	 * remove the last node of the linked list
	 */
	function removeLast(){
		var current = head.next,
			prev = head;
		
		if(isNull()){
			return false;
		}
		else{
			while(current.next){
				current = current.next;
				prev = prev.next;
			}
			
			prev.next = null;
			delete current;
		}
		length--;
	}
	
	/**
	 * 
     * removes the first node
	 */
	function removeFirst(){
		if(isNull()){
			return false;
		}
		
		var current = head;
		head = head.next;
		current.next = null;
		delete current;
		length--;
	}
	
	/**
	 * 
	 */
	function removeAfter(dataFind){
		var find = searchData(dataFind);
		
		if (find.isThere) {
			find.current.next = find.next.next;
			find.next.next = null;
			delete find.next;
			return true
		} else{
			return false;
		};
	}
	
	/**
	 * 
	 */
	function removeBefore(dataFind){
		var find = searchData(dataFind);
		
		if (find.isThere) {
			find.prev.prev.next = find.current;
			find.current.prev = find.prev.prev;
			find.prev.next = null;
			find.prev.prev = null;
			delete find.prev;
			return true
		} else{
			return false;
		};
	}
	
	/**
	 * 
 	 * @param {Object} data
	 */
	function searchData(data){
		var isThere=false, prevNode = null, nextNode, position=0, current, index;
		
		if(isNull()){
			isThere = false;
		}
		else{
			current = head; index = 0;
			while(current.next){
				index++;
				if(current.data == data){
					
					isThere = true;
					position = index;
					nextNode = current.next;
					break;
				}
				
				prevNode = current;
				current = current.next;
				
			}
		}
		
	   /*
		|-return an object depending on the search result
		|-if the data is found in the ll then the object containing the search result of true, previous node,
		|-next node and the position of the data is returned
		|-else only search result of false is returned
		*/
		if(isThere){
			return{
				isThere: isThere,
				prev: prevNode,
				current: current,
				next: nextNode,
				pos: position 
			};
		}
		else{
			return{
				isThere: isThere
			};
		}
	}
	
	/**
	 * get the length of the linkedlist object
	 * this is a helper function
	 */
	function getLength(){
		return length;
	}
	
	/**
	 * a helper function which returns the head node
	 */
	function getHead(){
		return head;
	}
	
	/**
	 * a helper function which returns true if the ll is empty and false otherwise
	 */
	function isNull(){
		if (getHead() === null)
			return true;
		else
			return false;
	}
	
	/**
	 * 
	 * expose the public methods
	 */
	return {
		add: addLast,
		addFirst: addFirst,
		addAfter: addAfter,
		addBefore: addBefore,
		remove: removeLast,
		removeFirst: removeFirst,
		searchData: searchData,
		length: getLength,
		head: getHead,
		isNull: isNull
	};
};


BUNNY.DS.makeBSTNode(data){
	return {
		data: data,
		left: null,
		right: null
	};
};

BUNNY.DS.BinarySearchTree = function(){
	/*
	 * Private
	 * this is the root of the binary tree
	 */
	var node, length = 0;
	
	return {
		/**
		 * 
 		 * @param {Object} data
		 */
		add: function(data){
			var node = ds.makeBSTNode(data),
				current;
				
			//if the BST is empty
			if(isEmpty()){
				root = node;
			}
			else{
				current = node;
				
				while(1){
					//if the new value is less than the node value
					if(data < current.data){
						//if left is null
						if(current.left === null){
							current.left = node;
							length++;
							break;
						}else{
							current = current.left;
						}
					}
					else if(data > current.data){
						if(current.right === null){
							current.right = node;
							length++;
							break;
						}else{
							current = current.right;
						}
					}
					else{
						break;
					}
				}
			}
		},
		isEmpty: function(){
			if(root === null)
				return true;
			else
				return false;
		},
		size: function(){
			return length;
		},
		contains: function(data){
			var found = false, current = root;
			
			while(!found && current){
				if(data < current.data){
					//go left
					current = current.left;
				}
				else if(data > current.data){
					//go right
					current = current.right;
				}
				else{
					found = true;
				}
			}
			
			return found;
		}
	};
};

