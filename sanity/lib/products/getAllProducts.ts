
import { defineQuery } from 'next-sanity';
import { sanityFetch } from '../live';

export async function getProducts() {
  const ALL_PRODUCTS_QUERY = defineQuery(`
    *[
      _type == "productType"
      
      ] | order(_createdAt desc) 
      `);
  
  try {
    const products = await sanityFetch({
      query: ALL_PRODUCTS_QUERY,
    });
    return products.data || [];
  } catch (error) {
    console.error("Error fetching all products",error);
    return [];
  }
}