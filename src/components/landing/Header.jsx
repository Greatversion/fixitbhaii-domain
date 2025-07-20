import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Wrench } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
const Header = () => {
  const {
    toast
  } = useToast();
  const handleFeatureClick = feature => {
    toast({
      title: "🚧 Coming Soon!",
      description: "Coming Soon!🚀"
    });
  };
  return <header className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
       <motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  className="flex items-center space-x-2"
>
<img src="/logo.png" alt="FixitBhaii Logo" className="h-10" />

  {/* Text block with brand name and subtitle */}
  <div className="flex flex-col leading-tight">
    <span className="text-2xl font-bold text-white font-fancy">FixitBhaii</span>
    <span className="text-xs text-white-300 -mt-1">Local Experts, Instant Fix</span>
  </div>
</motion.div>

          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-white hover:text-white-400 transition-colors">Services</a>
            <a href="#marketplace" className="text-white hover:text-yellow-400 transition-colors">Marketplace</a>
            <a href="#vendors" className="text-white hover:text-yellow-400 transition-colors">Vendors</a>
            <a href="#contact" className="text-white hover:text-yellow-400 transition-colors">Contact</a>
          </nav>

          <Button onClick={() => handleFeatureClick('login')}variant="whiteGradient" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
            Get Started
          </Button>
        </div>
      </div>
    </header>;
};
export default Header;