import React, { useRef } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FileText, Download, Eye, Upload, CheckCircle2, ShieldCheck, Sparkles, Printer } from 'lucide-react';

interface CvSectionProps {
  onOpenCvModal: () => void;
  customCvUrl?: string;
  onUploadCv?: (file: File) => void;
}

export const CvSection: React.FC<CvSectionProps> = ({
  onOpenCvModal,
  customCvUrl,
  onUploadCv,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDownloadClick = () => {
    onOpenCvModal();
  };

  return (
    <section id="cv" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <p className="text-xs font-bold tracking-widest text-[#C59B27] uppercase mb-2">
            Curriculum Vitae
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
            Download My CV
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Access the comprehensive Curriculum Vitae detailing academic performance in DBIT at Kabarak University, technical competencies, and preparation for industrial attachment.
          </p>
          <div className="h-1 w-16 bg-[#D4AF37] mt-3 rounded-full" />
        </div>

        {/* Central CV Card Banner */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-md p-6 sm:p-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Visual CV Mockup Preview */}
            <div className="lg:col-span-5 flex justify-center">
              <div 
                onClick={onOpenCvModal}
                className="w-full max-w-sm rounded-2xl bg-white border-2 border-slate-200 shadow-xl p-5 hover:border-[#D4AF37] transition-all cursor-pointer group relative"
              >
                {/* Simulated Document Preview */}
                <div className="space-y-3.5 opacity-90 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center justify-between border-b-2 border-[#0B192C] pb-3">
                    <div>
                      <p className="text-base font-extrabold text-[#0B192C]">SERAH MUKAMI</p>
                      <p className="text-[10px] text-[#C59B27] font-semibold">DBIT · Kabarak University</p>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400">2026/2027</span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="h-2 bg-slate-200 rounded w-1/3" />
                    <div className="h-2 bg-slate-100 rounded w-full" />
                    <div className="h-2 bg-slate-100 rounded w-5/6" />
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <div className="h-2 bg-slate-200 rounded w-1/4" />
                    <div className="grid grid-cols-2 gap-1.5">
                      <div className="h-4 bg-slate-100 rounded" />
                      <div className="h-4 bg-slate-100 rounded" />
                      <div className="h-4 bg-slate-100 rounded" />
                      <div className="h-4 bg-slate-100 rounded" />
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Curriculum Vitae</span>
                    <span className="text-emerald-700 font-bold">Open for 2027</span>
                  </div>
                </div>

                {/* Hover overlay button */}
                <div className="absolute inset-0 bg-[#0B192C]/40 backdrop-blur-[2px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-xl bg-white text-[#0B192C] text-xs font-bold shadow-lg flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-[#C59B27]" />
                    <span>Click to View Full CV</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Download & Action Info */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Industrial Attachment Application Ready
                </span>
                <h3 className="text-2xl font-extrabold text-[#0B192C] mt-1">
                  Serah Mukami — Professional CV
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Includes full details on coursework at Kabarak University, database projects, desktop applications, networking labs, and references.
                </p>
              </div>

              {/* Status Indicator */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                <div className="flex items-center gap-2 font-bold text-[#0B192C]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>CV Document Status: Verified Academic Profile & Interactive Printable Format</span>
                </div>
                <p className="text-slate-500 text-[11px]">
                  Employers can preview and print directly in-browser or download the formatted text/PDF file.
                </p>
              </div>

              {/* Buttons Area */}
              <div className="flex flex-wrap items-center gap-4 no-print">
                <button
                  onClick={handleDownloadClick}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-[#0B192C] bg-[#D4AF37] hover:bg-[#C59B27] transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </button>

                <button
                  onClick={onOpenCvModal}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors"
                >
                  <Eye className="w-4 h-4 text-[#0B192C]" />
                  <span>Preview Full CV</span>
                </button>

                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 transition-colors shadow-sm"
                  title="Print or export entire portfolio to PDF"
                >
                  <Printer className="w-4 h-4 text-[#C59B27]" />
                  <span>Export Portfolio as PDF</span>
                </button>
              </div>

              {/* Serah's custom PDF upload replacement trigger */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 no-print">
                <span className="flex items-center gap-1.5">
                  <Upload className="w-4 h-4 text-slate-400" />
                  <span>Need to replace with your latest PDF file?</span>
                </span>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="font-bold text-[#0B192C] hover:underline"
                >
                  Upload your own PDF CV
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file && onUploadCv) {
                      onUploadCv(file);
                    }
                  }}
                />
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
