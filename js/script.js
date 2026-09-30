const app=document.getElementById('app');
const state={role:null,user:null,route:'dashboard',search:'',students:[
['CS-1020','Ram Thapa','ram.thapa@nexa.edu','9801234567','4th'],['CS-1021','Sabin Sharma','sabin.sharma@nexa.edu','9812345678','4th'],['CS-1022','Hari Kandel','hari.kandel@nexa.edu','9823456789','4th'],['CS-1023','Sujata Tamang','sujata.tamang@nexa.edu','9834567890','4th'],['CS-1024','Nishan Kandel','nishan.kandel@nexa.edu','9845678901','4th'],['CS-1025','Anish Kumar','anish.kumar@nexa.edu','9856789012','4th'],['CS-1026','Anjali Rana','anjali.rana@nexa.edu','9867890123','4th'],['CS-1027','Kritika Limbu','kritika.limbu@nexa.edu','9878901234','4th'],['CS-1028','James Rai','james.rai@nexa.edu','9889012345','4th'],['CS-1029','Jenisha Gurung','jenisha.gurung@nexa.edu','9890123456','4th']],
teachers:[['T001','Sita Bhandari','sita@example.com','Computer Science','Active','Sep 21, 2025'],['T002','Binod Khadka','binod@example.com','Mathematics','Active','Sep 16, 2025'],['T003','Pramod Sharma','pramod@example.com','Physics','Active','Sep 16, 2025'],['T004','Rekha Adhikari','rekha@example.com','English','Active','Sep 14, 2025'],['T005','Deepak Malla','deepak@example.com','Management','Active','Sep 12, 2025'],['T006','Sanju Thapa','sanju@example.com','Computer Science','Inactive','Sep 10, 2025'],['T007','Anita Shrestha','anita@example.com','Computer Science','Active','Sep 08, 2025'],['T008','Ramesh Karki','ramesh@example.com','Mathematics','Active','Sep 06, 2025'],['T009','Nisha Shrestha','nisha@example.com','Physics','Active','Sep 04, 2025'],['T010','Prabin Basnet','prabin@example.com','English','Inactive','Sep 02, 2025']],materials:[
['Database Management Systems','🗄️',[['Normalization - lecture slides','PDF','2.4 MB','Sep 16'],['SQL joins worksheet','DOCX','640 KB','Sep 12'],['ER diagram case studies','PDF','1.1 MB','Sep 8']]],['Statistical Analysis','📊',[['Probability practice set','XLSX','900 KB','Sep 15']]],['Software Engineering','<>',[['System design document','DOCX','1.2 MB','Sep 14']]],['Web Technologies','🌐',[['HTML & CSS reference notes','PDF','850 KB','Sep 10']]],['Microprocessor','⚙️',[['8086 instruction set summary','DOCX','1.1 MB','Sep 7']]] ]};

function icon(name){const a='width=20 height=20 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';const icons={home:`<svg ${a}><path d="m3 10 9-7 9 7"/><path d="M5 9.5V21h14V9.5"/><path d="M9 21v-6h6v6"/></svg>`,book:`<svg ${a}><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22V5.5Z"/><path d="M4 5.5V20"/><path d="M8 7h8M8 11h8"/></svg>`,document:`<svg ${a}><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h6"/></svg>`,message:`<svg ${a}><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.2 8.2 0 0 1-3.2-.65L4 20l1.55-4.05A7.2 7.2 0 0 1 4.5 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/></svg>`,user:`<svg ${a}><circle cx="12" cy="8" r="3.2"/><path d="M5.5 20a6.5 6.5 0 0 1 13 0"/></svg>`,users:`<svg ${a}><path d="M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20"/><circle cx="9.5" cy="7.5" r="3"/><path d="M16 7.5a3 3 0 0 1 0 6M19 20v-1.5a4 4 0 0 0-2.5-3.7"/></svg>`,bell:`<svg ${a}><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z"/><path d="M10 21h4"/></svg>`,chart:`<svg ${a}><path d="M4 19V5M4 19h16"/><path d="M8 16v-5M12 16V8M16 16v-8"/></svg>`,check:`<svg ${a}><path d="m5 12 4 4L19 6"/></svg>`,calendar:`<svg ${a}><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 10h16"/></svg>`,grid:`<svg ${a}><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 4v16M16 4v16M4 8h16M4 16h16"/></svg>`,analytics:`<svg ${a}><path d="M5 20V10M12 20V4M19 20v-7"/></svg>`};return icons[name]||icons.document}
const navs={teacher:[['dashboard','home','Dashboard'],['courses','book','Courses'],['students','users','Students'],['materials','document','Materials'],['assignments','document','Assignments'],['analytics','analytics','Analytics'],['chat','message','Chat'],['quizzes','check','Quizzes'],['profile','user','Profile']],student:[['dashboard','home','Dashboard'],['courses','book','My Courses'],['study-plan','calendar','Study Plan'],['materials','document','Materials'],['assignments','document','Assignments'],['quizzes','check','Quizzes'],['calendar','calendar','Calendar'],['chat','message','Chat'],['profile','user','Profile']],admin:[['dashboard','home','Dashboard'],['students','users','Students'],['teachers','users','Teachers'],['courses','book','Courses'],['notifications','bell','Notification']]};

