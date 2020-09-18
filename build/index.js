"use strict";
// class Sorter {
//   //collection is tha data we want to sort
//   collection: number[];
//   constructor(collection: number[]) {
//     this.collection = collection;
//   }
// }
var Sorter = /** @class */ (function () {
    //the method below 100% equivalent with the method above section commented!
    function Sorter(collection) {
        this.collection = collection;
    }
    //implementation of bubble sort
    //void, because nothing returned, all done inside is this.collection will be sorted
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        var leftHand;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    leftHand = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftHand;
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([10, 3, -5, 11, 0, 0]);
sorter.sort();
console.log(sorter.collection);
