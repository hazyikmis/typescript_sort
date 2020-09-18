export class NumbersCollection {
  // data: number[];

  // constructor(data: number[]) {
  //   this.data = data;²
  // }
  constructor(public data: number[]) {}

  //length(): number {
  //if defined above, then it should be called like xxx.length()
  //but if defined like below then it can be called as xxx.length
  //"get" keyword helps us to define methods as properties
  get length(): number {
    return this.data.length;
  }

  //Actually we do not need 2 indexes, in bubble sort, comparison always done with the next neighbor
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
