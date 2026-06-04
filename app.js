/* ═══════════════════════════════════════════
   SKILLNEST — app.js
   ═══════════════════════════════════════════ */

'use strict';

/* ── COURSE DATA ── */
const COURSES = [
  {
    id: 'uiux', emoji: '🎨',
    title: 'The Complete UI/UX Design Bootcamp',
    author: 'James Wright', cat: 'design', catLabel: 'UI/UX', catColor: '#2ee8a5',
    bg: 'linear-gradient(135deg,#0d2418,#0a2430)', badge: 'hot',
    rating: 4.9, ratingCount: '4.8k', price: 1999, free: false, new: false,
    desc: 'Master UI/UX design from scratch using Figma, design thinking, and modern methodologies. Build a full portfolio as you learn.',
    progress: 62, total: 24, watched: '4.2h',
    sections: [
      { title: 'Design Foundations', lessons: [
        { num:1, name:'Intro to Design Thinking', dur:'12:30', done:true,  yt:'dKL6K_8GJao' },
        { num:2, name:'The Design Process',        dur:'18:45', done:true,  yt:'wOrmr5kT-48' },
        { num:3, name:'User Research Methods',     dur:'22:10', done:true,  yt:'7_sFVYfatXY' },
      ]},
      { title: 'Figma Fundamentals', lessons: [
        { num:4,  name:'Figma Interface Tour',   dur:'15:20', done:true,  yt:'FTFaQWZBqQ8' },
        { num:5,  name:'Frames and Components',  dur:'28:00', done:true,  yt:'9Z8aSRo1hNk' },
      ]},
      { title: 'Visual Design', lessons: [
        { num:14, name:'Color Theory in Practice', dur:'23:40', done:false, current:true, yt:'c9Wg6Cb_YlU' },
        { num:15, name:'Typography Hierarchy',     dur:'19:55', done:false, yt:'QrNi9FmdlxY' },
        { num:16, name:'Spacing & Layout Grids',   dur:'21:30', done:false, yt:'ckQkuqN_ZK0' },
      ]},
      { title: 'Advanced Topics', lessons: [
        { num:17, name:'Motion & Microinteractions', dur:'31:00', done:false, locked:true, yt:'7HMl8cYFcWU' },
        { num:18, name:'Design Systems at Scale',    dur:'40:15', done:false, locked:true, yt:'YLo6g58vUm0' },
      ]},
    ],
  },
  {
    id: 'python', emoji: '⚙️',
    title: 'Python for Data Science & Machine Learning',
    author: 'Dr. Anika Patel', cat: 'development', catLabel: 'Python', catColor: '#4da6ff',
    bg: 'linear-gradient(135deg,#0a1a2e,#0e1f3a)', badge: null,
    rating: 4.9, ratingCount: '9.2k', price: 2499, free: false, new: false,
    desc: 'Complete guide to Python, NumPy, Pandas, Matplotlib, Scikit-Learn and real-world ML applications.',
    progress: 28, total: 32, watched: '2.1h',
    sections: [
      { title: 'Python Basics', lessons: [
        { num:1, name:'Python Installation & Setup', dur:'10:00', done:true,  yt:'YYXdXT2l-Gg' },
        { num:2, name:'Variables & Data Types',      dur:'14:20', done:true,  yt:'khKv-8q7YmY' },
        { num:3, name:'Control Flow',                dur:'18:00', done:true,  yt:'DZwmZ8Usvnk' },
        { num:4, name:'Functions & Modules',         dur:'20:30', done:true,  yt:'9Os0o3wzS_I' },
      ]},
      { title: 'Data Libraries', lessons: [
        { num:5, name:'Introduction to NumPy', dur:'22:00', done:true,  yt:'QUT1VHiLmmI' },
        { num:6, name:'NumPy Operations',      dur:'19:45', done:true,  yt:'xECXZ3tyONo' },
        { num:7, name:'NumPy Arrays',          dur:'21:00', done:false, current:true, yt:'8Mpc9ukltVA' },
        { num:8, name:'Pandas DataFrames',     dur:'25:00', done:false, yt:'vmEHCJofslg' },
        { num:9, name:'Data Cleaning',         dur:'28:00', done:false, yt:'bDhvCp6ep1Q' },
      ]},
      { title: 'Machine Learning', lessons: [
        { num:10, name:'Intro to Scikit-Learn', dur:'30:00', done:false, locked:true, yt:'pqNCD_5r0IU' },
        { num:11, name:'Linear Regression',     dur:'35:00', done:false, locked:true, yt:'owI7zxCqNY0' },
      ]},
    ],
  },
  {
    id: 'tableau', emoji: '📊',
    title: 'Tableau Masterclass 2025',
    author: 'Priya Sharma', cat: 'data', catLabel: 'Analytics', catColor: '#ffe94d',
    bg: 'linear-gradient(135deg,#1a1200,#201800)', badge: 'new',
    rating: 4.7, ratingCount: '879', price: 2199, free: false, new: true,
    desc: 'Build stunning data visualizations and dashboards with Tableau. From beginner to dashboard master.',
    progress: 11, total: 18, watched: '0.8h',
    sections: [
      { title: 'Getting Started', lessons: [
        { num:1, name:'Tableau Installation',       dur:'12:00', done:true,  yt:'jEgVto5QFE8' },
        { num:2, name:'Connecting to Data Sources', dur:'15:30', done:true,  yt:'6xv1KvCMF1Q' },
        { num:3, name:'Your First Dashboard',       dur:'20:00', done:false, current:true, yt:'Pnl2AHmlgoQ' },
        { num:4, name:'Charts & Visualizations',    dur:'25:00', done:false, yt:'PJ8vRN7PZBI' },
      ]},
      { title: 'Advanced Dashboards', lessons: [
        { num:5, name:'Filters & Parameters', dur:'22:00', done:false, locked:true, yt:'5T2L4X0K5Wc' },
        { num:6, name:'Calculated Fields',    dur:'28:00', done:false, locked:true, yt:'uJeHWQ-VwGM' },
      ]},
    ],
  },
  {
    id: 'prompt', emoji: '🤖',
    title: 'Intro to Prompt Engineering',
    author: 'Dr. Anika Patel', cat: 'data', catLabel: 'AI / ML', catColor: '#c084fc',
    bg: 'linear-gradient(135deg,#100828,#18042e)', badge: 'free',
    rating: 4.9, ratingCount: '5.4k', price: 0, free: true, new: false,
    desc: 'Learn prompt engineering techniques, chain-of-thought, few-shot learning, and build AI-powered apps.',
    progress: 25, total: 12, watched: '1.0h',
    sections: [
      { title: 'Prompt Basics', lessons: [
        { num:1, name:'What is Prompt Engineering?', dur:'10:00', done:true,  yt:'_ZvnD73m40o' },
        { num:2, name:'Zero-Shot Prompting',         dur:'14:00', done:true,  yt:'v_gXKQlqs7s' },
        { num:3, name:'Few-Shot Prompting',          dur:'16:00', done:true,  yt:'1XkJyBOXeIo' },
        { num:4, name:'Chain-of-Thought',            dur:'18:00', done:false, current:true, yt:'BO_jU1NsBzU' },
      ]},
      { title: 'Advanced Techniques', lessons: [
        { num:5, name:'Prompt Chaining',      dur:'20:00', done:false, yt:'v6AJOX3wd_E' },
        { num:6, name:'RAG & Context Windows',dur:'25:00', done:false, locked:true, yt:'T-D1OfcDW1M' },
      ]},
    ],
  },
  {
    id: 'react', emoji: '🌐',
    title: 'Full-Stack React & Node.js',
    author: 'Samira Okonkwo', cat: 'development', catLabel: 'Web Dev', catColor: '#38bdf8',
    bg: 'linear-gradient(135deg,#041826,#071e30)', badge: 'new',
    rating: 4.5, ratingCount: '1.3k', price: 2999, free: false, new: true,
    desc: 'Build complete full-stack web apps with React 18, Node.js, Express, and MongoDB.',
    progress: 0, total: 28, watched: '0h',
    sections: [
      { title: 'React Fundamentals', lessons: [
        { num:1, name:'React Setup & JSX',    dur:'15:00', done:false, current:true, yt:'Ke90Tje7VS0' },
        { num:2, name:'Components & Props',   dur:'18:00', done:false, yt:'DLX62G4lc44' },
        { num:3, name:'State & Hooks',        dur:'22:00', done:false, yt:'O6P86uwfdR0' },
      ]},
      { title: 'Node.js Backend', lessons: [
        { num:4, name:'Express Setup', dur:'20:00', done:false, locked:true, yt:'L72fhGm1tfE' },
        { num:5, name:'REST APIs',     dur:'25:00', done:false, locked:true, yt:'fgTGADljAeg' },
      ]},
    ],
  },
  {
    id: 'cybersecurity', emoji: '🛡️',
    title: 'Cybersecurity Fundamentals',
    author: 'Ali Hassan', cat: 'development', catLabel: 'Security', catColor: '#f87171',
    bg: 'linear-gradient(135deg,#1a0606,#220a0a)', badge: 'new',
    rating: 4.8, ratingCount: '3.7k', price: 2499, free: false, new: true,
    desc: 'Learn ethical hacking, network security, cryptography, and how to defend against modern cyber threats.',
    progress: 0, total: 20, watched: '0h',
    sections: [
      { title: 'Security Basics', lessons: [
        { num:1, name:'Intro to Cybersecurity', dur:'14:00', done:false, current:true, yt:'rcDO8km6R6c' },
        { num:2, name:'Network Security 101',   dur:'18:30', done:false, yt:'E03gh1huvW4' },
      ]},
    ],
  },
  {
    id: 'flutter', emoji: '🦋',
    title: 'Flutter & Dart — Mobile Dev Bootcamp',
    author: 'Karan Mehta', cat: 'development', catLabel: 'Mobile', catColor: '#4da6ff',
    bg: 'linear-gradient(135deg,#062040,#0a2850)', badge: 'new',
    rating: 4.8, ratingCount: '2.3k', price: 2799, free: false, new: true,
    desc: 'Build beautiful cross-platform mobile apps with Flutter and Dart from zero to app store.',
    progress: 0, total: 30, watched: '0h',
    sections: [
      { title: 'Flutter Basics', lessons: [
        { num:1, name:'Flutter Setup',     dur:'12:00', done:false, current:true, yt:'x0uinJvhNxI' },
        { num:2, name:'Widgets & Layout',  dur:'22:00', done:false, yt:'b_sQ9bMltGU' },
      ]},
    ],
  },
  {
    id: 'sql', emoji: '🗄️',
    title: 'SQL & Database Mastery',
    author: 'Raj Patel', cat: 'data', catLabel: 'Data', catColor: '#ffe94d',
    bg: 'linear-gradient(135deg,#1a1000,#221600)', badge: null,
    rating: 4.6, ratingCount: '5.5k', price: 1499, free: false, new: false,
    desc: 'Master SQL from basics to advanced — joins, window functions, indexing, and real-world queries.',
    progress: 0, total: 22, watched: '0h',
    sections: [
      { title: 'SQL Basics', lessons: [
        { num:1, name:'SELECT statements',  dur:'14:00', done:false, current:true, yt:'7S_tz1z_5bA' },
        { num:2, name:'Filtering & Sorting',dur:'16:00', done:false, yt:'p3qvj9hO_Bo' },
      ]},
    ],
  },
  {
    id: 'copywriting', emoji: '✍️',
    title: 'Copywriting for Conversion',
    author: 'Sara Mendes', cat: 'marketing', catLabel: 'Marketing', catColor: '#4ade80',
    bg: 'linear-gradient(135deg,#061a0c,#0a2014)', badge: 'hot',
    rating: 4.9, ratingCount: '3.4k', price: 1199, free: false, new: false,
    desc: 'Write persuasive copy that converts. Ad copy, landing pages, email sequences, and more.',
    progress: 0, total: 16, watched: '0h',
    sections: [
      { title: 'Foundations', lessons: [
        { num:1, name:'Psychology of Persuasion', dur:'16:00', done:false, current:true, yt:'Pye7SaQn3O0' },
        { num:2, name:'Headline Formulas',        dur:'18:00', done:false, yt:'qWFcgLXbB7w' },
      ]},
    ],
  },
  {
    id: 'personal-finance', emoji: '💰',
    title: 'Personal Finance & Budgeting',
    author: 'Ananya Sharma', cat: 'finance', catLabel: 'Finance', catColor: '#2ee8a5',
    bg: 'linear-gradient(135deg,#061a12,#0a2418)', badge: 'free',
    rating: 4.9, ratingCount: '8.1k', price: 0, free: true, new: false,
    desc: 'Take control of your finances. Budget, invest, eliminate debt, and build wealth — all from scratch.',
    progress: 0, total: 14, watched: '0h',
    sections: [
      { title: 'Money Basics', lessons: [
        { num:1, name:'The 50/30/20 Rule',  dur:'12:00', done:false, current:true, yt:'HQzoZfc3GwQ' },
        { num:2, name:'Emergency Funds',    dur:'14:00', done:false, yt:'_Hx4f8d1VNo' },
      ]},
    ],
  },
  {
    id: 'leadership', emoji: '🧭',
    title: 'Leadership & Team Management',
    author: 'Dr. Priya Shah', cat: 'business', catLabel: 'Business', catColor: '#fb923c',
    bg: 'linear-gradient(135deg,#1a0e00,#220e00)', badge: null,
    rating: 4.7, ratingCount: '2.1k', price: 1899, free: false, new: false,
    desc: 'Develop leadership skills, manage high-performing teams, and navigate workplace challenges.',
    progress: 0, total: 18, watched: '0h',
    sections: [
      { title: 'Leadership Fundamentals', lessons: [
        { num:1, name:'What Makes a Great Leader', dur:'16:00', done:false, current:true, yt:'XKUPDUDOBVo' },
        { num:2, name:'Communication Skills',      dur:'18:00', done:false, yt:'HAnw168huqA' },
      ]},
    ],
  },
];

