import React, { useState } from 'react';
import { ACADEMIC_EXPERIENCE_DATA } from '../data/portfolioData';
import { AcademicExperience } from '../types';
import { 
  Briefcase, 
  Database, 
  Code2, 
  FileSpreadsheet, 
  Network, 
  Building2, 
  CheckCircle2, 
  Edit3,
  Calendar,
  Layers
} from 'lucide-react';

export const Experience: React.FC = () => {
  const [experiences, setExperiences] = useState<AcademicExperience[]>(ACADEMIC_EXPERIENCE_DATA);
  const [editingExp, setEditingExp] = useState<AcademicExperience | null>(null);

  const getExperienceIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'business technology projects':
        return <Layers className="w-5 h-5 text-indigo-600" />;
      case 'database & sql practice':
        return <Database className="w-5 h-5 text-amber-600" />;
      case 'desktop application development':
        return <Code2 className="w-5 h-5 text-purple-600" />;
      case 'microsoft office & business applications':
        return <FileSpreadsheet className="w-5 h-5 text-emerald-600" />;
      case 'networking fundamentals':
        return <Network className="w-5 h-5 text-sky-600" />;
      default:
        return <Briefcase className="w-5 h-5 text-[#0B192C]" />;
    }
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingExp) return;

    setExperiences(experiences.map(exp => exp.id === editingExp.id ? editingExp : exp));
    setEditingExp(null);
  };

  return (
    <section id="experience" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <p className="text-xs font-bold tracking-widest text-[#C59B27] uppercase mb-2">
            Applied Practical Competencies
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
            Academic & Project Experience
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Rigorous hands-on laboratory exercises, systems coursework, and business problem simulations undertaken during Diploma studies at Kabarak University.
          </p>
          <div className="h-1 w-16 bg-[#D4AF37] mt-3 rounded-full" />
        </div>

        {/* Experience List */}
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow text-left group"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-slate-100">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                    {getExperienceIcon(exp.title)}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0B192C] transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mt-0.5">
                      <span className="font-semibold text-slate-700">{exp.focusArea}</span>
                      <span>·</span>
                      <span className="inline-flex items-center gap-1">
                        <Building2 className="w-3 h-3 text-slate-400" />
                        {exp.institution}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:text-right">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700 tabular-nums flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    <span>{exp.period}</span>
                  </span>
                  <button
                    onClick={() => setEditingExp(exp)}
                    className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded transition-colors no-print"
                    title="Edit experience details"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-700 leading-relaxed mt-4">
                {exp.description}
              </p>

              {/* Key Practical Outcomes */}
              <div className="mt-4 pt-3 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                  Key Coursework Outcomes & Deliverables:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                  {exp.outcomes.map((outcome, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-700 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
                <span>Directly transferable to IT helpdesk, database operations, and clerical automation</span>
                <button
                  onClick={() => setEditingExp(exp)}
                  className="text-xs text-[#0B192C] font-semibold hover:underline no-print"
                >
                  Edit details
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Edit Experience Modal */}
      {editingExp && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 text-left no-print">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Edit Experience: {editingExp.title}
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Personalize lab achievements or coursework milestones.
            </p>

            <form onSubmit={handleSaveEdit} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Focus Area</label>
                <input
                  type="text"
                  value={editingExp.focusArea}
                  onChange={(e) => setEditingExp({ ...editingExp, focusArea: e.target.value })}
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Description</label>
                <textarea
                  rows={3}
                  value={editingExp.description}
                  onChange={(e) => setEditingExp({ ...editingExp, description: e.target.value })}
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Deliverable 1
                </label>
                <input
                  type="text"
                  value={editingExp.outcomes[0] || ''}
                  onChange={(e) => {
                    const newOut = [...editingExp.outcomes];
                    newOut[0] = e.target.value;
                    setEditingExp({ ...editingExp, outcomes: newOut });
                  }}
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Deliverable 2
                </label>
                <input
                  type="text"
                  value={editingExp.outcomes[1] || ''}
                  onChange={(e) => {
                    const newOut = [...editingExp.outcomes];
                    newOut[1] = e.target.value;
                    setEditingExp({ ...editingExp, outcomes: newOut });
                  }}
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setEditingExp(null)}
                  className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold text-white bg-[#0B192C] hover:bg-[#1E3E62] rounded-lg shadow-sm"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
