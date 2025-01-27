
export default interface Product {
    id: number;
    productName: string;
    price: number;
    category: Product | null;
  }