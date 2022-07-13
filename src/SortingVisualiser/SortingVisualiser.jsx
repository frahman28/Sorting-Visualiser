import React from "react";
import { mergeSortAnimations } from "../Algorithms/mergeSort";
import { bubbleSortAnimations } from "../Algorithms/bubbleSort";
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
        let arraySize = Math.floor(Math.random() * (300 - 10 + 1) + 10);

        let array = [];

        for (let i = 0; i < arraySize; i++) {
            array.push(Math.floor(Math.random() * (500 - 10 + 1) + 10));
        }
        
        this.setState({array});
    }

    setBarSize() {
        var elements = document.getElementsByClassName("array-block");
        let blockSize = (1 / (elements.length / 300)) / 10;
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.width = `${blockSize}em`;
        }
    }

    mergeSort() {
        const animations = bubbleSortAnimations(this.state.array);

        for (let i = 0; i < animations.length; i++) {
            const elements = document.getElementsByClassName("array-block");
            let isColorChange = i % 3 !== 2;

            if (isColorChange) {
                let [firstBar, secondBar] = animations[i];
                let firstBarStyle = elements[firstBar].style;
                let secondBarStyle = elements[secondBar].style;

                const colour = i % 3 === 0 ? 'red' : 'lime';
                
                setTimeout(() => {
                    firstBarStyle.backgroundColor = colour;
                    secondBarStyle.backgroundColor = colour;
                }, i * 5);
            } else {
                setTimeout(() => {
                    let [firstBar, newHeight] = animations[i];
                    let firstBarStyle = elements[firstBar].style;
                    firstBarStyle.height = `${newHeight}px`;
                }, i * 5);
            }
        }
    }

    visualise() {
        if (document.getElementById("merge").checked === true) {
            this.mergeSort();
        } else if (document.getElementById("bubble").checked === true) {
            this.visualiseDfs();
        } else if (document.getElementById("quick").checked === true) {
            this.visualiseGreedy();
        } else if (document.getElementById("heap").checked === true) {
            this.visualiseDijkstra(); 
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
            </div>
            <button className="btn btn-primary" onClick={() => this.visualise()}>
            Visualise
            </button>
            <button className="btn btn-primary" onClick={() => this.resetArray()}>
            Randomise Array
            </button>
            </div>
            <div className="container">
                {array.map((value, index) => (
                    <div className="array-block" key={index} style={{background: 'lime', height: `${value}px`,}}></div>
                ))}
            </div>
            </>
        )
    }
}