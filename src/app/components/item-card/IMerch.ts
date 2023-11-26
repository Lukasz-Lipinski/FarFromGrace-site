
export enum Category {
  Tshirt,
  Hat,
  Hoodie,
  Sweater,
}

export interface IMerch {
  name: string;
  price: number;
  img: string;
  description: string;
  category: Category;
}
