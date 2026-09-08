export type Product = {
  id: string;
  name: string;
  details: string | null;
  categoryId: string;
  price: number;
  quantity: number;
  isActive: boolean;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
}