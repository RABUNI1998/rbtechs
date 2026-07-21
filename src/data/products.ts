import rbPlayerLogo from '../assets/rbplayer/logo.png';
import rbPlayerBanner from '../assets/rbplayer/windows/network screen.png';
import rbPlayerAndroid1 from '../assets/rbplayer/android/Screenshot 1.jpg';
import rbPlayerAndroid2 from '../assets/rbplayer/android/Screenshot 2.jpg';
import rbPlayerAndroid3 from '../assets/rbplayer/android/Screenshot 3.jpg';
import rbPlayerAndroid4 from '../assets/rbplayer/android/Screenshot 4.jpg';
import rbPlayerAndroid5 from '../assets/rbplayer/android/Screenshot 5.jpg';
import rbPlayerAndroid6 from '../assets/rbplayer/android/Screenshot 6.jpg';
import rbPlayerWin1 from '../assets/rbplayer/windows/equilizer.jpg';
import rbPlayerWin2 from '../assets/rbplayer/windows/folder screen.jpg';
import rbPlayerWin3 from '../assets/rbplayer/windows/downloads.png';
import rbPlayerWin4 from '../assets/rbplayer/windows/network screen.png';

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
    description: 'A powerful 4K local media player, universal network streamer, and audio DSP engine.',
    longDescription: 'RB Player is a powerful, all-in-one local media player and universal network streamer for Windows & Android. Built with Flutter and native C++ FFmpeg, it seamlessly blends your local music and video libraries with high-performance link streaming, 4K video downloads, 60 FPS animated audio visualizers, and OpenSubtitles integration, all wrapped in a sleek, dark-mode interface.\n\nWhether you are watching 4K movies via the hardware-accelerated MediaKit engine, stream-caching online audio for offline playback, tuning frequencies with the 10-band DSP equalizer, or securing your private media in an AES-256 encrypted Vault, RB Player is the ultimate media companion.',
    platforms: ['Windows (Direct)', 'Microsoft Store', 'Uptodown', 'Android'],
    downloadUrls: {
      'Windows (Direct)': '/downloads/RBPlayer_Store_Installer_1.0.3.exe',
      'Microsoft Store': 'https://apps.microsoft.com/store/detail/9PNMJ4TXZ4BZ?cid=DevShareMCLPCS',
      'Uptodown': 'https://rb-player-windows.en.uptodown.com/windows',
      'Android': '/downloads/RBPlayer.apk'
    },
    rating: 4.9,
    downloads: '50k+',
    featured: true,
    iconUrl: rbPlayerLogo,
    bannerUrl: rbPlayerBanner,
    screenshots: [
      rbPlayerWin4,
      rbPlayerWin3,
      rbPlayerWin1,
      rbPlayerWin2,
      rbPlayerAndroid1,
      rbPlayerAndroid2,
      rbPlayerAndroid3,
      rbPlayerAndroid4,
      rbPlayerAndroid5,
      rbPlayerAndroid6,
    ],
    features: [
      'Instant 0-Second Library Indexing: Auto-scans local folders with 0ms load speed.',
      'Universal Network Streamer & Downloader: Paste links to stream or download HD/4K videos and high-bitrate MP3 audio.',
      'Animated 60 FPS Audio Visualizer: Glowing neon frequency spectrum bars and dynamic waveforms that pulse to music.',
      '10-Band Equalizer & 3D Audio DSP: Hardware-level tuning from 60Hz to 16kHz with Bass Boost, 3D Reverb, and Surround Sound.',
      'Automatic OpenSubtitles Search: Download and sync subtitles with millisecond timing alignment controls.',
      'AES-256 Encrypted Private Vault: Secure PIN protection to hide sensitive audio and video files.',
      'Floating Mini Player: Hover-fade transparent video window for seamless multitasking on Windows.',
    ],
    privacyPolicyUrl: '/privacy/rb-player',
    supportUrl: '/support/rb-player',
    size: '~60 MB',
    developer: 'RBTECHS TEAM',
    ageRating: '4+',
    version: '1.0.3',
    releaseDate: '2026-07-21',
    pricing: { type: 'Pro Version', price: '20 GHS/month' },
    languages: ['English'],
    videoTrailerUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    systemRequirements: {
      'Windows': { os: 'Windows 10 version 1809 or higher', ram: '4 GB minimum', storage: '200 MB', architecture: 'x64, ARM64' },
      'Android': { os: 'Android 8.0 or higher', ram: '2 GB minimum', storage: '100 MB' }
    },
    changelog: [
      {
        version: '1.0.3',
        date: '2026-07-21',
        changes: [
          'Instant 0-second local media library indexing',
          'Real-time 60 FPS animated audio spectrum visualizer',
          'Native LGPL FFmpeg frame extraction for 100% video format support',
          'Universal network link streaming & background downloader',
          'Enhanced 10-band DSP equalizer and mini player controls'
        ]
      },
      {
        version: '1.0.1',
        date: '2026-07-08',
        changes: ['Initial release for Windows and Android', 'Added network streaming features', 'Secure Private Vault features']
      }
    ],
    faqs: [
      {
        question: 'What media formats does RB Player support?',
        answer: 'RB Player supports MP4, MKV, WEBM, AVI, MOV, FLV, MP3, FLAC, AAC, WAV, and OGG formats with full hardware acceleration.'
      },
      {
        question: 'Do I need an internet connection for local files?',
        answer: 'No, your local audio and video files play 100% offline. Internet connection is only required for network streaming, OpenSubtitles search, and software updates.'
      },
      {
        question: 'What features are included in RB Player Pro?',
        answer: 'RB Player Pro includes unlimited high-speed HD/4K downloads, full access to the AES-256 Encrypted Vault, 10-band audio DSP equalizer, and OpenSubtitles auto-search.'
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
