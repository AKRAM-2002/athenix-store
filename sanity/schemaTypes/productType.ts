import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const productType = defineType({
    name: 'productType',
    title: 'productType',
    type: 'document',
    icon: TrolleyIcon,
    fields: [
        // Product Name
        defineField({
          name: 'name',
          title: 'Product Name',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
    
        // Product Slug (for URLs)
        defineField({
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: {
            source: 'name', // Automatically generate slug from the product name
            maxLength: 96,
          },
          validation: (Rule) => Rule.required(),
        }),
    
        // Product Price
        defineField({
          name: 'price',
          title: 'Price',
          type: 'number',
          validation: (Rule) => Rule.required().positive(),
        }),
    
        // Product Description
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
    
        // Product Images
        defineField({
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [
            defineField({
              name: 'image',
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
          ],
          validation: (Rule) => Rule.required().min(1), // At least one image is required
        }),
    
        // Product Categories
        defineField({
          name: 'categories',
          title: 'Categories',
          type: 'array',
          of: [{
              type: 'reference',
              to: [{ type: 'category' }], // Reference to a "category" schema
            }
          ],
          validation: (Rule) => Rule.required().min(1), // At least one category is required
        }),
    
        // Product Stock
        defineField({
          name: 'stock',
          title: 'Stock',
          type: 'number',
          validation: (Rule) => Rule.required().integer().min(0), // Stock cannot be negative
        }),
    
        // Product Features
        defineField({
          name: 'features',
          title: 'Features',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'List key features of the product.',
        }),
    
       
    
        // Product Published At
        defineField({
          name: 'publishedAt',
          title: 'Published At',
          type: 'datetime',
          description: 'Date when the product was published.',
        }),
      ],
      // Preview Configuration
        preview: {
            select: {
                title: 'name',
                media: 'images.0', // Use the first image as the preview media
                price: 'price',
                stock: 'stock',
            },
            prepare(select) {
            const { title, media, price, stock } = select;
            return {
                title,
                media,
                subtitle: `$${price} | Stock: ${stock}`,
            };
            },
        },

});