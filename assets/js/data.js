window.schoolData = {
  profile: {
    name: "أحمد محمد علي",
    email: "ahmed@school.com",
    phone: "0501234567",
    role: "معلم",
    className: "الأول"
  },
  stats: [
    { id: "students", title: "إجمالي الطلاب", value: 8, icon: "users" },
    { id: "attendance", title: "نسبة الحضور", value: "70%", icon: "clipboard" },
    { id: "avgGrades", title: "متوسط الدرجات", value: "85%", icon: "award" },
    { id: "newNotifications", title: "إشعارات جديدة", value: 3, icon: "bell" },
    { id: "payments", title: "مدفوعات مختلفة", value: 3, icon: "credit" },
    { id: "assignments", title: "واجبات معلقة", value: 3, icon: "file" }
  ],
  subjectsPerformance: [
    { subject: "الرياضيات", score: 92 },
    { subject: "اللغة العربية", score: 85 },
    { subject: "العلوم", score: 90 },
    { subject: "الإنجليزية", score: 88 }
  ],
  attendancePerformance: [
    { week: "الأسبوع 1", value: 85 },
    { week: "الأسبوع 2", value: 92 },
    { week: "الأسبوع 3", value: 78 },
    { week: "الأسبوع 4", value: 90 }
  ],
  activities: [
    { text: "تم رصد درجة جديدة في الرياضيات", time: "منذ ساعة", type: "info" },
    { text: "واجب جديد: حل تمارين الفصل الثالث", time: "منذ 3 ساعات", type: "purple" },
    { text: "تأخر في سداد رسوم الفصل الثاني", time: "منذ يوم", type: "danger" },
    { text: "تم تحديث جدول حصص الفصل 1-أ", time: "منذ يومين", type: "purple" },
    { text: "نتائج اختبار منتصف الفصل متاحة", time: "منذ 3 أيام", type: "info" }
  ],
  students: [
    { name: "أحمد محمد علي", email: "ahmed@school.com", phone: "0501234567", className: "الفصل 1-أ" },
    { name: "فاطمة حسن", email: "fatima@school.com", phone: "0507654321", className: "الفصل 1-أ" },
    { name: "عمر خالد", email: "omar@school.com", phone: "0509876543", className: "الفصل 2-ب" },
    { name: "نورة سعيد", email: "noura@school.com", phone: "0503456789", className: "الفصل 2-ب" },
    { name: "يوسف إبراهيم", email: "yousef@school.com", phone: "0502345678", className: "الفصل 3-أ" },
    { name: "مريم عبدالله", email: "mariam@school.com", phone: "0508765432", className: "الفصل 3-أ" },
    { name: "خالد أحمد", email: "khaled@school.com", phone: "0504567890", className: "الفصل 1-أ" },
    { name: "سارة محمود", email: "sara@school.com", phone: "0506789012", className: "الفصل 2-ب" }
  ],
  teachers: [
    { name: "أحمد خالد", subject: "العلوم", bio: "دكتوراه في الفيزياء، باحث في مجال الطاقة المتجددة" },
    { name: "سارة الأحمد", subject: "اللغة العربية", bio: "ماجستير في الأدب العربي، متخصصة في النحو والصرف" },
    { name: "محمد علي", subject: "الرياضيات", bio: "خبرة 15 سنة في تدريس الرياضيات التطبيقية" },
    { name: "نوف السلام", subject: "اللغة الإنجليزية", bio: "حاصلة على شهادات دولية وخبرة 10 سنوات" }
  ],
  classes: [
    {
      name: "الفصل 1-أ",
      subject: "الرياضيات",
      teacher: "أ. أحمد علي",
      students: 3,
      schedule: "الأحد - الثلاثاء - الخميس | 8:00 - 9:30"
    },
    {
      name: "الفصل 2-ب",
      subject: "اللغة العربية",
      teacher: "أ. سارة الأحمد",
      students: 3,
      schedule: "الإثنين - الأربعاء | 10:00 - 11:30"
    },
    {
      name: "الفصل 3-أ",
      subject: "العلوم",
      teacher: "د. أحمد خالد",
      students: 2,
      schedule: "الأحد - الثلاثاء | 12:00 - 1:30"
    }
  ],
  attendanceRecords: [
    { name: "أحمد محمد علي", date: "2025-02-10", className: "الفصل 1-أ", status: "حاضر" },
    { name: "فاطمة حسن", date: "2025-02-10", className: "الفصل 1-أ", status: "حاضر" },
    { name: "عمر خالد", date: "2025-02-10", className: "الفصل 2-ب", status: "غائب" },
    { name: "نورة سعيد", date: "2025-02-10", className: "الفصل 2-ب", status: "حاضر" },
    { name: "يوسف إبراهيم", date: "2025-02-10", className: "الفصل 3-أ", status: "حاضر" },
    { name: "مريم عبدالله", date: "2025-02-10", className: "الفصل 3-أ", status: "غائب" },
    { name: "أحمد محمد علي", date: "2025-02-11", className: "الفصل 1-أ", status: "حاضر" },
    { name: "فاطمة حسن", date: "2025-02-11", className: "الفصل 1-أ", status: "غائب" },
    { name: "خالد أحمد", date: "2025-02-10", className: "الفصل 1-أ", status: "حاضر" },
    { name: "سارة محمود", date: "2025-02-10", className: "الفصل 2-ب", status: "حاضر" }
  ],
  grades: [
    { name: "أحمد محمد علي", subject: "الرياضيات", grade: 92, date: "2025-01-15" },
    { name: "أحمد محمد علي", subject: "اللغة العربية", grade: 85, date: "2025-01-15" },
    { name: "فاطمة حسن", subject: "الرياضيات", grade: 78, date: "2025-01-15" },
    { name: "عمر خالد", subject: "العلوم", grade: 95, date: "2025-01-15" },
    { name: "نورة سعيد", subject: "اللغة الإنجليزية", grade: 88, date: "2025-01-15" },
    { name: "يوسف إبراهيم", subject: "العلوم", grade: 70, date: "2025-01-15" },
    { name: "أحمد محمد علي", subject: "العلوم", grade: 90, date: "2025-02-01" }
  ],
  assignments: [
    {
      title: "حل تمارين الفصل الثالث",
      subject: "الرياضيات",
      details: "حل جميع تمارين الفصل الثالث من صفحة 45 إلى 60",
      dueDate: "2025-02-15",
      status: "معلق"
    },
    {
      title: "كتابة مقال عن البيئة",
      subject: "اللغة العربية",
      details: "كتابة مقال من 500 كلمة عن حماية البيئة",
      dueDate: "2025-02-12",
      status: "مسلم"
    },
    {
      title: "تقرير تجربة الكيمياء",
      subject: "العلوم",
      details: "كتابة تقرير مفصل عن تجربة التفاعلات الكيميائية",
      dueDate: "2025-02-18",
      status: "معلق"
    },
    {
      title: "ترجمة النص الأدبي",
      subject: "اللغة الإنجليزية",
      details: "ترجمة النص من الإنجليزية إلى العربية مع الحفاظ على المعنى",
      dueDate: "2025-02-10",
      status: "متأخر"
    },
    {
      title: "بحث عن النظرية النسبية",
      subject: "العلوم",
      details: "بحث شامل عن نظرية أينشتاين النسبية وتطبيقاتها",
      dueDate: "2025-02-20",
      status: "معلق"
    }
  ],
  payments: [
    {
      student: "أحمد محمد علي",
      description: "رسوم الفصل الأول",
      amount: "5,000 ر.س",
      date: "2025-01-01",
      status: "مدفوع"
    },
    {
      student: "أحمد محمد علي",
      description: "رسوم الفصل الثاني",
      amount: "5,000 ر.س",
      date: "2025-02-01",
      status: "معلق"
    },
    {
      student: "فاطمة حسن",
      description: "رسوم الفصل الأول",
      amount: "5,000 ر.س",
      date: "2025-01-01",
      status: "مدفوع"
    },
    {
      student: "عمر خالد",
      description: "رسوم الفصل الأول",
      amount: "5,000 ر.س",
      date: "2025-01-01",
      status: "متأخر"
    },
    {
      student: "نورة سعيد",
      description: "رسوم الفصل الأول",
      amount: "5,000 ر.س",
      date: "2025-01-01",
      status: "مدفوع"
    },
    {
      student: "يوسف إبراهيم",
      description: "رسوم الفصل الثاني",
      amount: "5,000 ر.س",
      date: "2025-02-01",
      status: "متأخر"
    }
  ],
  notifications: [
    {
      title: "امتحان قريب",
      description: "تبقى 3 أيام على اختبار الرياضيات",
      date: "2025-02-10",
      type: "danger"
    },
    {
      title: "درجة جديدة",
      description: "تم رصد درجة جديدة لمادة العلوم",
      date: "2025-02-09",
      type: "info"
    },
    {
      title: "واجب جديد",
      description: "تم إضافة واجب جديد في مادة اللغة العربية",
      date: "2025-02-08",
      type: "neutral"
    },
    {
      title: "تأخر في الدفع",
      description: "يرجى سداد رسوم الفصل الثاني",
      date: "2025-02-07",
      type: "danger"
    },
    {
      title: "تحديث الجدول",
      description: "تم تعديل جدول حصص الفصل 1-أ",
      date: "2025-02-06",
      type: "neutral"
    },
    {
      title: "نتائج الاختبار",
      description: "تم نشر نتائج اختبار منتصف الفصل",
      date: "2025-02-05",
      type: "info"
    }
  ],
  reports: {
    attendance: { present: 70, absent: 30 },
    bySubject: [
      { name: "الرياضيات", value: 85 },
      { name: "اللغة العربية", value: 85 },
      { name: "العلوم", value: 85 },
      { name: "الإنجليزية", value: 0 }
    ],
    studentPerformance: [
      { name: "أحمد خالد", value: 95 },
      { name: "أحمد محمد علي", value: 89 },
      { name: "نور سعيد", value: 88 },
      { name: "فاطمة حسن", value: 78 },
      { name: "يوسف إبراهيم", value: 70 }
    ]
  }
};
