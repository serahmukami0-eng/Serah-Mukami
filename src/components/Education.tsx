import React, { useState } from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, BookOpen, School, Calendar, MapPin, Edit3, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  const [secondarySchool, setSecondarySchool] = useState({
    name: "Secondary School (KCSE)",
    qualification: "Kenya Certificate of Secondary Education (KCSE)",
    completionYear: "Pre-University",
    description: "Completed secondary education in Kenya, achieving foundational competence in mathematics, sciences, humanities, and languages that support subsequent studies in Business Information Technology."
  });

  const [isEditingSecondary, setIsEditingSecondary] = useState(false);
  const [tempSchoolName, setTempSchoolName] = useState(secondarySchool.name);
  const [tempYear, setTempYear] = useState(secondarySchool.completionYear);
  const [tempDesc, setTempDesc] = useState(secondarySchool.description);

  const handleSaveSecondary = (e: React.FormEvent) => {
    e.preventDefault();
    setSecondarySchool({
      ...secondarySchool,
      name: tempSchoolName,
      completionYear: tempYear,
      description: tempDesc
    });
    setIsEditingSecondary(false);
  };

  return (
    <section id="education" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <p className="text-xs font-bold tracking-widest text-[#C59B27] uppercase mb-2">
            Academic Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
            Education Timeline
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Formal qualifications bridging business administrative principles and technical computer information systems.
          </p>
          <div className="h-1 w-16 bg-[#D4AF37] mt-3 rounded-full" />
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 sm:before:left-7 before:w-0.5 before:bg-slate-300 before:hidden sm:before:block">
          
          {/* 1. Kabarak University (Primary DBIT) */}
          <div className="relative sm:pl-16 text-left">
            {/* Timeline bullet dot */}
            <div className="hidden sm:flex absolute left-4 top-6 -translate-x-1/2 w-7 h-7 rounded-full bg-[#0B192C] border-4 border-slate-100 items-center justify-center text-[#D4AF37] shadow">
              <GraduationCap className="w-3.5 h-3.5" />
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
              
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold tracking-wider text-[#C59B27] uppercase">
                    Higher Education Qualification
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B192C] mt-1">
                    {EDUCATION_DATA.program}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 mt-1">
                    <span className="font-semibold text-slate-900">{EDUCATION_DATA.institution}</span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {EDUCATION_DATA.location}
                    </span>
                  </div>
                </div>

                <div className="sm:text-right">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{EDUCATION_DATA.status}</span>
                  </span>
                  <p className="text-xs text-slate-500 mt-1 tabular-nums">
                    Period: {EDUCATION_DATA.period}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-700 leading-relaxed mt-4">
                {EDUCATION_DATA.description}
              </p>

              {/* Coursework & Relevant Areas of Study */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-[#C59B27]" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Relevant Areas of Study
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {EDUCATION_DATA.areasOfStudy.map((subject) => (
                    <div
                      key={subject}
                      className="px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{subject}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rigor note */}
              <div className="mt-5 p-3 rounded-lg bg-blue-50/60 border border-blue-100 text-xs text-blue-900 flex items-center justify-between">
                <span>Academic transcripts & recommendation letters provided upon attachment formal request.</span>
                <span className="text-[11px] font-semibold text-blue-800">Grades unlisted per privacy guidelines</span>
              </div>

            </div>
          </div>

          {/* 2. Secondary Education Placeholder (KCSE) */}
          <div className="relative sm:pl-16 text-left">
            {/* Timeline bullet dot */}
            <div className="hidden sm:flex absolute left-4 top-6 -translate-x-1/2 w-7 h-7 rounded-full bg-slate-400 border-4 border-slate-100 items-center justify-center text-white shadow">
              <School className="w-3.5 h-3.5" />
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-left">
              
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                      Secondary School Foundation
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 font-medium">
                      Customizable Placeholder
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    {secondarySchool.qualification}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    {secondarySchool.name}
                  </p>
                </div>

                <div className="flex items-center gap-2 sm:text-right">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700">
                    {secondarySchool.completionYear}
                  </span>
                  <button
                    onClick={() => {
                      setTempSchoolName(secondarySchool.name);
                      setTempYear(secondarySchool.completionYear);
                      setTempDesc(secondarySchool.description);
                      setIsEditingSecondary(true);
                    }}
                    className="p-1.5 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors no-print"
                    title="Edit secondary school placeholder"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mt-4">
                {secondarySchool.description}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Prepares student for quantitative and logical reasoning in IT coursework</span>
                <button
                  onClick={() => setIsEditingSecondary(true)}
                  className="text-[#0B192C] font-semibold hover:underline no-print"
                >
                  Click to personalize school name
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Edit Secondary Education Modal */}
      {isEditingSecondary && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 text-left no-print">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Edit Secondary School Information
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Enter your specific high school name or completion details.
            </p>

            <form onSubmit={handleSaveSecondary} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  High School / Institution Name
                </label>
                <input
                  type="text"
                  required
                  value={tempSchoolName}
                  onChange={(e) => setTempSchoolName(e.target.value)}
                  placeholder="e.g. Kenya High School / Moi High School"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Completion Period / Year
                </label>
                <input
                  type="text"
                  value={tempYear}
                  onChange={(e) => setTempYear(e.target.value)}
                  placeholder="e.g. Completed 2023"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Summary / Focus Notes
                </label>
                <textarea
                  rows={3}
                  value={tempDesc}
                  onChange={(e) => setTempDesc(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsEditingSecondary(false)}
                  className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold text-white bg-[#0B192C] hover:bg-[#1E3E62] rounded-lg shadow-sm"
                >
                  Save Details
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
