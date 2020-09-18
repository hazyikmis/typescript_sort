// class Sorter {
//   //collection is tha data we want to sort
//   collection: number[];

//   constructor(collection: number[]) {
//     this.collection = collection;
//   }
// }

class Sorter {
  //the method below 100% equivalent with the method above section commented!
  constructor(public collection: number[]) {}

  //implementation of bubble sort
  //void, because nothing returned, all done inside is this.collection will be sorted
  sort(): void {
    const { length } = this.collection;

    let leftHand;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          leftHand = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHand;
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 11, 0, 0]);
sorter.sort();
console.log(sorter.collection);