function roleName(){return state.role==='teacher'?'Dr. Hari Bhandari':state.role==='admin'?'Admin':'Krish Lama'}
function landing(){app.innerHTML=`
<div class="landing-page">
  <header class="landing-nav">
    <div class="landing-brand"><span class="brand-mark">N</span><span class="brand-name">EXA</span></div>
    <nav class="landing-links"><a href="#features">Features</a><a href="#how-it-works">How it works</a><a href="#courses-preview">Courses</a></nav>
    <button class="landing-signin" onclick="login()">Sign in</button>
  </header>

  <main>
    <section class="hero-section">
      <div class="hero-copy">
        <div class="eyebrow"><span class="eyebrow-dot"></span> Smarter learning, made simple</div>
        <h1>Learn better with <span>NEXA.</span></h1>
        <p class="hero-text">An AI-powered learning platform that helps students understand topics, organize study time, complete assignments, and stay on track.</p>
        <div class="hero-actions"><button class="hero-primary" onclick="login()">Start learning <span>→</span></button><a class="hero-secondary" href="#features">Explore NEXA</a></div>
        <div class="hero-trust"><span>${icon('check')} Personalized learning</span><span>${icon('check')} AI study assistant</span><span>${icon('check')} Simple & focused</span></div>
      </div>
      <div class="hero-visual" aria-label="NEXA learning dashboard preview">
        <div class="visual-glow"></div>
        ${nexaBotMarkup()}
        <div class="learning-window">
          <div class="window-top"><div class="mini-brand"><b>N</b>EXA</div><div class="mini-user">${icon('user')}</div></div>
          <div class="window-body">
            <div class="mini-greeting"><small>Good morning 👋</small><strong>Ready to learn?</strong></div>
            <div class="mini-stats"><div><small>Courses</small><b>5</b></div><div><small>Quiz average</small><b>78%</b></div></div>
            <div class="mini-course"><span class="mini-icon book-mini">${icon('book')}</span><div><small>Continue learning</small><strong>Database Management System</strong></div><span class="mini-arrow">→</span></div>
            <div class="mini-course"><span class="mini-icon chart-mini">${icon('chart')}</span><div><small>Next up</small><strong>Statistical Analysis</strong></div><span class="mini-arrow">→</span></div>
          </div>
          
        </div>
      </div>
    </section>

    <section class="landing-section" id="features">
      <div class="section-heading"><span class="section-kicker">WHY NEXA</span><h2>Everything you need to learn with confidence.</h2><p>Designed around the everyday needs of students, teachers, and learning teams.</p></div>
      <div class="feature-grid">
        <article class="feature-card"><div class="feature-icon purple-icon">${icon('message')}</div><h3>AI Learning Assistant</h3><p>Ask questions, clarify difficult concepts, and get help while you study.</p></article>
        <article class="feature-card"><div class="feature-icon blue-icon">${icon('calendar')}</div><h3>Study Planning</h3><p>Organize study sessions, deadlines, quizzes, and important academic tasks.</p></article>
        <article class="feature-card"><div class="feature-icon violet-icon">${icon('chart')}</div><h3>Track Your Progress</h3><p>See course activity, quiz performance, assignments, and learning progress in one place.</p></article>
      </div>
    </section>

    <section class="learning-strip" id="how-it-works">
      <div><span class="section-kicker">A SIMPLE FLOW</span><h2>From question to understanding.</h2><p>Find a course, study a topic, ask Nexbot when you get stuck, and keep moving forward.</p></div>
      <div class="steps"><div class="step"><b>01</b><span>${icon('book')}</span><strong>Choose</strong><small>Pick your course</small></div><div class="step"><b>02</b><span>${icon('message')}</span><strong>Ask</strong><small>Learn with Nexbot</small></div><div class="step"><b>03</b><span>${icon('chart')}</span><strong>Improve</strong><small>Track your progress</small></div></div>
    </section>

    <section class="landing-section courses-preview" id="courses-preview">
      <div class="section-heading compact"><span class="section-kicker">YOUR LEARNING SPACE</span><h2>Built for real coursework.</h2></div>
      <div class="course-preview-grid"><div><span>${icon('book')}</span><strong>Database Management System</strong><small>Notes · Quizzes · Assignments</small></div><div><span>${icon('chart')}</span><strong>Statistical Analysis</strong><small>Practice · Materials · Progress</small></div><div><span>${icon('document')}</span><strong>Web Technologies</strong><small>Materials · Tasks · Resources</small></div></div>
    </section>

    <section class="final-cta"><div><span class="section-kicker">READY TO LEARN?</span><h2>Make your next study session count.</h2><p>Sign in to your NEXA learning space and get started.</p></div><button class="hero-primary" onclick="login()">Sign in to NEXA <span>→</span></button></section>
  </main>
  <footer class="landing-footer"><div class="landing-brand"><span class="brand-mark">N</span><span class="brand-name">EXA</span></div><p>AI-powered learning, made simple.</p><span>© 2026 NEXA</span></footer>
</div>`;if(window.initNexaBot)initNexaBot()}

