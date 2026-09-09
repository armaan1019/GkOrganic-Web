import { supabase } from "@/lib/supabase";
import type { Product, Category } from "@/lib/types";

export type ProductWithImages = Product & {
  image: string | null;
  imageCount: number;
  categoryName: string;
};

export async function getProducts(): Promise<ProductWithImages[]> {
  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      product_images (
        image_url,
        display_order
      ),
      categories (
        name
      )
    `)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching products:", error);
    throw error;
  }

  return (data ?? []).map((product) => {
    const images = [...(product.product_images ?? [])].sort(
      (a, b) => a.display_order - b.display_order
    );

    return {
      ...product,
      image: images[0]?.image_url ?? null,
      imageCount: images.length,
      categoryName: product.categories?.name ?? "Uncategorized",
    };
  });
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

export async function uploadProductImages(
  productId: string,
  files: File[]
) {
  const imageRows = [];

  for (let index = 0; index < files.length; index++) {
    const file = files[index];

    const extension = file.name.split(".").pop()?.toLowerCase() || "jpg";
    const fileName = `${crypto.randomUUID()}.${extension}`;
    const filePath = `${productId}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("product-images")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (uploadError) {
      throw uploadError;
    }

    const { data: publicUrlData } = supabase.storage
      .from("product-images")
      .getPublicUrl(filePath);

    imageRows.push({
      product_id: productId,
      image_url: publicUrlData.publicUrl,
      display_order: index,
    });
  }

  if (imageRows.length === 0) {
    return [];
  }

  const { data, error } = await supabase
    .from("product_images")
    .insert(imageRows)
    .select();

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