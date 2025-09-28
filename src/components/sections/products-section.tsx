"use client";

import { useState, useEffect, useCallback, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { products, type Product, type ProductModel } from "@/lib/data";
import { useIsMobile } from "@/hooks/use-mobile";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
  hover: { y: -10, scale: 1.03, transition: { duration: 0.25, ease: "easeOut" } },
  tap: { scale: 0.97 },
};

const getEntityImage = (imageId?: string) => {
  if (!imageId) {
    return "/assets/product-fallback.png";
  }

  return `/assets/${imageId}.png`;
};

const getHighlightFeatures = (product: Product) => {
  const firstModelFeatures = product.models?.[0]?.features ?? [];

  return firstModelFeatures.slice(0, 3).map((feature) => {
    const enDashIndex = feature.indexOf("–");
    if (enDashIndex > -1) {
      return feature.slice(0, enDashIndex).trim();
    }

    const colonIndex = feature.indexOf(":");
    if (colonIndex > -1) {
      return feature.slice(0, colonIndex).trim();
    }

    return feature;
  });
};

export default function ProductsSection() {
  const isMobile = useIsMobile();
  const [expandedProduct, setExpandedProduct] = useState<Product | null>(null);
  const [expandedModel, setExpandedModel] = useState<ProductModel | null>(null);
  const [bodyScrollLocked, setBodyScrollLocked] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (expandedProduct && !bodyScrollLocked) {
      document.body.style.overflow = 'hidden';
      setBodyScrollLocked(true);
    } else if (!expandedProduct && bodyScrollLocked) {
      document.body.style.overflow = '';
      setBodyScrollLocked(false);
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [expandedProduct, bodyScrollLocked]);

  const handleExpand = (product: Product) => {
    setExpandedProduct(product);
    setExpandedModel(null);
  };

  const handleCollapse = () => {
    setExpandedProduct(null);
    setExpandedModel(null);
  };

  const handleModelToggle = (model: ProductModel) => {
    if (expandedModel?.id === model.id) {
      setExpandedModel(null);
    } else {
      setExpandedModel(model);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>, product: Product) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleExpand(product);
    }
  };
  
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && expandedProduct) {
        handleCollapse();
      }
    };
    
    document.addEventListener('keydown', handleEscapeKey as any);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey as any);
    };
  }, [expandedProduct]);

  return (
    <motion.section
      id="products"
      className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary/5 py-12 sm:py-16 md:py-20 lg:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-40 h-40 w-40 sm:h-64 sm:w-64 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-60 w-60 sm:h-96 sm:w-96 rounded-full bg-emerald-200/40 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="mx-auto mb-8 sm:mb-12 lg:mb-16 max-w-3xl text-center" variants={sectionVariants}>
          <span className="inline-flex items-center gap-1 sm:gap-2 rounded-full bg-primary/10 px-3 py-1 sm:px-4 sm:py-1 text-xs sm:text-sm font-semibold uppercase tracking-wide text-primary">
            Products
          </span>
          <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Elevate Every Watt With Smart Energy Solutions
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed text-gray-600">
            Explore modular products engineered for reliability, efficiency, and a seamless clean-energy transition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon;
            const highlightFeatures = getHighlightFeatures(product);
            const productImage = getEntityImage(product.imageId);

            return (
              <motion.article
                key={product.id}
                className="group relative flex cursor-pointer flex-col items-center gap-3 sm:gap-4 md:gap-5 overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/60 bg-white/80 p-4 sm:p-6 md:p-8 text-center shadow-lg backdrop-blur transition-shadow duration-300 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                whileTap="tap"
                variants={cardVariants}
                onClick={() => handleExpand(product)}
                onKeyDown={(event) => handleKeyDown(event, product)}
                onTouchStart={() => {}} /* Empty handler to enable hover states on touch devices */
                role="button"
                tabIndex={0}
                aria-label={`View ${product.name} models`}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 translate-y-10 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                />

                <div className="relative flex flex-col items-center gap-3 sm:gap-4 md:gap-5">
                  <span className="inline-flex items-center gap-1 sm:gap-2 rounded-full bg-primary/5 px-2 sm:px-3 md:px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                    <Icon className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden />
                    {product.name}
                  </span>

                  <div className="relative flex h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44 items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                    <img
                      src={productImage}
                      alt={product.name}
                      className="relative z-10 h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 object-contain drop-shadow-2xl"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                    {product.name}
                  </h3>

                  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 line-clamp-3 sm:line-clamp-none">
                    {product.tagline}
                  </p>

                  {highlightFeatures.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
                      {highlightFeatures.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center rounded-full border border-primary/20 bg-white px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium text-primary/80 shadow-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="mt-auto inline-flex items-center gap-1 sm:gap-2 rounded-full border border-primary/10 bg-primary/10 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-primary transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white"
                    onClick={(event) => {
                      event.stopPropagation();
                      handleExpand(product);
                    }}
                  >
                    View models
                    <span aria-hidden>→</span>
                  </motion.button>
                </div>
              </motion.article>
            );
          })}
        </div>

        <AnimatePresence>
          {expandedProduct && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 py-6 sm:py-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative w-full max-h-[80vh] sm:max-h-[85vh] md:max-h-[90vh] overflow-y-auto rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/40 bg-gradient-to-br from-white via-white to-primary/10 p-4 sm:p-6 md:p-8 shadow-xl sm:shadow-2xl max-w-[calc(100%-2rem)] sm:max-w-lg md:max-w-2xl lg:max-w-3xl"
                initial={{ scale: isMobile ? 1 : 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: isMobile ? 1 : 0.95, opacity: 0 }}
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'rgba(155, 155, 155, 0.5) transparent'
                }}
              >
                <button
                  aria-label="Close product details"
                  className="absolute right-3 top-3 sm:right-4 sm:top-4 inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-base sm:text-lg text-gray-500 transition hover:scale-105 hover:text-gray-800 z-10"
                  onClick={handleCollapse}
                >
                  ✕
                </button>

                {expandedModel ? (
                  <div className="space-y-4 sm:space-y-6">
                    <div className="space-y-1 sm:space-y-2 text-center md:text-left">
                      <p className="inline-flex items-center rounded-full bg-primary/10 px-2 sm:px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                        Model Details
                      </p>
                      <h4 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 break-words">
                        {expandedModel.name}
                      </h4>
                    </div>

                    <div className="grid gap-4 sm:gap-6">
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex flex-col items-center gap-3 rounded-xl sm:rounded-2xl border border-primary/10 bg-white/70 p-3 sm:p-4 text-center shadow-sm md:items-start md:text-left">
                          <img
                            src={getEntityImage(expandedModel.imageId)}
                            alt={expandedModel.name}
                            className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-xl sm:rounded-2xl object-cover"
                            loading="lazy"
                          />
                          <div className="space-y-1">
                            <h5 className="text-xs font-semibold uppercase tracking-wide text-primary">
                              Feature Highlights
                            </h5>
                            <ul className="mt-2 sm:mt-3 space-y-2 text-xs sm:text-sm leading-relaxed text-gray-700">
                              {expandedModel.features.map((feature, index) => (
                                <li key={index} className="rounded-lg bg-white/70 p-2 sm:p-3 shadow-sm">
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="w-full sm:w-auto mt-2 sm:mt-4 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-primary text-white font-bold text-base sm:text-lg shadow-lg hover:bg-primary-dark transition focus:outline-none focus:ring-2 focus:ring-primary/50"
                          onClick={() => {
                            handleCollapse();
                            setTimeout(() => {
                              const footer = document.getElementById('contact');
                              if (footer) {
                                footer.scrollIntoView({ behavior: 'smooth' });
                              }
                            }, 200);
                          }}
                          aria-label="Contact us to know more about this product"
                        >
                          Know More
                        </motion.button>
                      </div>

                      {Object.keys(expandedModel.specs).length > 0 && (
                        <div className="rounded-xl sm:rounded-2xl bg-white/70 p-3 sm:p-4 shadow-sm">
                          <h5 className="text-xs font-semibold uppercase tracking-wide text-primary">
                            Technical Specifications
                          </h5>
                          <ul className="mt-2 sm:mt-3 space-y-2 text-xs sm:text-sm text-gray-700">
                            {Object.entries(expandedModel.specs).map(([key, value]) => (
                              <li key={key} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                                <span className="text-base sm:text-lg font-semibold text-gray-800">{key}</span>
                                <span className="text-sm sm:text-base text-gray-600">{value}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center justify-center gap-1 sm:gap-2 rounded-full border border-primary/20 bg-white px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
                      onClick={() => setExpandedModel(null)}
                    >
                      Back to product overview
                    </motion.button>
                  </div>
                ) : (
                  <div className="grid gap-6 sm:gap-8 md:grid-cols-[0.9fr_1fr] md:items-center">
                    <div className="flex flex-col items-center gap-3 sm:gap-4 text-center md:items-start md:text-left">
                      <div className="relative flex h-36 w-36 sm:h-44 sm:w-44 md:h-52 md:w-52 items-center justify-center">
                        <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />
                        <img
                          src={getEntityImage(expandedProduct.imageId)}
                          alt={expandedProduct.name}
                          className="relative z-10 h-32 w-32 sm:h-36 sm:w-36 md:h-44 md:w-44 object-contain drop-shadow-2xl"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                        {expandedProduct.name}
                      </h3>
                      <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                        {expandedProduct.tagline}
                      </p>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                        Available Models
                      </p>
                      <div className="grid gap-2 sm:gap-3">
                        {expandedProduct.models.map((model) => (
                          <motion.button
                            key={model.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative flex w-full items-center justify-between overflow-hidden rounded-xl sm:rounded-2xl border border-primary/20 bg-white px-3 sm:px-4 md:px-5 py-2 sm:py-3 md:py-4 text-left text-xs sm:text-sm font-semibold text-gray-800 shadow-sm transition hover:border-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
                            onClick={() => handleModelToggle(model)}
                            aria-label={`View details for ${model.name}`}
                          >
                            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                              <img
                                src={getEntityImage(model.imageId)}
                                alt={model.name}
                                className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 flex-shrink-0 rounded-lg sm:rounded-xl md:rounded-2xl object-cover shadow-sm"
                                loading="lazy"
                              />
                              <div className="flex flex-col">
                                <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 line-clamp-2">{model.name}</span>
                              </div>
                            </div>
                            <span className="text-primary hidden sm:block">View details</span>
                            <span className="text-primary block sm:hidden">View</span>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