function login(){app.innerHTML=`<div class="login-screen"><button class="back-landing" onclick="landing()">← Back to NEXA</button><div class="login-card"><div class="login-brand"><span class="brand-mark">N</span><span class="brand-name">EXA</span></div><h1>Sign in</h1><p>Use your college account</p><label>Email</label><input id="email" placeholder="Enter your email" type="email"><label>Password</label><input id="password" placeholder="Enter your password" type="password"><label>Sign in as</label><select id="role"><option value="student">Student</option><option value="teacher">Teacher</option><option value="admin">Admin</option></select><button class="login-btn" onclick="doLogin()">Sign in</button><p class="role-note">Demo frontend — no backend or database is connected.</p></div></div>`}
function doLogin(){state.role=document.getElementById('role').value;state.user=roleName();state.route='dashboard';render()}
function botFace(){return `<span class="bot-3d"><span class="bot-antenna"></span><span class="bot-head"><i></i><i></i><b></b></span></span>`}
function render(){if(!state.role)return login();const nav=navs[state.role];app.innerHTML=`<div class="app-shell"><aside class="sidebar"><div class="brand"><span class="brand-mark">N</span><span class="brand-name">EXA</span></div><nav class="nav">${nav.map(n=>`<button class="${state.route===n[0]?'active':''}" onclick="go('${n[0]}')"><span class="nav-icon">${icon(n[1])}</span>${n[2]}</button>`).join('')}</nav><button class="signout" onclick="logout()">Sign out</button></aside><main class="main"><header class="topbar"><input class="search" placeholder="Search courses, topics or anything" value="${state.search}" oninput="state.search=this.value; updateSearch()"><div class="top-actions"><button class="bell" aria-label="Notifications" onclick="${state.role==='admin'?'go(\'notifications\')':'toast(\'No new notifications\')'}">${icon('bell')}</button><div class="user-chip"><span class="avatar">${icon('user')}</span><span class="user-name">${roleName()}</span></div></div></header><section class="content" id="content"></section></main><button class="chat-fab" aria-label="Open Nexbot" onclick="toggleBot()">${botFace()}</button><div id="bot" class="chat-bubble hidden">Hi! I’m Nexbot 👋<br><small>What can I help you learn today?</small></div></div>`;renderPage()}
function go(r){state.route=r;state.search='';render()}
function logout(){state.role=null;state.user=null;login()}
function updateSearch(){const q=state.search.toLowerCase();document.querySelectorAll('.filterable').forEach(el=>{el.style.display=el.dataset.text.includes(q)?'':'none'})}
function toggleBot(){document.getElementById('bot').classList.toggle('hidden')}
function renderPage(){const c=document.getElementById('content');const r=state.route;if(state.role==='teacher')({dashboard:teacherDashboard,courses:courses,students:students,materials:materials,assignments:assignments,analytics:analytics,chat:chat,quizzes:quizzes,profile:profile}[r]||teacherDashboard)(c);else if(state.role==='student')({dashboard:studentDashboard,courses:studentCourses,'study-plan':studyPlan,materials:studentMaterials,assignments:assignments,quizzes:quizzes,calendar:calendar,chat:chat,profile:profile}[r]||studentDashboard)(c);else ({dashboard:adminDashboard,students:students,teachers:teachers,courses:courses,notifications:notifications}[r]||adminDashboard)(c)}
function welcome(text,desc){return `<div class="welcome"><h1>${text} 👋</h1><p>${desc}</p></div>`}
function stats(items){return `<div class="stats">${items.map(x=>`<div class="stat"><div class="label">${x[0]}</div><div class="value">${x[1]}</div></div>`).join('')}</div>`}
function teacherDashboard(c){c.innerHTML=welcome('Good morning, Dr. Hari Bhandari','Here’s an overview of your classes and activities for today.')+stats([[icon('book')+' Total courses','5'],[icon('users')+' Total Students','60'],[icon('document')+' Total Assignments','4']])+`<div class="grid2"><div class="panel"><h2>My Courses</h2>${['Database Management System','Statistical Analysis','Web Technologies','Software Engineering','Microprocessor'].map((x,i)=>`<div class="course-row"><span class="course-icon">${['🗄️','📊','🌐','⚙️','🧩'][i]}</span><span class="course-title">${x}</span><button class="primary" onclick="toast('Opening ${x}')">View</button></div>`).join('')}</div><div class="panel"><h2>Student Performance</h2><p class="sub">Average Performance of students across your Courses.</p><div class="chart">${[['DBMS',40],['Statistics',70],['S.E',45],['Web',90],['Micro',65]].map(x=>`<div class="bar"><strong>${x[1]}</strong><i style="height:${x[1]*2.15}px"></i><small>${x[0]}</small></div>`).join('')}</div></div></div>`}
function adminDashboard(c){c.innerHTML=welcome('Good morning, Admin','Here’s an overview of the users and courses for today.')+stats([[icon('users')+' Total Students','180'],[icon('users')+' Total Teachers','27'],[icon('book')+' Total Courses','35']])+`<div class="grid2"><div class="panel"><h2>User’s Activity</h2><div class="chart">${[12,6,25,75,10,45].map((v,i)=>`<div class="bar"><i style="height:${v*2.3}px"></i><small>Sep ${16+i}</small></div>`).join('')}</div></div><div class="panel"><h2>Recent Activity</h2>${['New student registered — Rohan Shrestha joined as a student','Course Added — DBMS was added','Teacher joined — Sita Bhandari joined as a teacher','Teacher joined — Ramesh Thapa joined as a teacher','Course Added — Web Technologies was added'].map((x,i)=>`<p>• <strong>${x.split(' — ')[0]}</strong><br><small>${x.split(' — ')[1]}</small> <small>${i+1}h ago</small></p>`).join('')}</div></div><div class="panel" style="max-width:430px;margin-top:24px"><h2>Needs action</h2>${[['Student Approvals','2'],['Teacher Approvals','6'],['Inactive accounts (90 days)','28']].map(x=>`<div style="display:flex;justify-content:space-between;padding:12px 0;border-top:1px solid var(--line)">${x[0]}<b class="status" style="background:#8737f7;color:white">${x[1]}</b></div>`).join('')}</div>`}
function studentDashboard(c){c.innerHTML=welcome('Good morning, Krish Lama','Here’s an overview of your learning activities for today.')+stats([[icon('book')+' Enrolled courses','5'],[icon('document')+' Assignments completed','18'],[icon('check')+' Quiz average','78%'],[icon('calendar')+' Study time','24h 35m']])+`<div class="grid2"><div class="panel"><h2>Continue learning</h2>${['Database Management System','Statistical Analysis','Web Technologies'].map((x,i)=>`<div class="course-row"><span>${['🗄️','📊','🌐'][i]}</span><span class="course-title">${x}</span><button class="primary" onclick="toast('Continuing ${x}')">Continue</button></div>`).join('')}</div><div class="panel"><h2>Upcoming</h2><div class="assignment-card"><span class="inline-icon">${icon('document')}</span><div class="grow"><strong>SQL Joins Worksheet</strong><small>Due Sep 28</small></div><span class="status inactive-status">Due soon</span></div><div class="assignment-card"><span class="inline-icon">${icon('check')}</span><div class="grow"><strong>DBMS Quiz</strong><small>Sep 30</small></div></div></div></div>`}
function courses(c){c.innerHTML=`<div class="page-head"><div><h1>Courses</h1><p class="sub">Manage and explore your courses.</p></div><button class="primary" onclick="openModal('Add Course')">+ Add Course</button></div><div class="grid2">${['Database Management System','Statistical Analysis','Web Technologies','Software Engineering','Microprocessor'].map((x,i)=>`<div class="panel"><div style="font-size:30px">${['🗄️','📊','🌐','⚙️','🧩'][i]}</div><h2>${x}</h2><p class="sub">${i+3} modules • ${20+i*7} students</p><button class="primary" onclick="toast('Opening ${x}')">View course</button></div>`).join('')}</div>`}
function studentCourses(c){c.innerHTML=`<div class="page-head"><div><h1>My Courses</h1><p class="sub">Access your enrolled courses and continue learning.</p></div></div><div class="grid2">${[['Database Management System',82,'A'],['Statistical Analysis',74,'B+'],['Software Engineering',90,'A'],['Web Technologies',68,'B'],['Microprocessor',61,'B-']].map(x=>`<div class="panel"><h2>${x[0]}</h2><p class="sub">Progress ${x[1]}% • Grade ${x[2]}</p><div style="height:10px;background:#eee;border-radius:8px"><div style="width:${x[1]}%;height:100%;background:#8737f7;border-radius:8px"></div></div><button class="primary" style="margin-top:16px" onclick="toast('Continuing ${x[0]}')">Continue</button></div>`).join('')}</div>`}
function students(c){const rows=state.students.map(x=>`<tr class="filterable" data-text="${x.join(' ').toLowerCase()}"><td>${x[0]}</td><td>${x[1]}</td><td>${x[2]}</td><td>${x[3]}</td><td>${x[4]}</td><td><button class="secondary" onclick="toast('Viewing ${x[1]}')">View</button></td></tr>`).join('');c.innerHTML=`<div class="page-head"><div><h1>Students</h1><p class="sub">Manage and view all registered students.</p></div><button class="primary" onclick="openModal('Add Student')">+ Add Student</button></div><div class="toolbar"><input placeholder="Search by name, ID, email..." oninput="tableFilter(this,'studentsTable')"><select><option>Semester</option><option>4th</option></select></div><div class="table-wrap"><table class="table" id="studentsTable"><thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Contact</th><th>Semester</th><th>Action</th></tr></thead><tbody>${rows}</tbody></table></div>`}
function teachers(c){const rows=state.teachers.map(x=>`<tr><td>${x[0]}</td><td>${x[1]}</td><td>${x[2]}</td><td>${x[3]}</td><td><span class="status ${x[4]==='Active'?'active-status':'inactive-status'}">${x[4]}</span></td><td>${x[5]}</td><td><button class="secondary" onclick="toast('Viewing ${x[1]}')">View</button></td></tr>`).join('');c.innerHTML=`<div class="page-head"><div><h1>Teachers</h1><p class="sub">Manage teacher accounts and their information.</p></div><button class="primary" onclick="openModal('Add Teacher')">+ Add Teacher</button></div><div class="toolbar"><input placeholder="Search teachers..." oninput="tableFilter(this,'teachersTable')"><select><option>Status</option><option>Active</option><option>Inactive</option></select></div><div class="table-wrap"><table class="table" id="teachersTable"><thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Department</th><th>Status</th><th>Joined On</th><th>Action</th></tr></thead><tbody>${rows}</tbody></table></div>`}
function materials(c){c.innerHTML=`<div class="page-head"><div><h1>Materials</h1><p class="sub">Files shared with your students</p></div><button class="primary" onclick="openModal('Upload material')">⇧ Upload material</button></div>${state.materials.map(g=>`<div class="material-group"><div class="material-group-head"><div class="material-title">${g[1]} ${g[0]}</div><button class="secondary" onclick="openModal('Add file to ${g[0]}')">+ Add file</button></div>${g[2].map(f=>`<div class="material-item"><span class="file-badge">${f[1]}</span><div class="file-info"><strong>${f[0]}</strong><small>${f[1]} • ${f[2]} • added ${f[3]} • visible to 42 students</small></div><div class="actions"><button class="secondary" onclick="openModal('Edit ${f[0]}')">✎ Edit</button><button class="danger" onclick="removeMaterial('${f[0]}')">▣ Remove</button></div></div>`).join('')}</div>`).join('')}`}
function studentMaterials(c){c.innerHTML=`<div class="page-head"><div><h1>Materials</h1><p class="sub">Study resources shared by your teachers.</p></div></div>${state.materials.map(g=>`<div class="material-group"><div class="material-title">${g[1]} ${g[0]}</div>${g[2].map(f=>`<div class="material-item"><span class="file-badge">${f[1]}</span><div class="file-info"><strong>${f[0]}</strong><small>${f[1]} • ${f[2]} • added ${f[3]}</small></div><button class="secondary" onclick="toast('Opening ${f[0]}')">Open</button></div>`).join('')}</div>`).join('')}`}
function assignments(c){c.innerHTML=`<div class="page-head"><div><h1>Assignments</h1><p class="sub">Track upcoming and completed assignments.</p></div><button class="primary" onclick="openModal('Create Assignment')">+ Add Assignment</button></div>${[['DBMS','SQL Joins Worksheet','Sep 28','Pending'],['Statistical Analysis','Probability Practice Set','Sep 30','Completed'],['Software Engineering','System Design Document','Oct 02','Pending'],['Web Technologies','HTML & CSS Reference Task','Oct 04','Completed']].map(x=>`<div class="assignment-card"><span class="inline-icon">${icon('document')}</span><div class="grow"><strong>${x[1]}</strong><small>${x[0]} • Due ${x[2]}</small></div><span class="status ${x[3]==='Completed'?'active-status':'inactive-status'}">${x[3]}</span><button class="secondary" onclick="toast('Opening ${x[1]}')">View</button></div>`).join('')}`}
function quizzes(c){c.innerHTML=`<div class="page-head"><div><h1>Quizzes</h1><p class="sub">Quick assessments and quiz results.</p></div><button class="primary" onclick="toast('Quiz creation opened')">+ Create Quiz</button></div>${[['DBMS Fundamentals','15 questions','82%'],['Statistical Analysis','20 questions','76%'],['Web Technologies','15 questions','80%']].map(x=>`<div class="quiz-card"><span style="font-size:28px">✓</span><div class="grow"><strong>${x[0]}</strong><small>${x[1]} • Average ${x[2]}</small></div><button class="primary" onclick="toast('Starting ${x[0]}')">${state.role==='student'?'Start':'View'}</button></div>`).join('')}`}
function analytics(c){c.innerHTML=`<div class="page-head"><div><h1>Analytics</h1><p class="sub">Learning performance and progress.</p></div></div>${stats([['Courses','5 Enrolled'],['Assignments','18 Completed'],['Quiz Average','78%'],['Study Time','24h 35m']])}<div class="grid2"><div class="panel"><h2>Performance Overview</h2><div class="chart">${[['Week 1',65],['Week 2',72],['Week 3',76],['Week 4',82]].map(x=>`<div class="bar"><strong>${x[1]}%</strong><i style="height:${x[1]*2.3}px"></i><small>${x[0]}</small></div>`).join('')}</div></div><div class="panel"><h2>Course Progress</h2>${[['Database Management System',82,'A'],['Statistical Analysis',74,'B+'],['Software Engineering',90,'A'],['Web Technologies',68,'B'],['Microprocessor',61,'B-']].map(x=>`<div style="margin:15px 0"><div style="display:flex;justify-content:space-between"><strong>${x[0]}</strong><span>${x[1]}% • ${x[2]}</span></div><div style="height:9px;background:#eee;border-radius:8px;margin-top:7px"><div style="width:${x[1]}%;height:100%;background:#8737f7;border-radius:8px"></div></div></div>`).join('')}</div></div>`}
function studyPlan(c){c.innerHTML=`<div class="page-head"><div><h1>Study Plan</h1><p class="sub">Organize your weekly learning sessions.</p></div><button class="primary" onclick="openModal('Add Study Session')">+ Add session</button></div><div class="panel">${['Monday — DBMS • Normalization • 5:00 PM','Tuesday — Statistics • Probability • 4:00 PM','Wednesday — Web Technologies • CSS • 6:00 PM','Thursday — Software Engineering • Design • 5:30 PM','Friday — Microprocessor • 8086 • 4:30 PM'].map(x=>`<div class="assignment-card"><span>◷</span><div class="grow"><strong>${x.split(' — ')[0]}</strong><small>${x.split(' — ')[1]}</small></div><button class="secondary" onclick="toast('Study session marked complete')">Done</button></div>`).join('')}</div>`}
function calendar(c){const days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];c.innerHTML=`<div class="page-head"><div><h1>Calendar</h1><p class="sub">September 2026 — deadlines, quizzes, exams and your study sessions.</p></div></div><div class="calendar">${days.map(d=>`<div class="day"><b>${d}</b></div>`).join('')}${Array.from({length:30},(_,i)=>`<div class="day"><b>${i+1}</b>${[5,12,18,24,29].includes(i+1)?'<div class="event">Assignment</div>':''}${[10,22].includes(i+1)?'<div class="event">Quiz</div>':''}</div>`).join('')}</div>`}
function getChatContacts(){
  if(state.role==='teacher') return [
    {id:'student-ram',name:'Ram Thapa',role:'Student',initials:'RT',status:'Online',type:'user'},
    {id:'student-sabin',name:'Sabin Sharma',role:'Student',initials:'SS',status:'Online',type:'user'},
    {id:'student-hari',name:'Hari Kandel',role:'Student',initials:'HK',status:'Away',type:'user'},
    {id:'student-sujata',name:'Sujata Tamang',role:'Student',initials:'ST',status:'Offline',type:'user'},
    {id:'teacher-sita',name:'Sita Bhandari',role:'Teacher',initials:'SB',status:'Online',type:'user'},
    {id:'nexbot',name:'Nexbot',role:'AI Learning Assistant',initials:'🤖',status:'Always available',type:'bot'}
  ];
  return [
    {id:'teacher-hari',name:'Dr. Hari Bhandari',role:'Teacher',initials:'HB',status:'Online',type:'user'},
    {id:'teacher-sita',name:'Sita Bhandari',role:'Teacher',initials:'SB',status:'Online',type:'user'},
    {id:'student-ram',name:'Ram Thapa',role:'Student',initials:'RT',status:'Away',type:'user'},
    {id:'student-sabin',name:'Sabin Sharma',role:'Student',initials:'SS',status:'Online',type:'user'},
    {id:'student-anjali',name:'Anjali Rana',role:'Student',initials:'AR',status:'Offline',type:'user'},
    {id:'nexbot',name:'Nexbot',role:'AI Learning Assistant',initials:'🤖',status:'Always available',type:'bot'}
  ];
}

