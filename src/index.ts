// class Sorter {
//   //collection is tha data we want to sort
//   collection: number[];

//   constructor(collection: number[]) {
//     this.collection = collection;
//   }
// }

class Sorter {
  //the method below 100% equivalent with the method above section commented!
  //constructor(public collection: number[]) {}
  constructor(public collection: number[] | string) {}

  //implementation of bubble sort
  //void, because nothing returned, all done inside is this.collection will be sorted
  sort(): void {
    const { length } = this.collection;

    let leftHand;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        //if collection is an array of numbers
        //TYPE GUARD
        if (this.collection instanceof Array) {
          //inside this IF BLOCK TypeScript allows us to access all methods & properties of Arrays
          //but outside it allows us to access only intersection set of Array & string
          if (this.collection[j] > this.collection[j + 1]) {
            leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }

        //if collection is a string, do this logic instead
        //~logic to compare and swap characters in a string
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 11, 0, 0]);
sorter.sort();
console.log(sorter.collection);
