"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
var NumbersCollection = /** @class */ (function () {
    // data: number[];
    // constructor(data: number[]) {
    //   this.data = data;²
    // }
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        //length(): number {
        //if defined above, then it should be called like xxx.length()
        //but if defined like below then it can be called as xxx.length
        //"get" keyword helps us to define methods as properties
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    //Actually we do not need 2 indexes, in bubble sort, comparison always done with the next neighbor
    NumbersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    NumbersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
