"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, CheckCircle } from "lucide-react";
import type { Product, ProductModel } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ProductCardProps = {
  product: Product;
  onExpand: (product: Product) => void;
};

export function ProductCard({ product, onExpand }: ProductCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === product.imageId);

  return (
    <motion.div
      layoutId={`product-card-${product.id}`}
      onClick={() => onExpand(product)}
      className="cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
    >
      <Card className="h-full w-full">
        <CardHeader className="p-0">
          <div className="relative w-full h-48">
            {image && (
              <Image
                src={image.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
                data-ai-hint={image.imageHint}
              />
            )}
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <product.icon className="w-6 h-6 text-primary" />
            <CardTitle className="text-xl font-bold">{product.name}</CardTitle>
          </div>
          <p className="text-muted-foreground">{product.tagline}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

type ExpandedProductCardProps = {
  product: Product;
  onCollapse: () => void;
};

export function ExpandedProductCard({ product, onCollapse }: ExpandedProductCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === product.imageId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        className="fixed inset-0 bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onCollapse}
      />
      <motion.div
        layoutId={`product-card-${product.id}`}
        className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-hidden"
      >
        <Card className="w-full h-full overflow-y-auto">
          <CardHeader className="p-0 relative">
            <div className="relative w-full h-64">
              {image && (
                <Image
                  src={image.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover"
                  data-ai-hint={image.imageHint}
                />
              )}
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
               <div className="absolute bottom-0 left-0 p-6">
                <div className="flex items-center gap-3">
                  <product.icon className="w-8 h-8 text-white" />
                  <CardTitle className="text-3xl font-bold text-white">{product.name}</CardTitle>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <Tabs defaultValue={product.models[0].id} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                {product.models.map((model) => (
                   <TabsTrigger key={model.id} value={model.id}>{model.name}</TabsTrigger>
                ))}
              </TabsList>
              {product.models.map((model) => (
                <TabsContent key={model.id} value={model.id} className="mt-6">
                  <ProductModelView model={model} />
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>
      <motion.button
        className="fixed top-4 right-4 z-20 text-white bg-black/30 rounded-full p-2"
        onClick={onCollapse}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transition: { delay: 0.2 } }}
        exit={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <X className="w-6 h-6" />
      </motion.button>
    </div>
  );
}

const ProductModelView = ({ model }: { model: ProductModel }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="font-semibold text-lg mb-4 text-primary">Key Features</h3>
        <ul className="space-y-3">
          {model.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-4 text-primary">Specifications</h3>
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          {Object.entries(model.specs).map(([key, value]) => (
            <li key={key} className="flex justify-between">
              <span className="font-medium text-foreground">{key}:</span>
              <span>{value}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <p className="text-3xl font-bold text-right">{model.price}</p>
          <p className="text-muted-foreground text-right text-sm">Starting from</p>
          <Button size="lg" className="w-full mt-2">
            Request Information
          </Button>
        </div>
      </div>
    </div>
  );
};
