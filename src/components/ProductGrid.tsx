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
    price: 6500,
    originalPrice: 8500,
    image: perfume1,
    rating: 4.8,
    reviews: 234,
    scent: "A captivating blend of jasmine, vanilla, and sandalwood",
    description: "Indulge in the mysterious allure of Midnight Elegance, a sophisticated fragrance that embodies the essence of twilight romance. This enchanting perfume opens with fresh bergamot before revealing a heart of intoxicating jasmine and warm vanilla.",
    features: ["Long-lasting 8-12 hours", "50ml Eau de Parfum", "Luxurious glass bottle", "Perfect for evening wear"],
    category: "evening",
    brand: "Elegance"
  },
  {
    id: "2",
    name: "Golden Aurora",
    price: 7200,
    image: perfume2,
    rating: 4.9,
    reviews: 189,
    scent: "Warm amber and rose petals with hints of bergamot",
    description: "Experience the radiant beauty of dawn with Golden Aurora, a luminous fragrance that captures the first golden rays of sunlight. This exquisite blend combines precious amber with delicate rose petals, creating an aura of timeless elegance.",
    features: ["Premium ingredients", "All-day longevity", "Handcrafted bottle", "Suitable for all occasions"],
    category: "luxury",
    brand: "Elegance"
  },
  {
    id: "3",
    name: "Urban Noir",
    price: 5500,
    originalPrice: 7000,
    image: perfume3,
    rating: 4.7,
    reviews: 156,
    scent: "Modern cedar and black pepper with fresh citrus notes",
    description: "Embrace the dynamic energy of city life with Urban Noir, a contemporary fragrance designed for the modern individual. This bold composition features aromatic cedar and spicy black pepper, balanced with invigorating citrus accents.",
    features: ["Modern urban scent", "6-8 hours wear time", "Sleek packaging", "Perfect for daily wear"],
    category: "casual",
    brand: "Elegance"
  },
  {
    id: "4",
    name: "Silk Whisper",
    price: 8000,
    image: perfume1,
    rating: 4.9,
    reviews: 298,
    scent: "Delicate white florals with powdery musk undertones",
    description: "Discover the gentle sophistication of Silk Whisper, an ethereal fragrance that embodies pure femininity. This delicate composition features pristine white florals enhanced by soft, powdery musk that creates an irresistible aura of grace.",
    features: ["Delicate floral bouquet", "10+ hours longevity", "Elegant crystal bottle", "Ideal for special occasions"],
    category: "luxury",
    brand: "Elegance"
  },
  {
    id: "5",
    name: "Royal Oud",
    price: 12000,
    image: perfume2,
    rating: 5.0,
    reviews: 67,
    scent: "Rare oud wood blended with saffron and precious spices",
    description: "Immerse yourself in the opulent world of Royal Oud, a majestic fragrance featuring the finest oud wood sourced from ancient trees. Enhanced with precious saffron and exotic spices, this is the epitome of luxury and sophistication.",
    features: ["Rare oud ingredients", "Exceptional 12+ hour longevity", "Limited edition bottle", "Ultra-premium fragrance"],
    category: "premium",
    brand: "Elegance"
  },
  {
    id: "6",
    name: "Fresh Breeze",
    price: 4800,
    image: perfume3,
    rating: 4.6,
    reviews: 421,
    scent: "Crisp ocean air with mint and light floral touches",
    description: "Revitalize your senses with Fresh Breeze, an invigorating fragrance that captures the essence of a seaside morning. This refreshing blend combines crisp ocean air with cooling mint and delicate floral notes for an energizing experience.",
    features: ["Refreshing aquatic scent", "4-6 hours freshness", "Travel-friendly size", "Perfect for warm weather"],
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