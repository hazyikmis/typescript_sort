"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var LinkedList_1 = require("./LinkedList");
/*
const numbersCollection = new NumbersCollection([10, 3, -5, 11, 0, 0]);

const sorter = new Sorter(numbersCollection);
sorter.sort();
//console.log(sorter.collection);
console.log(numbersCollection.data);
*/
/*
const charsCollection = new CharsCollection('XwaaqTOghEeZsDFb');

const sorter = new Sorter(charsCollection);
sorter.sort();
//console.log(sorter.collection);
console.log(charsCollection.data);
*/
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(300);
linkedList.add(-50);
linkedList.add(0);
linkedList.add(300);
linkedList.add(-100);
linkedList.add(10);
var sorter = new Sorter_1.Sorter(linkedList);
sorter.sort();
//console.log(sorter.collection);
linkedList.print();
