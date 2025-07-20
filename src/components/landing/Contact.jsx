import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Zap, Phone, Mail, Headphones } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleFeatureClick = (feature) => {
   toast({
      title: "🚧 Coming Soon!",
      description: " Coming Soon! 🚀",
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to fix it? Contact us for immediate assistance or browse our services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6">
              <Phone className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Call Us</h3>
              <p className="text-gray-300">24/7 Emergency Support</p>
            <p className="text-gray-300">+91 8887828141 (Sumit kumar , CEO & Co-founder)</p>
          
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6">
              <Mail className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Email Us</h3>
            <p className="text-gray-300">contact@fixitbhaii.com</p>
            <p className="text-gray-300">+91 9170820024 (Akash Yadav , COO & Co-founder)</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6">
              <Headphones className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Live Chat</h3>
            <p className="text-gray-300">Instant Support</p>
            <p className="text-gray-300">Available 24/7</p>
          </motion.div>
        </div>

        <div className="text-center">
         <Button
  onClick={() => {
    window.location.href = "mailto:contact@fixitbhaii.com?subject=Emergency Service Request&body=I need immediate assistance.";
  }}
  size="lg"
  className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold text-lg px-8 py-4 mr-4"
>
  Emergency Service
  <Zap className="ml-2 h-5 w-5" />
</Button>
           <Button variant ="outline"
  onClick={() => {
    window.location.href = "mailto:contact@fixitbhaii.com?subject=Emergency Service Request&body=I need immediate assistance.";
  }}
  size="lg"
  className=" text-white font-bold text-lg px-8 py-4 mr-4"
>
  Schedule Service
  <Zap className="ml-2 h-5 w-5" />
</Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;