const ACHIEVEMENTS = [
  { icon: '🎯', name: 'First Lesson',   desc: 'Complete your first lesson',  earned: true },
  { icon: '🔥', name: '7-Day Streak',   desc: 'Study 7 days in a row',       earned: true },
  { icon: '📚', name: 'Bookworm',       desc: 'Enrol in 5 courses',           earned: true },
  { icon: '🏅', name: 'Certified',      desc: 'Earn a certificate',           earned: true },
  { icon: '⚡', name: 'Speed Learner',  desc: '3 lessons in a day',           earned: true },
  { icon: '💎', name: 'Diamond Tier',   desc: 'Earn 10,000 XP total',         earned: false },
  { icon: '🦉', name: 'Night Owl',      desc: 'Study after midnight',         earned: false },
  { icon: '🌍', name: 'Polymath',       desc: 'Complete 3 categories',        earned: false },
];

/* ── APP STATE ── */
let currentUser = null;
let isDark = true;
let currentPage = 'home';
let currentCourseId = null;
let currentFilter = 'all';

/* ══════════════════════════════════════════
   INIT
   ══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  setupGate();
  setupNav();
  setupExplore();
  setupVideoPage();
  setupSettings();
});

/* ── GATE LOGIC ── */
function setupGate() {
  // Tab switch
  document.querySelectorAll('.gr-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.gr-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tab = btn.dataset.tab;
      document.querySelectorAll('.gr-form').forEach(f => f.classList.add('hidden'));
      document.getElementById(`form-${tab}`).classList.remove('hidden');
    });
  });

  // Login
  document.getElementById('do-login').addEventListener('click', doLogin);
  document.getElementById('in-pass').addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });

  // Register
  document.getElementById('do-register').addEventListener('click', doRegister);

  // Guest
  document.getElementById('do-guest').addEventListener('click', () => {
    bootApp({ name: 'Guest Learner', email: 'guest@skillnest.io' });
  });
}

