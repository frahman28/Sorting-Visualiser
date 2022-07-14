const bubbleSortAnimations = function(array) {
    const animations = [];
    if (array.length <= 1) return array;
    bubbleSort(array, animations);
    return animations;
}

function bubbleSort(array, animations) {
    
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < array.length - 1; i++) {
            animations.push([i, i + 1]);
            animations.push([i, i + 1]);
            if (array[i] > array[i + 1]) {
                swap(i, i + 1, array, animations);
                sorted = false;
            } else {
                animations.push([i, array[i]]);
                animations.push([i+1, array[i+1]]);
            }
        }
    }
}


function swap(i, j, array, animations) {
    animations.push([j, array[i]]);
    animations.push([i, array[j]]);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}


export {bubbleSortAnimations};