const chatMessages={
  'teacher-hari':[{from:'them',text:'Hi Krish! How can I help you with your coursework?',time:'9:02 AM'}],
  'teacher-sita':[{from:'them',text:'Hello! Let me know if you need help with the assignment.',time:'8:45 AM'}],
  'student-ram':[{from:'them',text:'Did you understand the normalization topic?',time:'8:40 AM'}],
  'student-sabin':[{from:'them',text:'Hey! Are you joining the study session today?',time:'8:20 AM'}],
  'student-hari':[{from:'them',text:'Can you share the notes from today’s class?',time:'Yesterday'}],
  'student-sujata':[{from:'them',text:'I’ll send you the worksheet later.',time:'Yesterday'}],
  'student-anjali':[{from:'them',text:'Hi! Are you done with the quiz?',time:'Yesterday'}],
  'nexbot':[{from:'them',text:'Hi! I’m Nexbot 👋',time:'Now'},{from:'them',text:'Ask me about your courses, assignments, quizzes, or study topics.',time:'Now'}]
};
let activeChatId='nexbot';

function chat(c){
  const contacts=getChatContacts();
  if(!contacts.some(x=>x.id===activeChatId)) activeChatId=contacts[0].id;
  c.innerHTML=`<div class="page-head"><div><h1>Chat</h1><p class="sub">Contact and communicate with students, teachers, and Nexbot.</p></div></div>
    <div class="chat-layout panel">
      <aside class="chat-contacts">
        <div class="chat-contact-head"><strong>Contacts</strong><span>${contacts.filter(x=>x.type==='user').length} users</span></div>
        <input class="contact-search" id="contactSearch" placeholder="Search contacts..." oninput="filterContacts(this.value)">
        <div id="contactList" class="contact-list">${contacts.map(contactItem).join('')}</div>
      </aside>
      <section class="conversation">
        ${conversationHeader(activeChatId,contacts)}
        <div class="message-list" id="messageList">${renderMessages(activeChatId)}</div>
        <div class="message-composer">
          <button class="attach-btn" onclick="toast('Attachment picker opened')" title="Attach file">＋</button>
          <input id="chatInput" placeholder="Type a message..." onkeydown="if(event.key==='Enter')sendChat()">
          <button class="send-btn" onclick="sendChat()">Send</button>
        </div>
      </section>
    </div>`;
  scrollMessages();
}

