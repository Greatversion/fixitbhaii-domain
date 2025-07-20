import React from 'react';
import { Wrench } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-black/40 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
  <div className="flex items-center space-x-2 mb-4">
    <Wrench className="h-8 w-8 text-yellow-400" />
    <span className="text-2xl font-bold text-white">FixitBhaii</span>
  </div>
  <p className="text-gray-400 mb-4">
    Your trusted partner for on-demand repair services and appliance marketplace.
  </p>
  <div className="flex space-x-4">
    <a
      href="https://www.instagram.com/fixitbhaii/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
    >
      <span className="text-white text-sm">f</span>
    </a>
    <a
      href="https://www.instagram.com/fixitbhaii/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
    >
      <span className="text-white text-sm">t</span>
    </a>
    <a
      href="https://www.instagram.com/fixitbhaii/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
    >
      <span className="text-white text-sm">in</span>
    </a>
  </div>
</div>


          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Services</span>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Electrical Repair</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Computer Repair</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Mobile Repair</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Emergency Service</a></li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Marketplace</span>
            <ul className="space-y-2">
              <li><a href="#marketplace" className="text-gray-400 hover:text-white transition-colors">Buy Appliances</a></li>
              <li><a href="#marketplace" className="text-gray-400 hover:text-white transition-colors">Sell Appliances</a></li>
              <li><a href="#vendors" className="text-gray-400 hover:text-white transition-colors">Vendor Network</a></li>
              <li><a href="#vendors" className="text-gray-400 hover:text-white transition-colors">Become a Vendor</a></li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Support</span>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-gray-400">© 2025 FixitBhaii. All rights reserved | Sumit Kumar Pal & Akash Yadav</p>
        </div>
      </div>
    </footer>;
};
export default Footer;