function doLogin() {
  const email = document.getElementById('in-email').value.trim();
  const pass  = document.getElementById('in-pass').value.trim();
  const err   = document.getElementById('gate-err');
  if (email === 'demo@skillnest.io' && pass === 'demo123') {
    err.classList.remove('show');
    bootApp({ name: 'Riya Kumar', email });
  } else {
    err.classList.add('show');
  }
}

function doRegister() {
  const name  = document.getElementById('up-name').value.trim();
  const email = document.getElementById('up-email').value.trim();
  const pass  = document.getElementById('up-pass').value.trim();
  if (name && email && pass.length >= 6) {
    bootApp({ name, email });
  } else {
    showToast('⚠️ Please fill all fields (password min 6 chars)');
  }
}

function bootApp(user) {
  currentUser = user;
  document.getElementById('gate').style.display = 'none';
  document.getElementById('app').classList.remove('hidden');

  // Set user info
  const initials = user.name.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase();
  document.getElementById('railAvatar').textContent = initials;
  document.getElementById('set-name').textContent  = user.name;
  document.getElementById('set-email').textContent = user.email;

  const hour = new Date().getHours();
  const greet = hour < 12 ? 'Good morning,' : hour < 17 ? 'Good afternoon,' : 'Good evening,';
  document.getElementById('hb-eyebrow').textContent = greet;
  document.getElementById('hb-name').textContent = user.name;

  // Build pages
  buildHomeCards();
  buildProgressPage();
  buildHeatmap();
  buildAchievements();
  filterCourses();

  // Default to uiux lesson
  loadLesson('uiux', 2, 0);
}

