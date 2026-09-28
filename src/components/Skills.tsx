import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { 
  FileText, 
  Table, 
  Presentation, 
  Database, 
  Monitor, 
  Code2, 
  Layers, 
  Terminal, 
  Globe, 
  Network, 
  BarChart3, 
  Cpu,
  CheckCircle,
  Briefcase
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Business & Productivity',
    'Programming',
    'Databases',
    'Networking',
    'Data & Analytics'
  ];

  // Helper to map skill names to appropriate icons
  const getSkillIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'microsoft word':
        return <FileText className="w-5 h-5 text-blue-600" />;
      case 'microsoft excel':
        return <Table className="w-5 h-5 text-emerald-600" />;
      case 'microsoft powerpoint':
        return <Presentation className="w-5 h-5 text-orange-600" />;
      case 'microsoft access':
        return <Database className="w-5 h-5 text-rose-600" />;
      case 'computer applications':
        return <Monitor className="w-5 h-5 text-indigo-600" />;
      case 'vb.net':
        return <Code2 className="w-5 h-5 text-purple-600" />;
      case 'desktop application programming':
        return <Layers className="w-5 h-5 text-blue-700" />;
      case 'c programming fundamentals':
        return <Terminal className="w-5 h-5 text-slate-700" />;
      case 'web development fundamentals':
        return <Globe className="w-5 h-5 text-teal-600" />;
      case 'sql':
      case 'database management':
        return <Database className="w-5 h-5 text-amber-600" />;
      case 'networking fundamentals':
        return <Network className="w-5 h-5 text-sky-600" />;
      case 'data analysis':
        return <BarChart3 className="w-5 h-5 text-green-600" />;
      case 'business information systems':
        return <Cpu className="w-5 h-5 text-[#0B192C]" />;
      default:
        return <Briefcase className="w-5 h-5 text-slate-600" />;
    }
  };

  const filteredCategories = selectedCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter(cat => cat.category === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 text-left">
          <p className="text-xs font-bold tracking-widest text-[#C59B27] uppercase mb-2">
            Technical Competencies
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Categorized technical capabilities acquired through practical coursework, laboratory assignments, and independent study in Business Information Technology at Kabarak University.
          </p>
          <div className="h-1 w-16 bg-[#D4AF37] mt-3 rounded-full" />
        </div>

        {/* Category Filter Controls (Segmented Tabs) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/70 rounded-xl mb-12 max-w-fit no-print">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B192C] ${
                selectedCategory === category
                  ? 'bg-[#0B192C] text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-300/60'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Category Blocks */}
        <div className="space-y-12">
          {filteredCategories.map((catGroup) => (
            <div key={catGroup.category} className="space-y-4 text-left">
              
              {/* Category Header Strip */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-slate-300">
                <div>
                  <h3 className="text-xl font-bold text-[#0B192C] tracking-tight">
                    {catGroup.category}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {catGroup.description}
                  </p>
                </div>
                <span className="text-xs font-medium text-slate-500 tabular-nums">
                  {catGroup.skills.length} {catGroup.skills.length === 1 ? 'skill area' : 'skill areas'}
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {catGroup.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top icon and level tag */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                          {getSkillIcon(skill.name)}
                        </div>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                          {skill.level}
                        </span>
                      </div>

                      {/* Skill Name */}
                      <h4 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-[#0B192C] transition-colors">
                        {skill.name}
                      </h4>

                      {/* Skill Description */}
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {skill.description}
                      </p>
                    </div>

                    {/* Practical Application Area */}
                    <div className="pt-3 border-t border-slate-100 flex items-start gap-1.5 text-[11px] text-slate-500">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-tight font-medium text-slate-700">
                        Application: {skill.useCase}
                      </span>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Note on Academic Rigor */}
        <div className="mt-14 p-5 rounded-xl bg-slate-100 border border-slate-200 text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-sm font-bold text-slate-900">
              Pragmatic Business IT Foundation
            </p>
            <p className="text-xs text-slate-600">
              Serah's coursework prioritizes how databases, networking, and software tools directly serve organizational efficiency and reporting.
            </p>
          </div>
          <a
            href="#attachment"
            className="px-4 py-2 text-xs font-semibold text-[#0B192C] bg-[#D4AF37] hover:bg-[#C59B27] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm no-print"
          >
            Review Attachment Preparedness
          </a>
        </div>

      </div>
    </section>
  );
};
