#!/bin/bash

echo "Création de l’arborescence du portfolio..."

# Création des dossiers
mkdir -p public/assets
mkdir -p src/components
mkdir -p src/pages
mkdir -p src/i18n

# Création des fichiers vides ou de base
touch src/pages/Home.tsx
touch src/pages/Projects.tsx
touch src/pages/About.tsx
touch src/pages/Contact.tsx

cat > src/App.tsx << EOF
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
EOF

cat > src/main.tsx << EOF
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
EOF

# Fichiers de traduction JSON vides à remplir plus tard
echo '{}' > src/i18n/fr.json
echo '{}' > src/i18n/en.json
echo '{}' > src/i18n/it.json

# Config Tailwind de base
cat > tailwind.config.js << EOF
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOF

# Config Vite TS de base
cat > vite.config.ts << EOF
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
EOF

# package.json minimal
cat > package.json << EOF
{
  "name": "portfolio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.11.1",
    "i18next": "^23.0.1",
    "react-i18next": "^13.0.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "typescript": "^5.0.0",
    "vite": "^4.0.0",
    "tailwindcss": "^3.3.2",
    "postcss": "^8.4.21",
    "autoprefixer": "^10.4.14"
  }
}
EOF

# README minimal
cat > README.md << EOF
# Portfolio de Mouhamed Wade

Portfolio personnel développé avec React, Vite, TailwindCSS et support multilingue.

## Installation

\`\`\`bash
npm install
npm run dev
\`\`\`
EOF

echo "Arborescence créée avec succès !"