/* ══════════════════════════════════════════
   NAVIGATION
   ══════════════════════════════════════════ */
function setupNav() {
  // Rail buttons
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', () => goPage(el.dataset.nav));
  });

  // Open course from home cards
  document.addEventListener('click', e => {
    const opener = e.target.closest('[data-open]');
    if (opener) openCourse(opener.dataset.open);
  });

  // Logout
  document.getElementById('tb-logout').addEventListener('click', () => {
    document.getElementById('app').classList.add('hidden');
    document.getElementById('gate').style.display = '';
    currentUser = null;
    stopVideo();
  });

  // Theme
  document.getElementById('tb-theme').addEventListener('click', toggleTheme);
}

function goPage(id) {
  const pageMap = { home: 'pg-home', explore: 'pg-explore', learn: 'pg-learn', progress: 'pg-progress', settings: 'pg-settings' };
  const titleMap = { home: 'Dashboard', explore: 'Explore Courses', learn: 'My Learning', progress: 'Progress', settings: 'Settings' };

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const pg = document.getElementById(pageMap[id]);
  if (pg) pg.classList.add('active');

  document.querySelectorAll('.rail-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`.rail-btn[data-nav="${id}"]`)?.classList.add('active');

  document.getElementById('tb-title').textContent = titleMap[id] || 'SkillNest';
  currentPage = id;

  if (id !== 'learn') stopVideo();
}

function toggleTheme() {
  isDark = !isDark;
  document.body.classList.toggle('light', !isDark);
  showToast(isDark ? '🌙 Dark mode' : '☀️ Light mode');
}

/* ══════════════════════════════════════════
   HOME PAGE — BUILD CARDS
   ══════════════════════════════════════════ */
function buildHomeCards() {
  const active   = COURSES.filter(c => c.progress > 0);
  const rec      = ['uiux', 'prompt', 'cybersecurity', 'personal-finance'].map(id => COURSES.find(c => c.id === id));
  const trending = ['flutter', 'sql', 'copywriting', 'react'].map(id => COURSES.find(c => c.id === id));

  buildContinueList(active);
  buildCardGrid(document.getElementById('rec-grid'), rec);
  buildCardGrid(document.getElementById('trend-grid'), trending);
}

function buildContinueList(courses) {
  const list = document.getElementById('cont-list');
  list.innerHTML = courses.map(c => `
    <div class="cont-card" data-open="${c.id}">
      <div class="cont-thumb" style="background:${coverBg(c)}">${c.emoji}</div>
      <div class="cont-info">
        <div class="cont-tag" style="color:${c.catColor}">${c.catLabel}</div>
        <div class="cont-title">${c.title}</div>
        <div class="cont-sub">${nextLessonName(c)}</div>
        <div class="cont-prog">
          <div class="prog-bar"><div class="prog-fill" style="width:${c.progress}%"></div></div>
          <span class="prog-pct">${c.progress}%</span>
        </div>
      </div>
      <button class="cont-resume">▶ Resume</button>
    </div>
  `).join('');
}

function buildCardGrid(container, courses) {
  container.innerHTML = courses.filter(Boolean).map(c => courseCardHTML(c)).join('');
  container.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('click', () => openCourse(card.dataset.id));
  });
}

