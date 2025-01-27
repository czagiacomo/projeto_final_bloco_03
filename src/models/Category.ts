
export default interface Category {
  id: number;
  categoryName: string;
  usuario: string;
  product: Category | null;
}