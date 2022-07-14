const selectionSortAnimations = function(array) {
    const animations = [];
    if (array.length <= 1) return array;
    console.log(array);
    selectionSort(array, animations);
    console.log(array);
    return animations;
}

function selectionSort(array, animations) {
    var i, j, min_idx;

    for (i = 0; i < array.length-1; i++) {
        min_idx = i;
        for (j = i + 1; j < array.length; j++) {
            if (array[j] < array[min_idx]) {
                min_idx = j;
            }
            swap(min_idx, i, array, animations);
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

export { selectionSortAnimations };