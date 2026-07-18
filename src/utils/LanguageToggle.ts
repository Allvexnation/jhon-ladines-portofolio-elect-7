'use client';

import { useState, useEffect } from 'react';
import type { Language } from '@/types/common';

export function useLanguageToggle() {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('lang');
        if (saved === 'en' || saved === 'tl') {
          return saved;
        }
      } catch (_) {}
    }
    return 'en';
  });

  const toggleLanguage = () => {
    setLang((prev) => {
      const newLang: Language = prev === 'en' ? 'tl' : 'en';
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('lang', newLang);
        } catch (_) {}
      }
      return newLang;
    });
  };

  const setLanguage = (newLang: Language) => {
    setLang(() => {
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('lang', newLang);
        } catch (_) {}
      }
      return newLang;
    });
  };

  useEffect(() => {
    const handleStorageChange = () => {
      if (typeof window !== 'undefined') {
        try {
          const newLang = localStorage.getItem('lang');
          if (newLang === 'en' || newLang === 'tl') {
            setLang(newLang);
          }
        } catch (_) {}
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange);
      const interval = setInterval(handleStorageChange, 500);

      return () => {
        window.removeEventListener('storage', handleStorageChange);
        clearInterval(interval);
      };
    }
  }, []);

  return { lang, toggleLanguage, setLanguage };
}
