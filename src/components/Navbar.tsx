import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n/i18n';

export default function Navbar() {
  const { t } = useTranslation();

  const linkStyle =
    'text-sm sm:text-base text-gray-300 hover:text-white transition px-2 sm:px-3 py-2';

  const activeStyle = 'text-blue-400 font-semibold';
  const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng);
};

  return (
    <nav className="bg-gray-800 px-4 py-3 shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-sm sm:text-lg font-bold text-white">Mouhamed Wade</h1>
        <div className="flex space-x-2 sm:space-x-4">
          <NavLink to="/" end className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ''}`}>
            {t('nav.home')}
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ''}`}>
            {t('nav.about')}
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ''}`}>
            {t('nav.projects')}
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ''}`}>
            {t('nav.contact')}
          </NavLink>
        </div>
        <div className="flex items-center space-x-2 ml-4">
          <button onClick={() => changeLanguage('fr')} title="Français">
            🇫🇷
          </button>
          <button onClick={() => changeLanguage('en')} title="English">
            🇬🇧
          </button>
          <button onClick={() => changeLanguage('it')} title="Italiano">
            🇮🇹
          </button>
        </div>
      </div>
    </nav>
  );
}
