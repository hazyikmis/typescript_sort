"use strict";
//import { NumbersCollection } from './NumbersCollection';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }
//NORMALLY WE SHOULD NOT INSTANTIATE NEW OBJECTS FROM THIS CLASS
//CHECK index.ts: const sorter = new Sorter(charsCollection); !!! SHOULD NOT BE!!!
//THIS SHOULD BE AN ABSTRACT CLASS
//NO constructor SHOULD BE DEFINED AND sort, length, compare, swap METHODS SHOULD BE DEFINED HERE IN THIS CLASS
//CHECK THE IMAGEs zzz_info/02_abstract... 03_abstract
/*
export class Sorter {
  //constructor(public collection: NumbersCollection) {}
  constructor(public collection: Sortable) {}

  //implementation of bubble sort
  //void, because nothing returned, all done inside is this.collection will be sorted
  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
*/
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
