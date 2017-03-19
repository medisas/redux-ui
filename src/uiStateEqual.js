import Immutable from 'immutable';

function is(valueA, valueB) {
  // Taken from here https://github.com/facebook/immutable-js/blob/master/src/is.js
  if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) { // eslint-disable-line
    return true;
  }
  return false;
}

export default function uiStateEqual(propsA, propsB) {
  if (propsA == null && propsB == null) {
    return true;
  }
  if (propsA == null || propsB == null) {
    return false;
  }

  const objA = propsA.uiToCompare;
  const objB = propsB.uiToCompare;
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null ||
      typeof objB !== 'object' || objB === null) {
    return false;
  }

  const immutableA = Immutable.fromJS(objA);
  const immutableB = Immutable.fromJS(objB);

  const retVal = Immutable.is(immutableA, immutableB);

  return retVal;
}
