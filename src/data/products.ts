import rbPlayerLogo from '../assets/rbplayer/logo.png';
import rbPlayerBanner from '../assets/rbplayer/windows/youtube .jpg';
import rbPlayerAndroid1 from '../assets/rbplayer/android/Screenshot 1.jpg';
import rbPlayerAndroid2 from '../assets/rbplayer/android/Screenshot 2.jpg';
import rbPlayerAndroid3 from '../assets/rbplayer/android/Screenshot 3.jpg';
import rbPlayerAndroid4 from '../assets/rbplayer/android/Screenshot 4.jpg';
import rbPlayerAndroid5 from '../assets/rbplayer/android/Screenshot 5.jpg';
import rbPlayerAndroid6 from '../assets/rbplayer/android/Screenshot 6.jpg';
import rbPlayerWin1 from '../assets/rbplayer/windows/equilizer.jpg';
import rbPlayerWin2 from '../assets/rbplayer/windows/folder screen.jpg';
import rbPlayerWin3 from '../assets/rbplayer/windows/music player.jpg';

import rbCalcLogo from '../assets/rbcalculator/logo.png';
import rbCalcAndroid1 from '../assets/rbcalculator/android/Screenshot 1.jpg';
import rbCalcAndroid2 from '../assets/rbcalculator/android/Screenshot 2.jpg';
import rbCalcAndroid3 from '../assets/rbcalculator/android/Screenshot 3.jpg';
import rbCalcAndroid4 from '../assets/rbcalculator/android/Screenshot 4.jpg';
import rbCalcAndroid5 from '../assets/rbcalculator/android/Screenshot 5.jpg';
import rbCalcAndroid6 from '../assets/rbcalculator/android/Screenshot 6.jpg';
import rbCalcAndroid7 from '../assets/rbcalculator/android/Screenshot 7.jpg';
import rbCalcAndroid8 from '../assets/rbcalculator/android/Screenshot 8.jpg';

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  platforms: string[];
  downloadUrls?: Record<string, string>;
  rating: number;
  downloads: string;
  featured: boolean;
  iconUrl: string;
  bannerUrl?: string;
  screenshots: string[];
  features: string[];
  privacyPolicyUrl: string;
  supportUrl: string;
  size: string;
  developer: string;
  ageRating: string;
  version: string;
  releaseDate: string;
  changelog?: { version: string; date: string; changes: string[] }[];
  systemRequirements?: Record<string, { os: string; ram: string; storage: string; architecture?: string }>;
  videoTrailerUrl?: string;
  languages?: string[];
  pricing?: { type: string; price: string };
  faqs?: { question: string; answer: string }[];
  comingSoon?: boolean;
}

