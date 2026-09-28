import React from 'react';
import { PERSONAL_INFO, STATISTICS_DATA } from '../data/portfolioData';
import { Building2, GraduationCap, Compass, Layers, Database, Network, Binary, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  const coreInterests = [
    {
      title: "Business Technology",
      description: "Understanding how modern digital tools, ERPs, and information systems empower organizations to streamline day-to-day operations.",
      icon: Layers,
    },
    {
      title: "Databases & SQL",
      description: "Structuring relational schemas, maintaining data normalization, and writing queries that power organizational reporting.",
      icon: Database,
    },
    {
      title: "Data Analysis",
      description: "Evaluating quantitative records and business metrics to uncover operational patterns and support leadership decisions.",
      icon: Binary,
    },
    {
      title: "Networking & IT Infrastructure",
      description: "Grasping fundamental LAN setups, network protocols, hardware troubleshooting, and enterprise workstation support.",
      icon: Network,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold tracking-widest text-[#C59B27] uppercase mb-2">
            Professional Profile
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
            About Me
          </h2>
          <div className="h-1 w-16 bg-[#D4AF37] mt-3 rounded-full" />
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Biography Prose & Key Focus */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Biography paragraphs as supplied */}
            <div className="prose prose-slate text-slate-700 leading-relaxed text-base space-y-4">
              <p>
                I am currently pursuing a <strong>Diploma in Business Information Technology</strong> at <strong>Kabarak University</strong>. My studies have given me exposure to both business and information technology, allowing me to understand how technology can support organizations, improve processes, manage information, and solve business problems.
              </p>
              <p>
                I am particularly interested in business technology, databases, data analysis, software applications, networking, and digital solutions.
              </p>
              <p>
                I am looking forward to gaining practical industry experience through industrial attachment and continuing to develop my technical and professional skills.
              </p>
            </div>

            {/* Core Interests Grid */}
            <div className="pt-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-4 flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#C59B27]" />
                <span>Primary Areas of Focus</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coreInterests.map((interest) => {
                  const Icon = interest.icon;
                  return (
                    <div
                      key={interest.title}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 transition-all text-left"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#0B192C] text-[#D4AF37] flex items-center justify-center mb-3">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1">
                        {interest.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-normal">
                        {interest.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* University & Academic Trust Markers */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-slate-900 to-[#0B192C] text-white flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/15">
                <Building2 className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div className="space-y-0.5 text-left">
                <p className="text-xs text-[#D4AF37] font-semibold tracking-wide">
                  Academic Institution
                </p>
                <p className="text-sm sm:text-base font-bold text-white">
                  Kabarak University, Nakuru, Kenya
                </p>
                <p className="text-xs text-slate-300">
                  School of Science, Engineering & Technology / Business IT Studies
                </p>
              </div>
            </div>

          </div>

          {/* Right: Statistics Card Area */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Clean Statistics Box */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 shadow-sm text-left">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
                <GraduationCap className="w-5 h-5 text-[#C59B27]" />
                <h3 className="text-base font-bold text-slate-900">
                  Academic & Attachment Status
                </h3>
              </div>

              <div className="divide-y divide-slate-200/80">
                {STATISTICS_DATA.map((item) => (
                  <div key={item.label} className="py-3.5 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                      {item.label}
                    </span>
                    <span className="text-sm font-bold text-[#0B192C] text-right">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200 text-xs text-slate-600 bg-white p-3.5 rounded-xl border border-slate-100 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p>
                  Official student credentials and verification letters can be provided by Kabarak University upon attachment placement request.
                </p>
              </div>
            </div>

            {/* Kabarak Campus Visual Anchor */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 relative group">
              <div className="aspect-video w-full bg-slate-200 overflow-hidden relative">
                <img
                  src="/src/assets/images/kabarak_academic_banner_1790609228161.jpg"
                  alt="Kabarak University Academic Campus"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='340' viewBox='0 0 600 340'><rect width='600' height='340' fill='%230B192C'/><text x='300' y='170' font-family='sans-serif' font-size='20' fill='%23D4AF37' text-anchor='middle'>Kabarak University · Kenya</text></svg>";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/90 via-[#0B192C]/30 to-transparent flex items-end p-4">
                  <div className="text-left text-white">
                    <p className="text-xs font-semibold text-[#D4AF37]">Academic Environment</p>
                    <p className="text-sm font-bold">Bridging Business Strategy with IT Solutions</p>
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
