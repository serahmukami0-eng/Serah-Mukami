import React from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, CheckCircle2, Layers, Briefcase, Calendar } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 text-left max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#0B192C] text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-white/10 text-[#D4AF37] border border-white/10">
              {project.status}
            </span>
            <span className="text-xs text-slate-300">· {project.category}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Project Title */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Project Screenshot / Visual */}
          {project.imageUrl ? (
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 aspect-video relative">
              <img
                src={project.imageUrl}
                alt={`${project.title} screenshot`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'><rect width='800' height='450' fill='%230B192C'/><text x='400' y='225' font-family='sans-serif' font-size='24' fill='%23D4AF37' text-anchor='middle'>Project Visual Preview</text></svg>";
                }}
              />
            </div>
          ) : (
            <div className="p-8 rounded-xl bg-slate-50 border border-dashed border-slate-300 text-center">
              <Layers className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <p className="text-sm font-semibold text-slate-700">Academic Project Implementation</p>
              <p className="text-xs text-slate-500 mt-1">Coursework documentation and laboratory source code available upon request.</p>
            </div>
          )}

          {/* Extended Academic Context */}
          {project.fullDescription && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Project Overview & Academic Objective
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
                {project.fullDescription}
              </p>
            </div>
          )}

          {/* Business Impact */}
          {project.businessImpact && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>Business & Information Value</span>
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed bg-[#FAF5E6] p-4 rounded-xl border border-[#D4AF37]/30">
                {project.businessImpact}
              </p>
            </div>
          )}

          {/* Key Features / Components */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Key Components & Technical Features
              </h4>
              <ul className="space-y-2">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          <div className="space-y-2 pt-2 border-t border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Core Technologies & Domains
            </h4>
            <div className="flex flex-wrap items-center gap-1 text-xs text-slate-600">
              {project.tags.map((tag, i) => (
                <React.Fragment key={tag}>
                  <span className="font-medium text-slate-800 bg-slate-100 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                  {i < project.tags.length - 1 && <span className="text-slate-300">·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.status === 'Featured' ? (
              <>
                <a
                  href="#contact"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#0B192C] hover:bg-[#1E3E62] rounded-lg transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Request Live Prototype Demo</span>
                </a>
                <a
                  href="#contact"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Request Code Repository</span>
                </a>
              </>
            ) : (
              <span className="text-xs text-slate-500 italic flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Kabarak University DBIT Academic Portfolio Item</span>
              </span>
            )}
          </div>
          
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
