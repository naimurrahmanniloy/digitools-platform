import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";

const FooterSection = () => {
  return (
    <div>
      <footer className="bg-[#0D1117] text-white py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Logo and Description Section */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">DigiTools</h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Premium digital tools for creators, professionals, and
                businesses. Work smarter with our suite of powerful tools.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-semibold mb-6">Product</h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold mb-6">Company</h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources & Socials */}
            <div>
              <h3 className="font-semibold mb-6">Resources</h3>
              <ul className="space-y-4 text-sm text-gray-400 mb-8">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>

              <h3 className="font-semibold mb-4">Social Links</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-white p-2 rounded-full text-black hover:bg-gray-200 transition-all"
                >
                  <FaInstagram size={16} />
                </a>
                <a
                  href="#"
                  className="bg-white p-2 rounded-full text-black hover:bg-gray-200 transition-all"
                >
                  <FaFacebookSquare size={16} />
                </a>
                <a
                  href="#"
                  className="bg-white p-2 rounded-full text-black hover:bg-gray-200 transition-all"
                >
                  <TiSocialYoutube size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-gray-500">
            <p>© 2026 Digitools. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
