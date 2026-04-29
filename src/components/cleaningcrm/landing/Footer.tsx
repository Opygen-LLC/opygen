"use client";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
        
        {/* COL 1 - Brand */}
        <div className="col-span-2 md:col-span-1 flex flex-col">
          <span className="font-bold text-lg" style={{ fontFamily: 'Sora, sans-serif' }}>
            Opygen <span style={{ color: '#1A7A5E' }}>Clean</span>
          </span>
          <p className="text-white/40 text-sm mt-2">Cleaning Business CRM</p>
          
          <div className="flex gap-4 mt-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/30 hover:text-white transition-colors cursor-pointer"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/30 hover:text-white transition-colors cursor-pointer"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/30 hover:text-white transition-colors cursor-pointer"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            <div className="bg-white/5 rounded-lg px-3 py-1.5 text-[10px] text-white/40">App Store</div>
            <div className="bg-white/5 rounded-lg px-3 py-1.5 text-[10px] text-white/40">Google Play</div>
          </div>
        </div>

        {/* COL 2 - Product */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">Product</h4>
          <div className="flex flex-col gap-3 text-sm text-white/60">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#" className="hover:text-white transition-colors">Integrations</a>
            <a href="#" className="hover:text-white transition-colors">Changelog</a>
          </div>
        </div>

        {/* COL 3 - Company */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">Company</h4>
          <div className="flex flex-col gap-3 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Blog</a>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
            <a href="#" className="hover:text-white transition-colors">Press</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        {/* COL 4 - Resources */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">Resources</h4>
          <div className="flex flex-col gap-3 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Help Center</a>
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
            <a href="#" className="hover:text-white transition-colors">API Reference</a>
            <a href="#" className="hover:text-white transition-colors">Status Page</a>
          </div>
        </div>

        {/* COL 5 - Get in Touch */}
        <div className="col-span-2 md:col-span-1">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">Get in Touch</h4>
          <form className="flex mt-2" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-white/5 border border-white/10 rounded-l-full px-4 py-2 text-sm text-white placeholder:text-white/30 outline-none flex-1 min-w-0"
            />
            <button 
              type="submit" 
              className="rounded-r-full px-4 py-2 text-sm font-semibold text-white whitespace-nowrap"
              style={{ backgroundColor: '#1A7A5E' }}
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-white/30">© 2026 Opygen. All rights reserved.</div>
          <div className="flex flex-wrap gap-6 text-xs text-white/40">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/70 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
