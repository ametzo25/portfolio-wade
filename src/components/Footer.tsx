import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Mail, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-gray-400 text-sm px-4 py-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} Mouhamed Wade. {t('footer.rights')}
        </p>

        <div className="flex gap-4">
          <Link to="/" className="hover:text-white">{t('nav.home')}</Link>
          <Link to="/about" className="hover:text-white">{t('nav.about')}</Link>
          <Link to="/projects" className="hover:text-white">{t('nav.projects')}</Link>
          <Link to="/contact" className="hover:text-white">{t('nav.contact')}</Link>
        </div>

        <div className="flex gap-4 items-center">
          <a href="mailto:ametzo25@icloud.com" title="Email" className="hover:text-white">
            <Mail size={18} />
          </a>
          <a href="https://github.com/ametzo25" target="_blank" rel="noopener noreferrer" title="GitHub" className="hover:text-white">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/mouhamed-wade-dev/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

