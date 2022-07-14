const quickSortAnimations = function(array) {
    const animations = [];
    if (array.length <= 1) return array;
    quickSort(array, 0, array.length - 1, animations);
    return animations;
}

function quickSort(array, startIndex, lastIndex, animations, referenceArray) {
    if (startIndex >= lastIndex) return;

    let pivotIndex = startIndex;
    let leftIndex = startIndex + 1;
    let rightIndex = lastIndex;

    while (rightIndex >= leftIndex) {
        if (array[leftIndex] > array[pivotIndex] && array[rightIndex] < array[pivotIndex]) {
            animations.push([leftIndex, rightIndex]);
            animations.push([leftIndex, rightIndex]);
            animations.push([leftIndex, array[rightIndex]]);
            animations.push([rightIndex, array[leftIndex]]);
            let temp = array[leftIndex];
            array[leftIndex] = array[rightIndex];
            array[rightIndex] = temp;
        }
        if (array[leftIndex] <= array[pivotIndex]) {
            leftIndex = leftIndex + 1;
        }
        if (array[rightIndex] >= array[pivotIndex]) {
            rightIndex = rightIndex - 1;
        }
    }

    animations.push([rightIndex, pivotIndex]);
    animations.push([rightIndex, pivotIndex]);
    animations.push([rightIndex, array[pivotIndex]]);
    animations.push([pivotIndex, array[rightIndex]]);

    let temp = array[rightIndex];
    array[rightIndex] = array[pivotIndex];
    array[pivotIndex] = temp;

    let leftSubArrayIsSmaller = rightIndex - 1 - startIndex < lastIndex - (rightIndex + 1);

    if (leftSubArrayIsSmaller) {
        quickSort(array, startIndex, rightIndex - 1, animations, referenceArray);
        quickSort(array, rightIndex + 1, lastIndex, animations, referenceArray);
    } else {
        quickSort(array, rightIndex + 1, lastIndex, animations, referenceArray);
        quickSort(array, startIndex, rightIndex - 1, animations, referenceArray);
    }
}

export {quickSortAnimations};