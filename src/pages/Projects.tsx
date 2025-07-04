import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: 'SumaOps',
      description: t('projects.sumaopsDescription'),
      link: 'https://github.com/ametzo25/sumaops',
      image: '/assets/projects/sumaops.png',
      tags: ['Open Source', 'Kubernetes', 'WIP'],
    },
    // Ajoute plus tard d’autres projets ici
  ];


  return (
    <section className="min-h-screen bg-gray-900 text-gray-100 px-4 py-10 max-w-5xl mx-auto font-sans">
      <h2 className="text-xl sm:text-2xl font-semibold mb-8 text-center">{t('projects.title')}</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, idx) => (
          <ProjectCard
            key={idx}
            title={proj.title}
            description={proj.description}
            link={proj.link}
            image={proj.image}        // <-- ici
            tags={proj.tags}  
          />
        ))}
      </div>
    </section>
  );
}
