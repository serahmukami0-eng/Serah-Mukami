import React, { useRef } from 'react';
import { PERSONAL_INFO, EDUCATION_DATA, SKILLS_DATA, ACADEMIC_EXPERIENCE_DATA } from '../data/portfolioData';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  customCvUrl?: string;
  onUploadCv?: (file: File) => void;
}

export const CvModal: React.FC<CvModalProps> = ({
  isOpen,
  onClose,
  customCvUrl,
  onUploadCv,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPlaceholder = () => {
    if (customCvUrl) {
      window.open(customCvUrl, '_blank');
      return;
    }
    // Generate text/markdown downloadable resume file
    const cvText = `SERAH MUKAMI
Business Information Technology (DBIT) Student | Kabarak University
Email: ${PERSONAL_INFO.email}
Location: Nakuru, Kenya
Attachment Status: Open to Industrial Attachment Opportunities — 2027

==================================================
PROFESSIONAL SUMMARY
==================================================
${PERSONAL_INFO.aboutMe}

==================================================
EDUCATION
==================================================
${EDUCATION_DATA.institution} — Nakuru, Kenya
${EDUCATION_DATA.program}
Status: ${EDUCATION_DATA.status} (${EDUCATION_DATA.period})

Relevant Areas of Study:
${EDUCATION_DATA.areasOfStudy.map(s => `- ${s}`).join('\n')}

==================================================
CORE TECHNICAL COMPETENCIES
==================================================
${SKILLS_DATA.map(cat => `${cat.category.toUpperCase()}:\n${cat.skills.map(s => `  • ${s.name} (${s.level}) - ${s.useCase}`).join('\n')}`).join('\n\n')}

==================================================
ACADEMIC & PROJECT EXPERIENCE
==================================================
${ACADEMIC_EXPERIENCE_DATA.map(exp => `${exp.title} (${exp.period})
Focus: ${exp.focusArea} | ${exp.institution}
${exp.description}
Outcomes:
${exp.outcomes.map(o => `  • ${o}`).join('\n')}`).join('\n\n')}

==================================================
REFEREES
==================================================
Available upon request from Kabarak University School of Science, Engineering & Technology.
`;

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Serah_Mukami_DBIT_CV.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-300 text-left max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Action Bar */}
        <div className="px-6 py-4 bg-[#0B192C] text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#D4AF37]" />
            <span className="font-bold text-sm tracking-tight">Curriculum Vitae — Serah Mukami</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Print CV"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print CV</span>
            </button>

            <button
              onClick={handleDownloadPlaceholder}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#D4AF37] hover:bg-[#C59B27] text-[#0B192C] transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors ml-2"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Upload Custom PDF Banner for Serah */}
        <div className="px-6 py-2.5 bg-slate-100 border-b border-slate-200 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-2 shrink-0">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Interactive printable preview generated from verified DBIT credentials.</span>
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="text-[#0B192C] font-semibold hover:underline"
            >
              Attach custom PDF CV file
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

        {/* Scrollable Printable CV Document */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white font-sans text-slate-800" id="printable-cv">
          
          {/* Header */}
          <div className="border-b-2 border-[#0B192C] pb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-3xl font-extrabold text-[#0B192C] tracking-tight">
                  SERAH MUKAMI
                </h1>
                <p className="text-sm font-semibold text-[#C59B27] mt-0.5">
                  Business Information Technology (DBIT) | Kabarak University
                </p>
              </div>
              <div className="text-xs text-slate-600 space-y-0.5 sm:text-right">
                <p className="flex sm:justify-end items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>{PERSONAL_INFO.email}</span>
                </p>
                <p className="flex sm:justify-end items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </p>
                <p className="font-semibold text-emerald-700">
                  Attachment: Seeking 2027 Placement
                </p>
              </div>
            </div>
          </div>

          {/* Profile Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#0B192C] border-b border-slate-200 pb-1 mb-2.5">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {PERSONAL_INFO.aboutMe}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#0B192C] border-b border-slate-200 pb-1 mb-2.5">
              Education
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between items-baseline text-xs sm:text-sm">
                <div>
                  <span className="font-bold text-slate-900">{EDUCATION_DATA.program}</span>
                  <span className="text-slate-600"> — {EDUCATION_DATA.institution}</span>
                </div>
                <span className="font-semibold text-slate-700 tabular-nums">{EDUCATION_DATA.period}</span>
              </div>
              <p className="text-xs text-slate-600">
                Status: {EDUCATION_DATA.status}
              </p>
              <div className="text-xs text-slate-700">
                <span className="font-semibold">Coursework: </span>
                {EDUCATION_DATA.areasOfStudy.join(', ')}
              </div>
            </div>
          </div>

          {/* Core Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#0B192C] border-b border-slate-200 pb-1 mb-2.5">
              Core Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILLS_DATA.map((cat) => (
                <div key={cat.category} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <p className="font-bold text-slate-900 mb-1">{cat.category}</p>
                  <p className="text-slate-600 leading-normal">
                    {cat.skills.map(s => s.name).join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Academic & Practical Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#0B192C] border-b border-slate-200 pb-1 mb-2.5">
              Academic & Project Experience
            </h2>
            <div className="space-y-4">
              {ACADEMIC_EXPERIENCE_DATA.map((exp) => (
                <div key={exp.id} className="text-xs space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-slate-900">{exp.title}</span>
                    <span className="text-slate-500 tabular-nums">{exp.period}</span>
                  </div>
                  <p className="text-slate-600 italic">{exp.focusArea} — {exp.institution}</p>
                  <p className="text-slate-700 leading-relaxed">{exp.description}</p>
                  <ul className="list-disc list-inside text-slate-600 pl-1">
                    {exp.outcomes.map((o, i) => (
                      <li key={i}>{o}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Industrial Attachment Readiness */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#0B192C] border-b border-slate-200 pb-1 mb-2.5">
              Industrial Attachment Placement
            </h2>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 space-y-1">
              <p className="font-bold text-slate-900">Seeking Placement — 2027 Academic Window</p>
              <p>Available for 8–12 weeks of full-time deployment in ICT, Database Administration, Systems Support, or Digital Business Operations across Kenya.</p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <p className="text-xs text-slate-500">
            Updated for 2026/2027 Academic Year · Kabarak University
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Print
            </button>
            <button
              onClick={handleDownloadPlaceholder}
              className="px-4 py-2 text-xs font-bold text-white bg-[#0B192C] hover:bg-[#1E3E62] rounded-lg transition-colors shadow-sm"
            >
              Download CV
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