function courseCardHTML(c) {
  const badgeClass = { hot: 'cc-badge-hot', new: 'cc-badge-new', free: 'cc-badge-free' }[c.badge] || '';
  const badge = c.badge ? `<span class="cc-badge ${badgeClass}">${c.badge.toUpperCase()}</span>` : '';
  const price = c.free ? `<span class="cc-price free">Free</span>` : `<span class="cc-price">₹${c.price.toLocaleString()}</span>`;
  const stars = c.rating >= 4.8 ? '★★★★★' : '★★★★☆';
  return `
    <div class="course-card" data-id="${c.id}">
      <div class="cc-cover" style="background:${c.bg}">${c.emoji}${badge}</div>
      <div class="cc-body">
        <div class="cc-cat" style="color:${c.catColor}">${c.catLabel}</div>
        <div class="cc-title">${c.title}</div>
        <div class="cc-author">by ${c.author}</div>
        <div class="cc-footer">
          <span class="cc-stars">${stars}<span>(${c.ratingCount})</span></span>
          ${price}
        </div>
      </div>
    </div>`;
}

function nextLessonName(course) {
  for (const sec of course.sections) {
    for (const les of sec.lessons) {
      if (les.current) return `Next: Lesson ${les.num} — ${les.name}`;
    }
  }
  return `${course.total} lessons`;
}

