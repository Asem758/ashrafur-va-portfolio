const profile = {
  name: "Ashrafur Rahman",
  title: "Virtual Assistant",
  location: "Dhaka, Bangladesh",
  phone: "+8801627774484",
  email: "ashrafurasem@gmail.com",
  address: "Rd No. 31, Rupnagar R/A, Dhaka-1216, Bangladesh",
  facebook: "https://www.facebook.com/ashrafur.asem",
  linkedin: "https://www.linkedin.com/in/ashrafur-rahman-asem/",
};

const services = [
  {
    title: "Inbox & Calendar Control",
    text: "Priority email handling, meeting coordination, follow-ups, and daily agenda preparation for busy professionals.",
  },
  {
    title: "Research & Data Operations",
    text: "Lead research, market notes, clean spreadsheets, CRM updates, and accurate admin records with quality checks.",
  },
  {
    title: "Client Support Assistance",
    text: "Ticket triage, response templates, order updates, support documentation, and calm client communication.",
  },
  {
    title: "Workflow Documentation",
    text: "Clear SOPs, task boards, recurring checklists, and handover notes so operations stay consistent.",
  },
];

const projects = [
  {
    title: "Executive Inbox Reset",
    category: "Admin Operations",
    outcome: "Organized a high-volume inbox into priority folders, response labels, and a daily follow-up tracker.",
    tags: ["Gmail", "Calendar", "SOP"],
  },
  {
    title: "Lead Research CRM Build",
    category: "Research",
    outcome: "Built a qualified lead sheet with decision-maker details, source links, notes, and CRM-ready formatting.",
    tags: ["Google Sheets", "LinkedIn", "CRM"],
  },
  {
    title: "E-commerce Support Desk",
    category: "Customer Support",
    outcome: "Designed response templates for order status, refunds, product questions, and escalation handoff.",
    tags: ["Helpdesk", "Templates", "QA"],
  },
  {
    title: "Content Calendar Support",
    category: "Social Media",
    outcome: "Prepared a 30-day posting calendar with captions, research notes, asset status, and approval flow.",
    tags: ["Meta", "Canva", "Scheduling"],
  },
  {
    title: "Travel Research Pack",
    category: "Executive Support",
    outcome: "Compared routes, hotels, meeting areas, and budget options in one decision-ready travel brief.",
    tags: ["Research", "Docs", "Planning"],
  },
  {
    title: "Data Entry Quality Audit",
    category: "Data Management",
    outcome: "Reviewed and corrected duplicate entries, missing fields, inconsistent naming, and formatting issues.",
    tags: ["Excel", "Accuracy", "Cleanup"],
  },
];

const skills = [
  ["Email Management", 94],
  ["Calendar Scheduling", 90],
  ["Data Entry & Accuracy", 92],
  ["Lead Generation", 88],
  ["CRM Management", 86],
  ["Online Research", 91],
  ["Customer Support", 87],
  ["Google Workspace", 93],
  ["Microsoft Office", 89],
  ["Social Media Support", 84],
  ["Task Management", 90],
  ["Confidentiality", 96],
];

const tools = [
  "Google Workspace",
  "Microsoft Office",
  "Trello",
  "Asana",
  "Notion",
  "Canva",
  "HubSpot",
  "Slack",
  "Zoom",
  "Meta Business Suite",
];

const blogs = [
  {
    title: "How a Virtual Assistant Protects a Founder Calendar",
    date: "Operations Insight",
    excerpt:
      "A strong calendar is more than meeting slots. It protects decision time, reduces context switching, and keeps follow-ups visible before deadlines become urgent.",
  },
  {
    title: "The Simple CRM Cleanup Checklist I Use Before Outreach",
    date: "Freelance Systems",
    excerpt:
      "Clean contact names, valid source links, decision-maker labels, and next-action notes can turn a messy spreadsheet into a sales-ready pipeline.",
  },
  {
    title: "Customer Support Templates That Still Feel Human",
    date: "Client Communication",
    excerpt:
      "Templates work best when they provide structure, not robotic replies. The goal is fast, accurate, and warm communication that saves time without losing trust.",
  },
  {
    title: "Why SOPs Matter for Remote Freelance Work",
    date: "Productivity",
    excerpt:
      "Standard operating procedures make remote support easier to review, repeat, and improve. They also help clients delegate with confidence.",
  },
];

const routes = {
  home: renderHome,
  about: renderAbout,
  project: renderProjects,
  skill: renderSkills,
  blog: renderBlog,
  contact: renderContact,
};

const routeLabels = [
  ["home", "Home"],
  ["about", "About"],
  ["project", "Project"],
  ["skill", "Skill"],
  ["blog", "Blog"],
  ["contact", "Contact"],
];

function asset(path) {
  return `./src/assets/${path}`;
}

function setRoute(route) {
  window.location.hash = route === "home" ? "" : route;
}

function getRoute() {
  const route = window.location.hash.replace("#", "").trim().toLowerCase();
  return routes[route] ? route : "home";
}

