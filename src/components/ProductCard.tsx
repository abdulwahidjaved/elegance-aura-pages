import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  scent: string;
  description: string;
  features: string[];
  index: number;
}

export function ProductCard({ 
  id, 
  name, 
  price, 
  originalPrice, 
  image, 
  rating, 
  reviews, 
  scent, 
  description,
  features,
  index 
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="luxury-card p-6 h-full flex flex-col relative overflow-hidden">
        {/* Product Image */}
        <div className="relative mb-4 overflow-hidden rounded-lg">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-64 object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex gap-2"
            >
              <Button 
                size="sm" 
                className="bg-gradient-luxury text-primary-foreground hover:bg-gradient-luxury/90 font-semibold shadow-lg"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsFavorite(!isFavorite)}
                className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
              >
                <Heart 
                  className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} 
                />
              </Button>
            </motion.div>
          </motion.div>

          {/* Discount Badge */}
          {originalPrice && (
            <div className="absolute top-4 left-4 bg-gradient-luxury text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
              -{Math.round(((originalPrice - price) / originalPrice) * 100)}%
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating) 
                    ? 'text-accent fill-current' 
                    : 'text-muted-foreground'
                }`}
              />
            ))}
            <span className="text-sm text-muted-foreground ml-2">
              ({reviews} reviews)
            </span>
          </div>

          <h3 className="text-lg font-semibold mb-2 group-hover:gradient-text transition-all">
            {name}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-2">
            {scent}
          </p>

          {/* Detailed Description */}
          <div className="mb-4 space-y-2">
            <p className="text-sm text-foreground/80 leading-relaxed">
              {description}
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="w-1 h-1 bg-accent rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-accent">
                ₹{price}
              </span>
              {originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  ₹{originalPrice}
                </span>
              )}
            </div>
          </div>

          {/* Prominent Add to Cart Button */}
          <Button 
            className="w-full bg-gradient-luxury text-primary-foreground hover:bg-gradient-luxury/90 font-semibold py-3 shadow-lg hover-glow"
            size="lg"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart - ₹{price}
          </Button>
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: isHovered ? 0.1 : 0, 
            scale: isHovered ? 1.2 : 0.8 
          }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-gradient-luxury rounded-lg pointer-events-none"
        />
      </div>
    </motion.div>
  );
}