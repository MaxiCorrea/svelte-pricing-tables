export interface IItem {
  text: string;
}

export class Item {
  text: string;
  constructor(args: IItem) {
    this.text = args.text;
  }
}
