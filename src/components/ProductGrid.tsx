import { useState } from "react";
import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, Grid, List } from "lucide-react";
import perfume1 from "@/assets/perfume-1.jpg";
import perfume2 from "@/assets/perfume-2.jpg";
import perfume3 from "@/assets/perfume-3.jpg";

const products = [
  {
    id: "1",
    name: "Midnight Elegance",
    price: 89,
    originalPrice: 120,
    image: perfume1,
    rating: 4.8,
    reviews: 234,
    scent: "A captivating blend of jasmine, vanilla, and sandalwood",
    category: "evening",
    brand: "Elegance"
  },
  {
    id: "2",
    name: "Golden Aurora",
    price: 95,
    image: perfume2,
    rating: 4.9,
    reviews: 189,
    scent: "Warm amber and rose petals with hints of bergamot",
    category: "luxury",
    brand: "Elegance"
  },
  {
    id: "3",
    name: "Urban Noir",
    price: 75,
    originalPrice: 95,
    image: perfume3,
    rating: 4.7,
    reviews: 156,
    scent: "Modern cedar and black pepper with fresh citrus notes",
    category: "casual",
    brand: "Elegance"
  },
  {
    id: "4",
    name: "Silk Whisper",
    price: 110,
    image: perfume1,
    rating: 4.9,
    reviews: 298,
    scent: "Delicate white florals with powdery musk undertones",
    category: "luxury",
    brand: "Elegance"
  },
  {
    id: "5",
    name: "Royal Oud",
    price: 150,
    image: perfume2,
    rating: 5.0,
    reviews: 67,
    scent: "Rare oud wood blended with saffron and precious spices",
    category: "premium",
    brand: "Elegance"
  },
  {
    id: "6",
    name: "Fresh Breeze",
    price: 65,
    image: perfume3,
    rating: 4.6,
    reviews: 421,
    scent: "Crisp ocean air with mint and light floral touches",
    category: "casual",
    brand: "Elegance"
  }
];

export function ProductGrid() {
  const [sortBy, setSortBy] = useState("featured");
  const [filterBy, setFilterBy] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProducts = products.filter(product => 
    filterBy === "all" || product.category === filterBy
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <section className="py-16 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Our Premium Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated selection of luxury fragrances, each one crafted to perfection
          </p>
        </motion.div>

        {/* Filters and Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-8"
        >
          <div className="flex flex-wrap gap-4">
            <Select value={filterBy} onValueChange={setFilterBy}>
              <SelectTrigger className="w-48 luxury-card border-0">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="luxury">Luxury</SelectItem>
                <SelectItem value="evening">Evening</SelectItem>
                <SelectItem value="casual">Casual</SelectItem>
                <SelectItem value="premium">Premium</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48 luxury-card border-0">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="name">Name A-Z</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("grid")}
              className="hover-glow"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("list")}
              className="hover-glow"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className={`grid gap-6 ${
            viewMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1 max-w-4xl mx-auto"
          }`}
        >
          {sortedProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              {...product}
              index={index}
            />
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg font-semibold luxury-card border-accent hover-glow"
          >
            Load More Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
}