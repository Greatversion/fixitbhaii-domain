import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Hero = () => {
  const { toast } = useToast();

  const handleFeatureClick = (feature) => {
  toast({
      title: "🚧 Coming Soon!",
      description: " Coming Soon! 🚀",
    });
  };

  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Fixit
              <span className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Bhaii  @Lucknow
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Your trusted partner for on-demand electrical and computer repair services. 
              Buy, sell, and repair old appliances with our network of certified local vendors.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => handleFeatureClick('book-service')}
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold text-lg px-8 py-4"
              >
                Book Service Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={() => handleFeatureClick('browse-marketplace')}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4"
              >
                Browse Marketplace
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start mt-8 space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">500+</div>
                <div className="text-sm text-gray-400">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">50+</div>
                <div className="text-sm text-gray-400">Expert Technicians</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">24/7</div>
                <div className="text-sm text-gray-400">Support Available</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                alt="Professional technician repairing electronic devices"
                className="rounded-2xl shadow-2xl w-full h-auto"
               src="https://content.jdmagicbox.com/comp/allahabad/y7/0532px532.x532.220409105929.k7y7/catalogue/expert-appliances-repair-zero-road-allahabad-printed-circuit-board-repair-and-services-2ckf5i8u3d.jpg" />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-2xl blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;