function coverBg(c) {
  return c.bg.replace('linear-gradient(135deg,', '').split(',')[0].trim();
}

/* ══════════════════════════════════════════
   EXPLORE PAGE
   ══════════════════════════════════════════ */
function setupExplore() {
  document.getElementById('exp-q').addEventListener('input', filterCourses);
  document.getElementById('exp-sort').addEventListener('change', filterCourses);
  document.getElementById('f-free').addEventListener('change', filterCourses);
  document.querySelectorAll('input[name="f-rating"]').forEach(r => r.addEventListener('change', filterCourses));

  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.cat;
      filterCourses();
    });
  });
}

function filterCourses() {
  const q       = (document.getElementById('exp-q')?.value || '').toLowerCase().trim();
  const sort    = document.getElementById('exp-sort')?.value || 'popular';
  const freeOnly= document.getElementById('f-free')?.checked;
  const minRat  = parseFloat(document.querySelector('input[name="f-rating"]:checked')?.value || 0);

  let list = COURSES.filter(c => {
    if (currentFilter !== 'all' && c.cat !== currentFilter) return false;
    if (freeOnly && !c.free) return false;
    if (c.rating < minRat) return false;
    if (q) return c.title.toLowerCase().includes(q) || c.author.toLowerCase().includes(q) || c.catLabel.toLowerCase().includes(q);
    return true;
  });

  if (sort === 'rating')     list.sort((a,b) => b.rating - a.rating);
  else if (sort === 'newest') list.sort((a,b) => (b.new?1:0) - (a.new?1:0));
  else if (sort === 'price-asc')  list.sort((a,b) => a.price - b.price);
  else if (sort === 'price-desc') list.sort((a,b) => b.price - a.price);

  const grid = document.getElementById('exp-grid');
  const noRes = document.getElementById('no-results');
  const count = document.getElementById('exp-count');

  if (!list.length) {
    grid.innerHTML = '';
    noRes?.classList.remove('hidden');
    if (count) count.textContent = '0 courses found';
    return;
  }
  noRes?.classList.add('hidden');
  if (count) count.textContent = `Showing ${list.length} course${list.length !== 1 ? 's' : ''}`;
  buildCardGrid(grid, list);
}

