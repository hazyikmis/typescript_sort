class Sorter {
  constructor(public collection: /* TODO Fix Me */) {}

  //implementation of bubble sort
  //void, because nothing returned, all done inside is this.collection will be sorted
  sort(): void {
    const { length } = this.collection;

    let leftHand;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
          //inside this IF BLOCK TypeScript allows us to access all methods & properties of Arrays
          //but outside it allows us to access only intersection set of Array & string
          if (this.collection[j] > this.collection[j + 1]) {
            leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
      }
    }
  }
}
