import { supabase } from "@/lib/supabase";
import type { Product, Category } from "@/lib/types";

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching products:", error);
    throw error;
  }

  return data ?? [];
}

export async function addProduct(product: {
  name: string;
  details: string;
  categoryId: string;
  price: number;
  quantity: number;
  isActive: boolean;
}) {
  const { data, error } = await supabase
    .from("products")
    .insert({
      name: product.name,
      details: product.details || null,
      category_id: product.categoryId,
      price: product.price,
      quantity: product.quantity,
      is_active: product.isActive,
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function getCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from("categories")
    .select("id, name, slug")
    .order("name");

  if (error) {
    throw error;
  }

  return data;
}