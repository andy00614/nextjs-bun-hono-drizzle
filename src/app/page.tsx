'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Palette, RefreshCw, Wand2, Cloud, Shield, Mail } from "lucide-react";

const features = [
  { icon: Zap, title: "Lightning Performance", description: "Bun-powered speed for instant app launches", badge: "Bun" },
  { icon: Palette, title: "Intuitive API Design", description: "Effortless backend development with Hono", badge: "Hono" },
  { icon: RefreshCw, title: "Seamless Full-Stack", description: "Perfect front-end and back-end harmony", badge: "Next.js" },
  { icon: Wand2, title: "Data Magic", description: "Streamlined database operations with Drizzle", badge: "Drizzle" },
  { icon: Cloud, title: "Cloud Superpowers", description: "Robust BaaS support with Supabase", badge: "Supabase" },
  { icon: Shield, title: "Ironclad Security", description: "Rock-solid auth with Lucia and Oslo", badge: "Lucia & Oslo" },
  { icon: Mail, title: "Pro Email Templates", description: "Stunning notifications with React Email", badge: "React Email" }
];

const FeatureCard = ({ icon: Icon, title, description, badge, isSelected, onClick }) => (
  <motion.div
    layout
    onClick={onClick}
    className={`cursor-pointer ${isSelected ? 'col-span-2 row-span-2' : ''}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Card className={`w-full h-full overflow-hidden ${isSelected ? 'bg-primary text-primary-foreground' : 'bg-secondary/10'}`}>
      <CardContent className="p-6 flex flex-col items-center justify-center h-full">
        <motion.div
          animate={{ rotate: isSelected ? 360 : 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <Icon className={`w-12 h-12 ${isSelected ? 'text-primary-foreground' : 'text-primary'}`} />
        </motion.div>
        <h3 className="mt-4 text-xl font-bold text-center">{title}</h3>
        <AnimatePresence>
          {isSelected && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <p className="mt-2 text-sm text-center">{description}</p>
              <Badge variant={isSelected ? "secondary" : "outline"} className="mt-4">
                {badge}
              </Badge>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  </motion.div>
);

const MagAppStartFeatures = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <div className="container mx-auto px-4 py-16 bg-gradient-to-br from-background via-background/50 to-background">
      <motion.h1 
        className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Accelerate Your Development
      </motion.h1>
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {features.map((feature, index) => (
          <FeatureCard 
            key={index} 
            {...feature} 
            isSelected={selectedFeature === index}
            onClick={() => setSelectedFeature(selectedFeature === index ? null : index)}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default MagAppStartFeatures;