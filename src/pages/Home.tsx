import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <section className="text-gray-100 font-sans">
      {/* Cover image */}
      <div className="relative">
        <img
          src="/assets/cover.jpg"
          alt="Cover"
          className="w-full h-[160px] sm:h-[180px] object-cover brightness-75"
        />
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
          <img
            src="/assets/profile.jpg"
            alt="Profile"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-gray-900 shadow-xl object-cover"
          />
        </div>
      </div>

      {/* Text intro */}
      <div className="pt-14 pb-6 px-3 text-center bg-gray-900">
        <h1 className="text-xl sm:text-2xl font-medium mb-1">{t('home.greeting')}</h1>
        <p className="text-sm sm:text-base text-gray-300">{t('home.title')}</p>
        <p className="text-xs sm:text-sm text-gray-400 mt-2 max-w-lg mx-auto leading-relaxed">
          {t('home.description')}
        </p>
      </div>
    </section>
  );
}
