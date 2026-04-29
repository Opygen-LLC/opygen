"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-white border-b border-border" : "bg-white/90 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded flex items-center justify-center" style={{ backgroundColor: '#1A7A5E' }}>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
            <span className="font-bold text-foreground text-xl" style={{ fontFamily: 'Sora, sans-serif' }}>
              Opygen <span style={{ color: '#1A7A5E' }}>Clean</span>
            </span>
          </div>

          {/* CENTER */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors">Features</a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors">Pricing</a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors">How It Works</a>
            <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors">Testimonials</a>
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-foreground px-4 py-2 hover:bg-secondary rounded-lg transition-colors">
              Log In
            </button>
            <button
              className="rounded-full px-5 py-2 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#1A7A5E' }}
            >
              Start Free Trial
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col p-6">
          <div className="flex justify-end mb-8">
            <button onClick={() => setMobileMenuOpen(false)} className="text-foreground text-2xl font-bold">&times;</button>
          </div>
          <div className="flex flex-col gap-6 text-xl font-medium" style={{ fontFamily: 'Sora, sans-serif' }}>
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-foreground">Features</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-foreground">Pricing</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-foreground">How It Works</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-foreground">Testimonials</a>
          </div>
          <div className="mt-auto flex flex-col gap-4">
            <button className="text-foreground font-semibold py-3 border border-border rounded-full w-full">Log In</button>
            <button className="text-white font-semibold py-3 rounded-full w-full" style={{ backgroundColor: '#1A7A5E' }}>Start Free Trial</button>
          </div>
        </div>
      )}
    </>
  );
}
