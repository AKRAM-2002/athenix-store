// lib/categories.ts
import { defineQuery } from 'next-sanity';
import { sanityFetch } from '../live';

interface Category {
  _id: string;
  _type: string;
  name: string;
  _createdAt: string;
  // Add other category fields from your Sanity schema
}

export async function getCategories() {
  const ALL_CATEGORIES_QUERY = defineQuery(`
    *[
      _type == "category"
    ] | order(_createdAt desc)
  `);

  try {
    const categories = await sanityFetch({
      query: ALL_CATEGORIES_QUERY,
    });
    return categories.data || [];
  } catch (error) {
    console.error("Error fetching all categories", error);
    return [];
  }
}

// You might also want to export the Category interface
export type { Category };