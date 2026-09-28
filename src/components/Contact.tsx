import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  CheckCircle2, 
  Clock, 
  Building2,
  Edit2
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Editable contact info state
  const [contactInfo, setContactInfo] = useState({
    email: PERSONAL_INFO.email,
    phone: PERSONAL_INFO.phone,
    linkedin: PERSONAL_INFO.linkedin,
    github: PERSONAL_INFO.github,
    location: PERSONAL_INFO.location
  });

  const [showEditContact, setShowEditContact] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleMailto = () => {
    const subject = encodeURIComponent(formData.subject || 'Industrial Attachment / Professional Inquiry');
    const body = encodeURIComponent(`Hello Serah,\n\nMy name is ${formData.name || '[Your Name]'}.\n\n${formData.message || ''}\n\nBest regards,\n${formData.name || ''}\n${formData.email || ''}`);
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <p className="text-xs font-bold tracking-widest text-[#C59B27] uppercase mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
            Let's Connect
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Interested in discussing an industrial attachment opportunity for 2027, an academic project collaboration, or professional networking? Please send a message below.
          </p>
          <div className="h-1 w-16 bg-[#D4AF37] mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left">
          
          {/* Left Column: Contact Channels & University Context */}
          <div className="lg:col-span-5 print:col-span-12 space-y-6">
            
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <h3 className="text-lg font-bold text-[#0B192C]">
                  Contact Information
                </h3>
                <button
                  onClick={() => setShowEditContact(true)}
                  className="p-1.5 text-slate-500 hover:text-[#0B192C] hover:bg-slate-200 rounded-lg transition-colors no-print"
                  title="Edit contact placeholders"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                
                {/* Email */}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-start gap-3 hover:border-slate-300 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Email Address
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors break-all">
                      {contactInfo.email}
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Telephone
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800">
                      {contactInfo.phone}
                    </p>
                    <p className="text-[10px] text-slate-400">Available on resume / formal inquiry</p>
                  </div>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Location & Campus
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800">
                      Kabarak University, Nakuru, Kenya
                    </p>
                    <p className="text-[10px] text-slate-400">Open to attachment across Kenya / Remote</p>
                  </div>
                </div>

              </div>

              {/* Social Channels (Editable Links) */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Professional Profiles
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-blue-700 hover:border-blue-300 transition-colors shadow-sm"
                  >
                    <Linkedin className="w-4 h-4 text-blue-600" />
                    <span>LinkedIn Profile</span>
                  </a>

                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:border-slate-400 transition-colors shadow-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Profile</span>
                  </a>
                </div>
              </div>

              {/* Attachment Response Commitment */}
              <div className="p-3.5 rounded-xl bg-[#0B192C] text-white text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-[#D4AF37]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Prompt Response Commitment</span>
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Serah routinely monitors email communications for industrial attachment notices, academic inquiries, and interview invitations.
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 no-print">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
              
              <div className="mb-6 pb-3 border-b border-slate-200">
                <h3 className="text-lg font-bold text-[#0B192C]">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Fill in your details and Serah will get back to you promptly.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 px-6 text-center space-y-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-emerald-900">
                      Thank You, Message Sent!
                    </h4>
                    <p className="text-xs text-emerald-700 max-w-md mx-auto leading-relaxed">
                      Your inquiry has been received. Serah Mukami will review your message and reply via email ({formData.email || 'your email address'}).
                    </p>
                  </div>
                  <div className="pt-2 flex justify-center gap-3">
                    <button
                      onClick={handleMailto}
                      className="px-4 py-2 text-xs font-semibold text-emerald-800 bg-white border border-emerald-300 rounded-lg hover:bg-emerald-100 transition-colors"
                    >
                      Open in Email App
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2 text-xs font-semibold text-slate-700 bg-emerald-100/50 hover:bg-emerald-100 rounded-lg transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe / HR Manager"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B192C] focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. manager@organization.co.ke"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B192C] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Subject / Purpose *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Industrial Attachment 2027 / ICT Opportunity"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B192C] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please outline the organization, opportunity details, or questions..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B192C] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#0B192C] hover:bg-[#1E3E62] disabled:opacity-50 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
                    >
                      <Send className="w-4 h-4 text-[#D4AF37]" />
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleMailto}
                      className="text-xs text-slate-600 hover:text-[#0B192C] font-semibold underline underline-offset-4"
                    >
                      Or launch your default email client
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>

      {/* Edit Contact Details Modal */}
      {showEditContact && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 text-left no-print">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Personalize Contact Details
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Update your email, phone, or LinkedIn profile URL.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowEditContact(false);
              }}
              className="space-y-3"
            >
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Phone Placeholder</label>
                <input
                  type="text"
                  value={contactInfo.phone}
                  onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">LinkedIn URL</label>
                <input
                  type="text"
                  value={contactInfo.linkedin}
                  onChange={(e) => setContactInfo({ ...contactInfo, linkedin: e.target.value })}
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">GitHub URL</label>
                <input
                  type="text"
                  value={contactInfo.github}
                  onChange={(e) => setContactInfo({ ...contactInfo, github: e.target.value })}
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowEditContact(false)}
                  className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold text-white bg-[#0B192C] hover:bg-[#1E3E62] rounded-lg shadow-sm"
                >
                  Update Information
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
