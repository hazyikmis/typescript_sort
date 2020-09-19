import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharsCollection } from './CharsCollection';
import { LinkedList } from './LinkedList';

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

/*
const linkedList = new LinkedList();
linkedList.add(300);
linkedList.add(-50);
linkedList.add(0);
linkedList.add(300);
linkedList.add(-100);
linkedList.add(10);

const sorter = new Sorter(linkedList);
sorter.sort();
//console.log(sorter.collection);
linkedList.print();
*/

//AFTER CHANGING THE "Sorter" CLASS TO ABSTRACT CLASS:

const numbersCollection = new NumbersCollection([10, 3, -5, 11, 0, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charsCollection = new CharsCollection('XwaaqTOghEeZsDFb');
charsCollection.sort();
console.log(charsCollection.data);

const linkedList = new LinkedList();
linkedList.add(300);
linkedList.add(-50);
linkedList.add(0);
linkedList.add(300);
linkedList.add(-100);
linkedList.add(10);
linkedList.sort();
linkedList.print();
