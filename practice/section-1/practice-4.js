'use strict';

function collectSameElements(collectionA, objectB) {
  return collectionA.map((item) => item.key).filter(obj => objectB.value.includes(obj));
}
