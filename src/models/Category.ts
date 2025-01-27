import Product from "./Product";

export default interface Category {
  id: string | undefined;
  categoryName: string;
  product?: Product | null;
}