function contactItem(contact){
  return `<button class="contact-item ${activeChatId===contact.id?'selected':''}" data-contact-text="${(contact.name+' '+contact.role).toLowerCase()}" onclick="openChat('${contact.id}')">
    <span class="contact-avatar ${contact.type==='bot'?'bot-avatar':''}">${contact.initials}</span>
    <span class="contact-copy"><strong>${contact.name}</strong><small>${contact.role}</small></span>
    <span class="presence ${contact.status==='Online'?'online':contact.status==='Away'?'away':contact.type==='bot'?'bot-presence':'offline'}"></span>
  </button>`;
}

function conversationHeader(id,contacts){
  const contact=contacts.find(x=>x.id===id) || contacts[0];
  const isBot=contact.type==='bot';
  return `<div class="conversation-head">
    <div class="conversation-person"><span class="contact-avatar ${isBot?'bot-avatar':''}">${contact.initials}</span><div><strong>${contact.name}</strong><small>${contact.status} · ${contact.role}</small></div></div>
    <div class="call-actions">${isBot?'':`<button class="icon-action" onclick="startCall('voice','${contact.name}')" title="Voice call">☎</button><button class="icon-action" onclick="startCall('video','${contact.name}')" title="Video call">▣</button>`}<button class="icon-action" onclick="toast('More options')">⋯</button></div>
  </div>`;
}

