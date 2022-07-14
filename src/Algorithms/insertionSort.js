const insertionSortAnimations = function(array) {
    const animations = [];
    if (array.length <= 1) return array;
    console.log(array);
    insertionSort(array, animations);
    console.log(array);
    return animations;
}

function insertionSort(array, animations) {
    for (let i = 1; i < array.length; i++) {
        let j = i;
        while (j > 0 && array[j] < array[j - 1]) {
            swap(j, j - 1, array, animations);
            j--;
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

export {insertionSortAnimations};