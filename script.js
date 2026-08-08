/* ==========================================================================
   Sakthivel Portfolio - JavaScript Functionality & Git CLI Emulator
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------------
     1. Typewriter Effect in Hero Section
     ------------------------------------------------------------------------ */
  const typingElement = document.getElementById('typing-text');
  const roles = [
    'Software Developer',
    'Spring Boot & Java Enthusiast',
    'Web Technologies Developer',
    'Git Version Control Specialist'
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function typeEffect() {
    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      typeSpeed = 2000; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
  }

  typeEffect();

  /* ------------------------------------------------------------------------
     2. Interactive Git Terminal CLI Emulator
     ------------------------------------------------------------------------ */
  const terminalInput = document.getElementById('terminal-input');
  const terminalHistory = document.getElementById('terminal-history');
  const terminalBody = document.getElementById('terminal-body');
  const shortcutChips = document.querySelectorAll('.shortcut-chip');

  const commandHistoryList = [];
  let historyPointer = -1;

  const terminalCommands = {
    'help': `Available Commands:
  <span class="output-cyan">git status</span>     - Check current workspace and Sakthivel's availability
  <span class="output-cyan">git bio</span>        - Show quick personal biography & summary
  <span class="output-cyan">git skills</span>     - Display tech stack (Java, Spring Boot, MySQL, HTML/CSS/JS, Git)
  <span class="output-cyan">git projects</span>   - View featured Bike Booking System details
  <span class="output-cyan">git experience</span> - List internship history (ML & Networking)
  <span class="output-cyan">git education</span>  - Show B.E. CSE academic credentials (CGPA: 7.46)
  <span class="output-cyan">git contact</span>    - Show Sakthivel's email & phone number
  <span class="output-cyan">git log</span>        - View Git commit trajectory
  <span class="output-cyan">cat resume.txt</span> - Display resume overview
  <span class="output-cyan">clear</span>          - Clear terminal history`,

    'git status': `On branch <span class="output-green">main</span>
Your branch is up to date with 'origin/main'.

<span class="output-green">Status:</span> Open for Software Developer (Web Technologies) opportunities!
<span class="output-yellow">Untracked files:</span>
  (use "git add &lt;file&gt;..." to recruit)
        <span class="output-green">sakthivel-software-developer.java</span>
        <span class="output-green">bike-booking-system.zip</span>

nothing to commit, working tree clean & ready for interview!`,

    'git bio': `<strong>SAKTHIVEL</strong> - Software Developer (Web Technologies)
Location: Kovilpatti – 627713, Tamil Nadu
Summary: Enthusiastic and motivated Computer Science Engineering graduate seeking a Software Developer role. Skilled in Java, Spring Boot, MySQL, HTML, CSS, JavaScript, and Git version control. Quick learner with strong problem-solving skills and a passion for building reliable software.`,

    'git skills': `<span class="output-green">Primary Languages & Backend:</span> Java (OOP Concepts), Spring Boot Framework, REST APIs, MySQL (CRUD, Joins)
<span class="output-cyan">Frontend:</span> HTML5, CSS3, JavaScript (DOM Manipulation, ES6+), Responsive Layouts
<span class="output-yellow">Version Control & Tools:</span> Git, GitHub, VS Code, Postman
<span class="output-purple">Internship Foundations:</span> Python (scikit-learn Machine Learning), Computer Networks & Protocols`,

    'git projects': `<span class="output-green">Featured Project:</span> <strong>Bike Booking System</strong>
Technologies: Java, Spring Boot, MySQL, HTML, CSS, JS, REST APIs
Highlights:
  * Integrated HTML/CSS booking form with MySQL database.
  * Full Admin CRUD management panel (View, Search, Update, Delete booking records).
  * Connected backend REST APIs with dynamic frontend views efficiently.`,

    'git experience': `1. <span class="output-green">Machine Learning Intern</span> @ Profenaa InfoTech (Jun 2025 – Jul 2025)
   - Learned ML workflows, Python scikit-learn models, real-world data science datasets.
2. <span class="output-cyan">Networking Intern</span> @ Lamda Tech Softics (Feb 2025)
   - Learned computer networks, protocols, router/switch configuration, network troubleshooting.`,

    'git education': `1. <span class="output-green">B.E – Computer Science and Engineering</span>
   Sree Sowdambika College of Engineering (2022 – 2026) | <strong>CGPA: 7.46 / 10</strong>
2. <span class="output-cyan">HSC</span> - Government Higher Secondary School (2021 – 2022) | Percentage: 69.5%
3. <span class="output-yellow">SSLC</span> - Government Higher Secondary School (2019 – 2020) | Percentage: 72.8%`,

    'git contact': `Email: <span class="output-cyan">sakthivel2102007143@gmail.com</span>
Phone: <span class="output-green">+91 9363559792</span>
Location: Kovilpatti – 627713, Tamil Nadu
Git: Version Control Ready`,

    'git log': `<span class="output-yellow">commit a1b2c3d4e5f67890 (HEAD -> main, origin/main)</span>
Author: Sakthivel &lt;sakthivel2102007143@gmail.com&gt;
Date:   Sat Aug 8 2026

    feat: add Bike Booking System with Spring Boot & MySQL backend

<span class="output-yellow">commit f9e8d7c6b5a43210</span>
Author: Sakthivel &lt;sakthivel2102007143@gmail.com&gt;
Date:   Jul 15 2025

    feat: complete Machine Learning internship at Profenaa InfoTech

<span class="output-yellow">commit c3b2a10987654321</span>
Author: Sakthivel &lt;sakthivel2102007143@gmail.com&gt;
Date:   Feb 28 2025

    feat: complete Networking internship at Lamda Tech Softics`,

    'cat resume.txt': `SAKTHIVEL M - SOFTWARE DEVELOPER
----------------------------------------------------------------------
Summary: Computer Science Engineering graduate seeking a Software Developer role.
Education: B.E., CSE (CGPA: 7.46 / 10) | Sree Sowdambika College of Engineering (2022-2026)
Technical Skills: Java, Spring Boot, REST APIs, MySQL, HTML5, CSS3, JavaScript, Git
Featured Project: Bike Booking System (Java, Spring Boot, MySQL, HTML/CSS)
Internships: Machine Learning Intern (Profenaa InfoTech) | Networking Intern (Lamda Tech Softics)
Contact: sakthivel2102007143@gmail.com | +91 9363559792 | Kovilpatti, Tamil Nadu

<span class="output-green">[PDF Resume Attached]</span> Click 'Download Resume PDF' or access <a href="assets/Sakthivel_M_Resume.pdf" download style="color: var(--accent-cyan); text-decoration: underline;">Sakthivel_M_Resume.pdf</a> directly.`,

    'whoami': `guest_visitor@sakthivel.dev (Recruiter / Tech Manager)`,

    'git branch': `* <span class="output-green">main</span>
  feature/bike-booking-system
  feature/spring-boot-rest-api`
  };

  function executeCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    // Record in history
    commandHistoryList.push(rawCmd);
    historyPointer = commandHistoryList.length;

    // Create entry element
    const lineElement = document.createElement('div');
    lineElement.className = 'terminal-line';
    lineElement.innerHTML = `
      <div>
        <span class="prompt-user">sakthivel@dev</span>:<span class="prompt-path">~/portfolio</span><span class="prompt-git"> (main)</span>$&nbsp;<span>${escapeHTML(rawCmd)}</span>
      </div>
    `;

    if (cmd === 'clear') {
      terminalHistory.innerHTML = '';
      terminalInput.value = '';
      return;
    }

    const outputElement = document.createElement('div');
    outputElement.className = 'command-output';

    if (terminalCommands[cmd]) {
      outputElement.innerHTML = terminalCommands[cmd];
    } else if (cmd.startsWith('git commit')) {
      outputElement.innerHTML = `<span class="output-green">[main 9a8b7c6] ${escapeHTML(rawCmd.replace('git commit', '')) || 'commit changes'}</span><br>1 file changed, 10 insertions(+)`;
    } else {
      outputElement.innerHTML = `command not found: <span style="color: #ef4444;">${escapeHTML(rawCmd)}</span>. Type <span class="output-cyan">help</span> or <span class="output-cyan">git status</span>.`;
    }

    lineElement.appendChild(outputElement);
    terminalHistory.appendChild(lineElement);

    terminalInput.value = '';
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }

  if (terminalInput) {
    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        executeCommand(terminalInput.value);
      } else if (e.key === 'ArrowUp') {
        if (historyPointer > 0) {
          historyPointer--;
          terminalInput.value = commandHistoryList[historyPointer] || '';
        }
      } else if (e.key === 'ArrowDown') {
        if (historyPointer < commandHistoryList.length - 1) {
          historyPointer++;
          terminalInput.value = commandHistoryList[historyPointer] || '';
        } else {
          historyPointer = commandHistoryList.length;
          terminalInput.value = '';
        }
      }
    });
  }

  shortcutChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      if (cmd && terminalInput) {
        terminalInput.value = cmd;
        executeCommand(cmd);
      }
    });
  });

  /* ------------------------------------------------------------------------
     3. Skill Progress Bar Scroll Animation
     ------------------------------------------------------------------------ */
  const skillFills = document.querySelectorAll('.progress-bar-fill');

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetProgress = entry.target.getAttribute('data-progress');
        entry.target.style.width = targetProgress;
      }
    });
  }, { threshold: 0.2 });

  skillFills.forEach(fill => skillObserver.observe(fill));

  /* ------------------------------------------------------------------------
     4. Navigation Bar Glass Effect & Mobile Menu Toggle
     ------------------------------------------------------------------------ */
  const header = document.getElementById('header');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-active');
      });
    });
  }

  /* ------------------------------------------------------------------------
     5. Modals Management (Project Architecture & Resume PDF)
     ------------------------------------------------------------------------ */
  const projectModal = document.getElementById('project-modal');
  const openProjectBtn = document.getElementById('open-project-modal');
  const closeProjectBtn = document.getElementById('close-project-modal');

  const resumeModal = document.getElementById('resume-modal');
  const openResumeBtn = document.getElementById('open-resume-btn');
  const heroResumeBtn = document.getElementById('hero-resume-btn');
  const aboutResumeBtn = document.getElementById('about-resume-btn');
  const closeResumeBtn = document.getElementById('close-resume-modal');

  function openModal(modal) {
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal(modal) {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (openProjectBtn) openProjectBtn.addEventListener('click', (e) => { e.preventDefault(); openModal(projectModal); });
  if (closeProjectBtn) closeProjectBtn.addEventListener('click', () => closeModal(projectModal));

  [openResumeBtn, heroResumeBtn, aboutResumeBtn].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(resumeModal);
      });
    }
  });

  if (closeResumeBtn) closeResumeBtn.addEventListener('click', () => closeModal(resumeModal));

  window.addEventListener('click', (e) => {
    if (e.target === projectModal) closeModal(projectModal);
    if (e.target === resumeModal) closeModal(resumeModal);
  });

  /* ------------------------------------------------------------------------
     6. Bike Booking Admin CRUD Simulator inside Project Modal
     ------------------------------------------------------------------------ */
  const simTableBody = document.getElementById('sim-table-body');
  const simAddBtn = document.getElementById('sim-add-btn');
  const simRefreshBtn = document.getElementById('sim-refresh-btn');

  let mockBookings = [
    { id: 101, name: 'Arun Kumar', bike: 'Yamaha R15 V4', status: 'CONFIRMED' },
    { id: 102, name: 'Priya Sharma', bike: 'Royal Enfield Classic 350', status: 'PENDING' },
    { id: 103, name: 'Karthik Raja', bike: 'KTM Duke 390', status: 'CONFIRMED' }
  ];

  function renderSimTable() {
    if (!simTableBody) return;
    simTableBody.innerHTML = '';
    mockBookings.forEach((item, index) => {
      const tr = document.createElement('tr');
      tr.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
      const statusColor = item.status === 'CONFIRMED' ? '#34d399' : '#fbbf24';
      tr.innerHTML = `
        <td style="padding: 0.5rem;">#${item.id}</td>
        <td style="padding: 0.5rem; color: #fff;">${item.name}</td>
        <td style="padding: 0.5rem;">${item.bike}</td>
        <td style="padding: 0.5rem; color: ${statusColor}; font-weight: bold;">${item.status}</td>
        <td style="padding: 0.5rem;">
          <button class="btn btn-secondary btn-sm" onclick="deleteMockBooking(${index})" style="padding: 0.2rem 0.5rem; font-size: 0.7rem; color: #ef4444;">
            <i class="fa-solid fa-trash"></i> Delete
          </button>
        </td>
      `;
      simTableBody.appendChild(tr);
    });
  }

  window.deleteMockBooking = function(index) {
    mockBookings.splice(index, 1);
    renderSimTable();
    showToast('Booking deleted in simulated database!');
  };

  if (simAddBtn) {
    simAddBtn.addEventListener('click', () => {
      const randomNames = ['Senthil Nathan', 'Divya Prakash', 'Vignesh M'];
      const randomBikes = ['TVS Apache RTR 200', 'Honda CB350', 'Bajaj Pulsar N250'];
      const newId = 104 + Math.floor(Math.random() * 100);
      const name = randomNames[Math.floor(Math.random() * randomNames.length)];
      const bike = randomBikes[Math.floor(Math.random() * randomBikes.length)];
      mockBookings.push({ id: newId, name, bike, status: 'CONFIRMED' });
      renderSimTable();
      showToast(`Added new booking #${newId} via Spring Boot API simulation!`);
    });
  }

  if (simRefreshBtn) {
    simRefreshBtn.addEventListener('click', () => {
      renderSimTable();
      showToast('Database records refreshed!');
    });
  }

  renderSimTable();

  /* ------------------------------------------------------------------------
     7. Toast Notification & Copy to Clipboard
     ------------------------------------------------------------------------ */
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  function showToast(msg) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  const copyBtns = document.querySelectorAll('.copy-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy);
        showToast(`Copied "${textToCopy}" to clipboard!`);
      }
    });
  });

  /* ------------------------------------------------------------------------
     8. Contact Form Handling
     ------------------------------------------------------------------------ */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value;
      showToast(`Thank you, ${name}! Your message has been sent to Sakthivel.`);
      contactForm.reset();
    });
  }

  /* ------------------------------------------------------------------------
     9. Theme Toggle (Dark / Light)
     ------------------------------------------------------------------------ */
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      const isLight = document.body.classList.contains('light-theme');
      themeToggleBtn.innerHTML = isLight ? '<i class="fa-solid fa-sun" style="color: #f59e0b;"></i>' : '<i class="fa-solid fa-moon"></i>';
      showToast(isLight ? 'Switched to Light Theme' : 'Switched to Dark Theme');
    });
  }

});
