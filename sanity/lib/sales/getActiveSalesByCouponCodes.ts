import { defineQuery } from "next-sanity";
import { CouponCode } from "./couponCodes";
import { sanityFetch } from "../live";


export const getActiveSalesByCouponCodes = async (couponCode: CouponCode) => {
    const ACTIVE_SALE_BY_COUPON_QUERY = defineQuery(`
        *[_type == "sale" 
            && status == "active" 
            && couponCode == $couponCode
            
            ] | order(validFrom desc)[0] 
        `);

    try {
        const sale = await sanityFetch({
            query: ACTIVE_SALE_BY_COUPON_QUERY,
            params: {
                couponCode,
            }
        });
        return sale ? sale.data : null;
    } catch (error) {
        console.error("Error fetching active sale", error);
        return null;
    }
}