function layout(content, route) {
  return `
    <header class="site-header">
      <a class="brand" href="#home" aria-label="Ashrafur Rahman home">
        <span class="brand-mark">AR</span>
        <span>
          <strong>Ashrafur Rahman</strong>
          <small>Virtual Assistant</small>
        </span>
      </a>
      <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <nav class="nav-links" aria-label="Main navigation">
        ${routeLabels
          .map(
            ([key, label]) => `
              <a href="#${key}" class="${route === key ? "active" : ""}">${label}</a>
            `
          )
          .join("")}
      </nav>
    </header>
    <main>${content}</main>
    ${renderFooter()}
  `;
}

function sectionIntro(kicker, title, text) {
  return `
    <div class="section-intro">
      <p class="kicker">${kicker}</p>
      <h1>${title}</h1>
      <p>${text}</p>
    </div>
  `;
}

function renderHome() {
  return `
    <section class="hero-section">
      <div class="hero-copy">
        <p class="kicker">Virtual Assistant based in Bangladesh</p>
        <h1>${profile.name}</h1>
        <p class="hero-lead">
          I help founders, agencies, and remote teams stay organized with reliable admin support,
          inbox control, research, CRM updates, and client communication.
        </p>
        <div class="hero-actions">
          <button class="primary-button" type="button" data-route="contact">Hire Me</button>
          <button class="secondary-button" type="button" data-route="project">View Projects</button>
        </div>
        <div class="quick-stats" aria-label="Portfolio highlights">
          <span><strong>8+</strong> VA service areas</span>
          <span><strong>10+</strong> business tools</span>
          <span><strong>100%</strong> remote-ready support</span>
        </div>
      </div>
      <div class="hero-visual" aria-label="Ashrafur Rahman portrait">
        <div class="portrait-frame">
          <img src="${asset("ashrafur-rahman.png")}" alt="Ashrafur Rahman" />
        </div>
        <div class="floating-note note-top">Inbox, calendar, CRM</div>
        <div class="floating-note note-bottom">Reliable virtual support</div>
      </div>
    </section>

    <div class="service-ticker" aria-label="Virtual assistant services">
      <span>Email Management</span>
      <span>Calendar Scheduling</span>
      <span>Lead Research</span>
      <span>CRM Cleanup</span>
      <span>Customer Support</span>
      <span>Data Entry</span>
    </div>

    <section class="content-band">
      <div class="section-heading-row">
        <div>
          <p class="kicker">Services</p>
          <h2>Support that keeps work moving</h2>
        </div>
        <button class="text-button" type="button" data-route="skill">Explore Skills</button>
      </div>
      <div class="service-grid">
        ${services
          .map(
            (service, index) => `
              <article class="service-card">
                <span class="card-number">0${index + 1}</span>
                <h3>${service.title}</h3>
                <p>${service.text}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="split-section">
      <div>
        <p class="kicker">About Me</p>
        <h2>Organized support with a clear communication style</h2>
        <p>
          I work as a virtual assistant for clients who need dependable admin execution,
          careful research, and calm day-to-day coordination. My approach is simple:
          understand the workflow, document the process, and deliver clean work on time.
        </p>
        <button class="primary-button compact" type="button" data-route="about">Read About Me</button>
      </div>
      <div class="tool-cloud" aria-label="Tools Ashrafur uses">
        ${tools.map((tool) => `<span>${tool}</span>`).join("")}
      </div>
    </section>
  `;
}

function renderAbout() {
  return `
    <section class="page-hero about-hero">
      ${sectionIntro(
        "About Me",
        "A Virtual Assistant who turns busy work into organized systems",
        "I provide remote administrative, research, and operations support for entrepreneurs, agencies, and teams that need clear execution without daily supervision."
      )}
    </section>
    <section class="split-section about-detail">
      <div class="about-photo">
        <img src="${asset("ashrafur-rahman.png")}" alt="Ashrafur Rahman professional portrait" />
      </div>
      <div>
        <p>
          My work focuses on practical support: managing inboxes, preparing schedules,
          researching leads, updating spreadsheets, organizing files, and helping clients
          communicate with customers professionally. I care about accuracy, confidentiality,
          and making every task easy to review.
        </p>
        <p>
          As a Dhaka-based virtual assistant, I am comfortable working with international
          clients, remote collaboration tools, and deadline-driven workflows. I can support
          recurring admin operations or project-based assignments.
        </p>
        <div class="values-grid">
          <span>Clear communication</span>
          <span>Detail-focused delivery</span>
          <span>Process documentation</span>
          <span>Client-first support</span>
        </div>
      </div>
    </section>
    <section class="content-band">
      <div class="section-heading-row">
        <div>
          <p class="kicker">Work Style</p>
          <h2>How I support clients</h2>
        </div>
      </div>
      <div class="timeline">
        <article>
          <span>01</span>
          <h3>Understand the workflow</h3>
          <p>I clarify priorities, tools, response rules, file structure, and deadlines before starting.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Build clean systems</h3>
          <p>I organize tasks into checklists, trackers, labels, folders, and documentation.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Report with context</h3>
          <p>I send concise updates, flag blockers early, and keep next actions easy to see.</p>
        </article>
      </div>
    </section>
  `;
}

function renderProjects() {
  return `
    <section class="page-hero">
      ${sectionIntro(
        "Projects",
        "Sample Virtual Assistant projects",
        "These project concepts show the kind of organized support I can deliver for freelance clients, executives, e-commerce teams, and remote businesses."
      )}
    </section>
    <section class="content-band">
      <div class="project-grid">
        ${projects
          .map(
            (project) => `
              <article class="project-card">
                <p class="project-category">${project.category}</p>
                <h2>${project.title}</h2>
                <p>${project.outcome}</p>
                <div class="tag-row">
                  ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderSkills() {
  return `
    <section class="page-hero">
      ${sectionIntro(
        "Skills",
        "Important Virtual Assistant skills for freelancing and remote jobs",
        "A strong virtual assistant needs administrative judgment, communication discipline, technical fluency, and reliable data handling."
      )}
    </section>
    <section class="skills-layout">
      <div class="skill-list">
        ${skills
          .map(
            ([skill, value]) => `
              <div class="skill-meter">
                <div>
                  <span>${skill}</span>
                  <strong>${value}%</strong>
                </div>
                <progress value="${value}" max="100">${value}%</progress>
              </div>
            `
          )
          .join("")}
      </div>
      <aside class="skill-panel">
        <p class="kicker">High-value VA skills</p>
        <h2>What clients usually need most</h2>
        <ul>
          <li>Fast, polite, and accurate written communication.</li>
          <li>Reliable calendar, inbox, and task prioritization.</li>
          <li>Clean spreadsheets, CRM entries, and source-backed research.</li>
          <li>Discretion with client data, credentials, and business information.</li>
          <li>Comfort with remote tools, async updates, and changing priorities.</li>
        </ul>
      </aside>
    </section>
  `;
}

function renderBlog() {
  return `
    <section class="page-hero">
      ${sectionIntro(
        "Blog",
        "Ideas on remote work, admin systems, and client support",
        "Short professional articles written for business owners who want better delegation, cleaner operations, and more reliable virtual assistance."
      )}
    </section>
    <section class="content-band">
      <div class="blog-grid">
        ${blogs
          .map(
            (blog) => `
              <article class="blog-card">
                <p class="project-category">${blog.date}</p>
                <h2>${blog.title}</h2>
                <p>${blog.excerpt}</p>
                <button class="text-button" type="button" data-route="contact">Discuss This</button>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderContact() {
  return `
    <section class="page-hero contact-hero">
      ${sectionIntro(
        "Contact",
        "Let us organize your next workflow",
        "Send a message about the admin, research, customer support, or data task you want help with."
      )}
    </section>
    <section class="contact-layout">
      <form class="contact-form" id="contactForm">
        <label for="contactName">
          Name
          <input id="contactName" name="name" type="text" placeholder="Your name" required />
        </label>
        <label for="contactEmail">
          Email
          <input id="contactEmail" name="email" type="email" placeholder="you@example.com" required />
        </label>
        <label for="contactService">
          Service Needed
          <select id="contactService" name="service" required>
            <option value="">Choose a service</option>
            <option>Inbox & Calendar Management</option>
            <option>Lead Research & CRM</option>
            <option>Customer Support</option>
            <option>Data Entry & Documentation</option>
          </select>
        </label>
        <label for="contactMessage">
          Message
          <textarea id="contactMessage" name="message" placeholder="Tell me what you need help with" required></textarea>
        </label>
        <button class="primary-button" type="submit">Prepare Message</button>
        <p class="form-status" role="status"></p>
      </form>
      <aside class="contact-card">
        <p class="kicker">Direct Details</p>
        <h2>${profile.name}</h2>
        <a href="tel:${profile.phone}">${profile.phone}</a>
        <a href="mailto:${profile.email}">${profile.email}</a>
        <p>${profile.address}</p>
        <div class="social-row">
          <a href="${profile.facebook}" target="_blank" rel="noreferrer">Facebook</a>
          <a href="${profile.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </aside>
    </section>
  `;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div>
        <strong>${profile.name}</strong>
        <span>${profile.title} | ${profile.location}</span>
      </div>
      <div class="footer-details">
        <span>Phone: ${profile.phone}</span>
        <span>Email: ${profile.email}</span>
        <span>Address: ${profile.address}</span>
      </div>
      <div class="footer-social">
        <a href="${profile.facebook}" target="_blank" rel="noreferrer">Facebook</a>
        <a href="${profile.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  `;
}

function bindInteractions() {
  document.querySelectorAll("[data-route]").forEach((button) => {
    button.addEventListener("click", () => setRoute(button.dataset.route));
  });

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const form = document.querySelector("#contactForm");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      const subject = encodeURIComponent(`Virtual Assistant Inquiry - ${data.service}`);
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nService: ${data.service}\n\nMessage:\n${data.message}`
      );
      const mailto = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      form.querySelector(".form-status").innerHTML =
        `Your message is ready. <a href="${mailto}">Open email draft</a>`;
    });
  }
}

function render() {
  const route = getRoute();
  const content = routes[route]();
  document.querySelector("#app").innerHTML = layout(content, route);
  bindInteractions();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("hashchange", render);
render();
