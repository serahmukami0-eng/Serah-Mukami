import React, { useState } from 'react';
import { CERTIFICATES_DATA } from '../data/portfolioData';
import { CertificateItem } from '../types';
import { Award, PlusCircle, CheckCircle, Clock, ExternalLink, Edit2, ShieldAlert } from 'lucide-react';

export const Certificates: React.FC = () => {
  const [certificates, setCertificates] = useState<CertificateItem[]>(CERTIFICATES_DATA);
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // Form states
  const [certTitle, setCertTitle] = useState('');
  const [certIssuer, setCertIssuer] = useState('');
  const [certCategory, setCertCategory] = useState('');
  const [certStatus, setCertStatus] = useState<'Placeholder' | 'In Progress' | 'Completed'>('In Progress');

  const handleSaveCertificate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certTitle.trim()) return;

    if (selectedCert) {
      // Editing existing
      setCertificates(certificates.map(c => c.id === selectedCert.id ? {
        ...c,
        title: certTitle,
        issuer: certIssuer || 'Accredited Issuing Body',
        category: certCategory || 'IT Certification',
        status: certStatus,
        date: certStatus === 'Completed' ? 'Verified 2026' : 'In Progress'
      } : c));
      setSelectedCert(null);
    } else {
      // Adding new
      const newCert: CertificateItem = {
        id: `cert-${Date.now()}`,
        title: certTitle,
        issuer: certIssuer || 'Accredited Issuing Body',
        category: certCategory || 'Technical Training',
        date: certStatus === 'Completed' ? 'Verified 2026' : 'In Progress',
        status: certStatus
      };
      setCertificates([...certificates, newCert]);
      setShowAddModal(false);
    }

    setCertTitle('');
    setCertIssuer('');
    setCertCategory('');
  };

  const openEdit = (cert: CertificateItem) => {
    setSelectedCert(cert);
    setCertTitle(cert.title);
    setCertIssuer(cert.issuer);
    setCertCategory(cert.category);
    setCertStatus(cert.status);
    setShowAddModal(true);
  };

  return (
    <section id="certificates" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 text-left">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-widest text-[#C59B27] uppercase mb-2">
              Continuous Learning
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
              Certificates & Professional Development
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Structured placeholders for professional certifications, vendor credentials, and technical workshops underway alongside Kabarak University DBIT coursework.
            </p>
            <div className="h-1 w-16 bg-[#D4AF37] mt-3 rounded-full" />
          </div>

          <button
            onClick={() => {
              setSelectedCert(null);
              setCertTitle('');
              setCertIssuer('');
              setCertCategory('');
              setCertStatus('In Progress');
              setShowAddModal(true);
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#0B192C] hover:bg-[#1E3E62] rounded-lg transition-colors shrink-0 self-start md:self-end shadow-sm no-print"
          >
            <PlusCircle className="w-4 h-4 text-[#D4AF37]" />
            <span>Add Certificate</span>
          </button>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon & Status */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#D4AF37] shadow-sm">
                    <Award className="w-5 h-5" />
                  </div>
                  
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded border ${
                    cert.status === 'Completed'
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      : cert.status === 'In Progress'
                      ? 'bg-blue-50 text-blue-800 border-blue-200'
                      : 'bg-slate-100 text-slate-600 border-slate-200'
                  }`}>
                    {cert.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0B192C] transition-colors mb-1">
                  {cert.title}
                </h3>

                {/* Category & Issuer */}
                <p className="text-xs text-slate-500 font-medium mb-2">
                  {cert.category}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {cert.issuer}
                </p>
              </div>

              {/* Bottom Action Area */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <span className="text-slate-400 tabular-nums flex items-center gap-1 text-[11px]">
                  <Clock className="w-3 h-3" />
                  <span>{cert.date}</span>
                </span>
                <button
                  onClick={() => openEdit(cert)}
                  className="inline-flex items-center gap-1 text-[#0B192C] font-semibold hover:text-[#C59B27] transition-colors no-print"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                  <span>Update</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Anti-Slop Academic Ethics Banner */}
        <div className="mt-12 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-left">
          <ShieldAlert className="w-5 h-5 text-slate-400 shrink-0" />
          <div className="text-xs text-slate-600">
            <span className="font-semibold text-slate-800">Verified Credentials Policy: </span>
            In adherence to professional academic standards, certificates and courses are presented as placeholders until accredited verification documents are submitted.
          </div>
        </div>

      </div>

      {/* Add / Edit Certificate Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 text-left no-print">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              {selectedCert ? 'Edit Certificate Entry' : 'Add Certificate / Course'}
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Enter course or workshop details to update your portfolio.
            </p>

            <form onSubmit={handleSaveCertificate} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Certificate / Course Title *
                </label>
                <input
                  type="text"
                  required
                  value={certTitle}
                  onChange={(e) => setCertTitle(e.target.value)}
                  placeholder="e.g. Cisco CCNA: Introduction to Networks"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Issuing Organization / Academy
                </label>
                <input
                  type="text"
                  value={certIssuer}
                  onChange={(e) => setCertIssuer(e.target.value)}
                  placeholder="e.g. Cisco Networking Academy / Microsoft Learn"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Domain Category
                </label>
                <input
                  type="text"
                  value={certCategory}
                  onChange={(e) => setCertCategory(e.target.value)}
                  placeholder="e.g. Networking, SQL, Business IT"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Status
                </label>
                <select
                  value={certStatus}
                  onChange={(e) => setCertStatus(e.target.value as any)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
                >
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Placeholder">Placeholder</option>
                </select>
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
                  Save Credential
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
