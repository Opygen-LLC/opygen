"use client";

export default function CRMFooter() {
  return (
    <footer className="py-12 bg-white border-t border-[#E8E8E8]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[10px] font-black uppercase tracking-widest text-[#ADADAD]">
          © 2026 Opygen Vertical Solutions. All Systems Operational.
        </p>
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-[#6B6B6B]">
          <a href="#" className="hover:text-black">Privacy</a>
          <a href="#" className="hover:text-black">Terms</a>
          <a href="#" className="hover:text-black">Support</a>
        </div>
      </div>
    </footer>
  );
}