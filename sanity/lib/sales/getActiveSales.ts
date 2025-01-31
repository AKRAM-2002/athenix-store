// lib/sales.ts
import { defineQuery } from 'next-sanity';
import { sanityFetch } from '../live';

export async function getSales() {
  const ALL_SALES_QUERY = defineQuery(`
    *[
      _type == "sale"
    ] | order(_createdAt desc)
  `);

  try {
    const sales = await sanityFetch({
      query: ALL_SALES_QUERY,
    });
    return sales.data || [];
  } catch (error) {
    console.error("Error fetching sales", error);
    return [];
  }
}

export async function getActiveSale() {
  const ACTIVE_SALE_QUERY = defineQuery(`
    *[
      _type == "sale" && status == "active"
    ][0] {
      name,
      discountPercentage,
      couponCode,
      description,
      "bannerImageUrl": bannerImage.asset->url,
      validFrom,
      validUntil
    }
  `);

  try {
    const sale = await sanityFetch({
      query: ACTIVE_SALE_QUERY,
    });
    return sale.data || null;
  } catch (error) {
    console.error("Error fetching active sale", error);
    return null;
  }
}