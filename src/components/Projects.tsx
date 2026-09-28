import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Github, 
  Layers, 
  Database, 
  Code, 
  BarChart2, 
  Network, 
  Sparkles,
  PlusCircle,
  FileCode2
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [projectsList, setProjectsList] = useState<Project[]>(PROJECTS_DATA);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // New project draft state
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newStatus, setNewStatus] = useState<'Featured' | 'Academic Project' | 'Coming Soon'>('Academic Project');
  const [newTags, setNewTags] = useState('');

  const featuredProject = projectsList.find(p => p.id === 'bizinfo-corner') || projectsList[0];
  const secondaryProjects = projectsList.filter(p => p.id !== featuredProject?.id);

  const handleAddNewProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newProj: Project = {
      id: `proj-${Date.now()}`,
      title: newTitle,
      category: newCategory || 'Business Technology',
      status: newStatus,
      description: newDescription || 'Academic business information technology project.',
      tags: newTags ? newTags.split(',').map(t => t.trim()) : ['DBIT', 'Kabarak University'],
      keyFeatures: [
        'Coursework problem formulation and business requirement analysis',
        'Practical implementation and testing of system components',
        'Academic presentation and evaluation by faculty'
      ]
    };

    setProjectsList([...projectsList, newProj]);
    setShowAddModal(false);
    setNewTitle('');
    setNewCategory('');
    setNewDescription('');
    setNewTags('');
  };

  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes('database') || category.toLowerCase().includes('sql')) {
      return <Database className="w-4 h-4 text-amber-600" />;
    }
    if (category.toLowerCase().includes('software') || category.toLowerCase().includes('vb')) {
      return <Code className="w-4 h-4 text-purple-600" />;
    }
    if (category.toLowerCase().includes('data') || category.toLowerCase().includes('analytics')) {
      return <BarChart2 className="w-4 h-4 text-emerald-600" />;
    }
    if (category.toLowerCase().includes('network')) {
      return <Network className="w-4 h-4 text-sky-600" />;
    }
    return <Layers className="w-4 h-4 text-slate-600" />;
  };

  return (
    <section id="projects" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 text-left">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-widest text-[#C59B27] uppercase mb-2">
              Portfolio of Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
              Projects & Applied Solutions
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Practical applications combining Business Information Technology principles, database systems, and software solutions designed to address real-world business needs.
            </p>
            <div className="h-1 w-16 bg-[#D4AF37] mt-3 rounded-full" />
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-colors shrink-0 self-start md:self-end no-print"
          >
            <PlusCircle className="w-4 h-4 text-[#0B192C]" />
            <span>Add Project Entry</span>
          </button>
        </div>

        {/* 1. FEATURED PROJECT SHOWCASE (Bizinfo Corner) */}
        {featuredProject && (
          <div className="mb-14 rounded-3xl bg-gradient-to-br from-[#0B192C] via-[#0F223D] to-[#142D4E] text-white p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-800 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Featured Project Info */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    Featured Project
                  </span>
                  <span className="text-xs text-slate-300">
                    · Business + Technology Platform
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                    {featuredProject.title}
                  </h3>
                  <p className="mt-3 text-slate-200 text-sm sm:text-base leading-relaxed">
                    {featuredProject.description}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300 space-y-1">
                  <p className="font-semibold text-[#D4AF37]">
                    Business + Tech Integration:
                  </p>
                  <p>
                    Bizinfo Corner combines Business Information Technology concepts with digital product development to translate complex growth metrics into actionable management insight.
                  </p>
                </div>

                {/* Project Tags (clean unboxed text with dots) */}
                <div className="pt-1">
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-2 text-xs text-slate-300">
                    <span className="font-semibold text-white">Tags:</span>
                    {featuredProject.tags.map((tag, i) => (
                      <React.Fragment key={tag}>
                        <span className="text-slate-300">{tag}</span>
                        {i < featuredProject.tags.length - 1 && <span className="text-slate-500">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Action Buttons & Placeholders */}
                <div className="pt-3 flex flex-wrap items-center gap-3 no-print">
                  <button
                    onClick={() => setSelectedProject(featuredProject)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-[#0B192C] bg-[#D4AF37] hover:bg-[#C59B27] transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <span>View Project Details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-[#D4AF37]" />
                    <span>Live Demo (Inquiry)</span>
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-300 hover:text-white bg-transparent hover:bg-white/5 border border-slate-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Repository</span>
                  </a>
                </div>

              </div>

              {/* Right Column: Screenshot Visual */}
              <div className="lg:col-span-5">
                <div 
                  onClick={() => setSelectedProject(featuredProject)}
                  className="rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl group cursor-pointer relative"
                >
                  <div className="aspect-[16/10] w-full bg-slate-800 overflow-hidden relative">
                    <img
                      src={featuredProject.imageUrl}
                      alt="Bizinfo Corner Platform Mockup"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'><rect width='800' height='500' fill='%230B192C'/><text x='400' y='250' font-family='sans-serif' font-size='26' fill='%23D4AF37' text-anchor='middle'>Bizinfo Corner UI Preview</text></svg>";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <span className="px-3.5 py-1.5 rounded-lg bg-black/70 text-white text-xs font-semibold backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
                        <span>Click to Expand Overview</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                  <div className="p-3 bg-slate-900 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                    <span>Platform Interface Concept</span>
                    <span className="text-[#D4AF37]">Bizinfo Corner · DBIT</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 2. ADDITIONAL ACADEMIC PROJECTS & PLACEHOLDERS */}
        <div className="text-left space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-[#0B192C] tracking-tight">
              Academic Projects & Coursework Systems
            </h3>
            <span className="text-xs text-slate-500">
              Kabarak University DBIT Portfolio
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-slate-400/80 hover:bg-white hover:shadow-lg transition-all duration-200 flex flex-col justify-between cursor-pointer group text-left"
              >
                <div>
                  {/* Status & Category */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                      {getCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </span>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded border ${
                      project.status === 'Coming Soon'
                        ? 'bg-amber-50 text-amber-800 border-amber-200'
                        : 'bg-blue-50 text-blue-800 border-blue-200'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#0B192C] transition-colors mb-2">
                    {project.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="pt-3 border-t border-slate-200/80 flex flex-wrap items-center gap-1 text-[11px] text-slate-500 mb-3">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <React.Fragment key={tag}>
                        <span className="font-medium text-slate-700">{tag}</span>
                        {idx < Math.min(project.tags.length, 3) - 1 && <span>·</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Card bottom click prompt */}
                  <div className="flex items-center justify-between text-xs font-semibold text-[#0B192C] group-hover:text-[#C59B27] transition-colors no-print">
                    <span>View Academic Details</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Selected Project Full Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Add New Project Modal for user customization */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 text-left no-print">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Add Academic Project Entry
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Add your coursework or personal IT project to the portfolio list.
            </p>

            <form onSubmit={handleAddNewProject} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Project Title *
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g., E-Commerce Records Management"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Category
                </label>
                <input
                  type="text"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  placeholder="e.g., Database & SQL, Desktop App"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Status
                </label>
                <select
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value as any)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
                >
                  <option value="Academic Project">Academic Project</option>
                  <option value="Featured">Featured</option>
                  <option value="Coming Soon">Coming Soon</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Short Description
                </label>
                <textarea
                  rows={3}
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="Describe the business problem solved, tech used, and outcomes..."
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  value={newTags}
                  onChange={(e) => setNewTags(e.target.value)}
                  placeholder="e.g. SQL, Normalization, Kabarak DBIT"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold text-white bg-[#0B192C] hover:bg-[#1E3E62] rounded-lg shadow-sm"
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
