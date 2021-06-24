export class OrderProduct {
  constructor(
    readonly name: string, 
    readonly value: number, 
    readonly quantity: number
  ){};

  get total() {
    return this.quantity * this.value;
  }
}