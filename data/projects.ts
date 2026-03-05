import cryptoImage from "@/src/assets/projects/crypto_cover.jpg";
import medvaultImage from "@/src/assets/projects/medvault.png";
import eventoraImage from "@/src/assets/projects/eventora.png";
import careerImage from "@/src/assets/projects/career.png";
import kanalImage from "@/src/assets/projects/kanal_cover.jpg";
import cafeImage from "@/src/assets/projects/cafe_cover.png";
import hospitalImage from "@/src/assets/projects/hospital.png";
import blockchainImage from "@/src/assets/projects/blockchain_cover.png";
import blockchainGallery1 from "@/src/assets/projects/blockchain_landing.png";


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
    description: "A full-stack cryptocurrency portfolio, analytics & risk intelligence platform enabling users to track assets, analyze P&L, calculate taxes, and detect scams using real-time data.",
    fullDescription: [
      "The Crypto Portfolio Tracker is a complete full-stack cryptocurrency tracking and analytics platform built using React (Vite + TypeScript) and Spring Boot with PostgreSQL.",
      "The platform enables users to securely track crypto assets, analyze profits & losses, calculate tax implications, monitor market sentiment, detect scams, and gain risk insights.",
      "Key features include JWT-based security, role-based access control, real-time market data synchronization, global and personal node data separation, PDF/CSV report exports, bulk CSV uploads, and a built-in learning hub.",
      "Built to be a data-driven, scalable, and secure system combining strong backend architecture with a polished, user-friendly frontend."
    ],
    technologies: ["Spring Boot", "React (Vite)", "TypeScript", "PostgreSQL", "JWT", "REST APIs", "Tailwind CSS"],
    coverImage: cryptoImage,
    galleryImages: [
      "https://github.com/user-attachments/assets/568086ef-e8b2-46da-a558-eb2713db24ac",
      "https://github.com/user-attachments/assets/01af07e5-6a7b-43a9-bd8a-c2ea996909d3",
      "https://github.com/user-attachments/assets/414113a8-5788-4aff-849f-00a15fc8c7fe",
      "https://github.com/user-attachments/assets/e4f7b3b3-b6a3-49f6-9b19-e4ebfbb588c8",
      "https://github.com/user-attachments/assets/f1bd1238-4088-4f4e-953c-551e2df8ffce",
      "https://github.com/user-attachments/assets/9651e8b6-e4e4-4560-a2f8-ad309e7d65a7",
      "https://github.com/user-attachments/assets/d13121d0-75ce-4fd3-abcf-e76d19c15e3f",
      "https://github.com/user-attachments/assets/845ca115-9dee-486c-a7a2-290995ad95a3",
      "https://github.com/user-attachments/assets/4b568084-ad87-490e-8e39-5ad5e453b3d5",
      "https://github.com/user-attachments/assets/04ef0a77-460a-4e93-a9a8-b907c35be8e6",
      "https://github.com/user-attachments/assets/3d9d962d-a2e4-44ac-aa3f-b8436b3d8db5",
      "https://github.com/user-attachments/assets/279ba1e7-f9aa-449e-b6fa-7b581959e8d2",
      "https://github.com/user-attachments/assets/b99701ac-23a6-4ebb-a340-c25d7ab6ebab"
    ],
    link: "https://github.com/Dhanush-leet/Crypto-Portfolio-Tracker-with-Risk-Scam-Analysis_Infosys"
  },
  {
    id: "blockchain-certificate-verification",
    title: "Blockchain Certificate Storage & Verification System",
    client: "Personal Web3 Project",
    year: "2026",
    role: "Full Stack & Blockchain Developer",
    description: "A secure, decentralized platform for academic credential storage using Ethereum blockchain and SHA-256 hashing to ensure certificate immutability.",
    fullDescription: [
      "The Blockchain Certificate Verification System is a comprehensive DApp designed to eliminate credential fraud through cryptographic proof of authenticity.",
      "By storing certificate hashes (SHA-256) on the Ethereum blockchain via Solidity smart contracts, the system creates an untamperable audit trail for academic records.",
      "The architecture integrates a React frontend with absolute Web3 capabilities (Ethers.js + MetaMask) and a Spring Boot backend for secure data processing and RESTful communication.",
      "Key functionalities include institutional-grade certificate storage, instant public verification via unique IDs, and seamless blockchain network interaction using Ganache and MetaMask."
    ],
    technologies: ["Solidity", "Ethereum", "React", "Spring Boot", "Ethers.js", "MetaMask", "Ganache", "Tailwind CSS"],
    coverImage: blockchainImage,
    galleryImages: [
      blockchainGallery1,
      "https://github.com/user-attachments/assets/61edf5fe-ebe4-44df-9428-725397b3f3d4",
      "https://github.com/user-attachments/assets/ad76bd76-6ea2-4b76-8545-7876b89a5ed7",
      "https://github.com/user-attachments/assets/ebcb44ae-e2b1-4ae7-9bcd-e92c26d3f11e",
      "https://github.com/user-attachments/assets/aaddf175-da93-4aad-8d55-4c812f047243",
      "https://github.com/user-attachments/assets/ed374099-6c78-424f-8067-6e06d6157b6c"
    ],
    link: "https://youtu.be/2WqNW6VokC8"
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
    coverImage: medvaultImage,
    galleryImages: [
      "https://picsum.photos/seed/medvault2/1920/1080",
      "https://picsum.photos/seed/medvault3/1920/1080"
    ],
    link: "https://github.com/Dhanush-leet/Med_Vault-Hospital-Appointment-Booking-Rejection-Site"
  },
  {
    id: "eventora",
    title: "Eventora – Intelligent Event Booking Ecosystem (On-going Project)",
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
    coverImage: eventoraImage,
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
    description: "A full-stack intelligent career development platform using AI to analyze skills, predict career paths, and generate personalized learning roadmaps.",
    fullDescription: [
      "The AI Enhanced Career Guidance System is a comprehensive intelligent platform built with React, TypeScript, and a Python-powered AI engine.",
      "It combines modern web architecture with Machine Learning to help students discover career pathways through AI-based aptitude tests, interest analysis, and personality evaluations.",
      "Key intelligence modules include a Career Recommendation Engine for skill-gap analysis, an AI-powered Learning Roadmap generator, and a Course Recommendation system.",
      "The platform also integrates a Mentor-Student interaction portal with real-time feedback, performance analytics dashboards, and an AI Chatbot for 24/7 career-related guidance."
    ],
    technologies: ["React (Vite)", "TypeScript", "Tailwind CSS", "Python (Flask/FastAPI)", "Machine Learning", "GPT Models", "MySQL/PostgreSQL", "JWT"],
    coverImage: careerImage,
    galleryImages: [
      "https://github.com/user-attachments/assets/00c061fe-6f22-4011-86d0-a7401f67d1b4",
      "https://github.com/user-attachments/assets/c8b7c0e3-8503-44b7-820d-57444d8c9624",
      "https://github.com/user-attachments/assets/4bd90232-1793-4d33-9abc-e04ef8701c72",
      "https://github.com/user-attachments/assets/1bc2f9d5-843f-452c-9cf2-66b837547e67",
      "https://github.com/user-attachments/assets/d8612334-0ccb-420c-8bdb-67c8cd25625a",
      "https://github.com/user-attachments/assets/d420ee99-269c-4341-86f5-360d894e6655",
      "https://github.com/user-attachments/assets/d05d1516-834a-4fd0-81cf-04a737fc09d2"
    ],
    link: "https://github.com/Dhanush-leet/AI-Enhanced-Career-Guidance-Your-Personalized-Pathway-to-Success"
  },
  {
    id: "kanal-2026",
    title: "KANAL 2026 – National Level Technical Symposium",
    client: "Live Website",
    year: "2026",
    role: "Frontend Developer",
    description: "Official symposium website serving thousands of participants with dynamic event routing, department-specific views, and integrated pass management.",
    fullDescription: [
      "KANAL 2026 is the official website for the National Level Technical Symposium conducted at V.S.B Engineering College, Karur.",
      "The platform serves as a centralized hub for thousands of participants, featuring smart categorization by date, session, and department (Technical vs Non-Technical).",
      "Key features include department-specific views (CSE, IT, ECE, EEE, BT, etc.), an integrated pass system for Normal and Special categories, mobile optimization, and a scalable architecture allowing content updates via a central configuration file.",
      "Designed to handle high performance and seamless event discovery for over 50+ diverse technical and non-technical events."
    ],
    technologies: ["React (Vite)", "JavaScript", "Vercel", "Tailwind CSS"],
    coverImage: kanalImage,
    galleryImages: [
      "https://github.com/user-attachments/assets/ca8d7c1d-3b41-4e21-bed2-396abe196daa",
      "https://github.com/user-attachments/assets/38532c03-14e7-447e-b407-ced8463b042c",
      "https://github.com/user-attachments/assets/bd89bf2f-b4d9-45d3-8bce-7460ec43c975",
      "https://github.com/user-attachments/assets/b449b0fb-b7c4-41b4-bb75-5fda381f8e5f"
    ],
    link: "https://www.kanal2k26.tech/"
  },
  {
    id: "cafevibe",
    title: "CafeVibe – Geo-Intelligent Cafe Discovery",
    client: "Personal Project",
    year: "2025",
    role: "Frontend & Geo Logic Developer",
    description: "A premium, intelligent cafe discovery platform designed to find cafes based on mood, location, and experience-driven discovery using real-time geospatial search.",
    fullDescription: [
      "CafeVibe transforms cafe discovery into a mood-aware, geo-intelligent platform by combining real-time geospatial search with smart ranking algorithms.",
      "The mapping system is built using Leaflet.js with dark-themed tiles and smooth animations, integrating OpenStreetMap's Nominatim and Overpass APIs for dynamic data fetching.",
      "Key technical features include radius-based filtering (2km to 20km), distance-based ranking using the Haversine formula, and marker clustering for high-performance rendering of global cafe data.",
      "The architecture follows a modular JavaScript approach with a dedicated Vibe Engine layer designed to analyze environment metadata like workability and social energy."
    ],
    technologies: ["JavaScript (ES6)", "Leaflet.js", "OpenStreetMap API", "Overpass API", "HTML5/CSS3"],
    coverImage: cafeImage,
    galleryImages: [
      "https://github.com/user-attachments/assets/da3f6702-f22c-474b-baee-b9c3b6019f61",
      "https://github.com/user-attachments/assets/0446219b-51d2-41fe-915a-293441e92dda",
      "https://github.com/user-attachments/assets/4a12ba2f-f49e-482e-aec1-6ed6904cefef",
      "https://github.com/user-attachments/assets/fd1074cc-aaf4-4f1e-bb39-4b5298971d16",
      "https://github.com/user-attachments/assets/3e8c868b-8db2-462d-9e4c-095d9001f51c"
    ],
    link: "https://github.com/Dhanush-leet/Cafe-Finder"
  },
  {
    id: "hospital-management-system",
    title: "Hospital Management System",
    client: "Academic Project",
    year: "2024",
    role: "Java Developer",
    description: "A desktop-based enterprise application built with Java Swing and JDBC to automate patient records, room allocation, and staff management.",
    fullDescription: [
      "The Hospital Management System is a comprehensive Java-based desktop application developed to streamline administrative workflows in a healthcare environment.",
      "It leverages Java Swing for a user-friendly interface and JDBC for robust MySQL database interaction, handling complex data operations efficiently.",
      "Key functionalities include secure admin authentication, real-time patient record management, room availability tracking, departmental coordination, and ambulance service monitoring.",
      "The system demonstrates the practical implementation of RDBMS principles and Core Java architecture to create a scalable, secure software solution for medical facilities."
    ],
    technologies: ["Java", "Java Swing", "JDBC", "MySQL"],
    coverImage: hospitalImage,
    galleryImages: [
      "https://github.com/user-attachments/assets/c905f14f-7efa-4112-b39d-27136a02a95d",
      "https://github.com/user-attachments/assets/dcd73693-5bf3-421d-b58f-b8cc827ab98e",
      "https://github.com/user-attachments/assets/0efb62ac-e6db-48ea-8bb1-b525f6a2073a",
      "https://github.com/user-attachments/assets/28e13459-7b04-42f2-a0e9-bfc8f352414f",
      "https://github.com/user-attachments/assets/f2b723a6-9c5d-4c00-97f9-515b299b1188",
      "https://github.com/user-attachments/assets/2a6742eb-e35d-485f-abcf-786ee50fe707",
      "https://github.com/user-attachments/assets/e7e294af-151b-472c-bbc3-b04c4a881b4f",
      "https://github.com/user-attachments/assets/af2233cf-e60b-430d-a070-22bde32a9b95",
      "https://github.com/user-attachments/assets/45aacb8b-2ebb-46c3-909c-2b77782d39a1",
      "https://github.com/user-attachments/assets/00b35407-ad9b-49ba-bfe8-b200a274e0b9"
    ],
    link: "https://github.com/Dhanush-leet/Hospital-Management-System"
  }
];
