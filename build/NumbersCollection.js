"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
var Sorter_1 = require("./Sorter");
//export class NumbersCollection {
var NumbersCollection = /** @class */ (function (_super) {
    __extends(NumbersCollection, _super);
    // data: number[];
    // constructor(data: number[]) {
    //   this.data = data;
    // }
    //constructor(public data: number[]) {}
    function NumbersCollection(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
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
}(Sorter_1.Sorter));
exports.NumbersCollection = NumbersCollection;
