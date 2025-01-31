import { defineArrayMember, defineField, defineType } from 'sanity';
import { BasketIcon } from '@sanity/icons'; // Icon for orders

export const orderType = defineType({
  name: 'order',
  title: 'Order',
  type: 'document',
  icon: BasketIcon,
  fields: [
    // Order Number
    defineField({
      name: 'orderNumber',
      title: 'Order Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    // Stripe Checkout Session ID
    defineField({
      name: 'stripeCheckoutSessionId',
      title: 'Stripe Checkout Session ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    // Stripe Customer ID
    defineField({
      name: 'stripeCustomerId',
      title: 'Stripe Customer ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    // Customer Name
    defineField({
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    // Clerk User ID
    defineField({
      name: 'clerkUserId',
      title: 'Clerk User ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    // Customer Email
    defineField({
      name: 'email',
      title: 'Customer Email',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    // Stripe Payment Intent ID
    defineField({
      name: 'stripePaymentIntentId',
      title: 'Stripe Payment Intent ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    // Products in the Order
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'productItem',
          fields: [
            // Product Reference
            defineField({
              name: 'product',
              title: 'Product Bought',
              type: 'reference',
              to: [{ type: 'productType' }], // Reference to the "productType" schema
              validation: (Rule) => Rule.required(),
            }),
            // Quantity
            defineField({
              name: 'quantity',
              title: 'Quantity Purchased',
              type: 'number',
              validation: (Rule) => Rule.required().integer().min(1), // Quantity must be at least 1
            }),
            // Image (optional, if needed for preview)
            defineField({
              name: 'image',
              title: 'Product Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
          ],
          preview: {
            select: {
              product: 'product.name',
              quantity: 'quantity',
              price: 'product.price',
              image: 'product.images.0', // Use the first image from the product
            },
            prepare(selection) {
              const { product, quantity, price, image } = selection;
              return {
                title: `${product}`,
                subtitle: `${quantity} x $${price}`,
                media: image,
              };
            },
          },
        }),
      ],
      validation: (Rule) => Rule.required().min(1), // At least one product is required
    }),

    // Total Price of the Order
    defineField({
      name: 'totalPrice',
      title: 'Total Price',
      type: 'number',
      validation: (Rule) => Rule.required().min(0), // Total price must be positive
    }),

    // Currency
    defineField({
      name: 'currency',
      title: 'Currency',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    // Amount Discount
    defineField({
      name: 'amountDiscount',
      title: 'Amount Discount',
      type: 'number',
      validation: (Rule) => Rule.min(0), // Discount cannot be negative
    }),

    // Order Status
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Paid', value: 'paid' },
          { title: 'Shipped', value: 'shipped' },
          { title: 'Delivered', value: 'delivered' },
          { title: 'Cancelled', value: 'cancelled' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    // Order Date
    defineField({
      name: 'orderDate',
      title: 'Order Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
  ],

  // Preview Configuration
  preview: {
    select: {
      user: 'customerName',
      totalPrice: 'totalPrice',
      orderId: 'orderNumber',
      email: 'email',
      currency: 'currency',
    },
    prepare(selection) {
      const { user, totalPrice, orderId, email, currency } = selection;
      const orderIdSnippet = orderId ? `${orderId.slice(0, 5)}...${orderId.slice(-5)}` : 'N/A';
      return {
        title: `${user} #${orderIdSnippet}`,
        subtitle: `${totalPrice} ${currency} | ${email}`,
        media: BasketIcon, // Use the BasketIcon for the preview
      };
    },
  },
});