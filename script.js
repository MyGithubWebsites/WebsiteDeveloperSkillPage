// Your live GitHub Pages projects. Each preview is generated from the live website URL.
// Clicking a preview opens that exact website in a new browser tab.
const projects = [
  {
    title: 'Plag',
    description: 'A web project published on GitHub Pages.',
    category: 'Web project',
    image: 'https://image.thum.io/get/width/1200/crop/750/noanimate/https://mygithubwebsites.github.io/plag/',
    url: 'https://mygithubwebsites.github.io/plag/'
  },
  {
    title: 'AptMG',
    description: 'A live interactive website project.',
    category: 'Web project',
    image: 'https://image.thum.io/get/width/1200/crop/750/noanimate/https://mygithubwebsites.github.io/AptMG/',
    url: 'https://mygithubwebsites.github.io/AptMG/'
  },
  {
    title: 'Vigilant',
    description: 'A live web project focused on an attentive, user-facing experience.',
    category: 'Web project',
    image: 'https://image.thum.io/get/width/1200/crop/750/noanimate/https://mygithubwebsites.github.io/Vigilant/',
    url: 'https://mygithubwebsites.github.io/Vigilant/'
  },
  {
    title: 'Aspirants',
    description: 'A website project for learners and aspirants.',
    category: 'Web project',
    image: 'https://image.thum.io/get/width/1200/crop/750/noanimate/https://mygithubwebsites.github.io/Aspirants/',
    url: 'https://mygithubwebsites.github.io/Aspirants/'
  },
  {
    title: 'Squid Game',
    description: 'An interactive project inspired by the Squid Game theme.',
    category: 'Interactive experience',
    image: 'https://image.thum.io/get/width/1200/crop/750/noanimate/https://mygithubwebsites.github.io/squidgame/',
    url: 'https://mygithubwebsites.github.io/squidgame/'
  },
  {
    title: 'Whap-A-Warrior',
    description: 'A browser-based warrior-themed game project.',
    category: 'Game',
    image: 'https://image.thum.io/get/width/1200/crop/750/noanimate/https://mygithubwebsites.github.io/Whap-A-Warrior/',
    url: 'https://mygithubwebsites.github.io/Whap-A-Warrior/'
  },
  {
    title: 'SlitherQuest',
    description: 'A snake-style browser game project.',
    category: 'Game',
    image: 'https://image.thum.io/get/width/1200/crop/750/noanimate/https://mygithubwebsites.github.io/SlitherQuest/',
    url: 'https://mygithubwebsites.github.io/SlitherQuest/'
  },
  {
    title: 'Cobra Run',
    description: 'A running game project.',
    category: 'Game',
    image: 'https://image.thum.io/get/width/1200/crop/750/noanimate/https://mygithubwebsites.github.io/Cobra-Run/',
    url: 'https://mygithubwebsites.github.io/Cobra-Run/'
  },
  {
    title: 'City',
    description: 'A city-themed website project.',
    category: 'Web project',
    image: 'https://image.thum.io/get/width/1200/crop/750/noanimate/https://mygithubwebsites.github.io/City/',
    url: 'https://mygithubwebsites.github.io/City/'
  },
  {
    title: 'Cognitive Clash',
    description: 'A brain and cognition-themed interactive project.',
    category: 'Interactive experience',
    image: 'https://image.thum.io/get/width/1200/crop/750/noanimate/https://mygithubwebsites.github.io/Cognitive-Clash/',
    url: 'https://mygithubwebsites.github.io/Cognitive-Clash/'
  },
  {
    title: 'Master Mind',
    description: 'A logic and code-breaking game project.',
    category: 'Game',
    image: 'https://image.thum.io/get/width/1200/crop/750/noanimate/https://mygithubwebsites.github.io/Master-Mind/',
    url: 'https://mygithubwebsites.github.io/Master-Mind/'
  },
  {
    title: 'Chessy',
    description: 'A chess-themed web project.',
    category: 'Game',
    image: 'https://image.thum.io/get/width/1200/crop/750/noanimate/https://mygithubwebsites.github.io/Chessy/',
    url: 'https://mygithubwebsites.github.io/Chessy/'
  },
  {
    title: 'ARC',
    description: 'A live web project published on GitHub Pages.',
    category: 'Web project',
    image: 'https://image.thum.io/get/width/1200/crop/750/noanimate/https://mygithubwebsites.github.io/ARC/',
    url: 'https://mygithubwebsites.github.io/ARC/'
  },
  {
    title: 'Plank Pursuit',
    description: 'A fitness and plank-challenge themed project.',
    category: 'Fitness project',
    image: 'https://image.thum.io/get/width/1200/crop/750/noanimate/https://mygithubwebsites.github.io/Plank-Pursuit/',
    url: 'https://mygithubwebsites.github.io/Plank-Pursuit/'
  }
];

const projectGrid = document.getElementById("projectGrid");
projectGrid.innerHTML = projects.map((project) => `
  <article class="project-card reveal">
    <a class="project-image" href="${project.url}" target="_blank" rel="noopener noreferrer" aria-label="Open ${project.title}">
      <img src="${project.image}" alt="Live preview of ${project.title}" loading="lazy"
           onerror="this.onerror=null; this.src='https://placehold.co/1200x750/191c25/b8f36b?text=Open+${encodeURIComponent(project.title)}';">
    </a>
    <div class="project-info">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-meta"><span>${project.category}</span><a href="${project.url}" target="_blank" rel="noopener noreferrer">Visit website ↗</a></div>
    </div>
  </article>
`).join("");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
menuToggle.addEventListener("click", () => navMenu.classList.toggle("open"));
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navMenu.classList.remove("open"));
});

window.addEventListener("scroll", () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  document.getElementById("scrollProgress").style.width = `${progress}%`;
});

document.getElementById("year").textContent = new Date().getFullYear();
