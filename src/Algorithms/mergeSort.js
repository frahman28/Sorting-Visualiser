const mergeSortAnimations = function(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const referenceArray = array.slice();
    mergeSort(array, 0, array.length-1, referenceArray, animations);
    return animations;
}

function mergeSort(mainArray, firstIndex, lastIndex, referenceArray, animations) {
    if (firstIndex === lastIndex) return;
    const middleIndex = Math.floor((firstIndex + lastIndex) / 2);
    mergeSort(referenceArray, firstIndex, middleIndex, mainArray, animations);
    mergeSort(referenceArray, middleIndex + 1, lastIndex, mainArray, animations);
    mergeSortedArrays(mainArray, firstIndex, middleIndex, lastIndex, referenceArray, animations);
}

function mergeSortedArrays(mainArray, firstIndex, middleIndex, lastIndex, referenceArray, animations) {
    let x = firstIndex;
    let y = firstIndex;
    let z = middleIndex + 1;

    while (y <= middleIndex && z <= lastIndex) {
        animations.push([y, z]);
        animations.push([y, z]);
        if (referenceArray[y] <= referenceArray[z]) {
            animations.push([x, referenceArray[y]]);
            mainArray[x++] = referenceArray[y++];
        } else {
            animations.push([x, referenceArray[z]]);
            mainArray[x++] = referenceArray[z++];
        }
    }

    while (y <= middleIndex) {
        animations.push([y, y]);
        animations.push([y, y]);
        animations.push([x, referenceArray[y]]);
        mainArray[x++] = referenceArray[y++];
    }

    while (z <= lastIndex) {
        animations.push([z, z]);
        animations.push([z, z]);
        animations.push([x, referenceArray[z]]);
        mainArray[x++] = referenceArray[z++];
    }
}

export {mergeSortAnimations};