const selectionSortAnimations = function(array) {
    const animations = [];
    if (array.length <= 1) return array;
    selectionSort(array, array.length, animations);
    return animations;
}

function selectionSort(array,  n, animations) {
    var i, j, min_idx;
    for (i = 0; i < n-1; i++) {
        min_idx = i;
        for (j = i + 1; j < n; j++)
        if (array[j] < array[min_idx])
            min_idx = j;
  
        swap(min_idx, i, array, animations);
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