/* ══════════════════════════════════════════
   COURSE / VIDEO
   ══════════════════════════════════════════ */
function openCourse(courseId) {
  currentCourseId = courseId;
  const course = COURSES.find(c => c.id === courseId);
  if (!course) return;

  let tSec = 0, tLes = 0;
  course.sections.forEach((sec, si) => sec.lessons.forEach((les, li) => {
    if (les.current) { tSec = si; tLes = li; }
  }));

  stopVideo();
  loadLesson(courseId, tSec, tLes);
  goPage('learn');
}

function loadLesson(courseId, secIdx, lesIdx) {
  currentCourseId = courseId;
  const course = COURSES.find(c => c.id === courseId);
  const sec = course.sections[secIdx];
  const les = sec.lessons[lesIdx];

  stopVideo();

  // Placeholder
  document.getElementById('ph-title').textContent = les.name;
  document.getElementById('ph-dur').textContent   = `▶  ${les.dur}`;
  document.getElementById('player-ph').classList.remove('hidden');
  document.getElementById('player-ph').onclick = () => playVideo(les.yt);

  // Info bar
  document.getElementById('vid-title').textContent       = `Lesson ${les.num}: ${les.name}`;
  document.getElementById('vid-dur').textContent          = `🕐 ${les.dur}`;
  document.getElementById('vid-instructor').textContent   = `👤 ${course.author}`;
  document.getElementById('vp-desc-text').textContent     = course.desc;

  // Breadcrumb
  document.getElementById('bc-course').textContent  = course.title;
  document.getElementById('bc-section').textContent = sec.title;

  // Progress bar
  const fill = document.getElementById('vpb-fill');
  const lbl  = document.getElementById('vpb-label');
  if (fill) fill.style.width = course.progress + '%';
  if (lbl)  lbl.textContent = `${course.progress}% complete`;

  // Playlist
  document.getElementById('pl-title').textContent = course.title;
  document.getElementById('pl-prog').textContent  = `${course.progress}% complete · Lesson ${les.num}`;
  document.getElementById('pl-bar-fill').style.width = course.progress + '%';
  buildPlaylist(course, secIdx, lesIdx);
}

function buildPlaylist(course, activeSec, activeLes) {
  const body = document.getElementById('pl-body');
  body.innerHTML = '';
  course.sections.forEach((sec, si) => {
    const label = document.createElement('div');
    label.className = 'pl-sec-label';
    label.textContent = `Section ${si+1} — ${sec.title}`;
    body.appendChild(label);
    sec.lessons.forEach((les, li) => {
      const item = document.createElement('div');
      item.className = 'pl-item'
        + (les.done ? ' done' : '')
        + (si === activeSec && li === activeLes ? ' playing' : '');
      item.onclick = () => les.locked
        ? showToast('🔒 Complete previous lessons to unlock.')
        : loadLesson(course.id, si, li);

      const num  = document.createElement('div'); num.className = 'pl-num';
      num.textContent = les.done ? '✓' : les.num;
      const info = document.createElement('div'); info.className = 'pl-info';
      info.innerHTML = `<div class="pl-name">${les.name}</div><div class="pl-dur">▶ ${les.dur}</div>`;
      item.appendChild(num); item.appendChild(info);
      if (les.locked) {
        const lock = document.createElement('span');
        lock.className = 'pl-lock'; lock.textContent = '🔒';
        item.appendChild(lock);
      }
      body.appendChild(item);
    });
  });
}

function setupVideoPage() {
  document.getElementById('va-next').addEventListener('click', () => {
    showToast('⏭ Next lesson loaded!');
    goNextLesson();
  });
  document.getElementById('va-prev').addEventListener('click', () => {
    showToast('⏮ Previous lesson');
  });

  // Tab switching
  document.querySelectorAll('.vt').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.vt').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.vid-panel').forEach(p => p.classList.remove('active'));
      document.getElementById(tab.dataset.panel)?.classList.add('active');
    });
  });
}

