'use strict';

function collectSameElements(collectionA, collectionB) {
   return collectionA.filter((item) => collectionB[0].includes(item));
}
