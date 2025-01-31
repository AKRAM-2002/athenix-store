
import { Category, ProductType } from '@/sanity.types';
import ProductGrid from './ProductGrid';

// Define the props interface
interface ProductsViewProps {
  products: ProductType[];
  categories: Category[];
}

export default function ProductsView ({ products, categories}: ProductsViewProps)  {
  return (
    <div className='flex flex-col'>

     {/* categories */}
      <div>
        {/* <CategorySelectorComponent categories={categories}/> */}
      </div>


     {/* products */}
      <div className="flex-1">
        <div >
          <ProductGrid products={products}/> 
          <hr className="w-1/2 sm:w-3/4" />
        </div>
      </div>

    </div>
  );
};

