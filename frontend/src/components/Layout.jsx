import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Sparkles, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">Impact AI Trainer</span>
                <p className="text-xs text-gray-500 hidden sm:block">Transform documents into training materials</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to={createPageUrl("Home")} 
                className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                  location.pathname === createPageUrl("Home") ? 'text-purple-600' : 'text-gray-700'
                }`}
              >
                Home
              </Link>
              <Link 
                to={createPageUrl("Documents")} 
                className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                  location.pathname === createPageUrl("Documents") ? 'text-purple-600' : 'text-gray-700'
                }`}
              >
                My Documents
              </Link>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Sign In
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-purple-100 py-4">
              <div className="flex flex-col space-y-3">
                <Link 
                  to={createPageUrl("Home")} 
                  className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to={createPageUrl("Documents")} 
                  className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  My Documents
                </Link>
                <Button variant="outline" size="sm" className="mx-3 flex items-center gap-2 w-fit">
                  <User className="w-4 h-4" />
                  Sign In
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-md border-t border-purple-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-gray-500">
            © 2024 Impact AI Trainer. Transforming documents into knowledge.
          </div>
        </div>
      </footer>
    </div>
  );
}
