export const COUPON_CODES = {
    BFRIDAY: "BFRIDAY",
    ATHENIX2025: "ATHENIX2025",
    ATHENIX2025OFF: "ATHENIX2025OFF",
    ATHENIX2025OFF2: "ATHENIX2025OFF2",
} as const;

export type CouponCode = keyof typeof COUPON_CODES;