// Import the projects array (assuming it's in a separate file)
import { projects } from './projects.js';

// Load project details on the project detail page
document.addEventListener('DOMContentLoaded', () => {
  const projectDetailContainer = document.getElementById('project-detail');
  
  if (projectDetailContainer) {
    // Get project ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    
    // Find the project
    const project = projects.find(p => p.id === projectId);
    
    if (project) {
      // Update page title
      document.title = `${project.title} - Portfolio Personnel`;
      
      // Create HTML for project detail
      const projectHTML = `
        <div class="project-info">
          <h1 class="project-title">${project.title}</h1>
          <div class="tech-badges">
            ${project.technologies.map(tech => `
              <span class="badge">${tech}</span>
            `).join('')}
          </div>
          <div class="project-section">
            <p class="project-description">${project.description}</p>
            <h3 class="project-section-title">À propos du projet</h3>
            <p>${project.fullDescription}</p>
          </div>
          <div class="project-section">
            <h3 class="project-section-title">Fonctionnalités principales</h3>
            <ul class="project-features">
              ${project.features.map(feature => `
                <li>${feature}</li>
              `).join('')}
            </ul>
          </div>
          <div class="project-section">
            <h3 class="project-section-title">Défis et solutions</h3>
            <p>${project.challenges}</p>
          </div>
          <div class="project-links">
            ${project.demoLink ? `
              <a href="${project.demoLink}" target="_blank" rel="noopener noreferrer" class="button primary">
                <i class="fas fa-external-link-alt"></i> Voir la démo
              </a>
            ` : ''}
            ${project.githubLink ? `
              <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="button outline">
                <i class="fab fa-github"></i> Code source
              </a>
            ` : ''}
          </div>
        </div>
        <div class="project-gallery">
          <div class="main-image">
            <img src="${project.image}" alt="${project.title}">
          </div>
          <div class="gallery-grid">
            ${project.gallery.map((image, index) => `
              <div class="gallery-item">
                <img src="${image}" alt="${project.title} screenshot ${index + 1}">
              </div>
            `).join('')}
          </div>
        </div>
      `;
      
      // Add project details to the container
      projectDetailContainer.innerHTML = projectHTML;
    } else {
      // Project not found
      projectDetailContainer.innerHTML = `
        <div class="not-found">
          <h1>Projet non trouvé</h1>
          <p>Le projet que vous recherchez n'existe pas.</p>
          <a href="projects.html" class="button primary">Retour aux projets</a>
        </div>
      `;
    }
  }
});