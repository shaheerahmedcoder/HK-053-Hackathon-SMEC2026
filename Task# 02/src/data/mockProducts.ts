export interface PriceSource {
  store: string;
  price: number;
  url: string;
  inStock: boolean;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  sources: PriceSource[];
}

const productImages: Record<string, string> = {
  headphones: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
  laptop: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
  watch: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
  camera: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop",
  phone: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
  speaker: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
  keyboard: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop",
  mouse: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
};

const stores = [
  { name: "TechMart", baseMultiplier: 1 },
  { name: "ElectroHub", baseMultiplier: 1.08 },
  { name: "GadgetZone", baseMultiplier: 1.15 },
];

const generatePrice = (base: number, multiplier: number): number => {
  const variance = (Math.random() - 0.5) * 0.1;
  return Math.round((base * multiplier * (1 + variance)) * 100) / 100;
};

export const searchProducts = (query: string): Product[] => {
  const normalizedQuery = query.toLowerCase();
  
  const productTemplates = [
    { keyword: "headphone", name: "Premium Wireless Headphones", basePrice: 149, imageKey: "headphones" },
    { keyword: "laptop", name: "Ultra-thin Laptop 14\"", basePrice: 899, imageKey: "laptop" },
    { keyword: "watch", name: "Smart Watch Series 5", basePrice: 299, imageKey: "watch" },
    { keyword: "camera", name: "Mirrorless Digital Camera", basePrice: 1199, imageKey: "camera" },
    { keyword: "phone", name: "Flagship Smartphone Pro", basePrice: 999, imageKey: "phone" },
    { keyword: "speaker", name: "Portable Bluetooth Speaker", basePrice: 79, imageKey: "speaker" },
    { keyword: "keyboard", name: "Mechanical Gaming Keyboard", basePrice: 129, imageKey: "keyboard" },
    { keyword: "mouse", name: "Ergonomic Wireless Mouse", basePrice: 59, imageKey: "mouse" },
  ];

  // Find matching products or return sample products
  let matchedProducts = productTemplates.filter(p => 
    p.keyword.includes(normalizedQuery) || 
    p.name.toLowerCase().includes(normalizedQuery)
  );

  // If no matches, return first 4 products as sample results
  if (matchedProducts.length === 0) {
    matchedProducts = productTemplates.slice(0, 4);
  }

  return matchedProducts.map((template, index) => ({
    id: `product-${index}-${Date.now()}`,
    name: template.name,
    image: productImages[template.imageKey],
    sources: stores.map(store => ({
      store: store.name,
      price: generatePrice(template.basePrice, store.baseMultiplier),
      url: `https://example.com/${store.name.toLowerCase()}`,
      inStock: Math.random() > 0.1,
    })),
  }));
};
