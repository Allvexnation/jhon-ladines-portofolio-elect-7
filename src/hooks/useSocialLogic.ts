import { useState, useEffect } from 'react';
import { BiEnvelope } from 'react-icons/bi';
import { FaFacebook, FaInstagram, FaGithub, FaTiktok, FaLinkedin } from 'react-icons/fa';
import socialsData from '@/static/socials.json';
import { SocialItem } from '@/interface/SocialItem';

export function useSocialLogic() {
  const [isLoading, setIsLoading] = useState(true);
  const [socials, setSocials] = useState<SocialItem[]>([]);

  useEffect(() => {
    const loadSocials = async () => {
      try {
        const iconMap: Record<string, any> = {
          Gmail: BiEnvelope,
          Facebook: FaFacebook,
          Instagram: FaInstagram,
          GitHub: FaGithub,
          Outlook: BiEnvelope,
          TikTok: FaTiktok,
          LinkedIn: FaLinkedin,
        };

        const socialsWithIcons: SocialItem[] = socialsData.map((social: any) => ({
          ...social,
          icon: iconMap[social.title] || BiEnvelope,
        }));

        setSocials(socialsWithIcons);
      } catch (error) {
        console.error('Error loading socials:', error);
        setSocials([]);
      } finally {
        setTimeout(() => setIsLoading(false), 800);
      }
    };

    loadSocials();
  }, []);

  return {
    isLoading,
    socials,
  };
}
