"use strict";
//import { NumbersCollection } from './NumbersCollection';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    //constructor(public collection: NumbersCollection) {}
    function Sorter(collection) {
        this.collection = collection;
    }
    //implementation of bubble sort
    //void, because nothing returned, all done inside is this.collection will be sorted
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
