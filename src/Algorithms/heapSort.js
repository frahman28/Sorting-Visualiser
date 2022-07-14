const heapSortAnimations = function(array) {
    const animations = [];
    if (array.length <= 1) return array;
    heapSort(array, animations);
    return animations;
}

function heapSort(array, animations) {
    makeMaxHeap(array, animations);
    for (let i = array.length - 1; i > 0; i-- ) {
        swap(0, i, array, animations);
        shiftDown(0, i - 1, array, animations);
    }
}

function makeMaxHeap(array, animations) {
    let firstParentIndex = Math.floor((array.length - 2) / 2);
    for (let i = firstParentIndex + 1; i >= 0; i--) {
        shiftDown(i, array.length - 1, array, animations);
    }
}

function shiftDown(index, lastIndex, heap, animations) {
    let childFirstIndex = index * 2 + 1;
    
    while (childFirstIndex <= lastIndex) {
        let childSecondIndex = -1;
        if ((index * 2 + 2) <= lastIndex) {
            childSecondIndex = index * 2 + 2;
        }
        let swapIndex = 0;
        if (childSecondIndex > -1 && heap[childSecondIndex] > heap[childFirstIndex]) {
            swapIndex = childSecondIndex;
        } else {
            swapIndex = childFirstIndex;
        }

        if (heap[swapIndex] > heap[index]) {
            swap(index, swapIndex, heap, animations);
            index = swapIndex;
            childFirstIndex = index * 2 + 1;
        } else {
            return;
        }
    }
}

function swap(i, j, array, animations) {
    animations.push([i, j]);
    animations.push([i, j]);
    animations.push([i, array[j]]);
    animations.push([j, array[i]]);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

export {heapSortAnimations};