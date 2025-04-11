// Sample project data
const projects = [
  {
    id: "ecommerce-app",
    title: "E-commerce App",
    description: "Une plateforme de commerce électronique complète avec panier et paiement.",
    image: "https://via.placeholder.com/800x600",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    fullDescription:
      "Une application e-commerce complète avec authentification des utilisateurs, gestion des produits, panier d'achat et intégration de paiement Stripe. Le projet a été développé pour offrir une expérience d'achat fluide et sécurisée.",
    features: [
      "Authentification et gestion des utilisateurs",
      "Catalogue de produits avec filtres et recherche",
      "Panier d'achat persistant",
      "Passerelle de paiement sécurisée avec Stripe",
      "Tableau de bord administrateur pour la gestion des produits",
    ],
    challenges:
      "L'un des principaux défis était d'implémenter un système de paiement sécurisé et de gérer les stocks en temps réel. J'ai résolu ce problème en utilisant des webhooks Stripe et en implémentant un système de verrouillage optimiste pour la gestion des stocks.",
    demoLink: "https://example.com/ecommerce-demo",
    githubLink: "https://github.com/username/ecommerce-app",
    gallery: [
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
    ],
  },
  {
    id: "portfolio-site",
    title: "Portfolio Personnel",
    description: "Site portfolio responsive pour présenter mes projets et compétences.",
    image: "https://via.placeholder.com/800x600",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    fullDescription:
      "Un site portfolio moderne et responsive conçu pour mettre en valeur mes projets et compétences de manière élégante et interactive. Le site utilise des animations fluides pour améliorer l'expérience utilisateur.",
    features: [
      "Design responsive pour tous les appareils",
      "Animations fluides avec Framer Motion",
      "Mode sombre/clair",
      "Optimisation SEO",
      "Chargement rapide des pages grâce à Next.js",
    ],
    challenges:
      "Le principal défi était de créer un design qui soit à la fois esthétique et performant. J'ai utilisé Tailwind CSS pour un développement rapide et Framer Motion pour des animations optimisées qui ne nuisent pas aux performances.",
    demoLink: "https://example.com/portfolio-demo",
    githubLink: "https://github.com/username/portfolio-site",
    gallery: [
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
    ],
  },
  {
    id: "task-manager",
    title: "Gestionnaire de Tâches",
    description: "Application de gestion de tâches avec fonctionnalités collaboratives.",
    image: "https://via.placeholder.com/800x600",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    fullDescription:
      "Une application de gestion de tâches qui permet aux utilisateurs de créer, organiser et suivre leurs tâches, avec des fonctionnalités de collaboration en équipe. L'application offre une interface intuitive et des fonctionnalités avancées.",
    features: [
      "Création et organisation de tâches par projets",
      "Assignation de tâches aux membres de l'équipe",
      "Suivi du temps et des échéances",
      "Commentaires et pièces jointes",
      "Tableaux Kanban pour la visualisation des flux de travail",
    ],
    challenges:
      "La synchronisation en temps réel des données entre les utilisateurs était un défi majeur. J'ai implémenté Socket.io pour permettre des mises à jour instantanées et résolu les conflits de fusion avec un système de versionnement.",
    demoLink: "https://example.com/taskmanager-demo",
    githubLink: "https://github.com/username/task-manager",
    gallery: [
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
    ],
  },
  {
    id: "weather-app",
    title: "Application Météo",
    description: "Application météo en temps réel avec prévisions sur 7 jours.",
    image: "https://via.placeholder.com/800x600",
    technologies: ["React", "OpenWeather API", "Chart.js"],
    fullDescription:
      "Une application météo qui fournit des informations météorologiques en temps réel et des prévisions sur 7 jours pour n'importe quelle ville dans le monde. L'application utilise l'API OpenWeather pour obtenir des données précises.",
    features: [
      "Recherche de villes par nom",
      "Affichage des conditions météorologiques actuelles",
      "Prévisions détaillées sur 7 jours",
      "Graphiques de température et précipitations",
      "Géolocalisation pour la météo locale",
    ],
    challenges:
      "La gestion des différents fuseaux horaires et l'optimisation des requêtes API étaient des défis importants. J'ai implémenté un système de mise en cache pour réduire les appels API et utilisé des bibliothèques de gestion du temps pour résoudre les problèmes de fuseaux horaires.",
    demoLink: "https://example.com/weather-demo",
    githubLink: "https://github.com/username/weather-app",
    gallery: [
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
    ],
  },
  {
    id: "blog-platform",
    title: "Plateforme de Blog",
    description: "Plateforme de blog avec système de gestion de contenu.",
    image: "https://via.placeholder.com/800x600",
    technologies: ["Next.js", "Sanity.io", "Vercel"],
    fullDescription:
      "Une plateforme de blog moderne avec un système de gestion de contenu intégré, permettant de créer et publier facilement des articles. Le site est optimisé pour le référencement et offre une expérience de lecture agréable.",
    features: [
      "Éditeur de contenu riche avec Sanity.io",
      "Catégorisation et tags pour les articles",
      "Commentaires et interactions",
      "Optimisation SEO avancée",
      "Partage sur les réseaux sociaux",
    ],
    challenges:
      "L'intégration d'un CMS headless tout en maintenant de bonnes performances était un défi. J'ai utilisé la génération statique incrémentielle de Next.js pour optimiser les temps de chargement tout en gardant le contenu à jour.",
    demoLink: "https://example.com/blog-demo",
    githubLink: "https://github.com/username/blog-platform",
    gallery: [
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
    ],
  },
  {
    id: "fitness-tracker",
    title: "Suivi de Fitness",
    description: "Application de suivi d'exercices et de nutrition.",
    image: "https://via.placeholder.com/800x600",
    technologies: ["React Native", "Firebase", "Redux"],
    fullDescription:
      "Une application mobile qui permet aux utilisateurs de suivre leurs exercices, leur nutrition et leurs progrès fitness au fil du temps. L'application offre des visualisations de données et des recommandations personnalisées.",
    features: [
      "Suivi des exercices avec bibliothèque d'exercices",
      "Journal nutritionnel avec base de données d'aliments",
      "Graphiques de progression",
      "Plans d'entraînement personnalisés",
      "Synchronisation entre appareils",
    ],
    challenges:
      "La création d'une expérience utilisateur fluide sur différents appareils et la gestion de grandes quantités de données étaient des défis majeurs. J'ai optimisé les requêtes Firebase et utilisé des techniques de mise en cache pour améliorer les performances.",
    demoLink: "https://example.com/fitness-demo",
    githubLink: "https://github.com/username/fitness-tracker",
    gallery: [
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
    ],
  },
];