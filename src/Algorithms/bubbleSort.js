const bubbleSortAnimations = function(array) {
    console.log(array);
    const animations = [];
    if (array.length <= 1) return array;
    let referenceArray = array.slice();
    bubbleSort(array, animations, referenceArray);
    return animations;
}

function bubbleSort(array, animations, referenceArray) {
    
    let sorted = false;
    let counter = 0;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < array.length - 1; i++) {
            animations.push([i, i + 1]);
            animations.push([i, i + 1]);
            if (array[i] > array[i + 1]) {
                swap(i, i + 1, array, animations, referenceArray);
                sorted = false;
            } else {
                animations.push([i, array[i]]);
                animations.push([i+1, array[i+1]]);
            }
            counter++;
        }
    }
    
    console.log(array);
}


function swap(i, j, array, animations, referenceArray) {
    animations.push([j, array[i]]);
    animations.push([i, array[j]]);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}


export {bubbleSortAnimations};