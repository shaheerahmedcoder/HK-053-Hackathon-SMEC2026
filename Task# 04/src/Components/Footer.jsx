import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="#" className="text-sm text-gray-400 hover:text-white">Terms of Service</a>
          <a href="#" className="text-sm text-gray-400 hover:text-white">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
