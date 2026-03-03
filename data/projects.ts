export interface Project {
  id: string;
  title: string;
  client: string;
  year: string;
  role: string;
  description: string;
  fullDescription: string[];
  technologies: string[];
  coverImage: string;
  galleryImages: string[];
  link?: string;
}

export const projectsData: Project[] = [
  {
    id: "crypto-portfolio-tracker",
    title: "Crypto Portfolio Tracker – Risk & Scam Analysis",
    client: "Infosys Virtual Internship",
    year: "2025",
    role: "Full Stack Developer",
    description: "A full-stack cryptocurrency portfolio and analytics platform with real-time tracking, risk intelligence, scam detection, tax calculation, and market insights.",
    fullDescription: [
      "The Crypto Portfolio Tracker is a scalable full-stack investment intelligence platform designed to help users monitor crypto holdings across exchanges.",
      "It integrates real-time market data, scam detection logic, portfolio risk analytics, tax computation, CSV imports, and PDF report exports.",
      "The backend is secured using JWT authentication and role-based access control. The frontend provides dynamic dashboards, live market updates, and risk indicators. The system is built with production-level modular architecture and performance optimization techniques."
    ],
    technologies: ["Spring Boot", "React (Vite)", "TypeScript", "PostgreSQL", "JWT", "REST APIs"],
    coverImage: "https://picsum.photos/seed/crypto1/1920/1080?blur=2",
    galleryImages: [
      "https://picsum.photos/seed/crypto2/1920/1080",
      "https://picsum.photos/seed/crypto3/1920/1080"
    ],
    link: "https://github.com/Dhanush-leet/Crypto-Portfolio-Tracker-with-Risk-Scam-Analysis_Infosys"
  },
  {
    id: "medvault",
    title: "MedVault – Advanced Hospital EHR Platform",
    client: "Personal Full-Stack SaaS",
    year: "2025",
    role: "Full Stack Developer",
    description: "A production-ready healthcare management platform with JWT security, 3D dashboards, analytics, and role-based portals for Admin, Doctor, and Patient.",
    fullDescription: [
      "MedVault is an enterprise-grade Electronic Health Record (EHR) platform combining secure backend architecture with immersive 3D medical dashboards.",
      "It includes role-based authentication, medical record uploads, real-time analytics, and interactive Three.js medical models.",
      "This project demonstrates advanced frontend engineering combined with secure backend architecture and modular service-layer design."
    ],
    technologies: ["Spring Boot", "React", "Three.js", "PostgreSQL", "JWT", "Recharts"],
    coverImage: "https://picsum.photos/seed/medvault1/1920/1080?blur=2",
    galleryImages: [
      "https://picsum.photos/seed/medvault2/1920/1080",
      "https://picsum.photos/seed/medvault3/1920/1080"
    ],
    link: "https://github.com/Dhanush-leet/Med_Vault-Hospital-Appointment-Booking-Rejection-Site"
  },
  {
    id: "eventora",
    title: "Eventora – Intelligent Event Booking Ecosystem",
    client: "Startup-Grade Portfolio",
    year: "2026",
    role: "Full Stack Developer",
    description: "A full-stack immersive event booking system with dynamic pricing, real-time Redis seat locking, WebSocket updates, and secure Razorpay integration.",
    fullDescription: [
      "Eventora is an intelligent ticket booking ecosystem that integrates dynamic pricing logic, Redis-based seat locking, fraud detection mechanisms, and predictive revenue analytics.",
      "The system prevents double bookings using distributed locking, adjusts ticket prices based on demand and booking velocity, and provides a real-time analytics dashboard.",
      "The frontend delivers a cinematic user experience using React, Tailwind, and motion libraries."
    ],
    technologies: ["Spring Boot", "PostgreSQL", "Redis", "WebSocket", "React", "Razorpay"],
    coverImage: "https://picsum.photos/seed/eventora1/1920/1080?blur=2",
    galleryImages: [
      "https://picsum.photos/seed/eventora2/1920/1080",
      "https://picsum.photos/seed/eventora3/1920/1080"
    ],
    link: "https://github.com/Dhanush-leet/Eventora"
  },
  {
    id: "ai-career-guidance",
    title: "AI Enhanced Career Guidance System",
    client: "Capstone Project",
    year: "2025",
    role: "AI & Full Stack Developer",
    description: "An AI-powered career recommendation platform that analyzes skills and assessments to generate personalized career pathways.",
    fullDescription: [
      "An AI-driven platform that analyzes student assessments, predicts suitable career paths, and generates structured learning roadmaps.",
      "The system integrates GPT-based models, skill-gap analysis, mentor interaction modules, and performance analytics dashboards."
    ],
    technologies: ["React", "Python", "Machine Learning", "JWT", "PostgreSQL"],
    coverImage: "https://picsum.photos/seed/career1/1920/1080?blur=2",
    galleryImages: [
      "https://picsum.photos/seed/career2/1920/1080"
    ],
    link: "https://github.com/Dhanush-leet/AI-Enhanced-Career-Guidance-Your-Personalized-Pathway-to-Success"
  },
  {
    id: "kanal-2026",
    title: "KANAL 2026 – National Level Technical Symposium",
    client: "Live Website",
    year: "2026",
    role: "Frontend Developer",
    description: "Official symposium website serving thousands of participants with dynamic event routing and scalable architecture.",
    fullDescription: [
      "KANAL 2026 is a scalable, data-driven event management website built for VSB Engineering College.",
      "It supports categorized events, dynamic routing, brochure downloads, and pass management. The architecture allows content updates from a centralized configuration file."
    ],
    technologies: ["React (Vite)", "JavaScript", "Vercel"],
    coverImage: "https://picsum.photos/seed/kanal1/1920/1080?blur=2",
    galleryImages: [
      "https://picsum.photos/seed/kanal2/1920/1080"
    ],
    link: "https://www.kanal2k26.tech/"
  },
  {
    id: "cafevibe",
    title: "CafeVibe – Geo-Intelligent Cafe Discovery",
    client: "Personal Project",
    year: "2025",
    role: "Frontend & Geo Logic Developer",
    description: "A mood-aware cafe discovery platform using OpenStreetMap APIs and intelligent distance-based ranking.",
    fullDescription: [
      "CafeVibe is a geospatial discovery platform that allows users to search cafes by location and radius.",
      "It integrates OpenStreetMap’s Nominatim and Overpass APIs, distance-based ranking using the Haversine formula, and marker clustering for performance optimization."
    ],
    technologies: ["JavaScript", "Leaflet.js", "OpenStreetMap API"],
    coverImage: "https://picsum.photos/seed/cafe1/1920/1080?blur=2",
    galleryImages: [
      "https://picsum.photos/seed/cafe2/1920/1080"
    ],
    link: "https://github.com/Dhanush-leet/Cafe-Finder"
  }
];
