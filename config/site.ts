export const siteConfig = {
  name: "Jadwal Pintarku",
  description: "Aplikasi penjadwalan pintar untuk mengatur hidup lebih teratur",
  tagline: "Atur Jadwal Lebih Pintar, Hidup Lebih Teratur.",
  baseUrl: "https://jadwal.hinaitech.com",
  
  // Social & External Links
  socialLinks: {
    googlePlay: "https://play.google.com/store/apps/details?id=com.hin.schedule",
    whatsapp: "https://wa.me/6282144237914",
    instagram: "https://instagram.com/hinaitech",
    github: "https://github.com/HINAI-tech",
    email: "cs.hinaitech.com",
    website: "https://jadwal.hinaitech.com",
  },

  // Navigation
  navigation: [
    { label: "Beranda", href: "#" },
    { label: "Fitur", href: "#features" },
    { label: "FAQ", href: "#faq" },
    { label: "Download", href: "#download" },
    { label: "Kontak", href: "/contact" },
  ],

  // Footer Links
  footerLinks: {
    main: [
      { label: "Beranda", href: "/" },
      { label: "Fitur", href: "#features" },
      { label: "FAQ", href: "#faq" },
      { label: "Download", href: "#download" },
      { label: "Kontak", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Syarat & Ketentuan", href: "/terms-conditions" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Kebijakan Cookies", href: "/cookie-policy" },
      { label: "Penghapusan Data", href: "/data-deletion" },
    ],
    support: [
      { label: "Dukungan", href: "/support" },
      { label: "Pusat Bantuan", href: "/help-center" },
      { label: "Dokumentasi", href: "/documentation" },
      { label: "Changelog", href: "/changelog" },
    ],
  },

  // Company Info
  company: {
    name: "HIN Technology / Muana Media Technology",
    tagline: "Membuat aplikasi yang mengubah cara orang bekerja",
    email: "cs.hinaitech@gmail.com",
  },

  // SEO
  seo: {
    keywords: [
      "jadwal",
      "penjadwalan",
      "aplikasi kalender",
      "manajemen waktu",
      "produktivitas",
      "to-do list",
    ],
    ogImage: "https://jadwal.hinaitech.com/og-image.jpg",
    twitterHandle: "@jadwalpintarku",
  },

  // App Store Badges
  appStores: {
    googlePlay: true,
    appStore: false, // Coming soon
  },
};
