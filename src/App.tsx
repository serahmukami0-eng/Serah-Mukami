/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Attachment } from './components/Attachment';
import { Experience } from './components/Experience';
import { Certificates } from './components/Certificates';
import { CvSection } from './components/CvSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { RevealOnScroll } from './components/RevealOnScroll';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  
  // Persistent profile photo (default to generated high-res portrait)
  const defaultProfilePhoto = '/src/assets/images/serah_mukami_profile_1790609199657.jpg';
  const [profileImage, setProfileImage] = useState<string>(() => {
    return localStorage.getItem('serah_profile_photo') || defaultProfilePhoto;
  });

  const [customCvUrl, setCustomCvUrl] = useState<string | undefined>(() => {
    return localStorage.getItem('serah_custom_cv_url') || undefined;
  });

  const handleUpdateProfileImage = (newUrl: string) => {
    setProfileImage(newUrl);
    try {
      localStorage.setItem('serah_profile_photo', newUrl);
    } catch {
      // In case quota exceeded for large data URLs
    }
  };

  const handleUploadCv = (file: File) => {
    const objectUrl = URL.createObjectURL(file);
    setCustomCvUrl(objectUrl);
    localStorage.setItem('serah_custom_cv_url', objectUrl);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans selection:bg-[#0B192C] selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Print-Only Document Top Header */}
        <div className="hidden print:flex print-document-header">
          <div>
            <span className="font-bold text-[#0B192C] text-sm">SERAH MUKAMI</span>
            <span className="text-slate-500 text-xs"> — Diploma in Business Information Technology (DBIT)</span>
          </div>
          <div className="text-xs text-slate-600 text-right">
            Kabarak University, Kenya · mukamiserah4@gmail.com
          </div>
        </div>

        <Hero
          onOpenCvModal={() => setIsCvModalOpen(true)}
          profileImage={profileImage}
          onUpdateProfileImage={handleUpdateProfileImage}
        />
        
        <RevealOnScroll direction="up">
          <About />
        </RevealOnScroll>

        <RevealOnScroll direction="up">
          <Skills />
        </RevealOnScroll>

        <RevealOnScroll direction="up">
          <Projects />
        </RevealOnScroll>

        <RevealOnScroll direction="up">
          <Education />
        </RevealOnScroll>

        <RevealOnScroll direction="up">
          <Attachment />
        </RevealOnScroll>

        <RevealOnScroll direction="up">
          <Experience />
        </RevealOnScroll>

        <RevealOnScroll direction="up">
          <Certificates />
        </RevealOnScroll>

        <RevealOnScroll direction="up">
          <CvSection
            onOpenCvModal={() => setIsCvModalOpen(true)}
            customCvUrl={customCvUrl}
            onUploadCv={handleUploadCv}
          />
        </RevealOnScroll>

        <RevealOnScroll direction="up">
          <Contact />
        </RevealOnScroll>

        {/* Print-Only Document Bottom Footer */}
        <div className="hidden print:block text-center text-xs text-slate-500 pt-6 mt-6 border-t border-slate-300">
          <p className="font-semibold text-slate-700">Serah Mukami · Professional Portfolio</p>
          <p className="text-[11px] text-slate-500 mt-0.5">
            Diploma in Business Information Technology · Kabarak University, Kenya · Available for 2027 Industrial Attachment
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Global CV Interactive Viewer & Downloader Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
        customCvUrl={customCvUrl}
        onUploadCv={handleUploadCv}
      />
    </div>
  );
}
