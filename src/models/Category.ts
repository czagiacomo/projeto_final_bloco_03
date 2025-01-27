import Product from "./Product";

export default interface Category {
  id: number;
  categoryName: string;
  product?: Product | null;
}