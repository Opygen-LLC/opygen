// export const OpygenLogo = () => (
//   <div className="flex items-center gap-2 sm:gap-3 bg-transparent py-1">
//     <svg viewBox="0 0 64 64" width="28" height="28" fill="none" className="flex-shrink-0">
//       <path d="M32 6 A26 26 0 1 1 53.5 45.5" stroke="#3ECFB2" strokeWidth="5" strokeLinecap="round" fill="none"></path>
//       <path d="M32 58 A26 26 0 1 1 10.5 18.5" stroke="#000000" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.55"></path>
//       <circle cx="32" cy="32" r="4" fill="#3ECFB2"></circle>
//       <circle cx="53.5" cy="45.5" r="2.5" fill="#3ECFB2"></circle>
//       <circle cx="10.5" cy="18.5" r="2.5" fill="#ffffff" opacity="0.3"></circle>
//     </svg>
//     <div className="flex flex-col justify-center text-left">
//       <div className="font-sora font-extrabold text-[15px] sm:text-[17px] tracking-tight text-[#0A0A0A] leading-none">
//         Opygen <span className="text-[#1A7A5E]">Clean</span>
//       </div>
//       <div className="text-[8px] sm:text-[9px] text-slate-400 font-bold uppercase tracking-[0.15em] mt-1 leading-none">
//         Cleaning CRM
//       </div>
//     </div>
//   </div>
// );



export const OpygenLogo = ({ textClass = "text-[#0A0A0A]" }) => (
  <div className="flex items-center gap-2 sm:gap-3 bg-transparent py-1">
    <svg viewBox="0 0 64 64" width="28" height="28" fill="none" className="flex-shrink-0">
      <path d="M32 6 A26 26 0 1 1 53.5 45.5" stroke="#3ECFB2" strokeWidth="5" strokeLinecap="round" fill="none"></path>
      <path d="M32 58 A26 26 0 1 1 10.5 18.5" stroke="#000000" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.55"></path>
      <circle cx="32" cy="32" r="4" fill="#3ECFB2"></circle>
      <circle cx="53.5" cy="45.5" r="2.5" fill="#3ECFB2"></circle>
      <circle cx="10.5" cy="18.5" r="2.5" fill="#ffffff" opacity="0.3"></circle>
    </svg>

    <div className="flex flex-col justify-center text-left">
      <div className={`font-sora font-extrabold text-[15px] sm:text-[17px] tracking-tight leading-none ${textClass}`}>
        Opygen <span className="text-[#1A7A5E]">Clean</span>
      </div>

      <div className="text-[8px] sm:text-[9px] text-slate-400 font-bold uppercase tracking-[0.15em] mt-1 leading-none">
        Cleaning CRM
      </div>
    </div>
  </div>
);