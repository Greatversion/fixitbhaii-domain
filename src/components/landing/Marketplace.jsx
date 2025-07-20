import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { appliances } from '@/data/landing';

const Marketplace = () => {
  const { toast } = useToast();

  const handleFeatureClick = (feature) => {
  toast({
      title: "🚧 Coming Soon!",
      description: " Coming Soon! 🚀",
    });
  };

  return (
    <section id="marketplace" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Appliance Marketplace</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Buy and sell old appliances with our trusted network of local vendors
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {appliances.map((appliance, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleFeatureClick(`${appliance.name.toLowerCase()}-marketplace`)}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-4">
                <appliance.icon className="h-12 w-12 text-yellow-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-green-400 font-semibold">{appliance.count}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{appliance.name}</h3>
              <p className="text-gray-400 text-sm">Browse available items</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={() => handleFeatureClick('view-all-marketplace')}
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-lg px-8 py-4"
          >
            View All Categories
            <ShoppingCart className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;