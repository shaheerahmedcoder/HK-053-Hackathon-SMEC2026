import { useState } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import ProductCard from "@/components/ProductCard";
import { searchProducts, Product } from "@/data/mockProducts";
import { Loader2, ShoppingBag, BarChart3, Shield } from "lucide-react";

const Index = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setHasSearched(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const results = searchProducts(query);
    setProducts(results);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Compare prices across stores
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Find the best deals on products from multiple e-commerce platforms in one search.
          </p>
          
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
          
          <p className="text-sm text-muted-foreground mt-4">
            Try searching for headphones, laptop, watch, or any product
          </p>
        </div>
      </section>

      {/* Results Section */}
      {hasSearched && (
        <section className="pb-16 px-4">
          <div className="container mx-auto">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="w-8 h-8 text-primary animate-spin mb-4" />
                <p className="text-muted-foreground">Searching across stores...</p>
              </div>
            ) : products.length > 0 ? (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-foreground">
                    {products.length} {products.length === 1 ? 'result' : 'results'} found
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Comparing prices from 3 stores
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {products.map(product => (
                    <ProductCard
                      key={product.id}
                      name={product.name}
                      image={product.image}
                      sources={product.sources}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No products found. Try a different search.</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Features Section - shown when no search yet */}
      {!hasSearched && (
        <section className="py-16 px-4 border-t border-border">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="font-medium text-foreground mb-2">Multiple Stores</h3>
                <p className="text-sm text-muted-foreground">
                  Compare prices from TechMart, ElectroHub, and GadgetZone simultaneously
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="font-medium text-foreground mb-2">Best Price First</h3>
                <p className="text-sm text-muted-foreground">
                  Results are automatically sorted to show you the lowest price at the top
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="font-medium text-foreground mb-2">Real Savings</h3>
                <p className="text-sm text-muted-foreground">
                  See exactly how much you can save by choosing the best deal
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 SMEC. Smart E-Commerce Comparison.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
