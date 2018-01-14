/** Deep Copy
 *	Return a copy of the object passed as param, doing (recursivelly) copys of
 *	all the objects the initial has.
 *
 *  Caution!!!
 *  This function is recursive. Copying a very deep object might concern heavy
 *  performance issues. Use your brain before the function.
 *
 *	@param oldObj {Object} Object to clone
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
 *
 *  @param old {Object} Object to use as base
 *  @param obj {Object} Object to get data from
 *  @param avoidDeepCopy {booleam} Seting to true will update the "old" object
 */
function merge(old, obj, avoidDeepCopy) {
	let dest,
		orig;

	if (avoidDeepCopy) {
		dest = old;
		orig = obj;
	} else {
		dest = deepCopy(old);
		orig = deepCopy(obj);
	}

	for (const prop in orig) {
		dest[prop] = orig[prop];
	}

	return dest;
}

/** Equal
 *  Check if two objects are equal.
 *
 *  Seen in:
 *  https://github.com/epoberezkin/fast-deep-equal/
 *
 *  @param a {Object} First object
 *  @param b {Object} Seccond object
 */
function equal(a, b) {
	if (a === b) {
		return true;
	}

	var arrA = Array.isArray(a);
	var arrB = Array.isArray(b);
	var i;

	if (arrA && arrB) {
		if (a.length !== b.length) {
			return false;
		}

		for (i = 0; i < a.length; i++) {
			if (!equal(a[i], b[i])) {
				return false;
			}
		}

		return true;
	}

	if (arrA !== arrB) {
		return false;
	}

	if (a && b && typeof a === 'object' && typeof b === 'object') {
		var keys = Object.keys(a);
		if (keys.length !== Object.keys(b).length) {
			return false;
		}

		var dateA = a instanceof Date;
		var dateB = b instanceof Date;
		if (dateA && dateB) {
			return a.getTime() === b.getTime();
		}

		if (dateA !== dateB) {
			return false;
		}

		var regexpA = a instanceof RegExp;
		var regexpB = b instanceof RegExp;
		if (regexpA && regexpB) {
			return a.toString() === b.toString();
		}
		if (regexpA !== regexpB) {
			return false;
		}

		for (i = 0; i < keys.length; i++) {
			if (!Object.prototype.hasOwnProperty.call(b, keys[i])) {
				return false;
			}
		}

		for (i = 0; i < keys.length; i++) {
			if (!equal(a[keys[i]], b[keys[i]])) {
				return false;
			}
		}

		return true;
	}

	return false;
}

module.exports = {
	merge: merge,
	equal: equal,
	clone: deepCopy,
};
