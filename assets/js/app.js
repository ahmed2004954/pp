(function () {
  const data = window.schoolData || {};
  const app = document.getElementById("app");
  if (!app) {
    return;
  }

  const pageKey = app.dataset.page || "dashboard";

  const pages = {
    dashboard: { title: "لوحة التحكم", breadcrumb: "الرئيسية / لوحة التحكم" },
    profile: { title: "الملف الشخصي", breadcrumb: "الرئيسية / الملف الشخصي" },
    students: { title: "الطلاب", breadcrumb: "الرئيسية / الطلاب" },
    teachers: { title: "المعلمون", breadcrumb: "الرئيسية / المعلمون" },
    classes: { title: "الفصول والمواد", breadcrumb: "الرئيسية / الفصول والمواد" },
    attendance: { title: "الحضور", breadcrumb: "الرئيسية / الحضور" },
    grades: { title: "الدرجات", breadcrumb: "الرئيسية / الدرجات" },
    assignments: { title: "الواجبات", breadcrumb: "الرئيسية / الواجبات" },
    payments: { title: "المدفوعات", breadcrumb: "الرئيسية / المدفوعات" },
    notifications: { title: "الإشعارات", breadcrumb: "الرئيسية / الإشعارات" },
    reports: { title: "التقارير", breadcrumb: "الرئيسية / التقارير" }
  };

  const navItems = [
    { key: "dashboard", label: "لوحة التحكم", href: "index.html", icon: "grid" },
    { key: "profile", label: "الملف الشخصي", href: "profile.html", icon: "user" },
    { key: "students", label: "الطلاب", href: "students.html", icon: "users" },
    { key: "teachers", label: "المعلمون", href: "teachers.html", icon: "teacher" },
    { key: "classes", label: "الفصول والمواد", href: "classes.html", icon: "book" },
    { key: "attendance", label: "الحضور", href: "attendance.html", icon: "clipboard" },
    { key: "grades", label: "الدرجات", href: "grades.html", icon: "award" },
    { key: "assignments", label: "الواجبات", href: "assignments.html", icon: "file" },
    { key: "payments", label: "المدفوعات", href: "payments.html", icon: "credit" },
    { key: "notifications", label: "الإشعارات", href: "notifications.html", icon: "bell" },
    { key: "reports", label: "التقارير", href: "reports.html", icon: "chart" }
  ];

  function icon(name, classes) {
    const cls = classes || "w-5 h-5";
    const map = {
      menu: '<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>',
      close: '<path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M6 18L18 6"/>',
      grid: '<path stroke-linecap="round" stroke-linejoin="round" d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z"/>',
      user: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 12a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 0114 0"/>',
      users: '<path stroke-linecap="round" stroke-linejoin="round" d="M17 20v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2m16-8a3 3 0 100-6 3 3 0 000 6M6 12a3 3 0 100-6 3 3 0 000 6"/>',
      teacher: '<path stroke-linecap="round" stroke-linejoin="round" d="M3 8l9-5 9 5-9 5-9-5zm2 4.4l7 3.9 7-3.9M5 12v5m14-5v5"/>',
      book: '<path stroke-linecap="round" stroke-linejoin="round" d="M4 5a2 2 0 012-2h12v16H6a2 2 0 01-2-2V5zm3-2v16"/>',
      clipboard: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 4h6a2 2 0 012 2v14H7V6a2 2 0 012-2zm0 0a2 2 0 114 0"/>',
      award: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 3l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 18.8 5.8 22l1.2-6.8-5-4.9 6.9-1L12 3z"/>',
      file: '<path stroke-linecap="round" stroke-linejoin="round" d="M7 3h7l5 5v13H7V3zm7 0v5h5"/>',
      credit: '<path stroke-linecap="round" stroke-linejoin="round" d="M3 7h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7zm0 4h18"/>',
      bell: '<path stroke-linecap="round" stroke-linejoin="round" d="M15 17H5l1.4-1.4A2 2 0 007 14.2V11a5 5 0 0110 0v3.2c0 .5.2 1 .6 1.4L19 17h-4zm-3 4a2.5 2.5 0 002.4-2h-4.8A2.5 2.5 0 0012 21z"/>',
      chart: '<path stroke-linecap="round" stroke-linejoin="round" d="M5 19V9m7 10V5m7 14v-7M3 21h18"/>',
      search: '<path stroke-linecap="round" stroke-linejoin="round" d="M11 4a7 7 0 105.2 11.7L20 19.5"/>',
      logout: '<path stroke-linecap="round" stroke-linejoin="round" d="M10 17l-5-5 5-5m-5 5h12m2-8v16"/>',
      qr: '<path stroke-linecap="round" stroke-linejoin="round" d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm11 1v-1m0 5v-2m-3 3h2m2 0h4m-2-6h2v2h-2z"/>',
      edit: '<path stroke-linecap="round" stroke-linejoin="round" d="M4 20h4l10-10-4-4L4 16v4zm10-14l4 4"/>'
    };

    return `<svg xmlns="http://www.w3.org/2000/svg" class="${cls}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">${map[name] || map.user}</svg>`;
  }

  function statusBadge(status) {
    const badgeMap = {
      حاضر: "badge-cyan",
      غائب: "badge-danger",
      مدفوع: "badge-cyan",
      معلق: "badge-purple",
      متأخر: "badge-danger",
      مسلم: "badge-cyan"
    };

    return `<span class="badge ${badgeMap[status] || "badge-purple"}">${status}</span>`;
  }

  function dotColor(type) {
    if (type === "danger") {
      return "bg-red-400";
    }

    if (type === "purple") {
      return "bg-violet-400";
    }

    return "bg-cyan-400";
  }

  function statCard(stat) {
    return `
      <article class="neon-card p-5 fade-up">
        <div class="flex items-start justify-between">
          <div>
            <p class="text-3xl font-bold text-slate-100">${stat.value}</p>
            <p class="mt-1 text-sm text-slate-400">${stat.title}</p>
          </div>
          <span class="text-cyan-300">${icon(stat.icon, "w-6 h-6")}</span>
        </div>
      </article>
    `;
  }

  function progressList(items, isCyan) {
    return items
      .map(
        (item) => `
          <div class="mb-4 last:mb-0">
            <div class="mb-1 flex items-center justify-between text-sm text-slate-300">
              <span>${item.subject || item.week || item.name}</span>
              <span class="font-bold text-cyan-300">${item.score || item.value}%</span>
            </div>
            <div class="progress-track">
              <div data-progress="${item.score || item.value}" class="progress-fill ${isCyan ? "cyan" : ""}"></div>
            </div>
          </div>
        `
      )
      .join("");
  }

  function renderDashboard() {
    return `
      <section class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        ${data.stats.map(statCard).join("")}
      </section>

      <section class="mt-5 grid grid-cols-1 gap-4 xl:grid-cols-2">
        <article class="neon-card-soft p-5">
          <h3 class="mb-5 text-3xl font-bold">أداء الدرجات</h3>
          ${progressList(data.subjectsPerformance)}
        </article>

        <article class="neon-card-soft p-5">
          <h3 class="mb-5 text-3xl font-bold">أداء الحضور</h3>
          ${progressList(data.attendancePerformance, true)}
        </article>
      </section>

      <section class="mt-5 grid grid-cols-1 gap-4 xl:grid-cols-2">
        <article class="neon-card-soft p-5 xl:col-span-2">
          <h3 class="mb-5 text-3xl font-bold">النشاطات الأخيرة</h3>
          <ul class="space-y-4">
            ${data.activities
              .map(
                (item) => `
                  <li class="flex items-start justify-between gap-3 border-b border-slate-700/30 pb-3 last:border-0 last:pb-0">
                    <div class="flex items-center gap-2 text-base">
                      <span class="h-2.5 w-2.5 rounded-full ${dotColor(item.type)}"></span>
                      <span>${item.text}</span>
                    </div>
                    <span class="text-sm text-slate-400">${item.time}</span>
                  </li>
                `
              )
              .join("")}
          </ul>
        </article>
      </section>
    `;
  }

  function renderProfile() {
    const p = data.profile;

    return `
      <section class="neon-card p-8">
        <div class="flex flex-col items-center justify-center text-center">
          <div class="relative flex h-28 w-28 items-center justify-center rounded-full border border-cyan-400/60 bg-cyan-400/10 text-cyan-200 shadow-[0_0_30px_rgba(23,212,255,0.22)]">
            ${icon("user", "h-10 w-10")}
            <span class="absolute -bottom-1 -left-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950">${icon("edit", "h-4 w-4")}</span>
          </div>
          <h2 class="mt-5 text-2xl font-bold">${p.name}</h2>
          <p class="text-sm text-slate-400">${p.email}</p>
        </div>
      </section>

      <section class="mt-5 grid grid-cols-1 gap-4 xl:grid-cols-3">
        <article class="neon-card-soft p-5 xl:col-span-2">
          <h3 class="mb-4 text-2xl font-bold">تعديل البيانات</h3>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <label>
              <span class="mb-1 block text-sm text-slate-400">الاسم الكامل</span>
              <input class="input-base" type="text" value="${p.name}" />
            </label>
            <label>
              <span class="mb-1 block text-sm text-slate-400">رقم الهاتف</span>
              <input class="input-base" type="tel" value="${p.phone}" />
            </label>
            <label>
              <span class="mb-1 block text-sm text-slate-400">البريد الإلكتروني</span>
              <input class="input-base" type="email" value="${p.email}" />
            </label>
            <label>
              <span class="mb-1 block text-sm text-slate-400">الصف</span>
              <input class="input-base" type="text" value="${p.className}" />
            </label>
          </div>
          <div class="mt-5 flex justify-end">
            <button class="btn-primary" type="button">حفظ التعديلات</button>
          </div>
        </article>

        <article class="neon-card-soft p-5">
          <h3 class="mb-4 text-2xl font-bold">تغيير كلمة المرور</h3>
          <div class="space-y-4">
            <label>
              <span class="mb-1 block text-sm text-slate-400">كلمة المرور الحالية</span>
              <input class="input-base" type="password" />
            </label>
            <label>
              <span class="mb-1 block text-sm text-slate-400">كلمة المرور الجديدة</span>
              <input class="input-base" type="password" />
            </label>
            <label>
              <span class="mb-1 block text-sm text-slate-400">تأكيد كلمة المرور</span>
              <input class="input-base" type="password" />
            </label>
            <button class="btn-primary w-full" type="button">تغيير كلمة المرور</button>
          </div>
        </article>
      </section>
    `;
  }

  function renderStudents() {
    return `
      <section class="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center">
        <button type="button" class="btn-primary w-fit">+ إضافة طالب</button>
        <select id="student-class-filter" class="input-base lg:w-44">
          <option value="all">جميع الفصول</option>
          <option value="الفصل 1-أ">الفصل 1-أ</option>
          <option value="الفصل 2-ب">الفصل 2-ب</option>
          <option value="الفصل 3-أ">الفصل 3-أ</option>
        </select>
        <label class="relative block flex-1">
          <span class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">${icon("search", "h-4 w-4")}</span>
          <input id="student-search" class="input-base pr-10" placeholder="بحث عن طالب..." />
        </label>
      </section>

      <section class="neon-card-soft overflow-hidden">
        <div class="overflow-x-auto custom-scroll">
          <table class="min-w-full text-right text-sm">
            <thead>
              <tr class="text-slate-400">
                <th class="px-4 py-3 font-semibold">الاسم</th>
                <th class="px-4 py-3 font-semibold">البريد</th>
                <th class="px-4 py-3 font-semibold">الهاتف</th>
                <th class="px-4 py-3 font-semibold">الفصل</th>
                <th class="px-4 py-3 font-semibold">إجراءات</th>
              </tr>
            </thead>
            <tbody id="students-table-body">
              ${data.students
                .map(
                  (student) => `
                    <tr class="table-row" data-class="${student.className}" data-search="${student.name} ${student.email} ${student.phone}">
                      <td class="px-4 py-3 font-semibold text-slate-100">${student.name}</td>
                      <td class="px-4 py-3 text-slate-400">${student.email}</td>
                      <td class="px-4 py-3 text-slate-400">${student.phone}</td>
                      <td class="px-4 py-3"><span class="badge badge-cyan">${student.className}</span></td>
                      <td class="px-4 py-3 text-slate-300">${icon("edit", "h-4 w-4")}</td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </section>
    `;
  }

  function renderTeachers() {
    return `
      <section class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        ${data.teachers
          .map(
            (teacher) => `
              <article class="neon-card p-5 fade-up">
                <div class="mb-3 flex items-start justify-between">
                  <div>
                    <h3 class="text-lg font-bold">${teacher.name}</h3>
                    <p class="text-sm text-cyan-300">${teacher.subject}</p>
                  </div>
                  <span class="rounded-full border border-slate-700/70 bg-slate-800/70 p-2 text-slate-300">${icon("user", "h-5 w-5")}</span>
                </div>
                <p class="text-sm leading-7 text-slate-400">${teacher.bio}</p>
              </article>
            `
          )
          .join("")}
      </section>
    `;
  }

  function renderClasses() {
    return `
      <section class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        ${data.classes
          .map(
            (item) => `
              <article class="neon-card p-5 fade-up">
                <h3 class="mb-2 text-2xl font-bold">${item.name}</h3>
                <p class="mb-2 text-sm text-cyan-300">${item.subject}</p>
                <ul class="space-y-2 text-sm text-slate-300">
                  <li class="flex items-center justify-between"><span>${item.teacher}</span><span>المعلم</span></li>
                  <li class="flex items-center justify-between"><span>${item.students} طلاب</span><span>عدد الطلاب</span></li>
                  <li class="text-slate-400">${item.schedule}</li>
                </ul>
              </article>
            `
          )
          .join("")}
      </section>
    `;
  }

  function renderAttendance() {
    return `
      <section class="neon-card p-8 text-center">
        <div class="mx-auto flex h-32 w-32 items-center justify-center rounded-2xl border border-cyan-400/60 bg-cyan-500/10 text-cyan-300 shadow-[0_0_28px_rgba(23,212,255,0.2)]">
          ${icon("qr", "h-14 w-14")}
        </div>
        <p class="mt-4 text-slate-400">امسح QR لتسجيل الحضور</p>
      </section>

      <section class="mt-4 neon-card-soft overflow-hidden">
        <div class="overflow-x-auto custom-scroll">
          <table class="min-w-full text-right text-sm">
            <thead>
              <tr class="text-slate-400">
                <th class="px-4 py-3 font-semibold">الطالب</th>
                <th class="px-4 py-3 font-semibold">التاريخ</th>
                <th class="px-4 py-3 font-semibold">الفصل</th>
                <th class="px-4 py-3 font-semibold">الحالة</th>
              </tr>
            </thead>
            <tbody>
              ${data.attendanceRecords
                .map(
                  (row) => `
                    <tr class="table-row">
                      <td class="px-4 py-3 font-semibold text-slate-100">${row.name}</td>
                      <td class="px-4 py-3 text-slate-400">${row.date}</td>
                      <td class="px-4 py-3 text-slate-400">${row.className}</td>
                      <td class="px-4 py-3">${statusBadge(row.status)}</td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </section>
    `;
  }

  function renderGrades() {
    return `
      <section class="mb-4">
        <button type="button" class="btn-primary">+ إضافة درجة</button>
      </section>

      <section class="neon-card-soft overflow-hidden">
        <div class="overflow-x-auto custom-scroll">
          <table class="min-w-full text-right text-sm">
            <thead>
              <tr class="text-slate-400">
                <th class="px-4 py-3 font-semibold">الطالب</th>
                <th class="px-4 py-3 font-semibold">المادة</th>
                <th class="px-4 py-3 font-semibold">الدرجة</th>
                <th class="px-4 py-3 font-semibold">التاريخ</th>
              </tr>
            </thead>
            <tbody>
              ${data.grades
                .map(
                  (row) => `
                    <tr class="table-row">
                      <td class="px-4 py-3 font-semibold text-slate-100">${row.name}</td>
                      <td class="px-4 py-3 text-slate-400">${row.subject}</td>
                      <td class="px-4 py-3">
                        <div class="flex min-w-32 items-center gap-2">
                          <div class="progress-track">
                            <div data-progress="${row.grade}" class="progress-fill"></div>
                          </div>
                          <span class="font-bold text-cyan-300">${row.grade}/100</span>
                        </div>
                      </td>
                      <td class="px-4 py-3 text-slate-400">${row.date}</td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </section>
    `;
  }

  function renderAssignments() {
    return `
      <section class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        ${data.assignments
          .map(
            (item) => `
              <article class="neon-card p-5">
                <div class="mb-3 flex items-start justify-between">
                  <div>
                    <h3 class="text-lg font-bold">${item.title}</h3>
                    <p class="text-sm text-slate-400">${item.subject}</p>
                  </div>
                  ${statusBadge(item.status)}
                </div>
                <p class="mb-4 text-sm leading-7 text-slate-400">${item.details}</p>
                <div class="flex items-center justify-between border-t border-slate-700/30 pt-3 text-sm">
                  <span class="text-slate-500">الموعد: ${item.dueDate}</span>
                  <button class="rounded-full border border-cyan-400/40 px-3 py-1 text-cyan-300 hover:bg-cyan-400/10" type="button">تسليم الواجب</button>
                </div>
              </article>
            `
          )
          .join("")}
      </section>
    `;
  }

  function renderPayments() {
    return `
      <section class="neon-card-soft overflow-hidden">
        <div class="overflow-x-auto custom-scroll">
          <table class="min-w-full text-right text-sm">
            <thead>
              <tr class="text-slate-400">
                <th class="px-4 py-3 font-semibold">الطالب</th>
                <th class="px-4 py-3 font-semibold">الوصف</th>
                <th class="px-4 py-3 font-semibold">المبلغ</th>
                <th class="px-4 py-3 font-semibold">التاريخ</th>
                <th class="px-4 py-3 font-semibold">الحالة</th>
              </tr>
            </thead>
            <tbody>
              ${data.payments
                .map(
                  (row) => `
                    <tr class="table-row">
                      <td class="px-4 py-3 font-semibold text-slate-100">${row.student}</td>
                      <td class="px-4 py-3 text-slate-400">${row.description}</td>
                      <td class="px-4 py-3 font-bold">${row.amount}</td>
                      <td class="px-4 py-3 text-slate-400">${row.date}</td>
                      <td class="px-4 py-3">${statusBadge(row.status)}</td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </section>
    `;
  }

  function renderNotifications() {
    const iconByType = {
      info: "✓",
      danger: "!",
      neutral: "i"
    };

    return `
      <section class="space-y-3">
        ${data.notifications
          .map(
            (item) => `
              <article class="neon-card-soft flex items-center justify-between gap-4 px-4 py-4 fade-up">
                <div class="flex items-center gap-3">
                  <span class="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 text-sm ${item.type === "danger" ? "text-red-300" : item.type === "info" ? "text-cyan-300" : "text-slate-300"}">${iconByType[item.type] || "i"}</span>
                  <div>
                    <h3 class="text-lg font-semibold">${item.title}</h3>
                    <p class="text-sm text-slate-400">${item.description}</p>
                  </div>
                </div>
                <div class="text-left">
                  <span class="inline-block h-2.5 w-2.5 rounded-full ${dotColor(item.type === "neutral" ? "purple" : item.type)}"></span>
                  <p class="mt-1 text-sm text-slate-500">${item.date}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </section>
    `;
  }

  function renderReports() {
    return `
      <section class="neon-card p-4 md:p-6">
        <h3 class="mb-4 text-2xl font-bold">تقرير الحضور</h3>
        <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div class="rounded-xl bg-emerald-900/10 p-4">
            <p class="text-center text-4xl font-bold text-cyan-300">${data.reports.attendance.present}%</p>
            <p class="mb-3 text-center text-sm text-slate-400">نسبة الحضور</p>
            <div class="progress-track"><div data-progress="${data.reports.attendance.present}" class="progress-fill cyan"></div></div>
          </div>
          <div class="rounded-xl bg-red-900/10 p-4">
            <p class="text-center text-4xl font-bold text-red-400">${data.reports.attendance.absent}%</p>
            <p class="mb-3 text-center text-sm text-slate-400">نسبة الغياب</p>
            <div class="progress-track"><div data-progress="${data.reports.attendance.absent}" class="progress-fill" style="background:linear-gradient(90deg,#3f4d72,#ff2f52)"></div></div>
          </div>
        </div>
      </section>

      <section class="mt-4 neon-card-soft p-5">
        <h3 class="mb-4 text-2xl font-bold">تقرير الدرجات حسب المادة</h3>
        ${data.reports.bySubject
          .map(
            (item) => `
              <div class="mb-3 last:mb-0">
                <div class="mb-1 flex items-center justify-between text-sm">
                  <span class="text-slate-300">${item.name}</span>
                  <span class="font-bold ${item.value === 0 ? "text-red-400" : "text-cyan-300"}">${item.value}%</span>
                </div>
                <div class="progress-track"><div data-progress="${item.value}" class="progress-fill cyan"></div></div>
              </div>
            `
          )
          .join("")}
      </section>

      <section class="mt-4 neon-card-soft p-5">
        <h3 class="mb-4 text-2xl font-bold">أداء الطلاب</h3>
        <ul class="space-y-3">
          ${data.reports.studentPerformance
            .map(
              (item, index) => `
                <li class="flex flex-wrap items-center gap-4 rounded-xl bg-slate-900/40 p-3">
                  <span class="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-xs font-bold text-slate-950">${index + 1}</span>
                  <span class="min-w-32 flex-1 text-slate-200">${item.name}</span>
                  <div class="flex min-w-[190px] flex-1 items-center gap-2">
                    <div class="progress-track"><div data-progress="${item.value}" class="progress-fill"></div></div>
                    <span class="text-sm font-bold text-cyan-300">${item.value}%</span>
                  </div>
                </li>
              `
            )
            .join("")}
        </ul>
      </section>
    `;
  }

  const renderers = {
    dashboard: renderDashboard,
    profile: renderProfile,
    students: renderStudents,
    teachers: renderTeachers,
    classes: renderClasses,
    attendance: renderAttendance,
    grades: renderGrades,
    assignments: renderAssignments,
    payments: renderPayments,
    notifications: renderNotifications,
    reports: renderReports
  };

  const pageMeta = pages[pageKey] || pages.dashboard;

  function renderLayout() {
    app.innerHTML = `
      <div class="min-h-screen lg:flex lg:flex-row-reverse custom-scroll">
        <div id="overlay" class="mobile-overlay fixed inset-0 z-40 hidden lg:hidden"></div>

        <aside id="sidebar" class="sidebar-mobile glass-panel top-0 h-screen w-[260px] shrink-0 p-4 lg:sticky lg:block lg:translate-x-0">
          <div class="mb-5 flex items-center justify-between border-b border-slate-700/40 pb-4">
            <div>
              <h1 class="text-2xl font-extrabold text-cyan-300">إدارة التعليم</h1>
            </div>
            <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950">${icon("teacher", "w-4 h-4")}</span>
          </div>

          <nav class="space-y-1">
            ${navItems
              .map(
                (item) => `
                  <a class="side-link ${item.key === pageKey ? "active" : ""} flex items-center justify-between rounded-xl px-3 py-2.5 text-base text-slate-300" href="${item.href}">
                    <span>${item.label}</span>
                    <span class="opacity-80">${icon(item.icon, "h-4 w-4")}</span>
                  </a>
                `
              )
              .join("")}
          </nav>

          <div class="mt-6 border-t border-slate-700/40 pt-4">
            <a href="#" class="side-link flex items-center justify-between rounded-xl px-3 py-2.5 text-base text-slate-300">
              <span>تسجيل الخروج</span>
              <span>${icon("logout", "h-4 w-4")}</span>
            </a>
          </div>
        </aside>

        <div class="min-w-0 flex-1">
          <header class="glass-panel sticky top-0 z-30 border-b border-slate-700/50 px-4 py-3 sm:px-6">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 class="text-3xl font-bold">${pageMeta.title}</h2>
                <p class="text-sm text-slate-400">${pageMeta.breadcrumb}</p>
              </div>

              <div class="flex items-center gap-2 sm:gap-3">
                <button id="sidebar-open" type="button" class="glass-panel inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 lg:hidden">${icon("menu")}</button>
                <button type="button" class="relative inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800/70 text-slate-300">
                  ${icon("bell")}
                  <span class="absolute -right-1 -top-1 rounded-full bg-pink-500 px-1.5 text-xs leading-5">3</span>
                </button>
                <button id="role-toggle" type="button" class="inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-2 text-sm text-violet-200">
                  <span id="role-dot" class="h-2 w-2 rounded-full bg-violet-400"></span>
                  <span id="role-label">معلم</span>
                </button>
                <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/80 text-slate-300">${icon("user")}</span>
              </div>
            </div>
          </header>

          <main class="p-4 sm:p-6">
            ${((renderers[pageKey] || renderDashboard)())}
          </main>
        </div>
      </div>
    `;
  }

  function animateProgress() {
    requestAnimationFrame(function () {
      const bars = document.querySelectorAll("[data-progress]");
      bars.forEach(function (bar) {
        const value = Number(bar.getAttribute("data-progress") || 0);
        bar.style.width = `${Math.min(Math.max(value, 0), 100)}%`;
      });
    });
  }

  function setupStudentsFiltering() {
    const search = document.getElementById("student-search");
    const classFilter = document.getElementById("student-class-filter");
    const rows = Array.from(document.querySelectorAll("#students-table-body tr"));

    if (!search || !classFilter || !rows.length) {
      return;
    }

    function applyFilter() {
      const searchValue = search.value.trim().toLowerCase();
      const classValue = classFilter.value;

      rows.forEach(function (row) {
        const rowText = (row.getAttribute("data-search") || "").toLowerCase();
        const rowClass = row.getAttribute("data-class");

        const isMatchSearch = !searchValue || rowText.includes(searchValue);
        const isMatchClass = classValue === "all" || classValue === rowClass;

        row.style.display = isMatchSearch && isMatchClass ? "" : "none";
      });
    }

    search.addEventListener("input", applyFilter);
    classFilter.addEventListener("change", applyFilter);
  }

  function setupSidebar() {
    const sidebar = document.getElementById("sidebar");
    const openButton = document.getElementById("sidebar-open");
    const overlay = document.getElementById("overlay");

    if (!sidebar || !openButton || !overlay) {
      return;
    }

    function openSidebar() {
      sidebar.classList.add("open");
      overlay.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    }

    function closeSidebar() {
      sidebar.classList.remove("open");
      overlay.classList.add("hidden");
      document.body.style.overflow = "";
    }

    openButton.addEventListener("click", openSidebar);
    overlay.addEventListener("click", closeSidebar);

    const media = window.matchMedia("(min-width: 1024px)");
    media.addEventListener("change", function (e) {
      if (e.matches) {
        closeSidebar();
      }
    });
  }

  function setupRoleToggle() {
    const roleToggle = document.getElementById("role-toggle");
    const roleLabel = document.getElementById("role-label");
    const roleDot = document.getElementById("role-dot");
    let isTeacher = true;

    if (!roleToggle || !roleLabel || !roleDot) {
      return;
    }

    roleToggle.addEventListener("click", function () {
      isTeacher = !isTeacher;
      roleLabel.textContent = isTeacher ? "معلم" : "مشرف";
      roleDot.className = `h-2 w-2 rounded-full ${isTeacher ? "bg-violet-400" : "bg-cyan-400"}`;
      roleToggle.className = `inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm ${
        isTeacher
          ? "border-violet-500/40 bg-violet-500/10 text-violet-200"
          : "border-cyan-500/40 bg-cyan-500/10 text-cyan-200"
      }`;
    });
  }

  renderLayout();
  animateProgress();
  setupSidebar();
  setupRoleToggle();

  if (pageKey === "students") {
    setupStudentsFiltering();
  }
})();
