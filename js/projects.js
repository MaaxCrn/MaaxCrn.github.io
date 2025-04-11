// Import the projects data (assuming it's in a separate file)
import projects from './projects-data.js';

// Load projects on the projects page
document.addEventListener('DOMContentLoaded', () => {
  const projectsContainer = document.getElementById('projects-container');
  
  if (projectsContainer) {
    // Create HTML for each project
    const projectsHTML = projects.map(project => `
      <div class="card project-card">
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="card-header">
          <h3 class="card-title">${project.title}</h3>
          <p class="card-description">${project.description}</p>
        </div>
        <div class="card-content">
          <div class="tech-badges small">
            ${project.technologies.map(tech => `
              <span class="badge secondary">${tech}</span>
            `).join('')}
          </div>
        </div>
        <div class="card-footer">
          <a href="project-detail.html?id=${project.id}" class="button primary">Voir les détails</a>
        </div>
      </div>
    `).join('');
    
    // Add projects to the container
    projectsContainer.innerHTML = projectsHTML;
  }
});