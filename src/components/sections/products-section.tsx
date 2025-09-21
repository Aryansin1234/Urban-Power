"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { products, type Product } from "@/lib/data";
import { ProductCard, ExpandedProductCard } from "@/components/product-card";

export default function ProductsSection() {
  const [expandedProduct, setExpandedProduct] = useState<Product | null>(null);

  const handleExpand = (product: Product) => {
    setExpandedProduct(product);
  };

  const handleCollapse = () => {
    setExpandedProduct(null);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
  };

  return (
    <motion.section 
      id="products" 
      className="py-20 sm:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" variants={sectionVariants}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-headline">Our Products</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Top-tier solutions for your energy independence.
          </p>
        </motion.div>

        <motion.div 
          className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          variants={sectionVariants}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onExpand={handleExpand} />
          ))}
        </motion.div>

        <AnimatePresence>
          {expandedProduct && (
            <ExpandedProductCard
              product={expandedProduct}
              onCollapse={handleCollapse}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
