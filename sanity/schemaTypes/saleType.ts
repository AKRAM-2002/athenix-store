import { defineField, defineType } from 'sanity';
import { TagIcon } from '@sanity/icons'; // Icon for sales

export const saleType = defineType({
  name: 'sale',
  title: 'Sale',
  type: 'document',
  icon: TagIcon,
  fields: [
    // Sale Name
    defineField({
      name: 'name',
      title: 'Sale Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    // Discount Percentage
    defineField({
      name: 'discountPercentage',
      title: 'Discount Percentage',
      type: 'number',
      validation: (Rule) => Rule.required().min(0).max(100), // Discount must be between 0% and 100%
    }),

    defineField({
        name: "couponCode",
        title: "Coupon Code",
        type: "string",
        validation: (Rule) => Rule.required(),
      }),

    defineField({
        name: "validFrom",
        title: "Valid From",
        type: "datetime",
        validation: (Rule) => Rule.required(),
      }),
        
    defineField({
        name: "validUntil",
        title: "Valid Until",
        type: "datetime",
        validation: (Rule) => Rule.required(),
      }),

    
    
    // Applicable Products
    // defineField({
    //   name: 'products',
    //   title: 'Applicable Products',
    //   type: 'array',
    //   of: [
    //     defineField({
    //       type: 'reference',
    //       to: [{ type: 'product' }], // Reference to a "product" schema
    //     }),
    //   ],
    //   validation: (Rule) => Rule.required().min(1), // At least one product is required
    // }),

    // Sale Description
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of the sale event.',
    }),

    // Sale Banner Image
    defineField({
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true, // Enable image cropping
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'Important for SEO and accessibility.',
        }),
      ],
    }),

    // Sale Status
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Upcoming', value: 'upcoming' },
          { title: 'Active', value: 'active' },
          { title: 'Expired', value: 'expired' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    // Revenue Generated (Optional)
    defineField({
      name: 'revenueGenerated',
      title: 'Revenue Generated',
      type: 'number',
      description: 'Total revenue generated during the sale (optional).',
    }),
  ],

  // Preview Configuration
  preview: {
    select: {
        title: 'name',
        media: 'bannerImage',
        discountPercentage: 'discountPercentage',
        couponCode: 'couponCode',
        isActive: 'status',
      },
      prepare(select) {
        const { title, media, discountPercentage, couponCode, isActive } = select;
        const discountPercentageSnippet = `${discountPercentage}%`;
        const status = isActive ? 'Active' : 'Expired';
        return {
          title: `${title} (${discountPercentageSnippet}) ${status}`,
          subtitle: couponCode,
          media,
        };
      },
  },
});