/* Main Application Script */

// SVG Icon templates used dynamically
const ICONS = {
    email: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    github: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
    linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
    arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    externalLink: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>`,
    academic: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>`,
    calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>`,
    globe: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`
};

document.addEventListener("DOMContentLoaded", () => {
    // 1. Check data presence
    if (typeof portfolioData === "undefined") {
        console.error("Erro: portfolioData não foi encontrado. Verifique se o arquivo js/data.js foi carregado.");
        return;
    }

    // Initialize application components
    initSEO();
    renderHeader();
    renderHero();
    renderAbout();
    renderSkills();
    renderProjectsSection();
    renderExperienceSection();
    renderAcademicSection();
    renderContactSection();
    renderFooter();
    
    // Wire interactive systems
    setupTheme();
    setupMobileMenu();
    setupProjectModal();
});

/* --- CONTENT RENDERING FUNCTIONS --- */

// 1. Dynamic SEO tags setup
function initSEO() {
    if (!portfolioData.seo) return;
    
    // Set Page Title
    document.title = portfolioData.seo.title || "Portfólio";

    // Set Description Meta
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.name = "description";
        document.head.appendChild(metaDesc);
    }
    metaDesc.content = portfolioData.seo.description || "";

    // Set Keywords Meta
    if (portfolioData.seo.keywords && portfolioData.seo.keywords.length > 0) {
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement("meta");
            metaKeywords.name = "keywords";
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.content = portfolioData.seo.keywords.join(", ");
    }

    // Set basic Open Graph properties
    setOpenGraph("og:title", portfolioData.seo.title);
    setOpenGraph("og:description", portfolioData.seo.description);
    setOpenGraph("og:image", portfolioData.seo.image);
    setOpenGraph("og:type", "website");
}

function setOpenGraph(property, content) {
    if (!content) return;
    let meta = document.querySelector(`meta[property="${property}"]`);
    if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
    }
    meta.setAttribute("content", content);
}

// 2. Render Navigation Header logo
function renderHeader() {
    const logo = document.getElementById("header-logo");
    if (!logo || !portfolioData.personal.name) return;

    const nameParts = portfolioData.personal.name.split(" ");
    const firstName = nameParts[0];
    const restName = nameParts.slice(1).join(" ");
    
    // Visual logo style: e.g. "Pedro Henrique" -> "Pedro" with indigo dot, or standard
    logo.innerHTML = `${firstName}<span>.</span>`;
}

// 3. Render Hero Section Details
function renderHero() {
    const p = portfolioData.personal;
    
    // Simple text mappings
    setTextContent("#hero-name", p.name);
    setTextContent("#hero-role", p.role);
    setTextContent("#hero-description", p.description);

    // Location setup
    const locationWrapper = document.getElementById("hero-location-wrapper");
    if (p.location) {
        setTextContent("#hero-location", p.location);
    } else if (locationWrapper) {
        locationWrapper.style.display = "none";
    }

    // Set primary social links
    setLinkProperties("#hero-github", p.github);
    setLinkProperties("#hero-linkedin", p.linkedin);

    // Create Avatar or Initial Fallback
    const avatarContainer = document.getElementById("hero-avatar");
    if (avatarContainer) {
        if (p.profileImage) {
            avatarContainer.innerHTML = `<img src="${p.profileImage}" alt="Foto de perfil de ${p.name}">`;
        } else {
            // Get initials: up to 2 characters
            const initials = p.name
                .split(" ")
                .map(n => n[0])
                .slice(0, 2)
                .join("")
                .toUpperCase();
            avatarContainer.innerHTML = `<div class="profile-avatar-fallback" aria-hidden="true">${initials}</div>`;
        }
    }
}

