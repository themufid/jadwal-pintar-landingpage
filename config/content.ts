import {
  Feature,
  Screenshot,
  Testimonial,
  FAQItem,
  ChangelogEntry,
  Persona,
  TimelineStep,
} from "@/types";

export const personas: Persona[] = [
  {
    id: "student",
    name: "Pelajar",
    icon: "BookOpen",
    description: "Kelola jadwal sekolah, les, dan kegiatan ekstrakurikuler",
    benefit: "Jangan pernah lupa tugas atau jadwal pelajaran lagi",
  },
  {
    id: "university",
    name: "Mahasiswa",
    icon: "GraduationCap",
    description: "Atur kuliah, tugas, dan jadwal kerja paruh waktu",
    benefit: "Selesaikan proyek tepat waktu dengan planning yang baik",
  },
  {
    id: "teacher",
    name: "Guru",
    icon: "Presentation",
    description: "Kelola jadwal mengajar dan rencana pembelajaran",
    benefit: "Persiapan mengajar menjadi lebih terstruktur",
  },
  {
    id: "parent",
    name: "Orang Tua",
    icon: "Users",
    description: "Pantau jadwal anak dan aktivitas keluarga",
    benefit: "Koordinasi keluarga lebih mudah dan terorganisir",
  },
  {
    id: "employee",
    name: "Karyawan",
    icon: "Briefcase",
    description: "Kelola jadwal kerja, meeting, dan deadline proyek",
    benefit: "Tingkatkan produktivitas dan jangan lewatkan meeting",
  },
  {
    id: "freelancer",
    name: "Freelancer",
    icon: "Laptop",
    description: "Atur klien, proyek, dan deadline multiple",
    benefit: "Kelola banyak proyek tanpa stress",
  },
];

export const features: Feature[] = [
  {
    id: "smart-dashboard",
    icon: "LayoutGrid",
    title: "Dashboard Cerdas",
    description: "Lihat semua jadwal dan tugas dalam satu tempat",
    category: "Dashboard",
  },
  {
    id: "calendar-view",
    icon: "Calendar",
    title: "Kalender Interaktif",
    description: "Navigasi jadwal dengan tampilan kalender yang intuitif",
    category: "Kalender",
  },
  {
    id: "schedule",
    icon: "Clock",
    title: "Penjadwalan Fleksibel",
    description: "Buat jadwal yang dapat disesuaikan dengan kebutuhan",
    category: "Jadwal",
  },
  {
    id: "tasks",
    icon: "CheckSquare",
    title: "Manajemen Tugas",
    description: "Lacak dan kelola semua tugas dengan prioritas",
    category: "Tugas",
  },
  {
    id: "todo-list",
    icon: "ListTodo",
    title: "To-Do List",
    description: "Buat to-do list harian untuk produktivitas maksimal",
    category: "To-Do",
  },
  {
    id: "goals",
    icon: "Target",
    title: "Manajemen Target",
    description: "Tetapkan dan pantau target jangka pendek dan panjang",
    category: "Target",
  },
  {
    id: "focus-mode",
    icon: "Zap",
    title: "Mode Fokus",
    description: "Tingkatkan konsentrasi dengan pengaturan fokus yang didedikasikan",
    category: "Fokus",
  },
  {
    id: "reminders",
    icon: "Bell",
    title: "Notifikasi Pintar",
    description: "Dapatkan pengingat tepat waktu untuk setiap jadwal",
    category: "Notifikasi",
  },
  {
    id: "categories",
    icon: "Tags",
    title: "Kategorisasi",
    description: "Organisir jadwal dengan kategori dan label custom",
    category: "Organisasi",
  },
  {
    id: "sync",
    icon: "RefreshCw",
    title: "Sinkronisasi Perangkat",
    description: "Akses jadwal dari berbagai perangkat dengan sinkronisasi real-time",
    category: "Sinkronisasi",
  },
  {
    id: "search",
    icon: "Search",
    title: "Pencarian Cepat",
    description: "Temukan jadwal dan tugas dengan pencarian yang powerful",
    category: "Pencarian",
  },
  {
    id: "offline",
    icon: "Wifi",
    title: "Mode Offline",
    description: "Akses jadwal bahkan tanpa koneksi internet",
    category: "Fitur",
  },
  {
    id: "export",
    icon: "Download",
    title: "Export Jadwal",
    description: "Ekspor jadwal ke format ICS atau PDF",
    category: "Export",
  },
  {
    id: "themes",
    icon: "Palette",
    title: "Tema Kustom",
    description: "Pilih dari berbagai tema warna yang indah",
    category: "Personalisasi",
  },
  {
    id: "widgets",
    icon: "Square",
    title: "Widget Homescreen",
    description: "Tambahkan widget di homescreen untuk akses cepat",
    category: "Widget",
  },
  {
    id: "statistics",
    icon: "PieChart",
    title: "Analitik Produktivitas",
    description: "Lihat statistik dan progress aktivitas Anda",
    category: "Analitik",
  },
  {
    id: "repeat",
    icon: "RotateCcw",
    title: "Jadwal Berulang",
    description: "Buat jadwal yang berulang otomatis setiap hari/minggu/bulan",
    category: "Jadwal",
  },
  {
    id: "color-coded",
    icon: "Highlighter",
    title: "Kode Warna",
    description: "Beda-bedakan jadwal dengan sistem warna yang jelas",
    category: "Visualisasi",
  },
  {
    id: "duration",
    icon: "Timer",
    title: "Durasi Aktivitas",
    description: "Atur durasi untuk setiap jadwal dan aktivitas",
    category: "Jadwal",
  },
  {
    id: "location",
    icon: "MapPin",
    title: "Lokasi & Alamat",
    description: "Simpan lokasi untuk setiap jadwal atau meeting",
    category: "Detail",
  },
];

