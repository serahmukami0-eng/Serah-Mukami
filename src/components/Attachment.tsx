import React, { useState } from 'react';
import { ATTACHMENT_DATA } from '../data/portfolioData';
import { 
  Briefcase, 
  ArrowRight, 
  Building, 
  Calendar, 
  UserCheck, 
  ListChecks, 
  Award, 
  FileCheck,
  CheckCircle,
  Clock,
  Sparkles,
  Edit2
} from 'lucide-react';

export const Attachment: React.FC = () => {
  const [isPlaced, setIsPlaced] = useState(false);
  const [attachmentDetails, setAttachmentDetails] = useState({
    organization: "Seeking Placement (Kenya)",
    department: "ICT / Business Information Systems",
    period: "2027 Industrial Attachment Period",
    supervisor: "Industry Supervisor (To be assigned)",
    responsibilities: "Information systems support, database maintenance, user assistance, business process digitization.",
    skillsAcquired: "Corporate workflow adaptation, technical problem solving, teamwork, live systems monitoring.",
    projectsCompleted: "Attachment Technical Logbook, workplace process optimization, and comprehensive final report."
  });

  const [isEditing, setIsEditing] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="attachment" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <p className="text-xs font-bold tracking-widest text-[#C59B27] uppercase mb-2">
            Industry Engagement
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
            Industrial Attachment
          </h2>
          <div className="h-1 w-16 bg-[#D4AF37] mt-3 rounded-full" />
        </div>

        {/* Featured Callout Banner: "Seeking Industrial Attachment Opportunity — 2027" */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0B192C] via-[#10243E] to-[#1A385E] text-white p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-800 text-left mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{ATTACHMENT_DATA.statusBadge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Seeking Industrial Attachment Opportunity — 2027
              </h3>

              {/* Exact user-provided description */}
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                "{ATTACHMENT_DATA.quote}"
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  <span>{ATTACHMENT_DATA.availability}</span>
                </span>
                <span>·</span>
                <span>Duration: {ATTACHMENT_DATA.targetDuration}</span>
                <span>·</span>
                <span>Institution: Kabarak University</span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="shrink-0 flex flex-col gap-3 no-print">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-[#0B192C] bg-[#D4AF37] hover:bg-[#C59B27] transition-all shadow-lg shadow-[#D4AF37]/20 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span>Contact Me About Attachment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsEditing(true)}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
              >
                <Edit2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Update Attachment Details</span>
              </button>
            </div>

          </div>
        </div>

        {/* Current State Indicator: "Attachment Opportunity — Coming Soon" */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          
          {/* Left Column: Industrial Attachment Record / Future Entry Areas */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                <div>
                  <h4 className="text-lg font-bold text-[#0B192C]">
                    Industrial Attachment Record & Placement Profile
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Structure reserved for recording formal industrial attachment placement credentials.
                  </p>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                  {isPlaced ? 'Placement Active' : 'Attachment Opportunity — Coming Soon'}
                </span>
              </div>

              {/* Form / Field Display Grid as requested */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Organization */}
                <div className="p-4 rounded-xl bg-white border border-slate-200/80">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    <Building className="w-4 h-4 text-[#0B192C]" />
                    <span>Organization</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-900">
                    {attachmentDetails.organization}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Host enterprise or company</p>
                </div>

                {/* Department */}
                <div className="p-4 rounded-xl bg-white border border-slate-200/80">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    <Briefcase className="w-4 h-4 text-[#0B192C]" />
                    <span>Department</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-900">
                    {attachmentDetails.department}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Assigned functional division</p>
                </div>

                {/* Attachment Period */}
                <div className="p-4 rounded-xl bg-white border border-slate-200/80">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    <Calendar className="w-4 h-4 text-[#0B192C]" />
                    <span>Attachment Period</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-900">
                    {attachmentDetails.period}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Scheduled semester timeframe</p>
                </div>

                {/* Supervisor */}
                <div className="p-4 rounded-xl bg-white border border-slate-200/80">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    <UserCheck className="w-4 h-4 text-[#0B192C]" />
                    <span>Supervisor</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-900">
                    {attachmentDetails.supervisor}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Industry mentor & assessor</p>
                </div>

              </div>

              {/* Extended fields: Responsibilities, Skills Acquired, Projects Completed */}
              <div className="mt-4 space-y-3">
                
                <div className="p-4 rounded-xl bg-white border border-slate-200/80">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    <ListChecks className="w-4 h-4 text-emerald-600" />
                    <span>Responsibilities</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {attachmentDetails.responsibilities}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    <Award className="w-4 h-4 text-[#C59B27]" />
                    <span>Skills Acquired</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {attachmentDetails.skillsAcquired}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    <FileCheck className="w-4 h-4 text-blue-600" />
                    <span>Projects Completed</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {attachmentDetails.projectsCompleted}
                  </p>
                </div>

              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                <span>Fields ready for immediate updates upon corporate agreement.</span>
                <button
                  onClick={() => setIsEditing(true)}
                  className="font-bold text-[#0B192C] hover:underline no-print"
                >
                  Edit Attachment Fields Now
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Value to Prospective Employers */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C59B27]" />
                <span>Target Attachment Roles</span>
              </h4>

              <div className="space-y-2.5">
                {ATTACHMENT_DATA.targetDepartments.map((dept, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-xl bg-white border border-slate-200/80 text-xs font-medium text-slate-800 flex items-start gap-2.5"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{dept}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-600 space-y-2">
                <p className="font-semibold text-slate-800">
                  Why recruit a Kabarak DBIT attache?
                </p>
                <p className="leading-relaxed">
                  Students combine rigorous understanding of business operations with practical IT application—capable of immediate utility in database auditing, IT helpdesk, data entry verification, and office productivity automation.
                </p>
              </div>

              <div className="mt-5 no-print">
                <button
                  onClick={scrollToContact}
                  className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#0B192C] hover:bg-[#1E3E62] rounded-xl transition-colors shadow-sm"
                >
                  Send Attachment Inquiry
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Edit Attachment Modal */}
      {isEditing && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 text-left no-print">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Update Attachment Details
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Enter details once your 2027 industrial attachment is confirmed.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsPlaced(true);
                setIsEditing(false);
              }}
              className="space-y-3"
            >
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Organization</label>
                <input
                  type="text"
                  value={attachmentDetails.organization}
                  onChange={(e) => setAttachmentDetails({ ...attachmentDetails, organization: e.target.value })}
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Department</label>
                <input
                  type="text"
                  value={attachmentDetails.department}
                  onChange={(e) => setAttachmentDetails({ ...attachmentDetails, department: e.target.value })}
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Attachment Period</label>
                <input
                  type="text"
                  value={attachmentDetails.period}
                  onChange={(e) => setAttachmentDetails({ ...attachmentDetails, period: e.target.value })}
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Supervisor</label>
                <input
                  type="text"
                  value={attachmentDetails.supervisor}
                  onChange={(e) => setAttachmentDetails({ ...attachmentDetails, supervisor: e.target.value })}
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Responsibilities</label>
                <textarea
                  rows={2}
                  value={attachmentDetails.responsibilities}
                  onChange={(e) => setAttachmentDetails({ ...attachmentDetails, responsibilities: e.target.value })}
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Skills Acquired</label>
                <textarea
                  rows={2}
                  value={attachmentDetails.skillsAcquired}
                  onChange={(e) => setAttachmentDetails({ ...attachmentDetails, skillsAcquired: e.target.value })}
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Projects Completed</label>
                <textarea
                  rows={2}
                  value={attachmentDetails.projectsCompleted}
                  onChange={(e) => setAttachmentDetails({ ...attachmentDetails, projectsCompleted: e.target.value })}
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold text-white bg-[#0B192C] hover:bg-[#1E3E62] rounded-lg shadow-sm"
                >
                  Save Attachment Data
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