// 4. Render About section contents
function renderAbout() {
    const about = portfolioData.about;
    const descContainer = document.getElementById("about-description");

    if (descContainer && about.description) {
        // Support multi-line descriptions split by carriage returns
        descContainer.innerHTML = about.description
            .split("\n")
            .filter(para => para.trim() !== "")
            .map(para => `<p class="text-lead">${para}</p>`)
            .join("");
    }

    // Render Interest pills
    const interestsContainer = document.getElementById("about-interests");
    if (interestsContainer && about.interests) {
        interestsContainer.innerHTML = about.interests
            .map(interest => `<span class="pill">${interest}</span>`)
            .join("");
    } else if (interestsContainer) {
        document.getElementById("interests-section").style.display = "none";
    }

    // Render Professional Objectives
    const objectivesContainer = document.getElementById("about-objectives");
    if (objectivesContainer && about.objectives) {
        objectivesContainer.innerHTML = about.objectives
            .map(obj => `<div class="objective-item">${obj}</div>`)
            .join("");
    } else if (objectivesContainer) {
        document.getElementById("objectives-section").style.display = "none";
    }
}

// 5. Render skills lists organized by category cards
function renderSkills() {
    const grid = document.getElementById("skills-grid");
    if (!grid || !portfolioData.skills) return;

    const categories = {
        languages: "Linguagens",
        frontend: "Front-end",
        backend: "Back-end",
        database: "Banco de Dados",
        tools: "Ferramentas"
    };

    let html = "";
    for (const [key, label] of Object.entries(categories)) {
        const list = portfolioData.skills[key];
        if (list && list.length > 0) {
            html += `
                <div class="skill-card">
                    <h3 class="skill-category-title">${label}</h3>
                    <ul class="skill-list">
                        ${list.map(skill => `<li class="skill-item">${skill}</li>`).join("")}
                    </ul>
                </div>
            `;
        }
    }
    grid.innerHTML = html;
}

// 6. Render Projects Grid and Filter Handles
let activeFilter = "all";
function renderProjectsSection() {
    const grid = document.getElementById("projects-grid");
    const filterBar = document.getElementById("filter-bar");
    const projects = portfolioData.projects;

    if (!grid || !projects) return;

    // A. Gather project types for filters
    const types = new Set();
    projects.forEach(p => { if (p.type) types.add(p.type); });

    // Render filter buttons
    if (filterBar) {
        let filterHtml = `<button class="filter-btn active" data-filter="all" role="tab" aria-selected="true" aria-controls="projects-grid">Todos</button>`;
        types.forEach(type => {
            filterHtml += `<button class="filter-btn" data-filter="${type}" role="tab" aria-selected="false" aria-controls="projects-grid">${type}</button>`;
        });
        filterBar.innerHTML = filterHtml;

        // Set up filters click handler
        const buttons = filterBar.querySelectorAll(".filter-btn");
        buttons.forEach(btn => {
            btn.addEventListener("click", () => {
                buttons.forEach(b => {
                    b.classList.remove("active");
                    b.setAttribute("aria-selected", "false");
                });
                btn.classList.add("active");
                btn.setAttribute("aria-selected", "true");
                activeFilter = btn.getAttribute("data-filter");
                filterAndRenderProjects();
            });
        });
    }

    // Initial render
    filterAndRenderProjects();
}