export const screenshots: Screenshot[] = [
  {
    id: "home-screen",
    title: "Beranda",
    description: "Dashboard utama menampilkan semua aktivitas hari ini",
    image: "/images/screenshot-1.png",
    thumbnail: "/images/screenshot-1-thumb.png",
  },
  {
    id: "calendar-view",
    title: "Kalender",
    description: "Tampilan kalender bulanan dengan semua jadwal",
    image: "/images/screenshot-2.png",
    thumbnail: "/images/screenshot-2-thumb.png",
  },
  {
    id: "schedule-detail",
    title: "Detail Jadwal",
    description: "Lihat detail lengkap setiap jadwal dan tugas",
    image: "/images/screenshot-3.png",
    thumbnail: "/images/screenshot-3-thumb.png",
  },
  {
    id: "add-schedule",
    title: "Tambah Jadwal",
    description: "Interface mudah untuk membuat jadwal baru",
    image: "/images/screenshot-4.png",
    thumbnail: "/images/screenshot-4-thumb.png",
  },
  {
    id: "tasks-list",
    title: "Daftar Tugas",
    description: "Kelola semua tugas dengan status dan prioritas",
    image: "/images/screenshot-5.png",
    thumbnail: "/images/screenshot-5-thumb.png",
  },
  {
    id: "statistics",
    title: "Statistik",
    description: "Lihat analitik produktivitas dan progress Anda",
    image: "/images/screenshot-6.png",
    thumbnail: "/images/screenshot-6-thumb.png",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "student-1",
    name: "Rani",
    role: "Mahasiswa Teknik",
    avatar: "/images/avatar-1.jpg",
    quote:
      "Jadwal Pintarku membantu saya mengelola kuliah, tugas, dan kerja paruh waktu. Sekarang saya tidak pernah lupa deadline lagi!",
    rating: 5,
    company: "ITB",
  },
  {
    id: "teacher-1",
    name: "Pak Joko",
    role: "Guru SMA",
    avatar: "/images/avatar-2.jpg",
    quote:
      "Sebagai guru, saya punya banyak tanggung jawab. App ini membuat saya lebih terorganisir dalam merencanakan pelajaran dan mengevaluasi siswa.",
    rating: 5,
    company: "SMA Negeri 1",
  },
  {
    id: "employee-1",
    name: "Budi",
    role: "Project Manager",
    avatar: "/images/avatar-3.jpg",
    quote:
      "Tingkat produktivitas tim saya meningkat 40% sejak menggunakan Jadwal Pintarku. Semua deadline terpenuhi dengan baik.",
    rating: 5,
    company: "Tech Startup",
  },
  {
    id: "parent-1",
    name: "Ibu Siti",
    role: "Ibu Rumah Tangga",
    avatar: "/images/avatar-4.jpg",
    quote:
      "Memantau jadwal anak-anak dan aktivitas keluarga jadi mudah. Koordinasi keluarga lebih terstruktur dan tidak ada yang terlewat.",
    rating: 5,
    company: "Keluarga",
  },
];

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "Apa itu Jadwal Pintarku?",
    answer:
      "Jadwal Pintarku adalah aplikasi penjadwalan pintar yang membantu Anda mengelola jadwal, tugas, dan aktivitas sehari-hari dengan cara yang lebih terstruktur dan produktif.",
    category: "General",
  },
  {
    id: "faq-2",
    question: "Berapa biaya aplikasi ini?",
    answer:
      "Jadwal Pintarku sepenuhnya gratis untuk diunduh dan digunakan. Tidak ada biaya tersembunyi atau fitur premium yang berbayar.",
    category: "General",
  },
  {
    id: "faq-3",
    question: "Di mana saya bisa mengunduh aplikasi?",
    answer:
      "Aplikasi tersedia di Google Play Store. Cari 'Jadwal Pintarku' dan tekan tombol Install untuk mengunduh.",
    category: "Download",
  },
  {
    id: "faq-4",
    question: "Apakah ada versi iOS?",
    answer:
      "Saat ini aplikasi hanya tersedia untuk Android. Kami sedang mengembangkan versi iOS dan akan segera diluncurkan.",
    category: "Download",
  },
  {
    id: "faq-5",
    question: "Bagaimana cara membuat jadwal baru?",
    answer:
      "Buka aplikasi, klik tombol 'Tambah Jadwal' atau '+', isi detail jadwal (judul, waktu, kategori), dan simpan. Jadwal akan muncul di dashboard dan kalender.",
    category: "Technical",
  },
  {
    id: "faq-6",
    question: "Bisakah saya menyinkronkan data di berbagai perangkat?",
    answer:
      "Ya, jika Anda login dengan akun, data akan tersinkronkan secara otomatis di semua perangkat Android yang Anda gunakan.",
    category: "Technical",
  },
  {
    id: "faq-7",
    question: "Apakah aplikasi bisa digunakan offline?",
    answer:
      "Ya, Anda dapat menggunakan aplikasi secara offline. Data akan tersinkronkan ketika internet tersedia kembali.",
    category: "Technical",
  },
  {
    id: "faq-8",
    question: "Bagaimana cara mendapatkan notifikasi pengingat?",
    answer:
      "Saat membuat jadwal, aktifkan notifikasi dan pilih waktu pengingat (15 menit sebelumnya, 1 jam, atau custom). Anda akan menerima notifikasi pada waktu yang ditentukan.",
    category: "Technical",
  },
  {
    id: "faq-9",
    question: "Apakah data saya aman?",
    answer:
      "Ya, data Anda disimpan dengan enkripsi dan kami tidak pernah membagikan data pribadi Anda kepada pihak ketiga tanpa izin.",
    category: "Data",
  },
  {
    id: "faq-10",
    question: "Bagaimana cara menghapus data saya?",
    answer:
      "Anda dapat menghapus data Anda kapan saja melalui pengaturan aplikasi atau menghubungi cs.hinaitech@gmail.com. Lihat halaman Penghapusan Data untuk detail lebih lanjut.",
    category: "Data",
  },
];

