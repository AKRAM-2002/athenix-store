
import ProductsView from "@/components/ProductsView";
import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/ui/Hero";
import SaleBanner from "@/components/ui/SaleBanner";
import { getCategories } from "@/sanity/lib/products/getAllCategories";
import { getProducts } from "@/sanity/lib/products/getAllProducts";
import { getActiveSale } from "@/sanity/lib/sales/getActiveSales";

export default async function Home() {
  // Fetch products from Sanity
  const products = await getProducts();
  const categories = await getCategories();
  console.log("Fetched Products:", products); // Debugging: Log the fetched products

  // Fetch active sale
  const sale = await getActiveSale();

  return (
    <div className="">
      <HeroSection />
      
      
      {/* Render all products */}
      <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100">
        <ProductsView products={products} categories={categories} />
      </div>

      {/* Render the sale banner if there's an active sale */}
      {sale && <SaleBanner sale={sale} />}

      <Footer/>
    </div>
  );
}