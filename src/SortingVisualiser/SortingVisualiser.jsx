import React from "react";
import { mergeSortAnimations } from "../Algorithms/mergeSort";
import { bubbleSortAnimations } from "../Algorithms/bubbleSort";
import { quickSortAnimations } from "../Algorithms/quickSort";
import { heapSortAnimations } from "../Algorithms/heapSort";
import { insertionSortAnimations } from "../Algorithms/insertionSort";
import { selectionSortAnimations } from "../Algorithms/selectionSort";

import "./SortingVisualiser.css";

export default class SortingVisualiser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            running: false
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    componentDidUpdate() {
        this.setBarSize();
    }

    resetArray() {
        if (this.state.running) return;
        let arraySize = Math.floor(Math.random() * (250 - 10 + 1) + 10);

        let array = [];

        for (let i = 0; i < arraySize; i++) {
            array.push(Math.floor(Math.random() * (500 - 10 + 1) + 10));
        }
        
        this.setState({array, running: false});
    }

    setBarSize() {
        var elements = document.getElementsByClassName("array-block");
        let blockSize = (2 / (elements.length / 25));
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.width = `${blockSize}em`;
        }

        for (let i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = 'black';
        }

    }

    mergeSort() {
        const animations = mergeSortAnimations(this.state.array);

        let speed = (1 / (animations.length)) * 25000;

        for (let i = 0; i <= animations.length; i++) {
            const elements = document.getElementsByClassName("array-block");
            let isColourChange = i % 3 !== 2;

            if (isColourChange && i !== animations.length) {
                let [firstBar, secondBar] = animations[i];
                let firstBarStyle = elements[firstBar].style;
                let secondBarStyle = elements[secondBar].style;

                const colour = i % 3 === 0 ? '#bfbfbf' : 'black';
                
                setTimeout(() => {
                    firstBarStyle.backgroundColor = colour;
                    secondBarStyle.backgroundColor = colour;
                    document.getElementById("visualise").disabled = true;
                    document.getElementById("reset").disabled = true;
                }, i * speed);
            } else if (i !== animations.length) {
                setTimeout(() => {
                    let [firstBar, newHeight] = animations[i];
                    let firstBarStyle = elements[firstBar].style;
                    firstBarStyle.height = `${newHeight}px`;
                    document.getElementById("visualise").disabled = true;
                    document.getElementById("reset").disabled = true;
                }, i * speed);
            }

            if (i === animations.length) {
                setTimeout(() => {
                    for (let i = 0; i < elements.length; i++) {
                        elements[i].style.backgroundColor = '#3bba9c';
                    }
                    document.getElementById("visualise").disabled = false;
                    document.getElementById("reset").disabled = false;
                }, i * speed);
            }
        }
    }

    bubbleSort() {
        const animations = bubbleSortAnimations(this.state.array);

        let speed = (1 / (animations.length)) * 25000;

        for (let i = 0; i <= animations.length; i++) {
            const elements = document.getElementsByClassName("array-block");
            let isColourChange = false;

            if (i % 4 === 0 || i % 4 === 1) {
                isColourChange = true;
            }

            if (isColourChange && i !== animations.length) {
                let [firstBar, secondBar] = animations[i];
                let firstBarStyle = elements[firstBar].style;
                let secondBarStyle = elements[secondBar].style;

                let colour = i % 3 === 0 ? '#bfbfbf' : 'black';

                if (i % 4 === 0) {
                    colour = '#bfbfbf';
                } else {
                    colour = 'black';
                }
                
                setTimeout(() => {
                    firstBarStyle.backgroundColor = colour;
                    secondBarStyle.backgroundColor = colour;
                    document.getElementById("visualise").disabled = true;
                    document.getElementById("reset").disabled = true;
                }, i * speed);
            } else if (i !== animations.length) {
                setTimeout(() => {
                    let [firstBar, newHeight] = animations[i];
                    let firstBarStyle = elements[firstBar].style;
                    firstBarStyle.height = `${newHeight}px`;
                    document.getElementById("visualise").disabled = true;
                    document.getElementById("reset").disabled = true;
                }, i * speed);
            }

            if (i === animations.length) {
                setTimeout(() => {
                    for (let i = 0; i < elements.length; i++) {
                        elements[i].style.backgroundColor = '#3bba9c';
                        document.getElementById("visualise").disabled = false;
                        document.getElementById("reset").disabled = false;
                    }
                }, i * speed);
            }
        }
    }

    quickSort() {
        const animations = quickSortAnimations(this.state.array);

        let speed = (1 / (animations.length)) * 25000;

        for (let i = 0; i <= animations.length; i++) {
            const elements = document.getElementsByClassName("array-block");
            let isColourChange = false;

            if (i % 4 === 0 || i % 4 === 1) {
                isColourChange = true;
            }

            if (isColourChange && i !== animations.length) {
                let [firstBar, secondBar] = animations[i];
                let firstBarStyle = elements[firstBar].style;
                let secondBarStyle = elements[secondBar].style;

                let colour = i % 3 === 0 ? '#bfbfbf' : 'black';

                if (i % 4 === 0) {
                    colour = '#bfbfbf';
                } else {
                    colour = 'black';
                }
                
                setTimeout(() => {
                    firstBarStyle.backgroundColor = colour;
                    secondBarStyle.backgroundColor = colour;
                    document.getElementById("visualise").disabled = true;
                    document.getElementById("reset").disabled = true;
                }, i * speed);
            } else if (i !== animations.length) {
                setTimeout(() => {
                    let [firstBar, newHeight] = animations[i];
                    let firstBarStyle = elements[firstBar].style;
                    firstBarStyle.height = `${newHeight}px`;
                    document.getElementById("visualise").disabled = true;
                    document.getElementById("reset").disabled = true;
                }, i * speed);
            }

            if (i === animations.length) {
                setTimeout(() => {
                    for (let i = 0; i < elements.length; i++) {
                        elements[i].style.backgroundColor = '#3bba9c';
                        document.getElementById("visualise").disabled = false;
                    document.getElementById("reset").disabled = false;
                    }
                }, i * speed);
            }
        }
    }

    heapSort() {
        const animations = heapSortAnimations(this.state.array);

        let speed = (1 / (animations.length)) * 25000;

        for (let i = 0; i <= animations.length; i++) {
            const elements = document.getElementsByClassName("array-block");
            let isColourChange = false;

            if (i % 4 === 0 || i % 4 === 1) {
                isColourChange = true;
            }

            if (isColourChange && i !== animations.length) {
                let [firstBar, secondBar] = animations[i];
                let firstBarStyle = elements[firstBar].style;
                let secondBarStyle = elements[secondBar].style;

                let colour = i % 3 === 0 ? '#bfbfbf' : 'black';

                if (i % 4 === 0) {
                    colour = '#bfbfbf';
                } else {
                    colour = 'black';
                }
                
                setTimeout(() => {
                    firstBarStyle.backgroundColor = colour;
                    secondBarStyle.backgroundColor = colour;
                    document.getElementById("visualise").disabled = true;
                    document.getElementById("reset").disabled = true;
                }, i * speed);
            } else if (i !== animations.length) {
                setTimeout(() => {
                    let [firstBar, newHeight] = animations[i];
                    let firstBarStyle = elements[firstBar].style;
                    firstBarStyle.height = `${newHeight}px`;
                    document.getElementById("visualise").disabled = true;
                    document.getElementById("reset").disabled = true;
                }, i * speed);
            }

            if (i === animations.length) {
                setTimeout(() => {
                    for (let i = 0; i < elements.length; i++) {
                        elements[i].style.backgroundColor = '#3bba9c';
                        document.getElementById("visualise").disabled = false;
                        document.getElementById("reset").disabled = false;
                    }
                }, i * speed);
            }
        }
    }

    insertionSort() {
        const animations = insertionSortAnimations(this.state.array);

        let speed = (1 / (animations.length)) * 25000;

        for (let i = 0; i <= animations.length; i++) {
            const elements = document.getElementsByClassName("array-block");
            let isColourChange = false;

            if (i % 4 === 0 || i % 4 === 1) {
                isColourChange = true;
            }

            if (isColourChange && i !== animations.length) {
                let [firstBar, secondBar] = animations[i];
                let firstBarStyle = elements[firstBar].style;
                let secondBarStyle = elements[secondBar].style;

                let colour = i % 3 === 0 ? '#bfbfbf' : 'black';

                if (i % 4 === 0) {
                    colour = '#bfbfbf';
                } else {
                    colour = 'black';
                }

                setTimeout(() => {
                    firstBarStyle.backgroundColor = colour;
                    secondBarStyle.backgroundColor = colour;
                    document.getElementById("visualise").disabled = true;
                    document.getElementById("reset").disabled = true;
                }, i * speed);
            } else if (i !== animations.length) {
                setTimeout(() => {
                    let [firstBar, newHeight] = animations[i];
                    let firstBarStyle = elements[firstBar].style;
                    firstBarStyle.height = `${newHeight}px`;
                    document.getElementById("visualise").disabled = true;
                    document.getElementById("reset").disabled = true;
                }, i * speed);
            }

            if (i === animations.length) {
                setTimeout(() => {
                    for (let i = 0; i < elements.length; i++) {
                        elements[i].style.backgroundColor = '#3bba9c';
                        document.getElementById("visualise").disabled = false;
                        document.getElementById("reset").disabled = false;
                    }
                }, i * speed);
            }
        }
    }

    selectionSort() {
        const animations = selectionSortAnimations(this.state.array);

        let speed = (1 / (animations.length)) * 25000;

        for (let i = 0; i <= animations.length; i++) {
            const elements = document.getElementsByClassName("array-block");
            let isColourChange = false;

            if (i % 4 === 0 || i % 4 === 1) {
                isColourChange = true;
            }

            if (isColourChange && i !== animations.length) {
                let [firstBar, secondBar] = animations[i];
                let firstBarStyle = elements[firstBar].style;
                let secondBarStyle = elements[secondBar].style;

                let colour = i % 3 === 0 ? '#bfbfbf' : 'black';

                if (i % 4 === 0) {
                    colour = '#bfbfbf';
                } else {
                    colour = 'black';
                }

                setTimeout(() => {
                    firstBarStyle.backgroundColor = colour;
                    secondBarStyle.backgroundColor = colour;
                    document.getElementById("visualise").disabled = true;
                    document.getElementById("reset").disabled = true;
                }, i * speed);
            } else if (i !== animations.length) {
                setTimeout(() => {
                    let [firstBar, newHeight] = animations[i];
                    let firstBarStyle = elements[firstBar].style;
                    firstBarStyle.height = `${newHeight}px`;
                    document.getElementById("visualise").disabled = true;
                    document.getElementById("reset").disabled = true;
                }, i * speed);
            }

            if (i === animations.length) {
                setTimeout(() => {
                    for (let i = 0; i < elements.length; i++) {
                        elements[i].style.backgroundColor = '#3bba9c';
                        document.getElementById("visualise").disabled = false;
                        document.getElementById("reset").disabled = false;
                    }
                }, i * speed);
            }
        }
    }

    visualise() {
        if (document.getElementById("merge").checked === true) {
            this.mergeSort();
        } else if (document.getElementById("bubble").checked === true) {
            this.bubbleSort();
        } else if (document.getElementById("quick").checked === true) {
            this.quickSort();
        } else if (document.getElementById("heap").checked === true) {
            this.heapSort(); 
        } else if (document.getElementById("insertion").checked === true) {
            this.insertionSort(); 
        } else if (document.getElementById("selection").checked === true) {
            this.selectionSort(); 
        } else {
            alert("Select an Algorithm");
        }
    }

    render() {
        const {array} = this.state;

        return (
            <>
            <div className="navbar navbar-default">
            <div class="btn-group btn-group-toggle" data-toggle="buttons" id="algoType">
            <label class="btn btn-primary">
            <input type="radio" name="algorithm" id="merge" autocomplete="off"/> Merge Sort
            </label>
            <label class="btn btn-primary">
            <input type="radio" name="algorithm" id="bubble" autocomplete="off"/> Bubble Sort
            </label>
            <label class="btn btn-primary">
            <input type="radio" name="algorithm" id="quick" autocomplete="off"/> Quick Sort 
            </label>
            <label class="btn btn-primary">
            <input type="radio" name="algorithm" id="heap" autocomplete="off"/> Heap Sort
            </label>
            <label class="btn btn-primary">
            <input type="radio" name="algorithm" id="insertion" autocomplete="off"/> Insertion Sort
            </label>
            <label class="btn btn-primary">
            <input type="radio" name="algorithm" id="selection" autocomplete="off"/> Selection Sort
            </label>
            </div>
            <button className="btn btn-primary" id="visualise" onClick={() => this.visualise()}>
            Visualise
            </button>
            <button className="btn btn-primary" id="reset" onClick={() => this.resetArray()}>
            Randomise Array
            </button>
            </div>
            <div className="flex-container">
                {array.map((value, index) => (
                    <div className="array-block" key={index} style={{background: 'black', height: `${value}px`,}}></div>
                ))}
            </div>
            </>
        )
    }
}