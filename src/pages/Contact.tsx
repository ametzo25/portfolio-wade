import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-gray-900 text-gray-100 px-4 py-10 max-w-xl mx-auto font-sans">
      <h2 className="text-xl sm:text-2xl font-semibold mb-8 text-center">{t('contact.title')}</h2>

      <div className="space-y-4 text-sm sm:text-base text-gray-300">
        <p className="text-center">{t('contact.text')}</p>

        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-blue-400" />
            <a href="mailto:ametzo25@icloud.com" className="hover:underline text-blue-400">
              ametzo25@icloud.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Github className="w-5 h-5 text-gray-400" />
            <a href="https://github.com/ametzo25" target="_blank" rel="noopener noreferrer" className="hover:underline">
              github.com/ametzo25
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Linkedin className="w-5 h-5 text-blue-500" />
            <a href="https://www.linkedin.com/in/mouhamed-wade-dev/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn : Mouhamed Wade
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
