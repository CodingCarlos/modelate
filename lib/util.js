/** Deep Copy
 *	Return a copy of the object passed as param, doing (recursivelly) copys of
 *	all the objects the initial has.
 *	
 *  Caution!!! 
 *  This function is recursive. Copying a very deep object might concern heavy
 *  performance issues. Use your brain before the function.
 */
function deepCopy(oldObj) {
    var newObj = oldObj;
    if (oldObj && typeof oldObj === 'object') {
        newObj = Object.prototype.toString.call(oldObj) === '[object Array]' ? [] : {};
        for (var i in oldObj) {
            newObj[i] = deepCopy(oldObj[i]);
        }
    }
    return newObj;
}

/** Merge
 *  Perform a complete merge of two objects.
 *
 *	Caution!!! 
 *  A third parameter, avoidDeepCopy is also included to avoid creating a deep
 *  copy of the objects. With this parameter to true, original objects may get
 *  updated, linked or similar unexpected behaviour.
 */
function merge(old, obj, avoidDeepCopy) {
    
    let dest, orig;

    if(avoidDeepCopy) {
        dest = old;
        orig = obj;
    } else {
        dest = deepCopy(old);
        orig = deepCopy(obj);
    }
    
    for(let prop in orig) {
        dest[prop] = orig[prop];
    }

    return dest;
}


module.exports = {
	merge: merge,
	clone: deepCopy
};