function renderMessages(id){
  const messages=chatMessages[id]||[];
  return messages.map(m=>`<div class="message-row ${m.from==='me'?'mine':''}"><div class="message ${m.from==='me'?'mine':''}">${m.text}<small>${m.time}</small></div></div>`).join('') || `<div class="empty-chat"><div>💬</div><strong>Start a conversation</strong><p>Send a message to ${getChatContacts().find(x=>x.id===id)?.name||'this contact'}.</p></div>`;
}

function openChat(id){activeChatId=id;renderPage()}
function filterContacts(value){const q=value.toLowerCase();document.querySelectorAll('.contact-item').forEach(el=>el.style.display=el.dataset.contactText.includes(q)?'flex':'none')}
function scrollMessages(){const box=document.getElementById('messageList');if(box)box.scrollTop=box.scrollHeight}
function startCall(kind,name){toast(`${kind==='video'?'Video':'Voice'} call with ${name} — frontend demo`)}

function profile(c){c.innerHTML=`<div class="page-head"><div><h1>${state.role==='teacher'?'Teacher Profile':'Profile'}</h1><p class="sub">View and manage your profile information</p></div><button class="primary" onclick="openModal('Edit Profile')">Edit Profile</button></div><div class="panel profile-card"><div style="display:flex;align-items:center;gap:20px"><div class="avatar" style="width:76px;height:76px;font-size:25px">HB</div><div><h2 style="margin:0">${state.role==='teacher'?'Dr. Hari Bhandari':'Krish Lama'}</h2><p class="sub">${state.role==='teacher'?'Computer Science Educator':'Student'}</p></div></div><dl class="profile-details"><dt>Email</dt><dd>${state.role==='teacher'?'Hari.bhandari@nexa.edu.np':'krish.lama@nexa.edu'}</dd><dt>Phone</dt><dd>${state.role==='teacher'?'+977 980-9877665':'+977 9800000000'}</dd><dt>Location</dt><dd>${state.role==='teacher'?'Kathmandu, Nepal':'Nepal'}</dd><dt>About</dt><dd>${state.role==='teacher'?'Computer Science Educator with 5+ years of teaching experience. Passionate about technology, innovation, and helping students achieve their goals':'Student at NEXA'}</dd></dl></div>`}
function notifications(c){c.innerHTML=`<div class="page-head"><div><h1>Notification</h1><p class="sub">Recent system notifications.</p></div></div><div class="panel">${['New student registered','Sita Bhandari joined as a teacher','DBMS was added','Web Technologies was added'].map((x,i)=>`<div class="assignment-card"><span>♢</span><div class="grow"><strong>${x}</strong><small>${i+1}h ago</small></div><button class="secondary" onclick="toast('Notification opened')">View</button></div>`).join('')}</div>`}
function openModal(title){const d=document.createElement('div');d.className='modal-backdrop';d.innerHTML=`<div class="modal"><h2>${title}</h2><div class="form-row"><label>Name / title</label><input placeholder="Enter ${title.toLowerCase()} name"></div><div class="form-row"><label>Description</label><textarea rows="4" placeholder="Add details..."></textarea></div><div class="modal-actions"><button class="secondary" onclick="this.closest('.modal-backdrop').remove()">Cancel</button><button class="primary" onclick="this.closest('.modal-backdrop').remove();toast('Saved successfully')">Save</button></div></div>`;document.body.appendChild(d)}
function removeMaterial(name){if(confirm(`Remove ${name}?`)){state.materials.forEach(g=>g[2]=g[2].filter(f=>f[0]!==name));renderPage();toast('Material removed')}}
function tableFilter(input,id){const q=input.value.toLowerCase();document.querySelectorAll(`#${id} tbody tr`).forEach(r=>r.style.display=r.innerText.toLowerCase().includes(q)?'':'none')}
function sendChat(){
  const i=document.getElementById('chatInput');
  if(!i||!i.value.trim())return;
  const text=i.value.trim();
  if(!chatMessages[activeChatId])chatMessages[activeChatId]=[];
  chatMessages[activeChatId].push({from:'me',text,time:'Now'});
  const contact=getChatContacts().find(x=>x.id===activeChatId);
  if(contact?.type==='bot'){
    setTimeout(()=>{
      chatMessages[activeChatId].push({from:'them',text:'Got it! I can help you with that. Try asking about a course, assignment, quiz, or study plan.',time:'Now'});
      renderPage();
    },350);
  }
  i.value='';
  renderPage();
}
function toast(msg){const t=document.createElement('div');t.textContent=msg;t.style.cssText='position:fixed;bottom:28px;left:50%;transform:translateX(-50%);background:#17203a;color:white;padding:12px 18px;border-radius:10px;z-index:200;box-shadow:0 10px 25px rgba(0,0,0,.2)';document.body.appendChild(t);setTimeout(()=>t.remove(),1800)}
landing();
