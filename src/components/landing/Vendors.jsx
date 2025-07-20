import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Vendors = () => {
  const { toast } = useToast();

  const handleFeatureClick = (feature) => {
    toast({
      title: "🚧 Coming Soon!",
      description: " Coming Soon! 🚀",
    });
  };

  return (
    <section id="vendors" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Connect with Local Vendors</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our network of trusted vendors and technicians. Expand your business reach 
              and connect with customers in your area.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                <span className="text-gray-300">Verified vendor profiles</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                <span className="text-gray-300">Direct customer connections</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                <span className="text-gray-300">Secure payment processing</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                <span className="text-gray-300">Rating and review system</span>
              </div>
            </div>

            <Button 
              onClick={() => handleFeatureClick('become-vendor')}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold text-lg px-8 py-4"
            >
              Become a Vendor
              <Users className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img 
              alt="Network of local vendors and technicians working together"
              className="rounded-2xl shadow-2xl w-full h-auto"
             src="https://content.jdmagicbox.com/comp/lucknow/t7/0522px522.x522.140403164910.y9t7/catalogue/jai-ambey-electricals-aashiyana-lucknow-electrical-shops-s1b6hnfiid.jpg" />
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-2xl blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vendors;