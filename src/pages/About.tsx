import React from 'react';
import { useTranslation } from 'react-i18next';


export default function About() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.split('-')[0];
  

  const experiences = t('about.experiences', { returnObjects: true }) as any[];
  const education = t('about.education', { returnObjects: true }) as any[];

  return (
    <section className="min-h-screen bg-gray-900 text-gray-100 px-4 py-10 max-w-3xl mx-auto font-sans">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">{t('about.title')}</h2>

      <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed mb-10">
        <p>{t('about.paragraph1')}</p>
        <p>{t('about.paragraph2')}</p>
      </div>

      <div className="mb-10">
        <h3 className="text-lg font-bold mb-4 text-white">{t('about.experienceTitle')}</h3>
        <ul className="space-y-4">
          {experiences.map((exp, idx) => (
            <li key={idx} className="bg-gray-800 p-4 rounded shadow">
              <p className="font-semibold">{exp.role} – {exp.company}</p>
              <p className="text-sm text-gray-400">{exp.period}</p>
              <p className="text-sm mt-1">{exp.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4 text-white">{t('about.educationTitle')}</h3>
        <ul className="space-y-4">
          {education.map((edu, idx) => (
            <li key={idx} className="bg-gray-800 p-4 rounded shadow">
              <p className="font-semibold">{edu.degree}</p>
              <p className="text-sm text-gray-400">{edu.school} – {edu.period}</p>
              <p className="text-sm mt-1">{edu.details}</p>
            </li>
          ))}
        </ul>
      </div>
      <a
        href={`/assets/cv/cv-mouhamed-wade-${lang}.pdf`}
        download
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mt-6 transition"
      >
        📄 {t('about.downloadCv')}
      </a>

    </section>
    
    
  );
}
