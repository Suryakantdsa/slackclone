import React from "react";
import { Facebook, Twitter, Instagram, LinkedinIcon } from "lucide-react";
const FooterBottom = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-2">
          <div>
            <h3 className="font-bold text-lg mb-4">About Slack</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Leadership
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Enterprise
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Solutions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Developers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-400">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-400">
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-400">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Slack Technologies, LLC. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterBottom;