export const timelineSteps: TimelineStep[] = [
  {
    id: "step-1",
    step: 1,
    title: "Unduh & Install",
    description: "Buka Google Play Store dan cari 'Jadwal Pintarku', lalu install",
    icon: "Download",
  },
  {
    id: "step-2",
    step: 2,
    title: "Buat Akun",
    description:
      "Daftar dengan email atau login dengan akun existing yang Anda miliki",
    icon: "User",
  },
  {
    id: "step-3",
    step: 3,
    title: "Buat Jadwal Pertama",
    description: "Mulai dengan membuat jadwal untuk aktivitas Anda",
    icon: "Plus",
  },
  {
    id: "step-4",
    step: 4,
    title: "Atur Notifikasi",
    description: "Aktifkan notifikasi untuk tidak ketinggalan jadwal penting",
    icon: "Bell",
  },
  {
    id: "step-5",
    step: 5,
    title: "Kelola Tugas Harian",
    description: "Mulai melacak tugas dan mark as done saat selesai",
    icon: "CheckCircle",
  },
  {
    id: "step-6",
    step: 6,
    title: "Tingkatkan Produktivitas",
    description: "Lihat statistik dan terus tingkatkan efisiensi Anda",
    icon: "TrendingUp",
  },
];

export const whyChooseItems = [
  "Desain yang intuitif dan mudah digunakan",
  "Fitur lengkap untuk semua kebutuhan penjadwalan",
  "Sinkronisasi real-time di semua perangkat",
  "Notifikasi pintar yang tidak mengganggu",
  "Mode offline untuk akses tanpa internet",
  "Kategorisasi dan label custom yang fleksibel",
  "Widget untuk quick access di homescreen",
  "Analitik produktivitas untuk self-improvement",
  "Keamanan data dengan enkripsi end-to-end",
  "Dukungan pelanggan yang responsif 24/7",
];

export const changelogEntries: ChangelogEntry[] = [
  {
    version: "1.5.0",
    date: "2024-06-15",
    type: "minor",
    changes: [
      "Tambah fitur widget homescreen",
      "Perbaikan UI untuk dark mode",
      "Optimasi performa aplikasi",
    ],
  },
  {
    version: "1.4.2",
    date: "2024-05-20",
    type: "patch",
    changes: [
      "Perbaiki bug sinkronisasi data",
      "Improvement notifikasi reminder",
    ],
  },
  {
    version: "1.4.0",
    date: "2024-05-01",
    type: "minor",
    changes: [
      "Tambah mode fokus baru",
      "Export jadwal ke format PDF",
      "Peningkatan UI/UX dashboard",
    ],
  },
];
