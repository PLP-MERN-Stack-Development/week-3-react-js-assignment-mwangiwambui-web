import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-4 mt-8">
      <div className="max-w-7xl mx-auto text-center">
        © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;