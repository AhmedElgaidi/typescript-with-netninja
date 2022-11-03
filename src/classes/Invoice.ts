export class Invoice {
    constructor(
      readonly client: string,
      private details: string,
      public amount: number
    ) {}
  
    // Create method
    format() {
      return `${this.client} owes ${this.amount} for ${this.details}`;
    }
  }