function filterAndRenderProjects() {
    const grid = document.getElementById("projects-grid");
    const projects = portfolioData.projects;
    if (!grid || !projects) return;

    const filtered = activeFilter === "all" 
        ? projects 
        : projects.filter(p => p.type === activeFilter);

    if (filtered.length === 0) {
        grid.innerHTML = `<p class="text-muted" style="grid-column: 1/-1; text-align: center; padding: 40px 0;">Nenhum projeto encontrado nesta categoria.</p>`;
        return;
    }

    grid.innerHTML = filtered.map((project, index) => {
        // Find index of actual project in original array to pass to modal
        const originalIndex = projects.indexOf(project);
        
        // Image setup or gradient fallback
        let imageHtml = "";
        if (project.image) {
            imageHtml = `<img src="${project.image}" alt="Capa de ${project.title}" class="project-image" loading="lazy">`;
        } else {
            const firstTech = project.technologies[0] || "Code";
            imageHtml = `
                <div class="project-image-fallback">
                    <div class="project-image-fallback-icon" aria-hidden="true">&lt;/&gt;</div>
                    <span class="text-muted" style="font-size: 0.8rem; font-family: var(--font-mono);">${firstTech}</span>
                </div>
            `;
        }

        // Limit tags rendered on the card interface to 3 max
        const cardTags = project.technologies.slice(0, 3);
        const remainingTagsCount = project.technologies.length - 3;
        
        return `
            <article class="project-card" data-index="${originalIndex}" tabindex="0" role="button" aria-haspopup="dialog" aria-label="Ver detalhes de ${project.title}">
                <div class="project-image-container">
                    ${imageHtml}
                    <div class="project-card-meta">
                        <span class="project-badge project-badge-semester">${project.semester}</span>
                    </div>
                </div>
                <div class="project-card-body">
                    <h3 class="project-card-title">${project.title}</h3>
                    <p class="project-card-description">${project.description}</p>
                    <div class="project-card-footer">
                        <div class="project-card-tags">
                            ${cardTags.map(t => `<span class="project-card-tag">#${t}</span>`).join(" ")}
                            ${remainingTagsCount > 0 ? `<span class="project-card-tag">+${remainingTagsCount}</span>` : ""}
                        </div>
                        <span class="project-card-arrow" aria-hidden="true">
                            ${ICONS.arrowRight}
                        </span>
                    </div>
                </div>
            </article>
        `;
    }).join("");

    // Setup project clicks for modals
    const cards = grid.querySelectorAll(".project-card");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const idx = parseInt(card.getAttribute("data-index"), 10);
            openProjectModal(idx, card);
        });
        
        // Accessibility: allow opening via Enter or Space keys
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                const idx = parseInt(card.getAttribute("data-index"), 10);
                openProjectModal(idx, card);
            }
        });
    });
}

// 7. Render Experience Section (Hides if empty)
function renderExperienceSection() {
    const section = document.getElementById("experience");
    const timeline = document.getElementById("experience-timeline");
    const navItem = document.getElementById("nav-item-experience");
    const exp = portfolioData.experience;

    if (!section) return;

    if (!exp || exp.length === 0) {
        section.style.display = "none";
        if (navItem) navItem.style.display = "none";
        return;
    }

    if (navItem) navItem.style.display = "block";
    section.style.display = "block";

    if (timeline) {
        timeline.innerHTML = exp.map(item => `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <span class="timeline-period">${item.period}</span>
                <h3 class="timeline-title">${item.company}</h3>
                <h4 class="timeline-subtitle">${item.role}</h4>
                <p class="timeline-description">${item.description}</p>
            </div>
        `).join("");
    }
}

// 8. Render Academic formations (Fatec Jacareí details)
function renderAcademicSection() {
    const mainInfo = document.getElementById("main-academic-info");
    const timeline = document.getElementById("education-timeline");
    const ac = portfolioData.academic;
    const ed = portfolioData.education;

    if (mainInfo && ac) {
        mainInfo.innerHTML = `
            <div class="timeline-item">
                <div class="timeline-dot" style="border-color: var(--accent);"></div>
                <span class="timeline-period">${ac.startYear} - Presente</span>
                <h3 class="timeline-title">${ac.course}</h3>
                <h4 class="timeline-subtitle">${ac.institution}</h4>
                <p class="timeline-description">
                    <strong>Semestre Atual:</strong> ${ac.semester}<br>
                    <strong>Status:</strong> ${ac.status}
                </p>
            </div>
        `;
    }

    if (timeline && ed && ed.length > 0) {
        timeline.innerHTML = ed.map(item => `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <span class="timeline-period">${item.period}</span>
                <h3 class="timeline-title">${item.course}</h3>
                <h4 class="timeline-subtitle">${item.institution}</h4>
            </div>
        `).join("");
    }
}

// 9. Render Contact Cards
function renderContactSection() {
    const container = document.getElementById("contact-links-grid");
    const p = portfolioData.personal;
    if (!container || !p) return;

    const links = [];

    if (p.email) {
        links.push({
            label: "E-mail Profissional",
            value: p.email,
            url: `mailto:${p.email}`,
            icon: ICONS.email
        });
    }
    if (p.github) {
        links.push({
            label: "GitHub",
            value: p.github.replace("https://", ""),
            url: p.github,
            icon: ICONS.github
        });
    }
    if (p.linkedin) {
        links.push({
            label: "LinkedIn",
            value: p.linkedin.replace("https://", ""),
            url: p.linkedin,
            icon: ICONS.linkedin
        });
    }

    container.innerHTML = links.map(link => `
        <a href="${link.url}" class="contact-link" target="_blank" rel="noopener" aria-label="${link.label}: ${link.value}">
            <div class="contact-icon" aria-hidden="true">${link.icon}</div>
            <div class="contact-link-details">
                <span class="contact-link-label">${link.label}</span>
                <span class="contact-link-value">${link.value}</span>
            </div>
        </a>
    `).join("");
}

// 10. Render Footer Credits and social tags
function renderFooter() {
    const logo = document.getElementById("footer-logo");
    const copyright = document.getElementById("footer-copyright");
    const socialLinks = document.getElementById("footer-social-links");
    const p = portfolioData.personal;

    if (!p) return;

    if (logo) {
        logo.innerHTML = `${p.name.split(" ")[0]}<span>.</span>`;
    }

    if (copyright) {
        copyright.textContent = `© ${new Date().getFullYear()} ${p.name}. Todos os direitos reservados.`;
    }

    if (socialLinks) {
        let html = "";
        if (p.github) {
            html += `<a href="${p.github}" class="footer-social-link" target="_blank" rel="noopener" aria-label="Visitar GitHub">${ICONS.github}</a>`;
        }
        if (p.linkedin) {
            html += `<a href="${p.linkedin}" class="footer-social-link" target="_blank" rel="noopener" aria-label="Visitar LinkedIn">${ICONS.linkedin}</a>`;
        }
        socialLinks.innerHTML = html;
    }
}

/* --- STATE UTILITIES AND INTERACTIONS --- */

// A. Theme switcher logic
function setupTheme() {
    const btn = document.getElementById("theme-btn");
    if (!btn) return;

    // Try storage or default to media match
    const storedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = storedTheme || systemTheme;

    // Apply initial state
    setThemeAttribute(initialTheme);

    btn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        setThemeAttribute(newTheme);
    });
}

function setThemeAttribute(theme) {
    if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", theme);
}

// B. Mobile Menu dropdown trigger
function setupMobileMenu() {
    const btn = document.getElementById("menu-btn");
    const nav = document.getElementById("navigation");
    const links = document.querySelectorAll(".nav-link");

    if (!btn || !nav) return;

    btn.addEventListener("click", () => {
        const isOpen = nav.classList.contains("active");
        
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close menu when clicking a link
    links.forEach(link => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });

    function openMenu() {
        nav.classList.add("active");
        btn.setAttribute("aria-expanded", "true");
        btn.setAttribute("aria-label", "Fechar menu de navegação");
        btn.innerHTML = `<svg class="close-icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>`;
        document.body.classList.add("modal-open"); // prevent scroll
    }

    function closeMenu() {
        nav.classList.remove("active");
        btn.setAttribute("aria-expanded", "false");
        btn.setAttribute("aria-label", "Abrir menu de navegação");
        btn.innerHTML = `<svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;
        document.body.classList.remove("modal-open");
    }
}

// C. Detailed Projects Modal
let lastFocusedElement = null;
function setupProjectModal() {
    const modal = document.getElementById("project-modal");
    const closeBtn = document.getElementById("modal-close");

    if (!modal || !closeBtn) return;

    // Close handlers
    closeBtn.addEventListener("click", closeProjectModal);
    
    modal.addEventListener("click", (e) => {
        // Close if click hits the backdrop overlay itself
        if (e.target === modal) {
            closeProjectModal();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeProjectModal();
        }
    });
}

function openProjectModal(index, triggerElement) {
    const modal = document.getElementById("project-modal");
    const projects = portfolioData.projects;
    const project = projects[index];

    if (!modal || !project) return;

    // Cache triggering element to restore focus on exit
    lastFocusedElement = triggerElement;

    // Modal Image
    const modalImg = document.getElementById("modal-image");
    if (project.image) {
        modalImg.src = project.image;
        modalImg.alt = `Capa de ${project.title}`;
        modalImg.style.display = "block";
    } else {
        modalImg.style.display = "none";
    }

    // Headers & texts
    setTextContent("#modal-title", project.title);
    setTextContent("#modal-desc", project.description);
    setTextContent("#modal-contrib", project.contribution);

    // Meta Badge Row
    const metaRow = document.getElementById("modal-meta");
    if (metaRow) {
        metaRow.innerHTML = `
            <span class="project-badge project-badge-semester">${project.semester}</span>
            <span class="project-badge" style="background: var(--badge-bg); color: var(--badge-text); border: 1px solid var(--border-color);">${project.type}</span>
        `;
    }

    // Technologies
    const tagsGrid = document.getElementById("modal-tags");
    if (tagsGrid) {
        tagsGrid.innerHTML = project.technologies
            .map(tech => `<span class="pill" style="font-family: var(--font-mono); font-size: 0.8rem;">${tech}</span>`)
            .join("");
    }

    // Call To Action Buttons (GitHub / Demo)
    const actionsContainer = document.getElementById("modal-actions-container");
    if (actionsContainer) {
        let actionButtons = "";
        if (project.github) {
            actionButtons += `
                <a href="${project.github}" class="btn btn-primary" target="_blank" rel="noopener">
                    ${ICONS.github}
                    Acessar Repositório
                </a>
            `;
        }
        if (project.demo) {
            actionButtons += `
                <a href="${project.demo}" class="btn btn-secondary" target="_blank" rel="noopener">
                    ${ICONS.globe}
                    Visualizar Demonstração
                </a>
            `;
        }
        actionsContainer.innerHTML = actionButtons;
    }

    // Activate Overlay
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    // Modal Focus Trap Initialization
    setTimeout(() => {
        const focusableElements = modal.querySelectorAll('a[href], button:not([disabled])');
        if (focusableElements.length > 0) {
            focusableElements[0].focus(); // Focus first item (usually close button or primary link)
            
            // Listen for trap cycling
            modal.addEventListener("keydown", trapFocus);
        }
    }, 50);
}

function trapFocus(e) {
    const modal = document.getElementById("project-modal");
    if (!modal || !modal.classList.contains("active")) return;

    if (e.key === "Tab") {
        const focusableElements = Array.from(modal.querySelectorAll('a[href], button:not([disabled])'));
        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) { // Backwards cycling
            if (document.activeElement === first) {
                last.focus();
                e.preventDefault();
            }
        } else { // Forwards cycling
            if (document.activeElement === last) {
                first.focus();
                e.preventDefault();
            }
        }
    }
}

function closeProjectModal() {
    const modal = document.getElementById("project-modal");
    if (!modal) return;

    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    // Remove the focus trap listener
    modal.removeEventListener("keydown", trapFocus);

    // Restore focus to card trigger
    if (lastFocusedElement) {
        lastFocusedElement.focus();
        lastFocusedElement = null;
    }
}

/* --- HELPER WRAPPERS --- */
function setTextContent(selector, text) {
    const el = document.querySelector(selector);
    if (el) el.textContent = text || "";
}

function setLinkProperties(selector, url) {
    const el = document.querySelector(selector);
    if (el) {
        if (url) {
            el.href = url;
            el.style.display = "inline-flex";
        } else {
            el.style.display = "none";
        }
    }
}