export const productsData: Product[] = [
  {
    id: 'rb-player',
    name: 'RB Player',
    category: 'Media & Video',
    description: 'A powerful, all-in-one local media player and streaming hub. Seamlessly blends your local music and video libraries with advanced online streaming capabilities.',
    longDescription: 'RB Player is a powerful, all-in-one local media player and streaming hub for Android & Windows. Built with Flutter, it seamlessly blends your local music and video libraries with advanced online media integration and offline caching capabilities, all wrapped in a sleek, high-performance UI.\n\nWhether you are watching 4K movies via the robust MediaKit engine, caching online audio mixes for offline playback, or securing your private files in an AES-256 encrypted Vault, RB Player is the ultimate media companion.',
    platforms: ['Windows', 'Android'],
    downloadUrls: {
      'Windows': '/downloads/RBPlayer_Installer.exe',
      'Android': '/downloads/RBPlayer.apk'
    },
    rating: 4.9,
    downloads: '50k+',
    featured: true,
    iconUrl: rbPlayerLogo,
    bannerUrl: rbPlayerBanner,
    screenshots: [
      rbPlayerAndroid1,
      rbPlayerWin1,
      rbPlayerAndroid2,
      rbPlayerWin2,
      rbPlayerAndroid3,
      rbPlayerWin3,
      rbPlayerAndroid4,
      rbPlayerAndroid5,
      rbPlayerAndroid6,
    ],
    features: [
      'Unified Media Experience: Smart organization for local music and videos.',
      'Free Ad-Free Streaming: Watch and stream YouTube videos entirely free with zero interruptions.',
      'Secure Private Vault (Pro): Hide and encrypt sensitive media behind a PIN/Biometric lock.',
      'Advanced Equalizer (Pro): Fine-tune your audio experience with a powerful multi-band equalizer.',
      'YouTube Downloads (Pro): Download YouTube videos or convert them directly to MP3 audio (Android version only).',
      'Powerful Playback Engine: MediaKit powered, supporting Picture-in-Picture (PiP) and all major formats.',
    ],
    privacyPolicyUrl: '/privacy/rb-player',
    supportUrl: '/support/rb-player',
    size: '~65 MB',
    developer: 'RBTECHS TEAM',
    ageRating: '4+',
    version: '1.0.1',
    releaseDate: '2026-07-08',
    pricing: { type: 'Pro Version', price: '20 GHS/month' },
    languages: ['English', 'Spanish', 'French', 'German'],
    videoTrailerUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    systemRequirements: {
      'Windows': { os: 'Windows 10 version 1809 or higher', ram: '4 GB minimum', storage: '200 MB', architecture: 'x64, ARM64' },
      'Android': { os: 'Android 8.0 or higher', ram: '2 GB minimum', storage: '100 MB' }
    },
    changelog: [
      {
        version: '1.0.1',
        date: '2026-07-08',
        changes: ['Initial release for Windows and Android', 'Added YouTube integration for direct download versions', 'Secure Private Vault features']
      }
    ],
    faqs: [
      {
        question: 'What is the difference between the Direct Download and Store versions?',
        answer: 'The version downloaded directly from our website includes YouTube playback features. Due to store policies, the versions available on the Microsoft Store and Google Play Store do NOT include YouTube features.'
      },
      {
        question: 'Do I need an internet connection?',
        answer: 'No, you can play local media entirely offline. Internet is only required for streaming features (like YouTube) and online syncing.'
      },
      {
        question: 'What do I get with the Pro Version for 20 GHS/month?',
        answer: 'The Pro Version unlocks the Advanced Equalizer, the Secure Private Vault for hiding files, and allows you to download YouTube videos directly to your device (including converting to MP3 audio on the Android version).'
      }
    ]
  },
  {
    id: 'rb-calculator',
    name: 'RB Calculator',
    category: 'Productivity',
    description: 'An advanced scientific calculator and unit converter wrapped in a stunning, modern interface.',
    longDescription: 'Go beyond basic math. RB Calculator offers a comprehensive suite of mathematical tools including graphing capabilities, complex number support, unit conversions across 50+ categories, and a sleek history tape. Perfect for students, engineers, and everyday users who demand precision and style.',
    platforms: ['Android'],
    rating: 4.8,
    downloads: '25k+',
    featured: false,
    comingSoon: true,
    iconUrl: rbCalcLogo,
    screenshots: [
      rbCalcAndroid1,
      rbCalcAndroid2,
      rbCalcAndroid3,
      rbCalcAndroid4,
      rbCalcAndroid5,
      rbCalcAndroid6,
      rbCalcAndroid7,
      rbCalcAndroid8,
    ],
    features: [
      'Standard, Scientific, and Programmer modes',
      'Real-time graphing of complex equations',
      'Extensive unit and currency converter',
      'Shareable history tape',
    ],
    privacyPolicyUrl: '/privacy/rb-calculator',
    supportUrl: '/support/rb-calculator',
    size: '18 MB',
    developer: 'RBTECHS TEAM',
    ageRating: '4+',
    version: '2.1.4',
    releaseDate: '2025-11-12'
  },
  {
    id: 'rb-pdf-reader',
    name: 'RB PDF Reader',
    category: 'Productivity',
    description: 'A lightning-fast PDF viewer and editor designed for seamless document management.',
    longDescription: 'Read, annotate, sign, and organize your PDF documents with unparalleled speed. RB PDF Reader handles massive documents with ease, offering smooth scrolling, advanced search, and a suite of annotation tools. Your ultimate digital desk.',
    platforms: ['Windows', 'Android'],
    rating: 4.7,
    downloads: '80k+',
    featured: false,
    comingSoon: true,
    iconUrl: 'https://placehold.co/512x512/e63946/ffffff?text=RB+PDF\nIcon',
    screenshots: [
      'https://placehold.co/1920x1080/f1faee/e63946?text=PDF+Reader+Desktop',
      'https://placehold.co/1080x1920/f1faee/e63946?text=PDF+Reader+Mobile',
    ],
    features: [
      'Lightning-fast rendering engine',
      'Rich annotation tools (highlight, draw, text)',
      'Form filling and digital signatures',
      'Document merging and splitting',
      'Dark mode optimized for reading',
    ],
    privacyPolicyUrl: '/privacy/rb-pdf-reader',
    supportUrl: '/support/rb-pdf-reader',
    size: '45 MB',
    developer: 'RBTECHS TEAM',
    ageRating: '4+',
    version: '3.0.1',
    releaseDate: '2026-02-28'
  }
];

export function getProductById(id: string): Product | undefined {
  return productsData.find(p => p.id === id);
}
