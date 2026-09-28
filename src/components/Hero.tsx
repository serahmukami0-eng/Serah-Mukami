import React, { useRef } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown, Download, Briefcase, Camera, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenCvModal: () => void;
  profileImage: string;
  onUpdateProfileImage: (newUrl: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenCvModal,
  profileImage,
  onUpdateProfileImage,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onUpdateProfileImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const scrollToProjects = () => {
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#0B192C] via-[#0D213A] to-[#122A48] text-white"
    >
      {/* Subtle background ambient pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-medium backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{PERSONAL_INFO.attachmentStatus}</span>
            </div>

            {/* Main Headings */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-[#D4AF37]">{PERSONAL_INFO.name}</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-200 text-balance leading-snug">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Introduction paragraph verbatim */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.heroIntro}
            </p>

            {/* Quick Context Strip */}
            <div className="pt-2 pb-1 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-300 border-t border-slate-700/60">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-white">Institution:</span>
                <span>Kabarak University</span>
              </div>
              <span className="text-slate-500 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-white">Program:</span>
                <span>Diploma (DBIT)</span>
              </div>
              <span className="text-slate-500 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-white">Status:</span>
                <span className="text-amber-300">Final Semester — 2026</span>
              </div>
            </div>

            {/* Two Prominent Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4 no-print">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-[#0B192C] bg-[#D4AF37] hover:bg-[#C59B27] active:scale-[0.98] transition-all shadow-lg shadow-[#D4AF37]/20 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#0B192C]"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-600 active:scale-[0.98] transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <Download className="w-4 h-4 text-[#D4AF37]" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Print-only contact info banner */}
            <div className="hidden print:flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-200 border-t border-slate-700/60">
              <span>Email: <strong>{PERSONAL_INFO.email}</strong></span>
              <span>·</span>
              <span>Institution: <strong>Kabarak University</strong></span>
              <span>·</span>
              <span>Location: <strong>Nakuru, Kenya</strong></span>
            </div>

            {/* Small reassurance note */}
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1 no-print">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Prepared for 2027 Industrial Attachment & IT Internship Placements</span>
            </div>
          </div>

          {/* Right Column: Profile Photo Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative gradient border */}
              <div className="relative p-1.5 rounded-3xl bg-gradient-to-b from-[#D4AF37]/60 via-[#1E3E62] to-[#0B192C] shadow-2xl">
                
                {/* Card Container */}
                <div className="relative rounded-[22px] overflow-hidden bg-[#0A182B] border border-slate-700/60 p-4 sm:p-5">
                  
                  {/* Photo area */}
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-800 group">
                    <img
                      src={profileImage}
                      alt="Serah Mukami - DBIT Student at Kabarak University"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        // Styled fallback if image fails
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'><rect width='400' height='400' fill='%231E3E62'/><circle cx='200' cy='160' r='60' fill='%23D4AF37'/><path d='M100 320 C100 240 300 240 300 320 Z' fill='%230B192C'/><text x='200' y='360' font-family='sans-serif' font-size='16' fill='%23FFFFFF' text-anchor='middle'>Serah Mukami · DBIT</text></svg>";
                      }}
                    />

                    {/* Subtle Overlay Badge */}
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#0B192C]/85 backdrop-blur-md border border-slate-700/70 text-left">
                      <p className="text-xs font-semibold text-white">Serah Mukami</p>
                      <p className="text-[11px] text-slate-300">Kabarak University · DBIT</p>
                    </div>

                    {/* Quick Replace Photo Hover Trigger */}
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      title="Replace profile photo"
                      className="absolute top-3 right-3 p-2 rounded-xl bg-black/60 hover:bg-black/80 text-white text-xs backdrop-blur-sm border border-white/20 transition-all opacity-85 hover:opacity-100 flex items-center gap-1.5 no-print"
                    >
                      <Camera className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span className="text-[11px] font-medium hidden sm:inline">Replace Photo</span>
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden no-print"
                    />
                  </div>

                  {/* Profile Card Footer Meta */}
                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                    <span className="inline-flex items-center gap-1 text-slate-400">
                      <Briefcase className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Ready for 2027</span>
                    </span>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="text-[11px] text-[#D4AF37] hover:underline no-print"
                    >
                      Click to upload custom photo
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