function playVideo(ytId) {
  const frame  = document.getElementById('player-frame');
  const ph     = document.getElementById('player-ph');
  const loader = document.getElementById('player-loader');

  ph.classList.add('hidden');
  loader.classList.remove('hidden');

  frame.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1`;
  frame.onload = () => {
    if (!frame.src || frame.src === window.location.href) return;
    loader.classList.add('hidden');
    frame.classList.remove('hidden');
  };
}

function stopVideo() {
  const frame = document.getElementById('player-frame');
  if (!frame) return;
  frame.src = '';
  frame.classList.add('hidden');
  const loader = document.getElementById('player-loader');
  loader?.classList.add('hidden');
  document.getElementById('player-ph')?.classList.remove('hidden');
}

function goNextLesson() {
  const course = COURSES.find(c => c.id === currentCourseId);
  if (!course) return;
  let found = false, ns = 0, nl = 0;
  outer: for (let si = 0; si < course.sections.length; si++) {
    for (let li = 0; li < course.sections[si].lessons.length; li++) {
      const les = course.sections[si].lessons[li];
      if (found && !les.locked) { ns = si; nl = li; found = false; break outer; }
      if (les.current) found = true;
    }
  }
  loadLesson(currentCourseId, ns, nl);
}

/* ══════════════════════════════════════════
   PROGRESS PAGE
   ══════════════════════════════════════════ */
function buildProgressPage() {
  const active = COURSES.filter(c => c.progress > 0);
  const list = document.getElementById('prog-course-list');
  list.innerHTML = active.map(c => `
    <div class="prog-course-card">
      <div class="pcc-head">
        <div class="pcc-icon" style="background:${coverBg(c)}">${c.emoji}</div>
        <div>
          <div class="pcc-name">${c.title}</div>
          <div class="pcc-cat" style="color:${c.catColor}">${c.catLabel}</div>
          <div class="pcc-meta">
            <span>${c.progress > 50 ? Math.round(c.progress/100*c.total) : '~' + Math.round(c.progress/100*c.total)} / ${c.total} lessons</span>
            <span>${c.watched} watched</span>
          </div>
        </div>
        ${c.progress >= 60 ? '<div class="pcc-badge">🏅 Near completion</div>' : ''}
      </div>
      <div class="big-bar"><div class="big-fill" style="width:${c.progress}%"></div></div>
      <div class="pcc-foot">
        <span class="pcc-pct">${c.progress}%</span>
        <button class="pcc-btn" data-open="${c.id}">Continue →</button>
      </div>
    </div>
  `).join('');

  list.querySelectorAll('[data-open]').forEach(btn => {
    btn.addEventListener('click', () => openCourse(btn.dataset.open));
  });
}

function buildHeatmap() {
  const grid = document.getElementById('heatmap');
  if (!grid) return;
  grid.innerHTML = '';
  const classes = ['', 'h1', 'h2', 'h3', 'h4'];
  for (let i = 0; i < 364; i++) {
    const cell = document.createElement('div');
    cell.className = 'hm-cell';
    const r = Math.random();
    if (r > 0.55) cell.classList.add(classes[Math.floor(Math.random() * 4) + 1]);
    grid.appendChild(cell);
  }
}

function buildAchievements() {
  const grid = document.getElementById('achv-grid');
  if (!grid) return;
  grid.innerHTML = ACHIEVEMENTS.map(a => `
    <div class="achv-card ${a.earned ? 'earned' : 'locked'}">
      <div class="achv-icon">${a.icon}</div>
      <div class="achv-name">${a.name}</div>
      <div class="achv-desc">${a.desc}</div>
    </div>
  `).join('');
}

/* ══════════════════════════════════════════
   SETTINGS
   ══════════════════════════════════════════ */
function setupSettings() {
  document.getElementById('set-theme-btn').addEventListener('click', toggleTheme);
}

/* ══════════════════════════════════════════
   TOAST
   ══════════════════════════════════════════ */
let toastTimer = null;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}

/* ── Close modals on outside click or Escape ── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { /* no modals in new design */ }
});
