import Category from "./Category";

export default interface Product {
    id: number;
    productName: string;
    price: number;
    category: Category | null;
  }