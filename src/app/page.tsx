'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Palette, RefreshCw, Wand2, Cloud, Shield, Mail } from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  badge: string;
}

const features: Feature[] = [
  { icon: Zap, title: "Lightning Performance", description: "Bun-powered speed for instant app launches", badge: "Bun" },
  { icon: Palette, title: "Intuitive API Design", description: "Effortless backend development with Hono", badge: "Hono" },
  { icon: RefreshCw, title: "Seamless Full-Stack", description: "Perfect front-end and back-end harmony", badge: "Next.js" },
  { icon: Wand2, title: "Data Magic", description: "Streamlined database operations with Drizzle", badge: "Drizzle" },
  { icon: Cloud, title: "Cloud Superpowers", description: "Robust BaaS support with Supabase", badge: "Supabase" },
  { icon: Shield, title: "Ironclad Security", description: "Rock-solid auth with Lucia and Oslo", badge: "Lucia & Oslo" },
  { icon: Mail, title: "Pro Email Templates", description: "Stunning notifications with React Email", badge: "React Email" }
];

const lightningVariants = {
  initial: { pathLength: 0, opacity: 0 },
  animate: { 
    pathLength: 1, 
    opacity: 1, 
    transition: { duration: 1.5, ease: "easeInOut" }
  }
};

const FeatureCard: React.FC<Feature & { index: number }> = ({ icon: Icon, title, description, badge, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <Card className="w-full h-full overflow-hidden border-2 border-[#232323] bg-[#f8f5f2]">
        <CardContent className="p-6 flex flex-col items-center justify-center h-full">
          <div className="relative">
            <Icon className="w-12 h-12 text-[#078080] z-10 relative" />
            <AnimatePresence>
              {isHovered && (
                <motion.svg
                  viewBox="0 0 100 100"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24"
                  initial="initial"
                  animate="animate"
                  exit="initial"
                >
                  <motion.path
                    d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z"
                    fill="none"
                    stroke="#f45d48"
                    strokeWidth="4"
                    variants={lightningVariants}
                  />
                </motion.svg>
              )}
            </AnimatePresence>
          </div>
          <h3 className="mt-4 text-lg font-bold text-center text-[#232323]">{title}</h3>
          <p className="mt-2 text-sm text-center text-[#222525]">{description}</p>
          <Badge className="mt-4 bg-[#078080] text-[#f8f5f2]">
            {badge}
          </Badge>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const MagAppStartFeatures: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-[#f8f5f2]">
      <motion.h1 
        className="text-5xl font-extrabold text-center mb-12 text-[#232323]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Accelerate Your Development
      </motion.h1>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default MagAppStartFeatures;