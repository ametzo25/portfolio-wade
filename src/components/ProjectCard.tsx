import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  image?: string;
  tags?: string[];
}

export default function ProjectCard({
  title,
  description,
  link,
  image,
  tags = [],
}: ProjectCardProps) {
  return (
    <div className="bg-gray-800 p-4 rounded-2xl shadow hover:shadow-lg transition duration-200">
      {image && (
        <div className="w-full h-40 mb-4 overflow-hidden rounded-t-2xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}


      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="bg-gray-700 text-xs text-gray-200 px-2 py-0.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-sm text-gray-300 mb-3">{description}</p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 text-sm hover:underline"
      >
        Voir sur GitHub
      </a>
    </div>
  );
}
