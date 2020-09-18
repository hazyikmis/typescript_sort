"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharsCollection = void 0;
var CharsCollection = /** @class */ (function () {
    function CharsCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharsCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharsCollection.prototype.compare = function (leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    };
    CharsCollection.prototype.swap = function (leftIndex, rightIndex) {
        var chars = this.data.split('');
        var leftHand = chars[leftIndex];
        chars[leftIndex] = chars[rightIndex];
        chars[rightIndex] = leftHand;
        this.data = chars.join('');
    };
    return CharsCollection;
}());
exports.CharsCollection = CharsCollection;
